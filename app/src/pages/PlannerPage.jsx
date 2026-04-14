import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function PlannerPage() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const getRecs = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRecommendations({
        workout: "45 min HIIT + Core",
        meal: "Grilled Chicken Salad with Quinoa"
      });
    }, 1500);
  };

  const dates = [14, 15, 16, 17, 18, 19, 20];

  return (
    <div className="fade-in">
      <h1 style={{ marginBottom: '24px', fontSize: '28px' }}>Workout Planner</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
        {dates.map((d, i) => (
           <div key={i} style={{
             width: '40px', height: '56px', borderRadius: '20px',
             backgroundColor: d === 16 ? 'var(--primary)' : 'var(--surface)',
             display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
             fontWeight: d === 16 ? '700' : '400',
             boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
           }}>
             <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{['S','M','T','W','T','F','S'][i]}</span>
             <span>{d}</span>
           </div>
        ))}
      </div>

      <Card style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px' }}>Today's Schedule</h3>
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: 'var(--round-sm)', marginBottom: '8px' }}>
          Morning Run - 30 mins
        </div>
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: 'var(--round-sm)' }}>
          Yoga & Stretching - 15 mins
        </div>
      </Card>

      {!recommendations && !loading && (
        <Button onClick={getRecs}>Get Workout & Meal Recommendations</Button>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '24px', marginBottom: '16px', animation: 'fadeIn 1s infinite alternate' }}>✨</div>
          Generating exact plan for your goals...
        </div>
      )}

      {recommendations && !loading && (
        <div className="fade-in">
          <Card style={{ backgroundColor: 'var(--primary)', marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--accent)' }}>AI Suggested Workout</div>
            <h3 style={{ color: 'var(--accent)' }}>{recommendations.workout}</h3>
          </Card>
          <Card style={{ backgroundColor: 'white' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--text-muted)' }}>AI Suggested Meal</div>
            <h3>{recommendations.meal}</h3>
          </Card>
        </div>
      )}

    </div>
  );
}
