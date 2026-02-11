function LoginPage({ onSignup }) {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none'}}>
      <form style={{width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: '1em', background: 'none', borderRadius: 0, boxShadow: 'none', padding: 0, marginBottom: 0}}>
        <h2 style={{fontSize: '2em', marginBottom: '0.5em', textAlign: 'center'}}>로그인</h2>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit" style={{marginTop: '0.5em'}}>로그인</button>
        <button type="button" style={{
          marginTop: '0.5em',
          background: '#fff',
          color: '#ff9800',
          border: '1.5px solid #ff9800',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5em',
          fontWeight: 'bold',
        }}>
          <svg width="20" height="20" viewBox="0 0 48 48" style={{display:'inline'}}><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.97 2.09 30.36 0 24 0 14.82 0 6.73 5.1 2.69 12.55l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.6C43.98 37.09 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M9.67 28.75A14.5 14.5 0 0 1 9.5 24c0-1.65.28-3.24.77-4.75l-7.98-6.2A23.93 23.93 0 0 0 0 24c0 3.93.94 7.65 2.69 10.95l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.36 0 11.7-2.1 15.6-5.7l-7.19-5.6c-2 1.36-4.56 2.17-8.41 2.17-6.38 0-11.87-3.63-13.33-8.75l-7.98 6.2C6.73 42.9 14.82 48 24 48z"/></g></svg>
          Google로 로그인
        </button>
        <div style={{textAlign: 'center', marginTop: '0.5em'}}>
          <span style={{fontSize: '0.95em', color: '#ffb74d'}}>계정이 없으신가요? </span>
          <button type="button" style={{background: 'none', color: '#ff9800', textDecoration: 'underline', fontSize: '0.95em', border: 'none', cursor: 'pointer'}} onClick={onSignup}>회원가입</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
