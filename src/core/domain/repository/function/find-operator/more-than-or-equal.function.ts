import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function moreThanOrEqual<T>(value: T): FindOperator<T> {
  return { _type: 'moreThanOrEqual', value };
}
