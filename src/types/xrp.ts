import type { BaseParams, TimeFieldData } from './common';

interface XrpEntityFlowsParams extends BaseParams {
  exchange?: string;
  bank?: string;
  team?: string;
  foundation?: string;
  custody?: string;
  builder?: string;
  overTheCounter?: string;
  bridge?: string;
}

interface AutomatedMarketMakerParams extends BaseParams {
  automatedMarketMaker: string;
}

interface XrpBurntData extends TimeFieldData {
  xrpBurnt: number;
}

interface LedgerCountData extends TimeFieldData {
  ledgerCount: number;
}

interface XrpBlockIntervalData extends TimeFieldData {
  blockInterval: number;
}

interface XrpNetworkValueToTransactionsData extends TimeFieldData {
  networkValueToTransactions: number;
}

interface EntityShareData extends TimeFieldData {
  share: number;
}

interface WhaleMovementsData extends TimeFieldData {
  inflowLarge: number;
  outflowLarge: number;
}

interface DecentralizedExchangeVolumeData extends TimeFieldData {
  volume: number;
}

interface DecentralizedExchangeTransactionsCountData extends TimeFieldData {
  transactionsCount: number;
}

interface DecentralizedExchangeLiquidityData extends TimeFieldData {
  liquidity: number;
}

interface DecentralizedExchangePriceData extends TimeFieldData {
  price: number;
}

interface BuySellRatioData extends TimeFieldData {
  buyRatio: number;
  sellRatio: number;
}

interface TradeShareData extends TimeFieldData {
  tradeShare: number;
}

interface AutomatedMarketMakerPriceData extends TimeFieldData {
  price: number;
}

interface AutomatedMarketMakerLiquidityData extends TimeFieldData {
  liquidity: number;
}

interface AutomatedMarketMakerSwapStatsData extends TimeFieldData {
  swapCount: number;
  swapVolume: number;
}

interface AutomatedMarketMakerFeeData extends TimeFieldData {
  fee: number;
}

interface FlowValueDistributionData extends TimeFieldData {
  small: number;
  medium: number;
  large: number;
}

interface FlowCountValueDistributionData extends TimeFieldData {
  small: number;
  medium: number;
  large: number;
}

interface XrpExchangeSupplyRatioData extends TimeFieldData {
  exchangeSupplyRatio: number;
}

export type {
  XrpEntityFlowsParams,
  AutomatedMarketMakerParams,
  XrpBurntData,
  LedgerCountData,
  XrpBlockIntervalData,
  XrpNetworkValueToTransactionsData,
  EntityShareData,
  WhaleMovementsData,
  DecentralizedExchangeVolumeData,
  DecentralizedExchangeTransactionsCountData,
  DecentralizedExchangeLiquidityData,
  DecentralizedExchangePriceData,
  BuySellRatioData,
  TradeShareData,
  AutomatedMarketMakerPriceData,
  AutomatedMarketMakerLiquidityData,
  AutomatedMarketMakerSwapStatsData,
  AutomatedMarketMakerFeeData,
  FlowValueDistributionData,
  FlowCountValueDistributionData,
  XrpExchangeSupplyRatioData,
};
