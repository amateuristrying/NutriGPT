import { useState, useEffect } from 'react';
import ChatPage from './pages/ChatPage';
import ExercisePage from './pages/ExercisePage';
import PlannerPage from './pages/PlannerPage';
import MealPage from './pages/MealPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/exercise': return <ExercisePage />;
      case '#/planner': return <PlannerPage />;
      case '#/meal': return <MealPage />;
      case '#/profile': return <ProfilePage />;
      case '#/':
      default:
        return <ChatPage />;
    }
  };

  return (
    <div style={{ paddingBottom: '90px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '24px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        {renderPage()}
      </div>
      <Navbar currentPath={currentPath} />
    </div>
  );
}

export default App;
