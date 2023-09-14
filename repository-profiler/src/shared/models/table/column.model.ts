import { ColumnTypeEnum } from 'src/shared/components/grid/columnEnum';

export interface ColumnModel {
  field: string;
  header: string;
  type?: ColumnTypeEnum;
}
