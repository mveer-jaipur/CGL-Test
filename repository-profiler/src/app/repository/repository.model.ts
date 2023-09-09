export interface RepositoryViewModel {
  cols: Column[];
  repositories: RepositoryModel[];
}

export interface Column {
  field: string;
  header: string;
}

export interface RepositoryModel {
  id: number;
  name: string;
  owner: RepositoryOwnerModel;
  creationDate: Date;
}

export interface RepositoryOwnerModel {
  name: string;
  avatar: string;
}

export const initialRepositoryModel = {
  cols: [
    { field: 'repoName', header: 'Repository Name' },
    { field: 'avatar', header: 'Owner Avatar' },
    { field: 'creationDate', header: 'Repository Creation Date' },
  ],
  repositories: [],
};
