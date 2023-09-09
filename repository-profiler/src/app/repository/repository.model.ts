import { AuthorModel } from 'src/shared/models/Author.model';
import { Column } from 'src/shared/models/table/column.model';

export interface RepositoryViewModel {
  cols: Column[];
  repositories: RepositoryModel[];
}

export interface RepositoryModel {
  id: number;
  name: string;
  owner: AuthorModel;
  creationDate: Date;
}

export const initialRepositoryModel = {
  cols: [
    { field: 'repoName', header: 'Repository Name' },
    { field: 'avatar', header: 'Owner Avatar' },
    { field: 'creationDate', header: 'Repository Creation Date' },
  ],
  repositories: [],
};
