import { AuthorModel } from 'src/shared/models/Author.model';
import { Column } from 'src/shared/models/table/column.model';

export interface CommitViewModel {
  cols: Column[];
  commits: CommitModel[];
}

export interface CommitModel {
  author: AuthorModel;
  url: string;
  message: string;
}

export const initializeCommitViewModel = {
  cols: [
    { field: 'author', header: 'Author Name' },
    { field: 'url', header: 'Commit URL' },
    { field: 'message', header: 'Commit Message' },
  ],
  commits: [],
};
