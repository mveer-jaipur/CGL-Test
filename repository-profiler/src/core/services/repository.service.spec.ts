import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Spy, createSpyFromClass } from 'jest-auto-spies';
import { of } from 'rxjs';
import { RepositoryViewModel } from 'src/app/repository/repository.model';
import { RepositoryTransformer } from 'src/app/repository/repository.transformer';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;
  let mockHttpClient: Spy<HttpClient>;
  let mockRepositoryTransformer: Spy<RepositoryTransformer>;

  beforeEach(() => {
    mockHttpClient = createSpyFromClass(HttpClient);
    mockRepositoryTransformer = createSpyFromClass(RepositoryTransformer);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
        {
          provide: RepositoryTransformer,
          UseValue: mockRepositoryTransformer,
        },
      ],
    });
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the view model', () => {
    mockRepositoryTransformer.transform.mockReturnValue(
      'mock-view-model' as unknown as RepositoryViewModel
    );

    mockHttpClient.get.mockReturnValue(of('mock-response'));
    service
      .getRepositories('mock-repo' as unknown as RepositoryRequestModel)
      .subscribe((response) => {
        expect(response).toBe('mock-view-model');
      });
  });
});
