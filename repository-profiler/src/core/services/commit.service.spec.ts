import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Spy, createSpyFromClass } from 'jest-auto-spies';
import { of } from 'rxjs';
import { CommitViewModel } from 'src/app/commit/commit.model';
import { CommitTransformer } from 'src/app/commit/commit.transformer';
import { RepositoryTransformer } from 'src/app/repository/repository.transformer';
import { CommitService } from './commit.service';

describe('CommitService', () => {
  let service: CommitService;
  let mockHttpClient: Spy<HttpClient>;
  let mockCommitTransformer: Spy<CommitTransformer>;

  beforeEach(() => {
    mockHttpClient = createSpyFromClass(HttpClient);
    mockCommitTransformer = createSpyFromClass(CommitTransformer);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
        {
          provide: RepositoryTransformer,
          UseValue: mockCommitTransformer,
        },
      ],
    });
    service = TestBed.inject(CommitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the view model', () => {
    mockCommitTransformer.transform.mockReturnValue(
      'mock-view-model' as unknown as CommitViewModel
    );

    mockHttpClient.get.mockReturnValue(of('mock-response'));
    service.getCommits('mock-repo').subscribe((response) => {
      expect(response).toBe('mock-view-model');
    });
  });
});
