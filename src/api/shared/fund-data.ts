import { CryptoQuantClient } from '../../client';
import {
  FundSymbolParams,
  FundPriceData,
  FundVolumeData,
  FundPremiumData,
  FundHoldingsData,
} from '../../types/common';

class FundDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getMarketPriceUsd(params: FundSymbolParams): Promise<FundPriceData[]> {
    return this.client.get(`${this.basePath}/market-price-usd`, params);
  }

  async getMarketVolume(params: FundSymbolParams): Promise<FundVolumeData[]> {
    return this.client.get(`${this.basePath}/market-volume`, params);
  }

  async getMarketPremium(params: FundSymbolParams): Promise<FundPremiumData[]> {
    return this.client.get(`${this.basePath}/market-premium`, params);
  }

  async getDigitalAssetHoldings(params: FundSymbolParams): Promise<FundHoldingsData[]> {
    return this.client.get(`${this.basePath}/digital-asset-holdings`, params);
  }
}

export { FundDataApi };
