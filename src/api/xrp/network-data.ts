import { NetworkDataApi } from '../shared/network-data';
import type { BaseParams } from '../../types/common';
import type { XrpBurntData, LedgerCountData, XrpBlockIntervalData } from '../../types/xrp';

class XrpNetworkDataApi extends NetworkDataApi {
  async getXrpBurnt(params?: BaseParams): Promise<XrpBurntData[]> {
    return this.client.get(`${this.basePath}/xrp-burnt`, params);
  }

  async getLedgerCount(params?: BaseParams): Promise<LedgerCountData[]> {
    return this.client.get(`${this.basePath}/ledger-count`, params);
  }

  async getBlockInterval(params?: BaseParams): Promise<XrpBlockIntervalData[]> {
    return this.client.get(`${this.basePath}/block-interval`, params);
  }
}

export { XrpNetworkDataApi };
