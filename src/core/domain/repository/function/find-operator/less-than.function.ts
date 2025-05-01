import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function lessThan<T>(value: T): FindOperator<T> {
  return { _type: 'lessThan', value };
}
