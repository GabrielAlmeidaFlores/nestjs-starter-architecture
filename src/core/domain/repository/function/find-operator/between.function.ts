import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';

export function between<T>(value: [T, T]): FindOperatorType<T> {
  return { _type: 'between', value };
}
