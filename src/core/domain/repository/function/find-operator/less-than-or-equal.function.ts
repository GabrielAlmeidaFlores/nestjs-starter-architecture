import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';
export function lessThanOrEqual<T>(value: T): FindOperatorType<T> {
  return { _type: 'lessThanOrEqual', value };
}
