import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type { LightningStatsData } from '../../types/btc';

class BtcLightningApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getStatsInTotal(params?: BaseParams): Promise<LightningStatsData[]> {
    return this.client.get(`${this.basePath}/stats-in-total`, params);
  }
}

export { BtcLightningApi };
