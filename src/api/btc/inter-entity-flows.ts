import { CryptoQuantClient } from '../../client';
import type { InterEntityFlowsParams } from '../../types/common';
import type { InterEntityFlowData } from '../../types/btc';

class BtcInterEntityFlowsApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeToExchange(params?: InterEntityFlowsParams): Promise<InterEntityFlowData[]> {
    return this.client.get(`${this.basePath}/exchange-to-exchange`, params);
  }

  async getExchangeToMiner(params?: InterEntityFlowsParams): Promise<InterEntityFlowData[]> {
    return this.client.get(`${this.basePath}/exchange-to-miner`, params);
  }

  async getMinerToExchange(params?: InterEntityFlowsParams): Promise<InterEntityFlowData[]> {
    return this.client.get(`${this.basePath}/miner-to-exchange`, params);
  }

  async getMinerToMiner(params?: InterEntityFlowsParams): Promise<InterEntityFlowData[]> {
    return this.client.get(`${this.basePath}/miner-to-miner`, params);
  }
}

export { BtcInterEntityFlowsApi };
