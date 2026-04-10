# CryptoQuant TypeScript SDK

TypeScript-библиотека для CryptoQuant REST API. Оборачивает 248 эндпоинтов on-chain и рыночных данных для BTC, ETH, XRP, TRX, Stablecoin, ERC20 и Alt в типизированный SDK.

- **npm-пакет**: `@solncebro/cryptoquant-sdk`
- **Лицензия**: MIT
- **Репозиторий**: https://github.com/solncebro/cryptoquant-sdk

## Структура проекта

```
src/
├── client.ts          # Axios HTTP-клиент с Bearer-токеном и camelCase<->snake_case конвертацией
├── types/             # Все интерфейсы и enum'ы
│   ├── common.ts      # WindowEnum, FormatEnum, BaseParams, ExchangeParams, общие response-типы
│   ├── btc.ts         # BTC-специфические response-типы (88 эндпоинтов)
│   ├── eth.ts         # ETH-специфические response-типы (72 эндпоинта)
│   ├── xrp.ts         # XRP-специфические response-типы (41 эндпоинт)
│   ├── trx.ts         # TRX-специфические response-типы (17 эндпоинтов)
│   ├── stablecoin.ts  # Stablecoin-специфические типы (14 эндпоинтов)
│   ├── erc20.ts       # ERC20-специфические типы (15 эндпоинтов)
│   ├── alt.ts         # Alt-специфические типы (1 эндпоинт)
│   └── index.ts       # Реэкспорт всех типов
├── api/
│   ├── shared/        # Переиспользуемые базовые API-классы
│   │   ├── exchange-flows.ts   # ExchangeFlowsApi<TParams> (6 методов)
│   │   ├── market-data.ts      # MarketDataApi (7 методов)
│   │   ├── fund-data.ts        # FundDataApi (4 метода)
│   │   ├── network-data.ts     # NetworkDataApi (6 методов)
│   │   └── status.ts           # StatusApi (1 метод)
│   ├── btc/           # BtcApi — 13 модулей, 88 эндпоинтов
│   ├── eth/           # EthApi — 8 модулей, 72 эндпоинта
│   ├── xrp/           # XrpApi — 9 модулей, 41 эндпоинт
│   ├── trx/           # TrxApi — 4 модуля, 17 эндпоинтов
│   ├── stablecoin/    # StablecoinApi — 5 модулей, 14 эндпоинтов
│   ├── erc20/         # Erc20Api — 5 модулей, 15 эндпоинтов
│   └── alt/           # AltApi — 1 модуль, 1 эндпоинт
└── index.ts           # Класс CryptoQuant — главный экспорт
```

## Ключевые команды

- `yarn build` — компиляция TypeScript в dist/ + ESLint проверка
- `yarn lint` — только ESLint проверка
- `yarn format` — форматирование Prettier
- `yarn format:check` — проверка форматирования
- `yarn test` — запуск test.ts (нужен accessToken)

## Правила именования

- Типы: суффикс `Params` (запросы), `Data` (ответы), `DataRaw` (ответы с сырыми именами полей API), `Enum` (перечисления)
- Аббревиатуры как слова: `PriceOhlcvData`, `EthApi`, `NvtData`
- Базовые классы в `src/api/shared/`, расширения через наследование в `src/api/{asset}/`
- Все типы параметров и ответов определены в `src/types/`
- Без комментариев в коде
- Без `any`
- `class` + `extends` для переиспользования (не mixins/composition)

## Как добавить новый эндпоинт

1. Определить response-тип в `src/types/<asset>.ts`
2. Добавить метод в соответствующий API-класс в `src/api/<asset>/`
3. Если нужен новый модуль — создать файл и подключить в `src/api/<asset>/index.ts`
4. Реэкспортировать типы через `src/types/index.ts` если нужно
5. `yarn build && yarn format:check`
