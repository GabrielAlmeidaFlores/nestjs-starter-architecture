import type { Guid } from '@core/domain/entity/base/value-object/guid/guid.value-object';
import type { UserEntity } from '@core/domain/entity/user/user.entity';

export abstract class UserRepositoryGateway {
  public abstract createUser(data: UserEntity): Promise<void>;
  public abstract deleteUser(id: Guid): Promise<void>;
}
