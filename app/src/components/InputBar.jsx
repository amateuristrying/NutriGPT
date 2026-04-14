import { useState } from 'react';

export default function InputBar({ placeholder = "Type somewhere...", onSubmit }) {
  const [val, setVal] = useState('');

  return (
    <div style={{
      display: 'flex',
      backgroundColor: 'var(--surface)',
      borderRadius: 'var(--round-lg)',
      padding: '8px 16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      alignItems: 'center'
    }}>
      <input 
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: '16px',
          fontFamily: 'Inter',
          padding: '12px 8px',
          background: 'transparent'
        }}
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        onKeyDown={e => {
          if(e.key === 'Enter' && val) {
            onSubmit && onSubmit(val);
            setVal('');
          }
        }}
      />
      <button 
        style={{
          border: 'none',
          backgroundColor: 'var(--primary)',
          color: 'var(--accent)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '18px'
        }}
        onClick={() => {
          if (val && onSubmit) {
            onSubmit(val);
            setVal('');
          }
        }}
      >
        ↑
      </button>
    </div>
  );
}
