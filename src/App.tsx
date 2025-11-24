// src/App.tsx  ← 直接全覆盖这个文件
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useAirdropScan } from './hooks/useAirdropScan'

function App() {
  const { address } = useAccount()
  const { airdrops, loading, scan } = useAirdropScan()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a1f] to-[#1a0033] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* 标题 - 超大 + 发光 */}
        <h1 className="text-6xl md:text-8xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
          한국 에어드랍 클레이머
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12">한국 유저를 위한 가장 빠르고 예쁜 에어드랍 조회기</p>

        {/* ConnectButton */}
        <div className="flex justify-center mb-10">
          <ConnectButton />
        </div>

        {/* 地址 */}
        {address && (
          <>
            <div className="text-center mb-10">
              <p className="text-gray-500 text-sm">연결된 지갑</p>
              <p className="text-2xl font-mono text-cyan-400 break-all tracking-wider">
                {address}
              </p>
            </div>

            {/* 扫描按钮 - 超炫渐变 + 呼吸灯 */}
            <div className="flex justify-center mb-16">
              <button
                onClick={scan}
                disabled={loading}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-70"
              >
                <span className="relative z-10">
                  {loading ? '스캔 중...' : '에어드랍 스캔 시작 →'}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </div>

            {/* 结果卡片 - 玻璃拟态 + 悬浮 */}
            <div className="grid gap-6 max-w-3xl mx-auto">
              {airdrops.map((drop, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* 背景光晕 */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-black text-cyan-400">{drop.protocol}</h3>
                        <p className="text-gray-400 text-lg">{drop.chain} • {drop.token}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                          {drop.amount}
                        </p>
                        <p className={`text-2xl font-bold mt-2 ${
                          drop.status === '未领取' ? 'text-green-400' :
                          drop.status === '已结束' ? 'text-gray-500' :
                          drop.status === '暂无数据' ? 'text-orange-400' : 'text-red-400'
                        }`}>
                          {drop.status}
                        </p>
                      </div>
                    </div>

                    {/* Claim 按钮或跳转链接 */}
                    {drop.status === '未领取' && (
                      <button className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-xl font-bold hover:scale-105 transition transform shadow-lg">
                        바로 클레임 하기
                      </button>
                    )}
                    {drop.link && drop.status !== '未领取' && (
                      <a
                        href={drop.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-4 text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50"
                      >
                        공식 페이지 확인하기 →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 未连接钱包提示 */}
        {!address && (
          <div className="text-center mt-32">
            <p className="text-3xl text-gray-600">지갑을 연결하면 미수령 에어드랍을 바로 확인할 수 있어요</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App