import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function between<T>(value: [T, T]): FindOperator<T> {
  return { _type: 'between', value };
}
