import { CryptoQuantClient } from '../../client';
import type {
  AutomatedMarketMakerParams,
  AutomatedMarketMakerPriceData,
  AutomatedMarketMakerLiquidityData,
  AutomatedMarketMakerSwapStatsData,
  AutomatedMarketMakerFeeData,
} from '../../types/xrp';

class XrpAmmDataApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getPrice(params: AutomatedMarketMakerParams): Promise<AutomatedMarketMakerPriceData[]> {
    return this.client.get(`${this.basePath}/price`, params);
  }

  async getLiquidity(
    params: AutomatedMarketMakerParams,
  ): Promise<AutomatedMarketMakerLiquidityData[]> {
    return this.client.get(`${this.basePath}/liquidity`, params);
  }

  async getSwapStats(
    params: AutomatedMarketMakerParams,
  ): Promise<AutomatedMarketMakerSwapStatsData[]> {
    return this.client.get(`${this.basePath}/swap-stats`, params);
  }

  async getFee(params: AutomatedMarketMakerParams): Promise<AutomatedMarketMakerFeeData[]> {
    return this.client.get(`${this.basePath}/fee`, params);
  }
}

export { XrpAmmDataApi };
