import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function inside<T>(value: T[]): FindOperator<T> {
  return { _type: 'in', value };
}
