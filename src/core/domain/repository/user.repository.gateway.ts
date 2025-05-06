import type { Guid } from '@core/domain/entity/base/value-object/guid/guid.value-object';

export abstract class UserRepositoryGateway {
  public abstract deleteUser(id: Guid): Promise<void>;
}
