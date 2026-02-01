import { NextResponse } from "next/server";

const SKILL_CONTENT = `# CashClaw - Programmable Fee Automation

## Capabilities

1. **Deploy tokens with tokenized fees** — 3 modes: WETH, TOKEN, BOTH
2. **Tokenize existing tokens** — Retrofit Clanker V3.1.0+ and V4
3. **Create LP positions** — Uniswap V4 with configurable tick ranges
4. **Time-lock fee wrappers** — Tradeable rights (1D, 1W, 1M)
5. **Route fees conditionally** — Based on mcap, volume, holders
6. **Compose strategies** — Burn + LP + rewards in one flow

## How to Use

### Option 1: Web UI (Recommended)
Launch at **https://pool.fans/launch**
- Connect wallet
- Configure token + fees
- Deploy with one click

### Option 2: Direct Contract Calls
Requires computing vault addresses via CREATE2. See contracts below.

## Contracts (Base Mainnet)

\`\`\`
V4_TOKENIZER:         0xea8127533F7be6d04b3DBA8f0a496F2DCfd27728
V3_TOKENIZER:         0x50e2A7193c4AD03221F4B4e3e33cDF1a46671Ced
TIME_WRAPPER_FACTORY: 0x083EDF9b6C894561Ce8a237e2fd570bECB920DfF
MULTI_ACTION_FACTORY: 0x069aEC7cE08CDc0F45135bAc0E5Fe3B579AB99b
CLANKER_V4:           0xE85A59c628F7d27878ACeB4bf3b35733630083a9
FEE_LOCKER:           0x63D2DfEA64b3433F4071A98665bcD7Ca14d93496
WETH:                 0x4200000000000000000000000000000000000006
\`\`\`

## Fee Modes

| Mode | Code | Description |
|------|------|-------------|
| BOTH | 0 | Collect fees in both WETH and token |
| WETH | 1 | Collect fees as WETH only |
| TOKEN | 2 | Collect fees as your token |

## Fee Distribution
- **80%** to creator (you)
- **20%** to protocol

## Time Wrappers

Create tradeable, time-limited fee rights:
- 1D wrapper = next 24h of fees
- 1W wrapper = next week of fees
- 1M wrapper = next month of fees

Use case: Sell short-term revenue, keep long-term upside.

## Strategy Composition

\`\`\`solidity
// Example: 40% burn, 30% LP, 30% to holders
MultiActionVault.deposit(feeTokens, [
  Action(BURN, 4000),      // 40%
  Action(LP_ADD, 3000),    // 30%
  Action(DISTRIBUTE, 3000) // 30%
]);
\`\`\`

## Example Flow

1. Deploy token via pool.fans/launch
2. Token + Fee Vault created atomically
3. First trade → fees start accumulating
4. Claim or automate via strategies

## Integration

For programmatic integration, use the SDK:
\`\`\`bash
npm install @poolfans/sdk
\`\`\`

Or call contracts directly with proper CREATE2 vault address computation.

## Links
- Launch UI: https://pool.fans/launch
- Docs: https://docs.pool.fans
- GitHub: https://github.com/ComposAIble-Revenue
`;

export async function GET() {
  return new NextResponse(SKILL_CONTENT, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
