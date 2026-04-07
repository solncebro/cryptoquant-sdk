import type { TimeFieldData } from './common';

interface TokensTransferredCountData extends TimeFieldData {
  tokensTransferredCount: number;
}

interface Erc20ExchangeSupplyRatioData extends TimeFieldData {
  exchangeSupplyRatio: number;
}

export type { TokensTransferredCountData, Erc20ExchangeSupplyRatioData };
