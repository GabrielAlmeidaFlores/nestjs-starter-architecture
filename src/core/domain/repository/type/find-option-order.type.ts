export type FindOptionOrderValue =
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

export type FindOptionOrderProperty<Property> =
  Property extends Promise<infer I>
    ? FindOptionOrderProperty<NonNullable<I>>
    : Property extends Array<infer I>
      ? FindOptionOrderProperty<NonNullable<I>>
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        Property extends Function
        ? never
        : Property extends string
          ? FindOptionOrderValue
          : Property extends number
            ? FindOptionOrderValue
            : Property extends boolean
              ? FindOptionOrderValue
              : Property extends ArrayBuffer
                ? FindOptionOrderValue
                : Property extends Date
                  ? FindOptionOrderValue
                  : Property extends object
                    ? FindOptionOrder<Property> | FindOptionOrderValue
                    : FindOptionOrderValue;

export type FindOptionOrder<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionOrderProperty<NonNullable<Entity[P]>>;
};
