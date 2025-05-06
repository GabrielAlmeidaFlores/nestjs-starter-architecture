import type { ListedDataObjectPropsInterface } from '@core/domain/repository/object/listed/listed-data.object.props.interface';

export class ListedData<T> {
  public page: number;
  public limit: number;
  public totalItems: number;
  public totalPages: number;
  public amountItemsCurrentPage: number;
  public resource: T[];

  protected readonly _type = ListedData.name;

  public constructor(props: ListedDataObjectPropsInterface<T>) {
    this.page = props.page;
    this.limit = props.limit;
    this.totalItems = props.totalItems;

    const applyConstructorOnResources =
      props.resource.length > 0 && props.resourceClass !== undefined;

    if (applyConstructorOnResources) {
      this.resource = props.resource.map((item) =>
        props.resourceClass ? new props.resourceClass(item) : item,
      );
    } else {
      this.resource = props.resource;
    }

    this.totalPages = Math.ceil(props.totalItems / props.limit);

    this.totalPages = this.totalPages ? this.totalPages : 0;
    this.amountItemsCurrentPage = props.resource.length;
  }
}
