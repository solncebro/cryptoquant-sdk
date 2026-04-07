import type { TimeFieldData } from './common';

interface EnergyConsumptionData extends TimeFieldData {
  energyConsumption: number;
}

interface BandwidthConsumptionData extends TimeFieldData {
  bandwidthConsumption: number;
}

interface TransactionsPerSecondData extends TimeFieldData {
  transactionsPerSecond: number;
}

interface TrxBlockCountData extends TimeFieldData {
  blockCount: number;
}

interface TotalValueStakedData extends TimeFieldData {
  totalValueStaked: number;
}

interface StakingRateData extends TimeFieldData {
  stakingRate: number;
}

interface SunswapActivityData extends TimeFieldData {
  [field: string]: number | string | undefined;
}

interface SunpumpTokensData extends TimeFieldData {
  [field: string]: number | string | undefined;
}

export type {
  EnergyConsumptionData,
  BandwidthConsumptionData,
  TransactionsPerSecondData,
  TrxBlockCountData,
  TotalValueStakedData,
  StakingRateData,
  SunswapActivityData,
  SunpumpTokensData,
};
