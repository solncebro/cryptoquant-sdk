import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type { SunswapActivityData, SunpumpTokensData } from '../../types/trx';

class TrxDefiApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getSunswapActivity(params?: BaseParams): Promise<SunswapActivityData[]> {
    return this.client.get(`${this.basePath}/sunswap-activity`, params);
  }

  async getSunpumpTokens(params?: BaseParams): Promise<SunpumpTokensData[]> {
    return this.client.get(`${this.basePath}/sunpump-tokens`, params);
  }
}

export { TrxDefiApi };
