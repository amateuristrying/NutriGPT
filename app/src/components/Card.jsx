export default function Card({ children, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--round-lg)',
        padding: '24px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s',
        ...style
      }}
    >
      {children}
    </div>
  );
}
