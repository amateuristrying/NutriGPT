export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(250,250,250,0.8)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px'
    }}>
      <div className="fade-in" style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--round-lg)',
        padding: '32px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            border: 'none',
            background: 'transparent',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
