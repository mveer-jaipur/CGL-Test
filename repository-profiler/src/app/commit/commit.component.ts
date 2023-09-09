import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommitService } from 'src/core/services/commit.service';
import { CommitViewModel, initializeCommitViewModel } from './commit.model';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss'],
})
export class CommitComponent implements OnInit {
  model$: Observable<CommitViewModel> = of(initializeCommitViewModel);
  constructor(
    private readonly commitService: CommitService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const repoName = this.activatedRoute.snapshot.paramMap.get('repoName');
    console.log(repoName);
    this.model$ = this.commitService.getCommits(repoName);
  }
}
