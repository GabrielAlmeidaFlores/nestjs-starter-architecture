import { AbstractEntity } from '@base/core/domain/entity/abstract.entity';

export class PostEntity extends AbstractEntity {
  protected readonly _type = PostEntity.name;
}
