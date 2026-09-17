import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  // Check kung may token na nakasave para di na mag-login ulit
const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = (data) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App