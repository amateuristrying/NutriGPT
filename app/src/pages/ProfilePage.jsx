import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ProfilePage() {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('70');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const hMeters = parseFloat(height) / 100;
    const wKg = parseFloat(weight);
    if(hMeters && wKg) {
      setBmi((wKg / (hMeters * hMeters)).toFixed(1));
    }
  };

  return (
    <div className="fade-in">
      <h1 style={{ marginBottom: '24px', fontSize: '28px' }}>Your Profile</h1>
      
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
            👤
          </div>
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '4px' }}>Alex Johnson</h2>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px' }}>Goal: Build Muscle</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Height (cm)</label>
            <input 
              value={height}
              onChange={e => setHeight(e.target.value)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--round-sm)', border: 'none', backgroundColor: '#f9f9f9', fontFamily: 'Inter', fontSize: '16px' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Weight (kg)</label>
            <input 
              value={weight}
              onChange={e => setWeight(e.target.value)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--round-sm)', border: 'none', backgroundColor: '#f9f9f9', fontFamily: 'Inter', fontSize: '16px' }} 
            />
          </div>
        </div>

        <Button onClick={calculateBmi}>Calculate BMI</Button>
      </Card>

      {bmi && (
        <Card style={{ backgroundColor: 'var(--primary)', textAlign: 'center' }}>
          <div style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Your Current BMI</div>
          <div style={{ color: 'var(--accent)', fontSize: '48px', fontWeight: '800', fontFamily: 'Manrope' }}>{bmi}</div>
          <div style={{ color: 'var(--accent)', fontSize: '14px', opacity: 0.8, marginTop: '8px' }}>
            {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : 'Overweight'}
          </div>
        </Card>
      )}

      <Card style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Daily Requirements</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ color: 'var(--text-muted)' }}>Calories</span>
          <span style={{ fontWeight: '600' }}>2,450 kcal</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
          <span style={{ color: 'var(--text-muted)' }}>Water</span>
          <span style={{ fontWeight: '600' }}>2.5 L</span>
        </div>
      </Card>
    </div>
  );
}
