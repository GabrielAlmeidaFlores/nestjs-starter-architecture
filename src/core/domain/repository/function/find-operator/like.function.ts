import type { FindOperator } from '@core/domain/repository/type/find-option-where.type';

export function like(value: string): FindOperator<string> {
  return { _type: 'like', value };
}
