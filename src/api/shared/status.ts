import { CryptoQuantClient } from '../../client';
import { BaseParams, EntityListItem } from '../../types/common';

class StatusApi {
  constructor(
    private readonly client: CryptoQuantClient,
    private readonly basePath: string,
  ) {}

  async getEntityList(params?: BaseParams): Promise<EntityListItem[]> {
    return this.client.get(`${this.basePath}/entity-list`, params);
  }
}

export { StatusApi };
