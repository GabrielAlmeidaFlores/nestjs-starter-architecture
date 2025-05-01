import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';
export function moreThanOrEqual<T>(value: T): FindOperatorType<T> {
  return { _type: 'moreThanOrEqual', value };
}
