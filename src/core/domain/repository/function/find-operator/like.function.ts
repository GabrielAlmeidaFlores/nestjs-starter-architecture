import type { FindOperatorType } from '@core/domain/repository/type/find/find-operator.type';
export function like(value: string): FindOperatorType<string> {
  return { _type: 'like', value };
}
