import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class RepositoryComponent {
  model$: Observable<RepositoryViewModel> = of(initialRepositoryModel);
  orderOptions = [{ order: 'asc' }, { order: 'dsc' }];
  sortOptions = [{ sort: 'stars' }, { sort: 'forks' }, { sort: 'updated' }];

  repositoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    language: new FormControl(''),
    selectedOrder: new FormControl(''),
    selectedSort: new FormControl(''),
  });

  constructor(
    private readonly repositoryService: RepositoryService,
    private readonly router: Router
  ) {}

  rowSelection(row: RepositoryModel) {
    this.router.navigateByUrl(`repos/${row.name}/commits`);
  }

  onSubmit() {
    console.log(this.repositoryForm.value);
    this.model$ = this.repositoryService.getRepositories(
      this.getRepositoryPayload(this.repositoryForm.value)
    );
  }

  private getRepositoryPayload(values: any): RepositoryRequestModel {
    return {
      name: values.name || '',
      language: values.language || '',
      order: values.selectedOrder.order || 'asc',
      sort: values.selectedSort.sort || 'star',
    };
  }
}
