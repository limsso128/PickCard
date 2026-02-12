const API = '/api/auth'

export async function signup({ email, password, passwordConfirm }) {
  const res = await fetch(`${API}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, passwordConfirm }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || '회원가입 실패')
  return data
}

export async function login({ email, password }) {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || '로그인 실패')
  return data
}
