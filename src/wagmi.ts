import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base, arbitrum, zkSync, blast } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: '한국 에어드랍 클레이머',
  projectId: 'YOUR_WALLET_CONNECT_ID', // 随便填个占位
  chains: [base, arbitrum, zkSync, blast],
})