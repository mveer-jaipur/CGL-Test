import { RepositoryRequestModel } from './api/repository.model';

export interface StateModel extends RepositoryRequestModel {}

export const InitialState = {
  name: '',
};
