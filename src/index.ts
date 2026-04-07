import { CryptoQuantClient } from './client';
import { BtcApi } from './api/btc';
import { EthApi } from './api/eth';
import { XrpApi } from './api/xrp';
import { TrxApi } from './api/trx';
import { StablecoinApi } from './api/stablecoin';
import { Erc20Api } from './api/erc20';
import { AltApi } from './api/alt';

class CryptoQuant {
  readonly btc: BtcApi;
  readonly eth: EthApi;
  readonly xrp: XrpApi;
  readonly trx: TrxApi;
  readonly stablecoin: StablecoinApi;
  readonly erc20: Erc20Api;
  readonly alt: AltApi;

  constructor(accessToken: string) {
    const client = new CryptoQuantClient(accessToken);

    this.btc = new BtcApi(client);
    this.eth = new EthApi(client);
    this.xrp = new XrpApi(client);
    this.trx = new TrxApi(client);
    this.stablecoin = new StablecoinApi(client);
    this.erc20 = new Erc20Api(client);
    this.alt = new AltApi(client);
  }
}

export { CryptoQuant };
export { CryptoQuantClient } from './client';
export * from './types';
export { BtcApi } from './api/btc';
export { EthApi } from './api/eth';
export { XrpApi } from './api/xrp';
export { TrxApi } from './api/trx';
export { StablecoinApi } from './api/stablecoin';
export { Erc20Api } from './api/erc20';
export { AltApi } from './api/alt';
export { ExchangeFlowsApi } from './api/shared/exchange-flows';
export { MarketDataApi } from './api/shared/market-data';
export { FundDataApi } from './api/shared/fund-data';
export { NetworkDataApi } from './api/shared/network-data';
export { StatusApi } from './api/shared/status';
