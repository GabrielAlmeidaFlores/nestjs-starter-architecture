type FindOptionRelationPropertyType<Property> =
  Property extends Promise<infer I>
    ? FindOptionRelationPropertyType<NonNullable<I>> | boolean
    : Property extends Array<infer I>
      ? FindOptionRelationPropertyType<NonNullable<I>> | boolean
      : Property extends string
        ? never
        : Property extends number
          ? never
          : Property extends boolean
            ? never
            : Property extends ArrayBuffer
              ? never
              : Property extends Date
                ? never
                : Property extends object
                  ? FindOptionRelationType<Property> | boolean
                  : boolean;

export type FindOptionRelationType<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionRelationPropertyType<NonNullable<Entity[P]>>;
};
