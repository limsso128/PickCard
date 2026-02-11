import './style.css'
import { useState, useEffect } from 'react'
import StartPage from './Pages/StartPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
// import MainPage from './Pages/MainPage'

function App() {
  const [page, setPage] = useState('splash') // splash, login, signup

  useEffect(() => {
    if (page === 'splash') {
      const timer = setTimeout(() => setPage('login'), 1500)
      return () => clearTimeout(timer)
    }
  }, [page])

  return (
    <div className="app-container">
      {page === 'splash' && <StartPage />}
      {page === 'login' && <LoginPage onSignup={() => setPage('signup')} />}
      {page === 'signup' && <SignupPage onLogin={() => setPage('login')} />}
      {/* {page === 'main' && <MainPage />} */}
    </div>
  )
}

export default App