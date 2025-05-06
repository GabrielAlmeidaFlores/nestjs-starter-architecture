import type { ListDataObjectPropsInterface } from '@core/domain/repository/object/list/list-data.object.props.interface';

export class ListData {
  public page: number;
  public limit: number;
  public sortField: string | null;
  public field: string | null;
  public search: string | null;

  protected readonly _type = ListData.name;

  public constructor(props: ListDataObjectPropsInterface) {
    this.page = props.page ?? 1;
    this.limit = props.limit ?? 10;
    this.sortField = props.sortField ?? null;
    this.field = props.field ?? null;
    this.search = props.search ?? null;
  }
}
