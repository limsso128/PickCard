import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'

const app = express()
const PORT = process.env.PORT || 3001

// CORS: 프론트 주소 (5173, 5174 등)
app.use(cors({
  origin: [/^http:\/\/localhost:\d+$/],
  credentials: true,
}))
app.use(express.json())

// favicon 요청 시 404 방지 (브라우저가 3001 탭에서 자동 요청)
app.get('/favicon.ico', (req, res) => res.status(204).end())

// 루트 접속 시 (브라우저에서 3001 직접 열었을 때)
app.get('/', (req, res) => {
  res.json({
    message: 'API 서버입니다. 화면은 프론트에서 보세요.',
    frontend: 'http://localhost:5173',
    api: { health: '/api/health', signup: 'POST /api/auth/signup', login: 'POST /api/auth/login' },
  })
})

// Chrome DevTools가 요청하는 경로 - 404/CSP 경고 방지
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).end()
})

// MongoDB 연결
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test-app'
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB 연결됨:', MONGODB_URI))
  .catch((err) => console.error('MongoDB 연결 실패:', err.message))

app.use('/api/auth', authRoutes)

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`서버 http://localhost:${PORT} 에서 실행 중`)
})
