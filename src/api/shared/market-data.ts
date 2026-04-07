import { CryptoQuantClient } from '../../client';
import {
  BaseParams,
  ExchangeParams,
  SymbolMarketParams,
  PriceOpenHighLowCloseVolumeData,
  CapitalizationData,
  OpenInterestData,
  FundingRatesData,
  TakerBuySellData,
  CoinbasePremiumIndexData,
  LiquidationsData,
} from '../../types/common';

class MarketDataApi {
  constructor(
    protected readonly client: CryptoQuantClient,
    protected readonly basePath: string,
  ) {}

  async getPriceOpenHighLowCloseVolume(
    params?: SymbolMarketParams,
  ): Promise<PriceOpenHighLowCloseVolumeData[]> {
    return this.client.get(`${this.basePath}/price-ohlcv`, params);
  }

  async getCapitalization(params?: BaseParams): Promise<CapitalizationData[]> {
    return this.client.get(`${this.basePath}/capitalization`, params);
  }

  async getOpenInterest(params: ExchangeParams): Promise<OpenInterestData[]> {
    return this.client.get(`${this.basePath}/open-interest`, params);
  }

  async getFundingRates(params: ExchangeParams): Promise<FundingRatesData[]> {
    return this.client.get(`${this.basePath}/funding-rates`, params);
  }

  async getTakerBuySellStats(params: ExchangeParams): Promise<TakerBuySellData[]> {
    return this.client.get(`${this.basePath}/taker-buy-sell-stats`, params);
  }

  async getCoinbasePremiumIndex(params?: BaseParams): Promise<CoinbasePremiumIndexData[]> {
    return this.client.get(`${this.basePath}/coinbase-premium-index`, params);
  }

  async getLiquidations(params: ExchangeParams): Promise<LiquidationsData[]> {
    return this.client.get(`${this.basePath}/liquidations`, params);
  }
}

export { MarketDataApi };
