import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Spy, createSpyFromClass } from 'jest-auto-spies';
import { CommitService } from 'src/core/services/commit.service';
import { CommitComponent } from './commit.component';

describe('CommitComponent', () => {
  let component: CommitComponent;
  let fixture: ComponentFixture<CommitComponent>;
  let mockCommitService: Spy<CommitService>;
  let activatedRouteSpy;

  beforeEach(async () => {
    mockCommitService = createSpyFromClass(CommitService);
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          some: 'some',
          else: 'else',
        }),
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CommitComponent],
      providers: [
        {
          provide: CommitService,
          useValue: mockCommitService,
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
