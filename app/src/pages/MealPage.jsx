import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function MealPage() {
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = () => {
    setImage('uploaded');
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({ calories: 540, protein: '32g', carbs: '45g', fat: '20g' });
    }, 2000);
  };

  return (
    <div className="fade-in">
      <h1 style={{ marginBottom: '24px', fontSize: '28px' }}>Meal Logger</h1>

      {!image ? (
        <Card style={{ border: '2px dashed #ececec', backgroundColor: 'transparent', textAlign: 'center', padding: '48px 24px', marginBottom: '24px' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>📸</div>
          <h3 style={{ marginBottom: '8px' }}>Upload or Scan Meal</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Drag & drop image here</p>
          <Button onClick={handleUpload}>Select Image</Button>
        </Card>
      ) : (
        <Card style={{ marginBottom: '24px', overflow: 'hidden', padding: 0 }}>
          <div style={{ backgroundColor: '#eaeaea', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '48px' }}>🥗</span>
          </div>
          <div style={{ padding: '24px' }}>
            <p style={{ margin: 0, fontWeight: '600' }}>Dinner - Today</p>
          </div>
        </Card>
      )}

      {analyzing && (
         <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
           NutriGPT is estimating macros...
         </div>
      )}

      {result && (
        <div className="fade-in">
          <h3 style={{ marginBottom: '16px' }}>Estimated Macros</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Card style={{ flex: '1 1 40%', textAlign: 'center', padding: '16px', backgroundColor: 'var(--primary)' }}>
              <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent)' }}>{result.calories}</div>
              <div style={{ fontSize: '12px', color: 'var(--accent)' }}>Calories</div>
            </Card>
            <Card style={{ flex: '1 1 40%', textAlign: 'center', padding: '16px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{result.protein}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Protein</div>
            </Card>
            <Card style={{ flex: '1 1 40%', textAlign: 'center', padding: '16px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{result.carbs}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Carbs</div>
            </Card>
            <Card style={{ flex: '1 1 40%', textAlign: 'center', padding: '16px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{result.fat}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fat</div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
