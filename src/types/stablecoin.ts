import type { TimeFieldData } from './common';

interface EventsCountData extends TimeFieldData {
  eventsCount: number;
}

interface StablecoinExchangeSupplyRatioData extends TimeFieldData {
  exchangeSupplyRatio: number;
}

export type { EventsCountData, StablecoinExchangeSupplyRatioData };
