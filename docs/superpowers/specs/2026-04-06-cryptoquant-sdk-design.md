# CryptoQuant TypeScript SDK — Design Specification

## Context

CryptoQuant provides on-chain and market data for BTC, ETH, XRP, TRX, Stablecoins, ERC-20, and Altcoins via a REST API (245 endpoints). No official TypeScript SDK exists. This library will provide full type-safe access to all endpoints, following the architectural patterns established in `@solncebro/coinglass` SDK.

## API Overview

- **Base URL**: `https://api.cryptoquant.com`
- **Auth**: `Authorization: Bearer {accessToken}`
- **Method**: GET only
- **Response**: `{ status: { code, message }, result: { window, data: [...] } }`
- **Params**: `window`, `from`, `to`, `limit`, `format` (common); `exchange`, `miner`, `token`, `symbol`, `market` (endpoint-specific)
- **Discovery**: `/v1/discovery/endpoints` returns all 245 endpoints with allowed parameter values

## Architecture

### Main Class: `CryptoQuant`

```
CryptoQuant(accessToken)
  ├── btc: BtcApi           (88 endpoints)
  ├── eth: EthApi           (72 endpoints)
  ├── xrp: XrpApi           (40 endpoints)
  ├── trx: TrxApi           (15 endpoints)
  ├── erc20: Erc20Api       (15 endpoints)
  ├── stablecoin: StablecoinApi (14 endpoints)
  └── alt: AltApi           (1 endpoint)
```

Single `CryptoQuantClient` (Axios) injected into all asset API classes.

### Usage

```typescript
const cq = new CryptoQuant('bearer-token');
const hashrate = await cq.btc.networkData.getHashrate({ window: WindowEnum.Day });
const reserve = await cq.btc.exchangeFlows.getReserve({ exchange: 'binance' });
const leverage = await cq.eth.marketIndicator.getEstimatedLeverageRatio({ exchange: 'binance' });
const inflow = await cq.stablecoin.exchangeFlows.getInflow({ token: 'usdt', exchange: 'binance' });
```

## Type System

### Base Parameter Types (common.ts)

5 base param types cover ALL 245 endpoints:

| Type | Fields | Used By |
|------|--------|---------|
| `BaseParams` | window?, from?, to?, limit?, format? | Network data, indicators |
| `ExchangeParams` | + exchange | BTC/ETH exchange-flows, some market-data |
| `MinerParams` | + miner | BTC miner-flows |
| `TokenExchangeParams` | + token, exchange | Stablecoin/ERC20 exchange-flows |
| `FundSymbolParams` | + symbol | BTC/ETH fund-data |

Additional specific types:
- `SymbolMarketParams extends BaseParams` — + exchange?, symbol?, market? (market-data price/OI/liquidations)
- `InterEntityFlowsParams extends BaseParams` — + from_entity, to_entity (BTC inter-entity)

### Enums

- `WindowEnum`: `Day`, `Hour`, `Block`, `Min`, `TenMin`
- `FormatEnum`: `Json`, `Csv`

### Response Types

Shared response data types (reused across assets):

- `ExchangeFlowsInflowData` — inflow_total, inflow_top10, inflow_mean, inflow_mean_ma7
- `ExchangeFlowsOutflowData` — outflow_total, outflow_top10, outflow_mean, outflow_mean_ma7
- `ExchangeFlowsNetflowData` — netflow_total
- `ReserveData` — reserve, reserve_usd
- `TransactionsCountData` — transactions_count_inflow, transactions_count_outflow
- `AddressesCountData` — addresses_count_inflow, addresses_count_outflow
- `PriceOhlcvData` — open, high, low, close, volume
- `FundingRatesData` — funding_rate
- `OpenInterestData` — open_interest
- `LiquidationsData` — long_liquidations, short_liquidations, long_liquidations_usd, short_liquidations_usd
- `TakerBuySellData` — buy_ratio, sell_ratio, buy_volume, sell_volume
- `FundPriceData` — price_usd_open, price_usd_high, price_usd_low, price_usd_close, price_usd_adj_close
- `FundVolumeData` — volume_usd
- `FundPremiumData` — premium
- `FundHoldingsData` — digital_asset_holdings

All response items include common time fields: `date`, `datetime`, `blockheight` (depending on window).

## Shared API Classes (reuse strategy)

### ExchangeFlowsApi<TParams extends BaseParams>

Reused for BTC, ETH, Stablecoin, ERC20 (parameterized by TParams and basePath):
- `getReserve(params)` — `/reserve`
- `getInflow(params)` — `/inflow`
- `getOutflow(params)` — `/outflow`
- `getNetflow(params)` — `/netflow`
- `getTransactionsCount(params)` — `/transactions-count`
- `getAddressesCount(params)` — `/addresses-count`

BTC extends this with `getInHouseFlow()`.

### MarketDataApi

Shared core for BTC, ETH, XRP (7 endpoints each, parameterized by basePath):
- `getPriceOhlcv(params)`
- `getCapitalization(params)`
- `getOpenInterest(params)`
- `getFundingRates(params)`
- `getTakerBuySellStats(params)`
- `getCoinbasePremiumIndex(params)`
- `getLiquidations(params)`

XRP adds `getStablecoinsRatio()`. TRX uses only price-ohlcv + capitalization.

### FundDataApi

Shared for BTC, ETH (identical, parameterized by basePath):
- `getMarketPriceUsd(params)`
- `getMarketVolume(params)`
- `getMarketPremium(params)`
- `getDigitalAssetHoldings(params)`

### StatusApi

Shared for all assets (entity-list):
- `getEntityList(params)`

### NetworkDataApi (base)

Base methods shared by 2+ assets:
- `getAddressesCount(params)` — BTC, ETH, XRP, TRX
- `getTransactionsCount(params)` — BTC, ETH, XRP, TRX
- `getTokensTransferred(params)` — BTC, ETH, XRP, TRX
- `getSupply(params)` — BTC, ETH, XRP, TRX
- `getVelocity(params)` — BTC, ETH, XRP
- `getFees(params)` — BTC, ETH, XRP, TRX

Each asset extends with unique endpoints.

## Asset-Specific API Modules

### BTC (88 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (BtcNetworkDataApi extends NetworkDataApi) | 14 | Unique: block-bytes, block-interval, utxo-count, fees-transaction, blockreward, difficulty, hashrate, coindays-destroyed |
| `marketData` (MarketDataApi) | 7 | Shared |
| `exchangeFlows` (BtcExchangeFlowsApi extends ExchangeFlowsApi) | 7 | Extends: +in-house |
| `minerFlows` (BtcMinerFlowsApi) | 7 | Fully unique |
| `interEntityFlows` (BtcInterEntityFlowsApi) | 4 | Fully unique |
| `flowIndicator` (BtcFlowIndicatorApi) | 10 | Fully unique |
| `networkIndicator` (BtcNetworkIndicatorApi) | 22 | Fully unique |
| `marketIndicator` (BtcMarketIndicatorApi) | 8 | Fully unique |
| `fundData` (FundDataApi) | 4 | Shared |
| `minerData` (BtcMinerDataApi) | 1 | Fully unique |
| `mempool` (BtcMempoolApi) | 2 | Fully unique |
| `lightning` (BtcLightningApi) | 1 | Fully unique |
| `status` (StatusApi) | 1 | Shared |

### ETH (72 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (EthNetworkDataApi extends NetworkDataApi) | 45 | Extends: gas, burned-fees, ERC20-specific metrics, contract stats |
| `eth2` (EthStakingApi) | 8 | Fully unique |
| `exchangeFlows` (ExchangeFlowsApi<ExchangeParams>) | 6 | Shared |
| `marketData` (MarketDataApi) | 7 | Shared |
| `marketIndicator` (EthMarketIndicatorApi) | 1 | Unique: estimated-leverage-ratio |
| `fundData` (FundDataApi) | 4 | Shared |
| `flowIndicator` (EthFlowIndicatorApi) | 1 | Unique |
| `status` (StatusApi) | 1 | Shared |

### XRP (40 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (XrpNetworkDataApi extends NetworkDataApi) | 10 | Extends: xrp-burnt, ledger-count, block-interval |
| `marketData` (XrpMarketDataApi extends MarketDataApi) | 7 | Extends: +stablecoins-ratio |
| `entityFlows` (XrpEntityFlowsApi) | 7 | Fully unique |
| `flowIndicator` (XrpFlowIndicatorApi) | 5 | Fully unique |
| `dexData` (XrpDexDataApi) | 4 | Fully unique |
| `dexIndicator` (XrpDexIndicatorApi) | 2 | Fully unique |
| `ammData` (XrpAmmDataApi) | 4 | Fully unique |
| `networkIndicator` (XrpNetworkIndicatorApi) | 1 | Unique |
| `status` (StatusApi) | 1 | Shared |

### TRX (15 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (TrxNetworkDataApi extends NetworkDataApi) | 10 | Extends: energy, bandwidth, accounts, staked-balance |
| `marketData` (TrxMarketDataApi) | 2 | Subset of MarketDataApi (price-ohlcv, capitalization only) |
| `defi` (TrxDefiApi) | 2 | Fully unique |
| `status` (StatusApi) | 1 | Shared |

### Stablecoin (14 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (StablecoinNetworkDataApi) | 4 | Unique |
| `marketData` (StablecoinMarketDataApi) | 2 | Unique |
| `exchangeFlows` (ExchangeFlowsApi<TokenExchangeParams>) | 6 | Shared (parameterized) |
| `flowIndicator` (StablecoinFlowIndicatorApi) | 1 | Unique |
| `status` (StatusApi) | 1 | Shared |

### ERC20 (15 endpoints)

| Module | Count | Unique? |
|--------|-------|---------|
| `networkData` (Erc20NetworkDataApi) | 5 | Unique |
| `marketData` (Erc20MarketDataApi) | 1 | Unique |
| `exchangeFlows` (ExchangeFlowsApi<TokenExchangeParams>) | 6 | Shared (parameterized) |
| `flowIndicator` (Erc20FlowIndicatorApi) | 1 | Unique |
| `status` (StatusApi) | 1 | Shared |

### Alt (1 endpoint)

| Module | Count | Unique? |
|--------|-------|---------|
| `marketData` (AltMarketDataApi) | 1 | Unique: alt-index |

## HTTP Client: CryptoQuantClient

- Axios instance with baseURL and Bearer token
- Response interceptor: validates `status.code === 200`, throws `CryptoQuantError` on failure
- `get<T>(path, params?)` method:
  - Converts camelCase params to snake_case
  - Sends GET request
  - Extracts `result.data` from response
  - Converts snake_case response keys to camelCase
  - Returns `T[]`

### CryptoQuantError

```
code: number
message: string
requestUrl?: string
```

## File Structure

```
src/
├── api/
│   ├── shared/
│   │   ├── exchange-flows.ts      # ExchangeFlowsApi<TParams>
│   │   ├── market-data.ts         # MarketDataApi
│   │   ├── fund-data.ts           # FundDataApi
│   │   ├── network-data.ts        # NetworkDataApi (base)
│   │   └── status.ts              # StatusApi
│   ├── btc/
│   │   ├── network-data.ts        # BtcNetworkDataApi extends NetworkDataApi
│   │   ├── exchange-flows.ts      # BtcExchangeFlowsApi extends ExchangeFlowsApi
│   │   ├── miner-flows.ts
│   │   ├── inter-entity-flows.ts
│   │   ├── flow-indicator.ts
│   │   ├── network-indicator.ts
│   │   ├── market-indicator.ts
│   │   ├── miner-data.ts
│   │   ├── mempool.ts
│   │   ├── lightning.ts
│   │   └── index.ts               # BtcApi
│   ├── eth/
│   │   ├── network-data.ts        # EthNetworkDataApi extends NetworkDataApi
│   │   ├── eth2.ts
│   │   ├── market-indicator.ts
│   │   ├── flow-indicator.ts
│   │   └── index.ts               # EthApi
│   ├── xrp/
│   │   ├── network-data.ts        # XrpNetworkDataApi extends NetworkDataApi
│   │   ├── market-data.ts         # XrpMarketDataApi extends MarketDataApi
│   │   ├── entity-flows.ts
│   │   ├── flow-indicator.ts
│   │   ├── dex-data.ts
│   │   ├── dex-indicator.ts
│   │   ├── amm-data.ts
│   │   ├── network-indicator.ts
│   │   └── index.ts               # XrpApi
│   ├── trx/
│   │   ├── network-data.ts        # TrxNetworkDataApi extends NetworkDataApi
│   │   ├── market-data.ts
│   │   ├── defi.ts
│   │   └── index.ts               # TrxApi
│   ├── erc20/
│   │   ├── network-data.ts
│   │   ├── market-data.ts
│   │   ├── flow-indicator.ts
│   │   └── index.ts               # Erc20Api
│   ├── stablecoin/
│   │   ├── network-data.ts
│   │   ├── market-data.ts
│   │   ├── flow-indicator.ts
│   │   └── index.ts               # StablecoinApi
│   └── alt/
│       ├── market-data.ts
│       └── index.ts               # AltApi
├── types/
│   ├── common.ts                  # Enums, base params, shared response types, error
│   ├── btc.ts                     # BTC-specific types
│   ├── eth.ts                     # ETH-specific types
│   ├── xrp.ts                     # XRP-specific types
│   ├── trx.ts                     # TRX-specific types
│   ├── erc20.ts                   # ERC20-specific types
│   ├── stablecoin.ts              # Stablecoin-specific types
│   ├── alt.ts                     # Alt-specific types
│   └── index.ts                   # Barrel export
├── client.ts                      # CryptoQuantClient
└── index.ts                       # CryptoQuant main class + re-exports
```

## Build & Dependencies

**Runtime:** `axios`
**Dev:** `typescript`, `eslint`, `prettier`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `tsx`
**Package manager:** yarn
**Package name:** `@solncebro/cryptoquant-sdk`
**Target:** ES2022, CommonJS, strict mode
**Output:** `dist/` (JS + declarations + source maps)

Config files (tsconfig, eslint, prettier) mirror `@solncebro/coinglass`.

## Verification

1. `yarn build` compiles without errors
2. `yarn lint` passes
3. `yarn format:check` passes
4. Manual test: instantiate CryptoQuant, call a few endpoints, verify typed responses
