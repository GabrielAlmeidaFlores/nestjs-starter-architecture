import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function equal<T>(value: T): FindOperator<T> {
  return { _type: 'equal', value };
}
