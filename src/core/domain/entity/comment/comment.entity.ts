import { AbstractEntity } from '@base/core/domain/entity/abstract/abstract.entity';
import { InvalidInputError } from '@base/core/domain/error/invalid-input.error';
import { Fail } from '@base/shared/feature/functional/fail.function';
import { Ok } from '@base/shared/feature/functional/ok.function';

import type { CommentEntityPropsInterface } from '@base/core/domain/entity/comment/comment.entity.props';
import type { Either } from '@base/shared/feature/functional/either.type';

export class CommentEntity extends AbstractEntity {
  public value: string;

  protected readonly _type = CommentEntity.name;

  private constructor(props: CommentEntityPropsInterface) {
    super(props);

    this.value = props.value;
  }

  static create(
    props: CommentEntityPropsInterface,
  ): Either<InvalidInputError, CommentEntity> {
    if ((props.post && props.comment) || (!props.post && !props.comment)) {
      return Fail(
        new InvalidInputError(
          'A comment must be associated with either a comment or a post',
        ),
      );
    }

    return Ok(new CommentEntity(props));
  }
}
