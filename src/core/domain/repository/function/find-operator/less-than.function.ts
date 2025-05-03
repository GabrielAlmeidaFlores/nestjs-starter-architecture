import type { FindOperatorType } from '@core/domain/repository/type/find/find-operator.type';
export function lessThan<T>(value: T): FindOperatorType<T> {
  return { _type: 'lessThan', value };
}
