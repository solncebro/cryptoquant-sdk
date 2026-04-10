---
description: How to add new API endpoints to CryptoQuant SDK
globs: src/api/**/*.ts, src/types/**/*.ts
---

# Добавление эндпоинта

## Шаг 1: Response-тип

Определить в `src/types/<asset>.ts`:

```typescript
interface NewMetricData extends TimeFieldData {
  newMetric: number;
}
```

Экспортировать через `export type { ... }` в конце файла. Barrel-экспорт в `src/types/index.ts` подхватит автоматически через `export * from './<asset>'`.

## Шаг 2: API-метод

Добавить метод в соответствующий API-класс:

```typescript
async getNewMetric(params?: BaseParams): Promise<NewMetricData[]> {
  return this.client.get(`${this.basePath}/new-metric`, params);
}
```

Путь: kebab-case, всегда относительно `this.basePath`.

## Шаг 3: Новый модуль (если нужен)

Если эндпоинт не вписывается в существующий модуль:

1. Создать `src/api/<asset>/<module-name>.ts` с классом
2. Импортировать в `src/api/<asset>/index.ts`
3. Добавить свойство `readonly` и инстанцировать в конструкторе с basePath `/v1/<asset>/<module-name>`
4. Экспортировать класс из `src/api/<asset>/index.ts`
5. Добавить реэкспорт в `src/index.ts`

## Шаг 4: Проверка

```bash
yarn build && yarn format:check
```

## Типовые param-типы

- Эндпоинт без спец-параметров → `BaseParams`
- Нужна биржа → `ExchangeParams`
- Нужен майнер → `MinerParams`
- Нужен токен → `TokenParams`
- Нужен токен + биржа → `TokenExchangeParams`
- Нужен symbol + market → `SymbolMarketParams` или `TokenMarketParams`
- Нужен fund symbol → `FundSymbolParams`

## Именование

- Класс: `{Asset}{Category}Api` (например `BtcMempoolApi`)
- Метод: `get{MetricName}` в camelCase
- Тип ответа: `{MetricName}Data` или `{MetricName}DataRaw` (если поля API используют сокращённые имена вроде `sopr`, `mvrv`)
- Путь API: kebab-case (`/metric-name`)
