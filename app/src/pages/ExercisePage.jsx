import { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

export default function ExercisePage() {
  const [view, setView] = useState('Front');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [showProgress, setShowProgress] = useState(false);

  const muscles = view === 'Front' ? ['Chest', 'Abs', 'Biceps', 'Quads'] : ['Back', 'Glutes', 'Triceps', 'Hamstrings'];
  const intensityColors = { Chest: 'var(--primary)', Abs: '#ffe566', Biceps: '#eee', Quads: 'var(--accent)' };

  const handleMuscleClick = (m) => {
    setSelectedMuscle(m);
    setModalOpen(true);
  };

  return (
    <div className="fade-in">
      <h1 style={{ marginBottom: '24px', fontSize: '28px' }}>Exercise Tracker</h1>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        {['Front', 'Back'].map(v => (
          <div 
            key={v}
            onClick={() => setView(v)}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '12px',
              borderRadius: 'var(--round-md)',
              backgroundColor: view === v ? 'var(--primary)' : 'var(--surface)',
              color: view === v ? 'var(--accent)' : 'var(--text-muted)',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {v} Body
          </div>
        ))}
      </div>

      {!showProgress ? (
        <>
          <Card style={{ textAlign: 'center', marginBottom: '32px', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Click a muscle group below</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {muscles.map(m => (
                <div 
                  key={m} 
                  onClick={() => handleMuscleClick(m)}
                  style={{
                    padding: '24px',
                    borderRadius: '50%',
                    backgroundColor: intensityColors[m] || '#eee',
                    width: '90px',
                    height: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontWeight: '600',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </Card>
          
          <Button onClick={() => setShowProgress(true)}>
            View Muscle Activity
          </Button>
        </>
      ) : (
        <Card>
          <h3 style={{ marginBottom: '24px' }}>Weekly Activity</h3>
          <ProgressBar label="Chest" progress={80} />
          <ProgressBar label="Abs" progress={45} color="#ffe566" />
          <ProgressBar label="Quads" progress={90} color="var(--accent)" />
          <ProgressBar label="Biceps" progress={10} color="#ccc" />
          <Button style={{ marginTop: '24px' }} variant="secondary" onClick={() => setShowProgress(false)}>
            Back to Body View
          </Button>
        </Card>
      )}

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3 style={{ marginBottom: '16px' }}>Log {selectedMuscle} Exercise</h3>
        <input placeholder="Exercise Name (e.g. Pushups)" style={{ width: '100%', padding: '16px', borderRadius: 'var(--round-sm)', border: '1px solid #eee', marginBottom: '16px', fontFamily: 'Inter' }} />
        <input placeholder="Sets x Reps (e.g. 3x10)" style={{ width: '100%', padding: '16px', borderRadius: 'var(--round-sm)', border: '1px solid #eee', marginBottom: '24px', fontFamily: 'Inter' }} />
        <Button onClick={() => setModalOpen(false)}>Save Log</Button>
      </Modal>
    </div>
  );
}
