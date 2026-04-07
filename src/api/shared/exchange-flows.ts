import { CryptoQuantClient } from '../../client';
import {
  BaseParams,
  ReserveData,
  ExchangeFlowsInflowData,
  ExchangeFlowsOutflowData,
  ExchangeFlowsNetflowData,
  TransactionsCountData,
  AddressesCountData,
} from '../../types/common';

class ExchangeFlowsApi<TParams extends BaseParams> {
  constructor(
    protected readonly client: CryptoQuantClient,
    protected readonly basePath: string,
  ) {}

  async getReserve(params: TParams): Promise<ReserveData[]> {
    return this.client.get(`${this.basePath}/reserve`, params);
  }

  async getInflow(params: TParams): Promise<ExchangeFlowsInflowData[]> {
    return this.client.get(`${this.basePath}/inflow`, params);
  }

  async getOutflow(params: TParams): Promise<ExchangeFlowsOutflowData[]> {
    return this.client.get(`${this.basePath}/outflow`, params);
  }

  async getNetflow(params: TParams): Promise<ExchangeFlowsNetflowData[]> {
    return this.client.get(`${this.basePath}/netflow`, params);
  }

  async getTransactionsCount(params: TParams): Promise<TransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count`, params);
  }

  async getAddressesCount(params: TParams): Promise<AddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count`, params);
  }
}

export { ExchangeFlowsApi };
