// src/App.tsx   ← 直接全选覆盖这个文件
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useAirdropScan } from './hooks/useAirdropScan'

function App() {
  const { address } = useAccount()
  const { airdrops, loading, scan } = useAirdropScan()

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* 标题 */}
        <h1 className="text-5xl font-black text-center mb-12 mt-10 tracking-tighter">
          한국 에어드랍 클레이머
        </h1>

        {/* 钱包连接按钮 */}
        <div className="flex justify-center mb-12">
          <ConnectButton />
        </div>

        {/* 已连接地址 */}
        {address && (
          <>
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">지갑 주소</p>
              <p className="text-2xl font-mono text-green-400 break-all">
                {address}
              </p>
            </div>

            {/* 扫描按钮 */}
            <div className="text-center mb-12">
              <button
                onClick={scan}
                disabled={loading}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-2xl font-bold hover:scale-105 transition disabled:opacity-50 shadow-2xl"
              >
                {loading ? '스캔 중...' : '에어드랍 스캔 시작 →'}
              </button>
            </div>

            {/* 结果卡片 */}
            {airdrops.length > 0 && (
              <div className="grid gap-6">
                {airdrops.map((drop, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-3xl font-bold">{drop.protocol}</p>
                        <p className="text-xl text-gray-400">
                          {drop.chain} • {drop.token}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-black text-cyan-400">
                          {drop.amount}
                        </p>
                        <p className="text-2xl text-orange-400">
                          {drop.status}
                        </p>
                      </div>
                    </div>

                    {drop.status === '未领取' && (
                      <button className="mt-6 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-xl font-bold hover:scale-105 transition">
                        바로 클레임 하기
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 未连接钱包时的提示 */}
        {!address && (
          <p className="text-center text-xl text-gray-500 mt-20">
            지갑을 연결하면 미수령 에어드랍을 바로 확인할 수 있어요
          </p>
        )}
      </div>
    </div>
  )
}

export default App