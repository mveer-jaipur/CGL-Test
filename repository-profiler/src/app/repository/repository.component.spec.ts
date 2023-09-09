import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RepositoryService } from '../../core/services/repository.service';
import { RepositoryComponent } from './repository.component';

import { Spy, createSpyFromClass } from 'jest-auto-spies';
import { of } from 'rxjs';
import { RepositoryModel, RepositoryViewModel } from './repository.model';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  let mockRepositoryService: Spy<RepositoryService>;
  let mockRouter: Spy<Router>;

  beforeEach(async () => {
    mockRepositoryService = createSpyFromClass(RepositoryService);
    mockRouter = createSpyFromClass(Router);

    mockRepositoryService.getRepositories.mockReturnValue(
      of('mock-view-model' as unknown as RepositoryViewModel)
    );

    await TestBed.configureTestingModule({
      declarations: [RepositoryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: RepositoryService,
          useValue: mockRepositoryService,
        },
        {
          provide: Router,
          useValue: mockRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the model', () => {
    component.model$.subscribe((response) => {
      expect(response).toBe('mock-view-model');
    });
  });

  it('should navigate url to commits url', () => {
    component.rowSelection({ name: 'mock-repo' } as RepositoryModel);
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(
      'repos/mock-repo/commits'
    );
  });
});
