import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';
export function not<T>(value: T): FindOperatorType<T> {
  return { _type: 'not', value };
}
