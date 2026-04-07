import { CryptoQuantClient } from '../../client';
import type { ExchangeParams } from '../../types/common';
import type {
  FlowValueDistributionData,
  FlowCountValueDistributionData,
  XrpExchangeSupplyRatioData,
} from '../../types/xrp';

class XrpFlowIndicatorApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getExchangeInflowValueDistribution(
    params: ExchangeParams,
  ): Promise<FlowValueDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-inflow-value-distribution`, params);
  }

  async getExchangeOutflowValueDistribution(
    params: ExchangeParams,
  ): Promise<FlowValueDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-outflow-value-distribution`, params);
  }

  async getExchangeInflowCountValueDistribution(
    params: ExchangeParams,
  ): Promise<FlowCountValueDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-inflow-count-value-distribution`, params);
  }

  async getExchangeOutflowCountValueDistribution(
    params: ExchangeParams,
  ): Promise<FlowCountValueDistributionData[]> {
    return this.client.get(`${this.basePath}/exchange-outflow-count-value-distribution`, params);
  }

  async getExchangeSupplyRatio(params: ExchangeParams): Promise<XrpExchangeSupplyRatioData[]> {
    return this.client.get(`${this.basePath}/exchange-supply-ratio`, params);
  }
}

export { XrpFlowIndicatorApi };
