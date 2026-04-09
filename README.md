# @solncebro/cryptoquant-sdk

TypeScript SDK for the [CryptoQuant](https://cryptoquant.com) REST API. Wraps 248 on-chain and market data endpoints for BTC, ETH, XRP, TRX, Stablecoin, ERC20, and Alt into a typed, tree-shakeable client.

## Installation

```bash
npm install @solncebro/cryptoquant-sdk
# or
yarn add @solncebro/cryptoquant-sdk
```

## Quick start

```typescript
import { CryptoQuant, WindowEnum, CryptoQuantError } from '@solncebro/cryptoquant-sdk';

const cq = new CryptoQuant('YOUR_ACCESS_TOKEN');

// BTC exchange reserve on Binance, daily window
const reserve = await cq.btc.exchangeFlows.getReserve({
  exchange: 'binance',
  window: WindowEnum.Day,
  limit: 10,
});

console.log(reserve);
// [{ date: '2024-01-01', reserve: 123456, reserveUsd: 5000000000 }, ...]
```

## Error handling

All API errors — both HTTP-level (4xx, 5xx) and application-level (status code ≠ 200 in the response body) — are thrown as `CryptoQuantError`.

```typescript
import { CryptoQuantError } from '@solncebro/cryptoquant-sdk';

try {
  const data = await cq.btc.networkData.getHashrate({ window: WindowEnum.Day });
} catch (err) {
  if (err instanceof CryptoQuantError) {
    console.error(`[${err.code}] ${err.message}`);
    console.error('Request URL:', err.requestUrl);
  }
}
```

## Assets and modules

### BTC — 88 endpoints

```typescript
cq.btc.networkData        // BtcNetworkDataApi  — 14 endpoints
cq.btc.marketData         // MarketDataApi      — 7 endpoints
cq.btc.exchangeFlows      // BtcExchangeFlowsApi — 7 endpoints
cq.btc.minerFlows         // BtcMinerFlowsApi   — 7 endpoints
cq.btc.interEntityFlows   // BtcInterEntityFlowsApi — 4 endpoints
cq.btc.flowIndicator      // BtcFlowIndicatorApi — 10 endpoints
cq.btc.networkIndicator   // BtcNetworkIndicatorApi — 22 endpoints
cq.btc.marketIndicator    // BtcMarketIndicatorApi — 8 endpoints
cq.btc.fundData           // FundDataApi        — 4 endpoints
cq.btc.minerData          // BtcMinerDataApi    — 1 endpoint
cq.btc.mempool            // BtcMempoolApi      — 2 endpoints
cq.btc.lightning          // BtcLightningApi    — 1 endpoint
cq.btc.status             // StatusApi          — 1 endpoint
```

### ETH — 72 endpoints

```typescript
cq.eth.networkData        // EthNetworkDataApi  — 44 endpoints
cq.eth.eth2               // EthStakingApi      — 8 endpoints
cq.eth.exchangeFlows      // ExchangeFlowsApi   — 6 endpoints
cq.eth.marketData         // MarketDataApi      — 7 endpoints
cq.eth.marketIndicator    // EthMarketIndicatorApi — 1 endpoint
cq.eth.fundData           // FundDataApi        — 4 endpoints
cq.eth.flowIndicator      // EthFlowIndicatorApi — 1 endpoint
cq.eth.status             // StatusApi          — 1 endpoint
```

### XRP — 41 endpoints

```typescript
cq.xrp.networkData        // XrpNetworkDataApi  — 9 endpoints
cq.xrp.marketData         // XrpMarketDataApi   — 8 endpoints
cq.xrp.entityFlows        // XrpEntityFlowsApi  — 7 endpoints
cq.xrp.flowIndicator      // XrpFlowIndicatorApi — 5 endpoints
cq.xrp.dexData            // XrpDexDataApi      — 4 endpoints
cq.xrp.dexIndicator       // XrpDexIndicatorApi — 2 endpoints
cq.xrp.ammData            // XrpAmmDataApi      — 4 endpoints
cq.xrp.networkIndicator   // XrpNetworkIndicatorApi — 1 endpoint
cq.xrp.status             // StatusApi          — 1 endpoint
```

### TRX — 17 endpoints

```typescript
cq.trx.networkData        // TrxNetworkDataApi  — 12 endpoints
cq.trx.marketData         // TrxMarketDataApi   — 2 endpoints
cq.trx.defi               // TrxDefiApi         — 2 endpoints
cq.trx.status             // StatusApi          — 1 endpoint
```

### Stablecoin — 14 endpoints

```typescript
cq.stablecoin.networkData    // StablecoinNetworkDataApi — 4 endpoints
cq.stablecoin.marketData     // StablecoinMarketDataApi  — 2 endpoints
cq.stablecoin.exchangeFlows  // ExchangeFlowsApi         — 6 endpoints
cq.stablecoin.flowIndicator  // StablecoinFlowIndicatorApi — 1 endpoint
cq.stablecoin.status         // StatusApi                — 1 endpoint
```

### ERC20 — 15 endpoints

```typescript
cq.erc20.networkData    // Erc20NetworkDataApi — 6 endpoints
cq.erc20.marketData     // Erc20MarketDataApi  — 1 endpoint
cq.erc20.exchangeFlows  // ExchangeFlowsApi    — 6 endpoints
cq.erc20.flowIndicator  // Erc20FlowIndicatorApi — 1 endpoint
cq.erc20.status         // StatusApi           — 1 endpoint
```

### Alt — 1 endpoint

```typescript
cq.alt.marketData       // AltMarketDataApi    — 1 endpoint
```

## Parameters

All methods accept an optional params object. Common fields:

| Field      | Type          | Description                        |
|------------|---------------|------------------------------------|
| `window`   | `WindowEnum`  | `day`, `hour`, `block`, `min`, `10min` |
| `from`     | `string`      | Start date (`YYYYMMDD` or timestamp) |
| `to`       | `string`      | End date                           |
| `limit`    | `number`      | Max number of data points          |
| `format`   | `FormatEnum`  | `json` (default) or `csv`          |

Some modules require additional fields:

| Param type             | Extra fields                          | Used by                         |
|------------------------|---------------------------------------|---------------------------------|
| `ExchangeParams`       | `exchange`                            | Exchange flows, market data     |
| `MinerParams`          | `miner`                               | BTC miner flows, miner data     |
| `TokenExchangeParams`  | `token`, `exchange`                   | Stablecoin/ERC20 exchange flows |
| `TokenParams`          | `token`                               | Stablecoin/ERC20 network data   |
| `TokenMarketParams`    | `token`, `exchange?`, `symbol?`, `market?` | Stablecoin/ERC20/Alt market data |
| `FundSymbolParams`     | `symbol`                              | Fund data                       |
| `SymbolMarketParams`   | `exchange?`, `symbol?`, `market?`     | BTC/ETH/XRP market data (OHLCV) |
| `InterEntityFlowsParams` | `fromExchange?`, `toExchange?`, `fromMiner?`, `toMiner?` | BTC inter-entity flows |

## Examples

```typescript
// ETH staking validator count
const validators = await cq.eth.eth2.getValidatorsCount({ window: WindowEnum.Day });

// USDT exchange inflow on Binance
const inflow = await cq.stablecoin.exchangeFlows.getInflow({
  token: 'usdt',
  exchange: 'binance',
  window: WindowEnum.Day,
  limit: 30,
});

// BTC price OHLCV on Coinbase
const ohlcv = await cq.btc.marketData.getPriceOhlcv({
  exchange: 'coinbase',
  symbol: 'BTCUSD',
  market: 'spot',
  window: WindowEnum.Hour,
});

// List of supported BTC exchanges
const { data } = await cq.btc.status.getEntityList();
```

## Response format

Every method returns `Promise<T[]>` where `T` extends `TimeFieldData`:

```typescript
interface TimeFieldData {
  date?: string;
  datetime?: string;
  blockheight?: number;
}
```

Keys are automatically converted from `snake_case` (API) to `camelCase` (SDK).

## License

MIT
