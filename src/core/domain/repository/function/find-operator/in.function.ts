import type { FindOperatorType } from '@core/domain/repository/type/find-operator.type';
export function inside<T>(value: T[]): FindOperatorType<T> {
  return { _type: 'in', value };
}
