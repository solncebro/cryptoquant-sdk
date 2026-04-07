import type { MinerParams, InHouseFlowData } from '../../types/common';
import { ExchangeFlowsApi } from '../shared/exchange-flows';

class BtcMinerFlowsApi extends ExchangeFlowsApi<MinerParams> {
  async getInHouseFlow(params: MinerParams): Promise<InHouseFlowData[]> {
    return this.client.get(`${this.basePath}/in-house-flow`, params);
  }
}

export { BtcMinerFlowsApi };
