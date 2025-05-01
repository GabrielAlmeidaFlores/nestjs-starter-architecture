type FindOptionSelectPropertyType<Property> =
  Property extends Promise<infer I>
    ? FindOptionSelectPropertyType<NonNullable<I>>
    : Property extends Array<infer I>
      ? FindOptionSelectPropertyType<NonNullable<I>>
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        Property extends Function
        ? never
        : Property extends string
          ? boolean
          : Property extends number
            ? boolean
            : Property extends boolean
              ? boolean
              : Property extends ArrayBuffer
                ? boolean
                : Property extends Date
                  ? boolean
                  : Property extends object
                    ? FindOptionSelectType<Property>
                    : boolean;

export type FindOptionSelectType<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionSelectPropertyType<NonNullable<Entity[P]>>;
};
