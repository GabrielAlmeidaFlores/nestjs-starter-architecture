import type { ListedDataObjectPropsInterface } from '@core/domain/repository/object/listed/listed-data.object.props.interface';

export class ListedData<T> {
  public page: number;
  public limit: number;
  public totalItems: number;
  public totalPages: number;
  public amountItemsCurrentPage: number;

  protected readonly _type = ListedData.name;

  public constructor(props: ListedDataObjectPropsInterface<T>) {
    this.page = props.page;
    this.limit = props.limit;
    this.totalItems = props.totalItems;
    this.totalPages = Math.ceil(props.totalItems / props.limit);
    this.totalPages = this.totalPages ? this.totalPages : 0;
    this.amountItemsCurrentPage = props.resource.length;
  }
}
