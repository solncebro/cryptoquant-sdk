---
description: Complete list of API modules and endpoint counts per asset
globs: src/api/**/*.ts
---

# Эндпоинты (248 всего)

## BTC (88 эндпоинтов, 13 модулей)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `BtcNetworkDataApi` | 14 | extends NetworkDataApi (+8) |
| `marketData` | `MarketDataApi` | 7 | shared напрямую |
| `exchangeFlows` | `BtcExchangeFlowsApi` | 7 | extends ExchangeFlowsApi<ExchangeParams> (+1: inHouseFlow) |
| `minerFlows` | `BtcMinerFlowsApi` | 7 | extends ExchangeFlowsApi<MinerParams> (+1: inHouseFlow) |
| `interEntityFlows` | `BtcInterEntityFlowsApi` | 4 | standalone |
| `flowIndicator` | `BtcFlowIndicatorApi` | 10 | standalone |
| `networkIndicator` | `BtcNetworkIndicatorApi` | 22 | standalone |
| `marketIndicator` | `BtcMarketIndicatorApi` | 8 | standalone |
| `fundData` | `FundDataApi` | 4 | shared напрямую |
| `minerData` | `BtcMinerDataApi` | 1 | standalone |
| `mempool` | `BtcMempoolApi` | 2 | standalone |
| `lightning` | `BtcLightningApi` | 1 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## ETH (72 эндпоинта, 8 модулей)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `EthNetworkDataApi` | 44 | extends NetworkDataApi (+38) |
| `eth2` | `EthStakingApi` | 8 | standalone |
| `exchangeFlows` | `ExchangeFlowsApi<ExchangeParams>` | 6 | shared напрямую |
| `marketData` | `MarketDataApi` | 7 | shared напрямую |
| `marketIndicator` | `EthMarketIndicatorApi` | 1 | standalone |
| `fundData` | `FundDataApi` | 4 | shared напрямую |
| `flowIndicator` | `EthFlowIndicatorApi` | 1 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## XRP (41 эндпоинт, 9 модулей)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `XrpNetworkDataApi` | 9 | extends NetworkDataApi (+3) |
| `marketData` | `XrpMarketDataApi` | 8 | extends MarketDataApi (+1: estimatedLeverageRatio) |
| `entityFlows` | `XrpEntityFlowsApi` | 7 | standalone |
| `flowIndicator` | `XrpFlowIndicatorApi` | 5 | standalone |
| `dexData` | `XrpDexDataApi` | 4 | standalone |
| `dexIndicator` | `XrpDexIndicatorApi` | 2 | standalone |
| `ammData` | `XrpAmmDataApi` | 4 | standalone |
| `networkIndicator` | `XrpNetworkIndicatorApi` | 1 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## TRX (17 эндпоинтов, 4 модуля)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `TrxNetworkDataApi` | 12 | extends NetworkDataApi (+6) |
| `marketData` | `TrxMarketDataApi` | 2 | standalone (subset: priceOhlcv, capitalization) |
| `defi` | `TrxDefiApi` | 2 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## Stablecoin (14 эндпоинтов, 5 модулей)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `StablecoinNetworkDataApi` | 4 | standalone |
| `marketData` | `StablecoinMarketDataApi` | 2 | standalone |
| `exchangeFlows` | `ExchangeFlowsApi<TokenExchangeParams>` | 6 | shared напрямую |
| `flowIndicator` | `StablecoinFlowIndicatorApi` | 1 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## ERC20 (15 эндпоинтов, 5 модулей)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `networkData` | `Erc20NetworkDataApi` | 6 | standalone |
| `marketData` | `Erc20MarketDataApi` | 1 | standalone |
| `exchangeFlows` | `ExchangeFlowsApi<TokenExchangeParams>` | 6 | shared напрямую |
| `flowIndicator` | `Erc20FlowIndicatorApi` | 1 | standalone |
| `status` | `StatusApi` | 1 | shared напрямую |

## Alt (1 эндпоинт, 1 модуль)

| Модуль | Класс | Кол-во | Наследование |
|---|---|---|---|
| `marketData` | `AltMarketDataApi` | 1 | standalone |
