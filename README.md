# 한국 에어드랍 클레이머 (Korea Airdrop Claimer)

한국 유저를 위해 3일 만에 만든 가장 빠르고 예쁜 멀티체인 에어드랍 조회 도구  
100% 한국어 • wagmi + RainbowKit + Vite + Tailwind • 실시간 체인 스캔

라이브 데모 → https://korea-airdrop-nr8gxrpf4-liyujuns-projects-f6b70909.vercel.app
  
깃허브 → https://github.com/liyujun0210/korea-airdrop-claimer

지금 바로 지갑 연결 후 에어드랍 확인해보세요!
## Tech Stack & Dependencies

```json
"dependencies": {
  "@rainbow-me/rainbowkit": "^2.1.5",
  "@tanstack/react-query": "^5.59.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "viem": "^2.21.1",
  "wagmi": "^2.12.14"
},

"devDependencies": {
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47",
  "tailwindcss": "^3.4.13",
  "typescript": "^5.6.2",
  "vite": "^5.4.8"
}
# 基础依赖
npm install react react-dom
npm install wagmi viem @rainbow-me/rainbowkit @tanstack/react-query

# 样式 & 构建
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Vite + TypeScript（项目已经创建的话可跳过）
npm create vite@latest . -- --template react-ts