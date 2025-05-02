import type { FindOperatorType } from '@core/domain/repository/type/find/find-operator.type';

export function equal<T>(value: T): FindOperatorType<T> {
  return { _type: 'equal', value };
}
