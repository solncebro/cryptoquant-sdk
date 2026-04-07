---
description: Naming conventions for CryptoQuant SDK
globs: src/**/*.ts
---

# Правила именования

## Типы

- Response-тип: `{MetricName}Data` (например `HashrateData`, `ReserveData`)
- Param-тип: `{Context}Params` (например `ExchangeParams`, `MinerParams`)
- Enum: `{Name}Enum` (например `WindowEnum`, `FormatEnum`)
- Asset-специфический response-тип: `{Asset}{MetricName}Data` или `{MetricName}Data` если уникален (например `EthBlockBytesData`, `NvtData`)
- Общий time-тип: `TimeFieldData` — базовый интерфейс для date/datetime/blockheight

## API-классы

- Shared базовый класс: `{Category}Api` (например `ExchangeFlowsApi`, `MarketDataApi`)
- Asset-специфический класс: `{Asset}{Category}Api` (например `BtcNetworkDataApi`, `EthStakingApi`)
- Корневой asset-класс: `{Asset}Api` (например `BtcApi`, `EthApi`)

## Методы

- Формат: `get{MetricName}` в camelCase
- Примеры: `getHashrate`, `getPriceOhlcv`, `getEstimatedLeverageRatio`
- Аббревиатуры как слова: `Ohlcv`, `Nvt`, `Utxo`, `Cdd`, `Mvrv`, `Sopr`, `Nupl`

## Файлы

- API-файлы: kebab-case (`network-data.ts`, `flow-indicator.ts`)
- Type-файлы: lowercase (`btc.ts`, `common.ts`)
- Barrel-экспорт: `index.ts` в каждой директории

## Общие правила

- Без комментариев в коде
- Без `any`, без inline-типов
- `class` + `extends` для переиспользования
- `readonly` для всех свойств в API-классах
- `private readonly` для client/basePath в leaf-классах, `protected readonly` в базовых классах для наследования
