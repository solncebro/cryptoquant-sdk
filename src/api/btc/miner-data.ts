import { CryptoQuantClient } from '../../client';
import type { MinerParams } from '../../types/common';
import type { MinerCompaniesData } from '../../types/btc';

class BtcMinerDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getCompanies(params: MinerParams): Promise<MinerCompaniesData[]> {
    return this.client.get(`${this.basePath}/companies`, params);
  }
}

export { BtcMinerDataApi };
