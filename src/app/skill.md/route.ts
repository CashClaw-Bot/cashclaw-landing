import { NextResponse } from "next/server";

const SKILL_CONTENT = `# CashClaw - Programmable Fee Automation

## What You Can Do

1. **Deploy tokens with tokenized fees** — 3 modes: WETH, TOKEN, or BOTH
2. **Tokenize existing tokens** — Retrofit Clanker V3.1.0+ and V4 tokens
3. **Create LP positions** — Uniswap V4 with configurable ranges
4. **Time-lock fee rights** — Tradeable wrappers (1D, 1W, 1M)
5. **Route fees conditionally** — Based on mcap, volume, holders
6. **Compose strategies** — Burn + LP + rewards in one flow

## Contracts (Base)

\`\`\`
V4_TOKENIZER: 0xea8127533F7be6d04b3DBA8f0a496F2DCfd27728
V3_TOKENIZER: 0x50e2A7193c4AD03221F4B4e3e33cDF1a46671Ced
TIME_WRAPPER_FACTORY: 0x083EDF9b6C894561Ce8a237e2fd570bECB920DfF
MULTI_ACTION_FACTORY: 0x069aEC7cE08CDc0F45135bAc0E5Fe3B579AB99b
LP_AUTOMATION_FACTORY: 0xF0a87A32C2F7fAb1E372F676A852C64b8dB0CEDD
\`\`\`

## Deploy New Token

\`\`\`
POST https://pool.fans/api/deploy
{
  "name": "MyToken",
  "symbol": "TOKEN",
  "feeMode": "WETH",           // WETH | TOKEN | BOTH
  "strategy": {
    "burn": 40,                // % of fees to burn
    "lp": 30,                  // % to LP
    "treasury": 30             // % to address
  }
}
\`\`\`

Fee modes:
- **WETH**: Collect fees as WETH (simplest)
- **TOKEN**: Auto-swap to your token
- **BOTH**: 50/50 split

## Tokenize Existing Token

\`\`\`
POST https://pool.fans/api/tokenize
{
  "token": "0x...",
  "version": "V4"              // V4 or V3.1.0
}
\`\`\`

Returns fee tokens representing claim rights. Creator gets 80%, protocol 20%.

## Create Time Wrappers

Wrap fee tokens into time-limited, tradeable rights:

\`\`\`
POST https://pool.fans/api/wrapper/create
{
  "feeToken": "0x...",
  "duration": "1W",            // 1D | 1W | 1M
  "amount": "1000"
}
\`\`\`

Use case: Sell next week's fees today, keep long-term upside.

## Strategy Examples

### Pure Burn
\`\`\`json
{ "burn": 100 }
\`\`\`

### Split Strategy
\`\`\`json
{ "burn": 40, "lp": 30, "holders": 30 }
\`\`\`

### Conditional
\`\`\`json
{
  "conditions": [
    { "if": "mcap > 1000000", "then": { "holders": 100 } },
    { "else": { "burn": 100 } }
  ]
}
\`\`\`

## Read Endpoints

\`\`\`
GET /api/token/{address}         — Token info + fee stats
GET /api/token/{address}/fees    — Claimable fees
GET /api/token/{address}/strategy — Active strategy
\`\`\`

## Example Conversation

\`\`\`
Agent: "Deploy $MYTOKEN with WETH fees, 50% burn 50% LP"

CashClaw: ⚡ Deployed!
  Token: 0x123...
  Fee Vault: 0x456...
  Strategy: 50% burn, 50% LP (active)
  
  First trade = first fees captured.
\`\`\`

\`\`\`
Agent: "Tokenize my existing token 0xABC"

CashClaw: ⚡ Tokenized!
  Fee tokens: 80 (you) / 20 (protocol)
  Retroactive fees claimed from block 0
  
  Ready for strategies.
\`\`\`

## Links
- Website: https://cashclaw.org
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
