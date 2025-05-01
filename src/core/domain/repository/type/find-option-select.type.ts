export type FindOptionSelectProperty<Property> =
  Property extends Promise<infer I>
    ? FindOptionSelectProperty<NonNullable<I>>
    : Property extends Array<infer I>
      ? FindOptionSelectProperty<NonNullable<I>>
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
                    ? FindOptionSelect<Property>
                    : boolean;

export type FindOptionSelect<Entity> = {
  [P in keyof Entity]?: P extends 'toString'
    ? unknown
    : FindOptionSelectProperty<NonNullable<Entity[P]>>;
};
