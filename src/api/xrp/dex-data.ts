import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type {
  DecentralizedExchangeVolumeData,
  DecentralizedExchangeTransactionsCountData,
  DecentralizedExchangeLiquidityData,
  DecentralizedExchangePriceData,
} from '../../types/xrp';

class XrpDexDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getVolume(params?: BaseParams): Promise<DecentralizedExchangeVolumeData[]> {
    return this.client.get(`${this.basePath}/volume`, params);
  }

  async getTransactionsCount(
    params?: BaseParams,
  ): Promise<DecentralizedExchangeTransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count`, params);
  }

  async getLiquidity(params?: BaseParams): Promise<DecentralizedExchangeLiquidityData[]> {
    return this.client.get(`${this.basePath}/liquidity`, params);
  }

  async getDecentralizedExchangePrice(
    params?: BaseParams,
  ): Promise<DecentralizedExchangePriceData[]> {
    return this.client.get(`${this.basePath}/dex-price`, params);
  }
}

export { XrpDexDataApi };
