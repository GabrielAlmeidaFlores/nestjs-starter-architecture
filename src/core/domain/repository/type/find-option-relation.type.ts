export type FindOptionRelationProperty<Property> =
  Property extends Promise<infer I>
    ? FindOptionRelationProperty<NonNullable<I>> | boolean
    : Property extends Array<infer I>
      ? FindOptionRelationProperty<NonNullable<I>> | boolean
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
                  ? FindOptionRelation<Property> | boolean
                  : boolean;

export type FindOptionRelation<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionRelationProperty<NonNullable<Entity[P]>>;
};
