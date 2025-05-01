import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function lessThanOrEqual<T>(value: T): FindOperator<T> {
  return { _type: 'lessThanOrEqual', value };
}
