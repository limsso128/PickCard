import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// 회원가입
router.post('/signup', async (req, res) => {
  try {
    const { email, password, passwordConfirm } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: '이메일과 비밀번호를 입력해 주세요.' })
    }
    if (password.length < 6) {
      return res.status(400).json({ error: '비밀번호는 6자 이상이어야 합니다.' })
    }
    if (password !== passwordConfirm) {
      return res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' })
    }

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(409).json({ error: '이미 사용 중인 이메일입니다.' })
    }

    const user = await User.create({ email, password })
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.status(201).json({
      message: '회원가입 완료',
      token,
      user: { id: user._id, email: user.email },
    })
  } catch (err) {
    console.error('signup error:', err)
    res.status(500).json({ error: '회원가입 중 오류가 발생했습니다.' })
  }
})

// 로그인
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: '이메일과 비밀번호를 입력해 주세요.' })
    }

    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      return res.status(401).json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
    }

    const match = await user.comparePassword(password)
    if (!match) {
      return res.status(401).json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' })
    }

    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.json({
      message: '로그인 성공',
      token,
      user: { id: user._id, email: user.email },
    })
  } catch (err) {
    console.error('login error:', err)
    res.status(500).json({ error: '로그인 중 오류가 발생했습니다.' })
  }
})

export default router
