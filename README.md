# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

## 로그인/회원가입 (MongoDB + Node.js)

### 1. MongoDB 준비

- **로컬**: [MongoDB Community](https://www.mongodb.com/try/download/community) 설치 후 서비스 실행.
- **클라우드(무료)**: [MongoDB Atlas](https://www.mongodb.com/atlas)에서 클러스터 생성 → Connect → Connection String 복사.

### 2. 백엔드 서버 실행

```bash
cd server
cp .env.example .env
# .env 에 MONGODB_URI, JWT_SECRET 필요 시 수정
npm install
npm run dev
```

서버는 `http://localhost:3001` 에서 실행됩니다.

### 3. 프론트엔드 실행

프로젝트 루트에서:

```bash
npm run dev
```

브라우저에서 로그인/회원가입 후 메인 페이지로 이동합니다.  
API는 Vite 프록시로 `http://localhost:5173/api` → `http://localhost:3001/api` 로 전달됩니다.

### API 요약

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/api/auth/signup` | 회원가입 (email, password, passwordConfirm) |
| POST | `/api/auth/login` | 로그인 (email, password) → JWT 반환 |

로그인/회원가입 성공 시 토큰은 `localStorage`에 저장됩니다.

---

## Google 로그인 (Firebase)

### 1. Firebase 프로젝트 만들기

1. [Firebase Console](https://console.firebase.google.com) 접속 → **프로젝트 추가** (또는 기존 프로젝트 선택).
2. **Authentication** → **시작하기** → **Sign-in method** 탭에서 **Google** 켜기 → 저장.
3. **프로젝트 설정**(톱니바퀴) → **일반** → **내 앱**에서 **웹** 아이콘(</>) 클릭 → 앱 닉네임 입력 후 **앱 등록**.
4. 나오는 `firebaseConfig` 값들을 복사해 둡니다.

### 2. 환경 변수 설정

프로젝트 **루트**에 `.env` 파일을 만들고 아래처럼 넣습니다. (또는 `.env.example`을 복사해 `.env`로 이름 변경 후 값 채우기.)

```env
VITE_FIREBASE_API_KEY=여기에_apiKey_값
VITE_FIREBASE_AUTH_DOMAIN=여기에_authDomain_값
VITE_FIREBASE_PROJECT_ID=여기에_projectId_값
VITE_FIREBASE_STORAGE_BUCKET=여기에_storageBucket_값
VITE_FIREBASE_MESSAGING_SENDER_ID=여기에_messagingSenderId_값
VITE_FIREBASE_APP_ID=여기에_appId_값
```

### 3. 동작 확인

프론트(`npm run dev`) 실행 후 로그인 화면에서 **Google로 로그인** 버튼을 누르면 Google 팝업이 뜨고, 로그인 성공 시 메인 페이지로 이동합니다.

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
