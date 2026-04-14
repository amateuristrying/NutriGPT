export default function Navbar({ currentPath }) {
  const navItems = [
    { id: '#/', label: 'Chat', icon: '💬' },
    { id: '#/exercise', label: 'Exercise', icon: '💪' },
    { id: '#/planner', label: 'Plan', icon: '📅' },
    { id: '#/meal', label: 'Meal', icon: '🥗' },
    { id: '#/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: '0',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '16px 24px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.03)',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      zIndex: 1000
    }}>
      {navItems.map(item => {
        const isActive = currentPath === item.id || (currentPath === '' && item.id === '#/');
        return (
          <a
            key={item.id}
            href={item.id}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: isActive ? '#675f2b' : '#6b6b6b',
              gap: '4px'
            }}
          >
            <div style={{
              fontSize: '24px',
              padding: '8px 16px',
              backgroundColor: isActive ? '#FFF3B0' : 'transparent',
              borderRadius: '20px',
              transition: 'background-color 0.2s'
            }}>
              {item.icon}
            </div>
            <span style={{ fontSize: '12px', fontWeight: isActive ? '600' : '400' }}>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
