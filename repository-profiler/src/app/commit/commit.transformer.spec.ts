import { CommitTransformer } from './commit.transformer';

describe('Commit Transformer', () => {
  let transformer: CommitTransformer;
  let response: any;

  beforeEach(() => {
    transformer = new CommitTransformer();
    response = {
      items: [
        {
          url: 'mock-url',
          author: {
            login: 'mock-author',
            avatar_url: 'mock-url',
          },
          commit: {
            message: 'mock-message',
          },
        },
      ],
    };
  });

  it('should return the view model', () => {
    const expected = {
      cols: [
        { field: 'author', header: 'Author Name' },
        { field: 'url', header: 'Commit URL' },
        { field: 'message', header: 'Commit Message' },
      ],
      commits: [
        {
          author: {
            name: 'mock-author',
            avatar: 'mock-url',
          },
          url: 'mock-url',
          message: 'mock-message',
        },
      ],
    };
    const actual = transformer.transform(response);
    expect(actual).toEqual(expected);
  });
});
