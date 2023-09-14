import { ColumnModel } from 'src/shared/models/table/column.model';

export interface GridModel<T> {
  cols: ColumnModel[];
  rows: T[];
  config?: GridConfiguration;
}

export interface GridConfiguration {
  header: GridHeaderConfiguration;
}

export interface GridHeaderConfiguration {
  isCaption: boolean;
  urlLink: string;
  text: string;
}
