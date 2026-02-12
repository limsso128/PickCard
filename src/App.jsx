import './style.css'
import { useState, useEffect } from 'react'
import StartPage from './Pages/StartPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import MainPage from './Pages/MainPage'

function App() {
  const [page, setPage] = useState('splash') // splash, login, signup, main
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (page === 'splash') {
      const timer = setTimeout(() => setPage('login'), 1500)
      return () => clearTimeout(timer)
    }
  }, [page])

  const goMain = (data) => {
    setUser(data?.user ?? null)
    setPage('main')
  }

  return (
    <div className="app-container">
      {page === 'splash' && <StartPage />}
      {page === 'login' && (
        <LoginPage
          onSignup={() => setPage('signup')}
          onLoginSuccess={goMain}
        />
      )}
      {page === 'signup' && (
        <SignupPage
          onLogin={() => setPage('login')}
          onSignupSuccess={goMain}
        />
      )}
      {page === 'main' && <MainPage user={user} />}
    </div>
  )
}

export default App