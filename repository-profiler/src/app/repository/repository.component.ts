import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RepositoryService } from 'src/core/services/repository.service';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';
import {
  RepositoryModel,
  RepositoryViewModel,
  initialRepositoryModel,
} from './repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryComponent implements OnInit {
  model$: Observable<RepositoryViewModel> = of(initialRepositoryModel);

  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.model$ = this.repositoryService.getRepositories(
      this.getRepositoryPayload()
    );
  }

  rowSelection(row: RepositoryModel) {
    this.router.navigateByUrl(`repos/${row.name}/commits`);
  }

  private getRepositoryPayload(): RepositoryRequestModel {
    return {
      name: 'octopress',
      language: 'Ruby',
      order: 'asc',
      sort: 'starts',
    };
  }
}
