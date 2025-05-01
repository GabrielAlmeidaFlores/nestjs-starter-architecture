import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function moreThan<T>(value: T): FindOperator<T> {
  return { _type: 'moreThan', value };
}
