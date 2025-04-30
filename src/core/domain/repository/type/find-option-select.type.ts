type FindOptionSelectPropertyType<Property> =
  Property extends Promise<infer I>
    ? FindOptionSelectPropertyType<I> | boolean
    : Property extends Array<infer I>
      ? FindOptionSelectPropertyType<I> | boolean
      : Property extends string
        ? boolean
        : Property extends number
          ? boolean
          : Property extends boolean
            ? boolean
            : Property extends Buffer
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
