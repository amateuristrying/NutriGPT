export default function ProgressBar({ label, progress, color = 'var(--primary)' }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div style={{ height: '8px', backgroundColor: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: '4px',
          transition: 'width 0.5s ease-out'
        }} />
      </div>
    </div>
  );
}
