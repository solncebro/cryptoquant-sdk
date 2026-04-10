---
description: Architecture of CryptoQuant TypeScript SDK
globs: src/**/*.ts
---

# Архитектура

## Слои

1. **client** (`src/client.ts`, `src/client.types.ts`) — Axios HTTP-клиент
   - BaseURL: `https://api.cryptoquant.com`
   - Заголовок `Authorization: Bearer {accessToken}`
   - Response interceptor (success): проверяет `status.code !== 200` и бросает `CryptoQuantError`
   - Error interceptor: перехватывает HTTP-ошибки (4xx, 5xx) и конвертирует `AxiosError` в `CryptoQuantError`
   - Метод `get<T>(path, params?)` конвертирует camelCase→snake_case для параметров и snake_case→camelCase для ответа
   - Возвращает `T[]` (массив из `result.data`)
   - Утилиты: `camelToSnake`, `snakeToCamel`, `convertKeysToSnakeCase`, `convertKeysToCamelCase`, `buildRequestUrl`

2. **types** (`src/types/*.ts`) — все интерфейсы и enum'ы
   - `common.ts` — базовые типы (WindowEnum, FormatEnum, BaseParams, ExchangeParams, MinerParams, TokenExchangeParams, TokenParams, FundSymbolParams, SymbolMarketParams, TokenMarketParams, InterEntityFlowsParams, общие response-типы, CryptoQuantError)
   - Per-asset файлы: `btc.ts`, `eth.ts`, `xrp.ts`, `trx.ts`, `stablecoin.ts`, `erc20.ts`, `alt.ts`

3. **api/shared** (`src/api/shared/*.ts`) — переиспользуемые базовые классы
   - `ExchangeFlowsApi<TParams>` — reserve, inflow, outflow, netflow, transactionsCount, addressesCount
   - `MarketDataApi` — priceOhlcv, capitalization, openInterest, fundingRates, takerBuySellStats, coinbasePremiumIndex, liquidations
   - `FundDataApi` — marketPriceUsd, marketVolume, marketPremium, digitalAssetHoldings
   - `NetworkDataApi` — addressesCount, transactionsCount, tokensTransferred, supply, velocity, fees
   - `StatusApi` — entityList

4. **api/{asset}** (`src/api/{asset}/index.ts`) — asset-специфические API-классы
   - Каждый `{Asset}Api` создаёт модули с конкретными basePath'ами
   - Уникальные классы наследуют shared-классы и добавляют endpoint-специфические методы

5. **index** (`src/index.ts`) — класс `CryptoQuant`
   - Создаёт `CryptoQuantClient` и все 7 asset API-модулей
   - Реэкспортирует все типы и классы

## Главный класс

```
CryptoQuant(accessToken)
  ├── btc: BtcApi           (88 эндпоинтов, 13 модулей)
  ├── eth: EthApi           (72 эндпоинта, 8 модулей)
  ├── xrp: XrpApi           (41 эндпоинт, 9 модулей)
  ├── trx: TrxApi           (17 эндпоинтов, 4 модуля)
  ├── stablecoin: StablecoinApi (14 эндпоинтов, 5 модулей)
  ├── erc20: Erc20Api       (15 эндпоинтов, 5 модулей)
  └── alt: AltApi           (1 эндпоинт, 1 модуль)
```

## Иерархия наследования

```
NetworkDataApi (base: 6 methods)
  ├── BtcNetworkDataApi (+8: blockBytes, blockInterval, utxoCount, feesTransaction, blockreward, difficulty, hashrate, blockCount)
  ├── EthNetworkDataApi (+38: block/fee/gas/contract/token-transfer variants)
  ├── XrpNetworkDataApi (+3: xrpBurnt, ledgerCount, blockInterval)
  └── TrxNetworkDataApi (+6: energyConsumption, bandwidthConsumption, tps, blockCount, totalValueStaked, stakingRate)

ExchangeFlowsApi<TParams> (base: 6 methods)
  ├── BtcExchangeFlowsApi<ExchangeParams> (+1: inHouseFlow)
  ├── BtcMinerFlowsApi<MinerParams> (+1: inHouseFlow)
  ├── ETH: ExchangeFlowsApi<ExchangeParams> (прямое использование)
  ├── Stablecoin: ExchangeFlowsApi<TokenExchangeParams> (прямое использование)
  └── ERC20: ExchangeFlowsApi<TokenExchangeParams> (прямое использование)

MarketDataApi (base: 7 methods)
  └── XrpMarketDataApi (+1: estimatedLeverageRatio)

FundDataApi (4 methods) — используется BTC, ETH напрямую
StatusApi (1 method) — используется всеми ассетами кроме Alt
```

## Паттерны параметров

| Тип | Поля | Используется |
|---|---|---|
| `BaseParams` | window?, from?, to?, limit?, format? | NetworkData, NetworkIndicator |
| `ExchangeParams` | + exchange | ExchangeFlows, MarketData (OI/funding/liquidations), FlowIndicator |
| `MinerParams` | + miner | BTC MinerFlows, MinerData |
| `TokenExchangeParams` | + token, exchange | Stablecoin/ERC20 ExchangeFlows |
| `TokenParams` | + token | Stablecoin/ERC20 NetworkData, MarketData |
| `TokenMarketParams` | + token, exchange?, symbol?, market? | Stablecoin/ERC20/Alt MarketData (price-ohlcv) |
| `FundSymbolParams` | + symbol | FundData |
| `SymbolMarketParams` | + exchange?, symbol?, market? | MarketData (price-ohlcv) |
| `InterEntityFlowsParams` | + fromExchange?, toExchange?, fromMiner?, toMiner? | BTC InterEntityFlows |

## Формат ответа API

```
{ status: { code, message }, result: { window, data: [...] } }
```

Клиент извлекает `result.data` и конвертирует ключи в camelCase. Все response-типы наследуют `TimeFieldData` (date?, datetime?, blockheight?).
