import { ExchangeFlowsApi } from '../shared/exchange-flows';
import type { ExchangeParams, InHouseFlowData } from '../../types/common';

class BtcExchangeFlowsApi extends ExchangeFlowsApi<ExchangeParams> {
  async getInHouseFlow(params: ExchangeParams): Promise<InHouseFlowData[]> {
    return this.client.get(`${this.basePath}/in-house-flow`, params);
  }
}

export { BtcExchangeFlowsApi };
