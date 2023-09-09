import { RepositoryTransformer } from './repository.transformer';

describe('Repository Transformer', () => {
  let transformer: RepositoryTransformer;
  let response: any;

  beforeEach(() => {
    transformer = new RepositoryTransformer();
    response = {
      items: [
        {
          id: 'mock-id',
          name: 'mock-name',
          owner: {
            login: 'mock-author',
            avatar_url: 'mock-url',
          },
          created_at: 'mock-date',
        },
      ],
    };
  });

  it('should return view model for repository', () => {
    const expected = {
      cols: [
        { field: 'repoName', header: 'Repository Name' },
        { field: 'avatar', header: 'Owner' },
        { field: 'creationDate', header: 'Repository Creation Date' },
      ],
      repositories: [
        {
          id: 'mock-id',
          name: 'mock-name',
          owner: {
            name: 'mock-author',
            avatar: 'mock-url',
          },
          creationDate: 'mock-date',
        },
      ],
    };

    const actual = transformer.transform(response);
    expect(actual).toEqual(expected);
  });
});
