import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';
export function moreThan<T>(value: T): FindOperatorType<T> {
  return { _type: 'moreThan', value };
}
