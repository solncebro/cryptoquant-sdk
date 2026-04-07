enum WindowEnum {
  Day = 'day',
  Hour = 'hour',
  Block = 'block',
  Min = 'min',
  TenMin = '10min',
}

enum FormatEnum {
  Json = 'json',
  Csv = 'csv',
}

interface BaseParams {
  window?: WindowEnum;
  from?: string;
  to?: string;
  limit?: number;
  format?: FormatEnum;
}

interface ExchangeParams extends BaseParams {
  exchange: string;
}

interface MinerParams extends BaseParams {
  miner: string;
}

interface TokenExchangeParams extends BaseParams {
  token: string;
  exchange: string;
}

interface TokenParams extends BaseParams {
  token: string;
}

interface FundSymbolParams extends BaseParams {
  symbol: string;
}

interface SymbolMarketParams extends BaseParams {
  exchange?: string;
  symbol?: string;
  market?: string;
}

interface TokenMarketParams extends BaseParams {
  token: string;
  exchange?: string;
  symbol?: string;
  market?: string;
}

interface InterEntityFlowsParams extends BaseParams {
  fromExchange?: string;
  toExchange?: string;
  fromMiner?: string;
  toMiner?: string;
}

interface CryptoQuantApiResponseStatus {
  code: number;
  message: string;
}

interface CryptoQuantApiResponseResult<T> {
  window: string;
  data: T[];
}

interface CryptoQuantApiResponse<T> {
  status: CryptoQuantApiResponseStatus;
  result: CryptoQuantApiResponseResult<T>;
}

class CryptoQuantError extends Error {
  constructor(
    public readonly code: number,
    message: string,
    public readonly requestUrl?: string,
  ) {
    super(message);
    this.name = 'CryptoQuantError';
  }
}

interface TimeFieldData {
  date?: string;
  datetime?: string;
  blockheight?: number;
}

interface ReserveData extends TimeFieldData {
  reserve: number;
  reserveUsd: number;
}

interface ExchangeFlowsInflowData extends TimeFieldData {
  inflowTotal: number;
  inflowTop10: number;
  inflowMean: number;
  inflowMeanMovingAverage7: number;
}

interface ExchangeFlowsOutflowData extends TimeFieldData {
  outflowTotal: number;
  outflowTop10: number;
  outflowMean: number;
  outflowMeanMovingAverage7: number;
}

interface ExchangeFlowsNetflowData extends TimeFieldData {
  netflowTotal: number;
}

interface TransactionsCountData extends TimeFieldData {
  transactionsCountInflow: number;
  transactionsCountOutflow: number;
}

interface AddressesCountData extends TimeFieldData {
  addressesCountInflow: number;
  addressesCountOutflow: number;
}

interface InHouseFlowData extends TimeFieldData {
  inHouseTotal: number;
  inHouseMean: number;
}

interface PriceOpenHighLowCloseVolumeData extends TimeFieldData {
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

interface CapitalizationData extends TimeFieldData {
  capitalization: number;
}

interface OpenInterestData extends TimeFieldData {
  openInterest: number;
}

interface FundingRatesData extends TimeFieldData {
  fundingRate: number;
}

interface TakerBuySellData extends TimeFieldData {
  buyRatio: number;
  sellRatio: number;
  buyVolume: number;
  sellVolume: number;
}

interface CoinbasePremiumIndexData extends TimeFieldData {
  coinbasePremiumIndex: number;
}

interface LiquidationsData extends TimeFieldData {
  longLiquidations: number;
  shortLiquidations: number;
  longLiquidationsUsd: number;
  shortLiquidationsUsd: number;
}

interface FundPriceData extends TimeFieldData {
  priceUsdOpen: number;
  priceUsdHigh: number;
  priceUsdLow: number;
  priceUsdClose: number;
  priceUsdAdjClose: number;
}

interface FundVolumeData extends TimeFieldData {
  volumeUsd: number;
}

interface FundPremiumData extends TimeFieldData {
  premium: number;
}

interface FundHoldingsData extends TimeFieldData {
  digitalAssetHoldings: number;
}

interface EntityListItem {
  name: string;
  type?: string;
}

interface NetworkAddressesCountData extends TimeFieldData {
  activeAddress?: number;
  totalAddress?: number;
  sendingAddress?: number;
  receivingAddress?: number;
}

interface NetworkTransactionsCountData extends TimeFieldData {
  totalTransactionsCount: number;
}

interface TokensTransferredData extends TimeFieldData {
  tokensTransferredTotal: number;
  tokensTransferredMean?: number;
}

interface SupplyData extends TimeFieldData {
  supplyTotal: number;
}

interface VelocityData extends TimeFieldData {
  velocity: number;
}

interface FeesData extends TimeFieldData {
  totalFees: number;
}

interface EstimatedLeverageRatioData extends TimeFieldData {
  estimatedLeverageRatio: number;
}

interface StablecoinsRatioData extends TimeFieldData {
  stablecoinsRatio: number;
}

export { WindowEnum, FormatEnum, CryptoQuantError };

export type {
  BaseParams,
  ExchangeParams,
  MinerParams,
  TokenExchangeParams,
  TokenParams,
  FundSymbolParams,
  SymbolMarketParams,
  TokenMarketParams,
  InterEntityFlowsParams,
  CryptoQuantApiResponse,
  CryptoQuantApiResponseStatus,
  CryptoQuantApiResponseResult,
  TimeFieldData,
  ReserveData,
  ExchangeFlowsInflowData,
  ExchangeFlowsOutflowData,
  ExchangeFlowsNetflowData,
  TransactionsCountData,
  AddressesCountData,
  InHouseFlowData,
  PriceOpenHighLowCloseVolumeData,
  CapitalizationData,
  OpenInterestData,
  FundingRatesData,
  TakerBuySellData,
  CoinbasePremiumIndexData,
  LiquidationsData,
  FundPriceData,
  FundVolumeData,
  FundPremiumData,
  FundHoldingsData,
  EntityListItem,
  NetworkAddressesCountData,
  NetworkTransactionsCountData,
  TokensTransferredData,
  SupplyData,
  VelocityData,
  FeesData,
  EstimatedLeverageRatioData,
  StablecoinsRatioData,
};
