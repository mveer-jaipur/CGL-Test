import { ColumnTypeEnum } from 'src/shared/components/grid/columnEnum';
import { ColumnModel } from 'src/shared/models/table/column.model';

export interface RepositoryViewModel {
  cols: ColumnModel[];
  rows: [];
}

export interface RepositoryModel {
  name: string;
  avatar: string;
  author: string;
  date: string;
}

export const initialRepositoryModel = {
  cols: [
    { field: 'repoName', header: 'Repository Name', type: ColumnTypeEnum.Text },
    { field: 'avatar', header: 'Owner Avatar', type: ColumnTypeEnum.Image },
    {
      field: 'creationDate',
      header: 'Repository Creation Date',
      type: ColumnTypeEnum.Date,
    },
  ],
  rows: [],
};
