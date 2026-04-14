export default function Button({ children, onClick, variant = 'primary', style }) {
  const bg = variant === 'primary' ? 'var(--primary)' : 'var(--surface)';
  const color = variant === 'primary' ? 'var(--accent)' : 'var(--text-main)';
  
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        border: 'none',
        borderRadius: 'var(--round-sm)',
        padding: '16px 24px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        boxShadow: variant === 'primary' ? '0 4px 14px rgba(255, 243, 176, 0.4)' : '0 4px 14px rgba(0,0,0,0.02)',
        ...style
      }}
    >
      {children}
    </button>
  );
}
