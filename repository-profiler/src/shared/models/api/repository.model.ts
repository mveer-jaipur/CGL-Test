export interface RepositoryRequestModel extends Record<string, any> {
  name: string;
  language?: string;
  order?: string; // TODO: make it tuple type ['asc', 'dsc']
  sort?: string;
}
