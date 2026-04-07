import { CryptoQuantClient } from '../../client';
import type {
  ReserveData,
  ExchangeFlowsInflowData,
  ExchangeFlowsOutflowData,
  TransactionsCountData,
  AddressesCountData,
} from '../../types/common';
import type { XrpEntityFlowsParams, EntityShareData, WhaleMovementsData } from '../../types/xrp';

class XrpEntityFlowsApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getReserve(params?: XrpEntityFlowsParams): Promise<ReserveData[]> {
    return this.client.get(`${this.basePath}/reserve`, params);
  }

  async getShare(params?: XrpEntityFlowsParams): Promise<EntityShareData[]> {
    return this.client.get(`${this.basePath}/share`, params);
  }

  async getInflow(params?: XrpEntityFlowsParams): Promise<ExchangeFlowsInflowData[]> {
    return this.client.get(`${this.basePath}/inflow`, params);
  }

  async getOutflow(params?: XrpEntityFlowsParams): Promise<ExchangeFlowsOutflowData[]> {
    return this.client.get(`${this.basePath}/outflow`, params);
  }

  async getAddressesCount(params?: XrpEntityFlowsParams): Promise<AddressesCountData[]> {
    return this.client.get(`${this.basePath}/addresses-count`, params);
  }

  async getTransactionsCount(params?: XrpEntityFlowsParams): Promise<TransactionsCountData[]> {
    return this.client.get(`${this.basePath}/transactions-count`, params);
  }

  async getWhaleMovements(params?: XrpEntityFlowsParams): Promise<WhaleMovementsData[]> {
    return this.client.get(`${this.basePath}/whale-movements`, params);
  }
}

export { XrpEntityFlowsApi };
