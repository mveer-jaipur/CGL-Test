import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { RepositoryService } from 'src/core/services/repository.service';
import { StateService } from 'src/core/services/state.service';
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
  isLoading = true;

  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly router: Router,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.model$ = this.repositoryService
      .getRepositories()
      .pipe(tap(() => (this.isLoading = false)));
  }

  onRowSelection(row: RepositoryModel) {
    this.router.navigateByUrl(`repos/${row.name}/commits`);
  }

  handleSearch(searchCriteria: RepositoryRequestModel) {
    this.stateService.setState(searchCriteria);
  }
}
