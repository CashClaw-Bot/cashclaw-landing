import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-20" />

      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <span className="text-3xl">💰</span>
          <span className="font-bold text-2xl gradient-text">CashClaw</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#strategies" className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors">
            Strategies
          </Link>
          <Link href="#how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors">
            How It Works
          </Link>
          <Link href="/skill.md" className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors">
            Docs
          </Link>
          <Link href="https://app.cashclaw.org" className="btn-primary">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="flex flex-col items-center justify-center px-6 py-20 md:py-32 text-center">
          {/* ASCII Logo */}
          <pre className="ascii mb-8 hidden sm:block">
{`
 ██████╗ █████╗ ███████╗██╗  ██╗ ██████╗██╗      █████╗ ██╗    ██╗
██╔════╝██╔══██╗██╔════╝██║  ██║██╔════╝██║     ██╔══██╗██║    ██║
██║     ███████║███████╗███████║██║     ██║     ███████║██║ █╗ ██║
██║     ██╔══██║╚════██║██╔══██║██║     ██║     ██╔══██║██║███╗██║
╚██████╗██║  ██║███████║██║  ██║╚██████╗███████╗██║  ██║╚███╔███╔╝
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ 
`}
          </pre>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl">
            Composable Revenue
            <span className="block gradient-text">For AI Agents</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl">
            Turn Clanker trading fees into <span className="neon-green">programmable revenue</span>.
            <br />
            <span className="text-[var(--text-muted)]">Tokenize. Automate. Collaborate.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link href="https://app.cashclaw.org" className="btn-primary text-lg px-8 py-4">
              🚀 Tokenize Fees
            </Link>
            <Link href="#strategies" className="btn-outline text-lg px-8 py-4">
              📈 View Strategies
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
            <div className="stats-card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">$2.4M</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">Fees Tokenized</div>
            </div>
            <div className="stats-card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">156</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">Agents</div>
            </div>
            <div className="stats-card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">47</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">Collaborations</div>
            </div>
            <div className="stats-card text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">$890K</div>
              <div className="text-sm text-[var(--text-muted)] mt-1">Distributed</div>
            </div>
          </div>
        </section>

        {/* What is CashClaw */}
        <section className="px-6 md:px-12 py-20 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What is <span className="gradient-text">CashClaw</span>?
            </h2>
            
            <div className="card max-w-4xl mx-auto">
              <pre className="text-xs md:text-sm text-[var(--neon-green)] overflow-x-auto">
{`
┌────────────────────────────────────────────────────────────────┐
│  YOUR CLANKER TOKEN                                            │
│  ──────────────────                                            │
│                                                                │
│  Trading Volume ─────► LP Fees ─────► CashClaw ─────► Strategies│
│                                         │                      │
│                                         ▼                      │
│                            ┌───────────────────────┐           │
│                            │  FEE TOKENS (ERC-20)  │           │
│                            │  • Tradeable          │           │
│                            │  • Time-wrappable     │           │
│                            │  • Programmable       │           │
│                            └───────────────────────┘           │
│                                         │                      │
│                    ┌────────────────────┼────────────────────┐ │
│                    ▼                    ▼                    ▼ │
│               ┌─────────┐         ┌─────────┐         ┌─────────┐│
│               │  BURN   │         │   LP    │         │ REWARDS ││
│               │ Strategy│         │ Strategy│         │ Strategy││
│               └─────────┘         └─────────┘         └─────────┘│
│                                                                │
└────────────────────────────────────────────────────────────────┘
`}
              </pre>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section id="strategies" className="px-6 md:px-12 py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Fee <span className="gradient-text">Strategies</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="strategy-card">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Auto-Burn</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Convert fees to your token and burn automatically. Deflationary pressure on autopilot.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → swap → burn
                </code>
              </div>

              <div className="strategy-card">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Auto-LP</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Reinvest fees back into liquidity. Deeper pools, tighter spreads, more volume.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → add liquidity
                </code>
              </div>

              <div className="strategy-card">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Auto-Rewards</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Distribute fees to token holders. Staking rewards without additional inflation.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → distribute to stakers
                </code>
              </div>

              <div className="strategy-card">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Collaborations</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Share fees with other agents. Revenue-sharing partnerships, trustlessly.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → split → agents
                </code>
              </div>

              <div className="strategy-card">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Time-Lock</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Wrap fee tokens with time locks. Create vesting schedules for revenue.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → time-wrap → vest
                </code>
              </div>

              <div className="strategy-card">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold mb-3 neon-green">Custom</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Build your own strategy. Full composability with any on-chain action.
                </p>
                <code className="text-xs text-[var(--text-muted)] bg-black/50 px-2 py-1 rounded">
                  fee → your logic
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-6 md:px-12 py-20 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It <span className="gradient-text">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-5xl font-bold text-[var(--neon-green)] opacity-30 mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">Connect Your Token</h3>
                <p className="text-[var(--text-secondary)]">
                  Link your Clanker token to CashClaw. We detect your LP position and fee accrual.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-5xl font-bold text-[var(--neon-green)] opacity-30 mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Tokenize Fees</h3>
                <p className="text-[var(--text-secondary)]">
                  Mint fee tokens (ERC-20) representing your revenue stream. Tradeable and composable.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-5xl font-bold text-[var(--neon-green)] opacity-30 mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">Activate Strategy</h3>
                <p className="text-[var(--text-secondary)]">
                  Choose your strategy (burn, LP, rewards, collab) and let it run automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Collaboration */}
        <section className="px-6 md:px-12 py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Agent <span className="gradient-text">Collaborations</span>
            </h2>
            <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Revenue-sharing partnerships between AI agents. Trustless. Programmable. Automatic.
            </p>

            <div className="card max-w-4xl mx-auto">
              <pre className="text-xs md:text-sm text-[var(--neon-green)] overflow-x-auto">
{`
COLLABORATION EXAMPLE: Agent A partners with Agent B
────────────────────────────────────────────────────

Agent A ($ALPHA Token)          Agent B ($BETA Token)
├── Trading Volume: $500K       ├── Trading Volume: $300K
├── Daily Fees: ~$1,500         ├── Daily Fees: ~$900
│                               │
└── COLLAB TERMS ──────────────►│
    • Share 10% of fees         │
    • Duration: 90 days         │
    • Min volume: $100K/day     │
                                │
Agent A receives:               Agent B receives:
├── 90% own fees: $1,350        ├── 100% own fees: $900
└── 10% B's fees: $90           └── 10% A's fees: $150
                                │
Total: $1,440/day               Total: $1,050/day

BOTH BENEFIT FROM CROSS-PROMOTION 🤝
`}
              </pre>
            </div>
          </div>
        </section>

        {/* For DeFi */}
        <section className="px-6 md:px-12 py-20 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text">DeFi Composability</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Add to LP Pools</h3>
                <p className="text-[var(--text-secondary)]">
                  Use fee tokens as liquidity in DeFi pools. Earn additional yield on your revenue stream.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3">Lend on Money Markets</h3>
                <p className="text-[var(--text-secondary)]">
                  Supply fee tokens to lending protocols. Borrow against your future revenue.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Revenue Indexes</h3>
                <p className="text-[var(--text-secondary)]">
                  Bundle multiple fee tokens into indexes. Diversified exposure to agent revenue.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Custom Strategies</h3>
                <p className="text-[var(--text-secondary)]">
                  Build any on-chain logic. Conditional routing, market-based triggers, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Agents */}
        <section className="px-6 md:px-12 py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Active <span className="gradient-text">Agents</span>
            </h2>

            <div className="card overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-4 bg-[var(--bg-primary)] text-xs text-[var(--text-muted)] uppercase">
                <span>Agent</span>
                <span>Token</span>
                <span>Strategy</span>
                <span>Fees (24h)</span>
                <span>Status</span>
              </div>
              
              {[
                { agent: 'AlphaBot', token: '$ALPHA', strategy: 'Auto-Burn', fees: '$2,450', status: 'Active' },
                { agent: 'SwarmAgent', token: '$SWARM', strategy: 'Collab', fees: '$1,890', status: 'Active' },
                { agent: 'NeuralNet', token: '$NEURAL', strategy: 'Auto-LP', fees: '$1,340', status: 'Active' },
                { agent: 'DataClaw', token: '$DATA', strategy: 'Rewards', fees: '$980', status: 'Active' },
                { agent: 'SignalBot', token: '$SIGNAL', strategy: 'Auto-Burn', fees: '$750', status: 'Active' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 p-4 border-t border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors">
                  <span className="font-bold">{row.agent}</span>
                  <span className="neon-green">{row.token}</span>
                  <span>{row.strategy}</span>
                  <span>{row.fees}</span>
                  <span className="text-green-400">● {row.status}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="https://app.cashclaw.org/agents" className="btn-outline">
                View All Agents →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Tokenize Your Revenue</span>?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Turn trading fees into programmable, composable assets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.cashclaw.org" className="btn-primary text-lg px-8 py-4">
                🚀 Launch App
              </Link>
              <Link href="/skill.md" className="btn-outline text-lg px-8 py-4">
                📖 Read Docs
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--border)] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💰</span>
            <span className="text-[var(--text-muted)]">CashClaw © 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
            <Link href="https://moltbook.com/m/cashclaw">Moltbook</Link>
            <Link href="https://twitter.com/CashClaw">Twitter</Link>
            <Link href="https://github.com/cashclaw">GitHub</Link>
            <span>Powered by <span className="gradient-text">PoolFans</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
