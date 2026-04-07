import { CryptoQuantClient } from '../../client';
import type { BaseParams } from '../../types/common';
import type { XrpNetworkValueToTransactionsData } from '../../types/xrp';

class XrpNetworkIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getNetworkValueToTransactions(
    params?: BaseParams,
  ): Promise<XrpNetworkValueToTransactionsData[]> {
    return this.client.get(`${this.basePath}/nvt`, params);
  }
}

export { XrpNetworkIndicatorApi };
