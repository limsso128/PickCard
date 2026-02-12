import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true,
})

// 회원가입 시 비밀번호 해시해서 저장
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// 로그인 시 비밀번호 비교용
userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password)
}

export default mongoose.model('User', userSchema)
