export default function ChatBubble({ text, isAi }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: isAi ? 'flex-start' : 'flex-end',
      marginBottom: '16px'
    }}>
      <div style={{
        maxWidth: '80%',
        padding: '16px 20px',
        borderRadius: 'var(--round-md)',
        backgroundColor: isAi ? 'var(--primary)' : 'var(--surface)',
        color: isAi ? 'var(--text-main)' : 'var(--text-main)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
        borderBottomLeftRadius: isAi ? '4px' : 'var(--round-md)',
        borderBottomRightRadius: !isAi ? '4px' : 'var(--round-md)',
        lineHeight: '1.5'
      }}>
        {text}
      </div>
    </div>
  );
}
