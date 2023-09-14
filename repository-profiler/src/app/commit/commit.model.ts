import { ColumnModel } from 'src/shared/models/table/column.model';

export interface CommitViewModel {
  cols: ColumnModel[];
  commits: CommitModel[];
}

export interface CommitModel {
  author: string;
  avatar: string;
  url: string;
  message: string;
}

export const initializeCommitViewModel = {
  cols: [
    { field: 'author', header: 'Author Name' },
    { field: 'url', header: 'Commit URL' },
    { field: 'message', header: 'Commit Message' },
  ],
  rows: [],
};
