import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function not<T>(value: T): FindOperator<T> {
  return { _type: 'not', value };
}
