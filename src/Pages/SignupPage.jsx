import { useState } from 'react'
import { signup } from '../api/auth'

function SignupPage({ onLogin, onSignupSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }
    setLoading(true)
    try {
      const data = await signup({ email, password, passwordConfirm })
      if (data.token) localStorage.setItem('token', data.token)
      onSignupSuccess?.(data)
    } catch (err) {
      setError(err.message || '회원가입에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none'}}>
      <form onSubmit={handleSubmit} style={{width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: '1em', background: 'none', borderRadius: 0, boxShadow: 'none', padding: 0, marginBottom: 0}}>
        <h2 style={{fontSize: '2em', marginBottom: '0.5em', textAlign: 'center'}}>회원가입</h2>
        {error && <p style={{color: '#d32f2f', fontSize: '0.9em', margin: 0}}>{error}</p>}
        <input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
        <input type="password" placeholder="비밀번호 확인" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required />
        <button type="submit" style={{marginTop: '0.5em'}} disabled={loading}>{loading ? '가입 중...' : '회원가입'}</button>
        <div style={{textAlign: 'center', marginTop: '0.5em'}}>
          <button type="button" style={{background: 'none', color: '#ff9800', textDecoration: 'underline', fontSize: '0.95em', border: 'none', cursor: 'pointer'}} onClick={onLogin}>로그인으로 돌아가기</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
