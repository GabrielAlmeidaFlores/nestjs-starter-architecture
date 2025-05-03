type FindOptionOrderValueType =
  | 'ASC'
  | 'DESC'
  | 'asc'
  | 'desc'
  | 1
  | -1
  | {
      direction?: 'asc' | 'desc' | 'ASC' | 'DESC';
      nulls?: 'first' | 'last' | 'FIRST' | 'LAST';
    };

type FindOptionOrderPropertyType<Property> =
  Property extends Promise<infer I>
    ? FindOptionOrderPropertyType<NonNullable<I>>
    : Property extends Array<infer I>
      ? FindOptionOrderPropertyType<NonNullable<I>>
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        Property extends Function
        ? never
        : Property extends string
          ? FindOptionOrderValueType
          : Property extends number
            ? FindOptionOrderValueType
            : Property extends boolean
              ? FindOptionOrderValueType
              : Property extends ArrayBuffer
                ? FindOptionOrderValueType
                : Property extends Date
                  ? FindOptionOrderValueType
                  : Property extends object
                    ? FindOptionOrderType<Property> | FindOptionOrderValueType
                    : FindOptionOrderValueType;

export type FindOptionOrderType<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionOrderPropertyType<NonNullable<Entity[P]>>;
};
