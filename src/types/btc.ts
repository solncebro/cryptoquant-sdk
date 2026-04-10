import type { TimeFieldData, BaseParams } from './common';

interface BlockBytesData extends TimeFieldData {
  blockBytes: number;
}

interface BlockIntervalData extends TimeFieldData {
  blockInterval: number;
}

interface UnspentTransactionOutputCountData extends TimeFieldData {
  unspentTransactionOutputCount: number;
}

interface FeesTransactionData extends TimeFieldData {
  feesPerTransaction: number;
}

interface BlockRewardData extends TimeFieldData {
  blockReward: number;
}

interface DifficultyData extends TimeFieldData {
  difficulty: number;
}

interface HashrateData extends TimeFieldData {
  hashrate: number;
}

interface BlockCountData extends TimeFieldData {
  blockCount: number;
}

interface CoindaysDestroyedData extends TimeFieldData {
  coindaysDestroyed: number;
}

interface InterEntityFlowData extends TimeFieldData {
  inflowTotal: number;
  outflowTotal: number;
  netflowTotal: number;
}

interface ExchangeShutdownIndexData extends TimeFieldData {
  exchangeShutdownIndex: number;
}

interface ExchangeWhaleRatioData extends TimeFieldData {
  exchangeWhaleRatio: number;
}

interface MinersPositionIndexData extends TimeFieldData {
  minersPositionIndex: number;
}

interface FundFlowRatioData extends TimeFieldData {
  fundFlowRatio: number;
}

interface ExchangeInflowCoinDaysDestroyedData extends TimeFieldData {
  exchangeInflowCoinDaysDestroyed: number;
}

interface ExchangeInflowAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface ExchangeInflowSupplyDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface ExchangeSupplyRatioData extends TimeFieldData {
  exchangeSupplyRatio: number;
}

interface MinerSupplyRatioData extends TimeFieldData {
  minerSupplyRatio: number;
}

interface NetworkValueToMetcalfeData extends TimeFieldData {
  networkValueToMetcalfe: number;
}

interface StockToFlowData extends TimeFieldData {
  stockToFlow: number;
}

interface NetworkValueToTransactionsData extends TimeFieldData {
  networkValueToTransactions: number;
}

interface PuellMultipleData extends TimeFieldData {
  puellMultiple: number;
}

interface NetworkValueToTransactionsGoldenCrossData extends TimeFieldData {
  networkValueToTransactionsGoldenCross: number;
}

interface CoinDaysDestroyedData extends TimeFieldData {
  coinDaysDestroyed: number;
}

interface SupplyWeightedCoinAgeData extends TimeFieldData {
  supplyWeightedCoinAge: number;
}

interface NetUnrealizedProfitLossData extends TimeFieldData {
  netUnrealizedProfitLoss: number;
}

interface ProfitAndLossSupplyData extends TimeFieldData {
  profitSupply: number;
  lossSupply: number;
}

interface ProfitAndLossUnspentTransactionOutputData extends TimeFieldData {
  profitUnspentTransactionOutput: number;
  lossUnspentTransactionOutput: number;
}

interface SupplyWeightedCoinAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface DormancyData extends TimeFieldData {
  dormancy: number;
}

interface UnspentTransactionOutputAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface UnspentTransactionOutputRealizedAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface UnspentTransactionOutputCountAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface SpentOutputAgeDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface UnspentTransactionOutputSupplyDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface UnspentTransactionOutputCountSupplyDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface SpentOutputSupplyDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface UnspentTransactionOutputRealizedSupplyDistributionData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface NetRealizedProfitLossData extends TimeFieldData {
  netRealizedProfitLoss: number;
}

interface MarketCapToActiveData extends TimeFieldData {
  marketCapToActive: number;
}

interface StablecoinSupplyRatioDataRaw extends TimeFieldData {
  stablecoinSupplyRatio: string;
}

interface MarketValueToRealizedValueDataRaw extends TimeFieldData {
  mvrv: number;
}

interface SpentOutputProfitRatioDataRaw extends TimeFieldData {
  sopr: number;
  aSopr?: number;
  sthSopr?: number;
  lthSopr?: number;
}

interface SpentOutputProfitRatioRatioDataRaw extends TimeFieldData {
  soprRatio: number;
}

interface RealizedPriceDataRaw extends TimeFieldData {
  realizedPrice: number;
}

interface UnspentTransactionOutputRealizedPriceAgeDistributionDataRaw extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface ProfitAndLossIndexDataRaw extends TimeFieldData {
  pnlIndex: number;
  bullBearIndicator: number;
}

interface MinerCompaniesData extends TimeFieldData {
  hashrate?: number;
  revenue?: number;
  cost?: number;
  profit?: number;
}

interface MempoolParams extends BaseParams {
  metricType: string;
}

interface MempoolStatsData extends TimeFieldData {
  [bucket: string]: number | string | undefined;
}

interface LightningStatsData extends TimeFieldData {
  nodeCount?: number;
  channelCount?: number;
  totalCapacity?: number;
}

export type {
  BlockBytesData,
  BlockIntervalData,
  UnspentTransactionOutputCountData,
  FeesTransactionData,
  BlockRewardData,
  DifficultyData,
  HashrateData,
  BlockCountData,
  CoindaysDestroyedData,
  InterEntityFlowData,
  ExchangeShutdownIndexData,
  ExchangeWhaleRatioData,
  MinersPositionIndexData,
  FundFlowRatioData,
  ExchangeInflowCoinDaysDestroyedData,
  ExchangeInflowAgeDistributionData,
  ExchangeInflowSupplyDistributionData,
  ExchangeSupplyRatioData,
  MinerSupplyRatioData,
  NetworkValueToMetcalfeData,
  StockToFlowData,
  NetworkValueToTransactionsData,
  PuellMultipleData,
  NetworkValueToTransactionsGoldenCrossData,
  CoinDaysDestroyedData,
  SupplyWeightedCoinAgeData,
  NetUnrealizedProfitLossData,
  ProfitAndLossSupplyData,
  ProfitAndLossUnspentTransactionOutputData,
  SupplyWeightedCoinAgeDistributionData,
  DormancyData,
  UnspentTransactionOutputAgeDistributionData,
  UnspentTransactionOutputRealizedAgeDistributionData,
  UnspentTransactionOutputCountAgeDistributionData,
  SpentOutputAgeDistributionData,
  UnspentTransactionOutputSupplyDistributionData,
  UnspentTransactionOutputCountSupplyDistributionData,
  SpentOutputSupplyDistributionData,
  UnspentTransactionOutputRealizedSupplyDistributionData,
  NetRealizedProfitLossData,
  MarketCapToActiveData,
  StablecoinSupplyRatioDataRaw,
  MarketValueToRealizedValueDataRaw,
  SpentOutputProfitRatioDataRaw,
  SpentOutputProfitRatioRatioDataRaw,
  RealizedPriceDataRaw,
  UnspentTransactionOutputRealizedPriceAgeDistributionDataRaw,
  ProfitAndLossIndexDataRaw,
  MinerCompaniesData,
  MempoolParams,
  MempoolStatsData,
  LightningStatsData,
};
