import { CryptoQuantClient } from '../../client';
import type { MempoolParams, MempoolStatsData } from '../../types/btc';

class BtcMempoolApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getStatsByRelativeFee(params: MempoolParams): Promise<MempoolStatsData[]> {
    return this.client.get(`${this.basePath}/stats-by-relative-fee`, params);
  }

  async getStatsInTotal(params: MempoolParams): Promise<MempoolStatsData[]> {
    return this.client.get(`${this.basePath}/stats-in-total`, params);
  }
}

export { BtcMempoolApi };
