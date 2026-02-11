function SignupPage({ onLogin }) {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none'}}>
      <form style={{width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', gap: '1em', background: 'none', borderRadius: 0, boxShadow: 'none', padding: 0, marginBottom: 0}}>
        <h2 style={{fontSize: '2em', marginBottom: '0.5em', textAlign: 'center'}}>회원가입</h2>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <button type="submit" style={{marginTop: '0.5em'}}>회원가입</button>
        <div style={{textAlign: 'center', marginTop: '0.5em'}}>
          <button type="button" style={{background: 'none', color: '#ff9800', textDecoration: 'underline', fontSize: '0.95em', border: 'none', cursor: 'pointer'}} onClick={onLogin}>로그인으로 돌아가기</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage
