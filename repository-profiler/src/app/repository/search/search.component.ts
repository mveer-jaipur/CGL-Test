import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';
import { OrderModel, SortModel } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  orderOptions = [{ order: 'asc' }, { order: 'dsc' }];
  sortOptions = [{ sort: 'stars' }, { sort: 'forks' }, { sort: 'updated' }];

  @Output()
  searchEvent = new EventEmitter();

  repositoryForm = new FormGroup({
    name: new FormControl<string | null>('octopress', [Validators.required]),
    language: new FormControl<string | null>(''),
    selectedOrder: new FormControl<OrderModel | null>(null),
    selectedSort: new FormControl<SortModel | null>(null),
  });

  onSubmit() {
    const searchCriteria: RepositoryRequestModel = {
      name: this.repositoryForm.value.name || '',
      language: this.repositoryForm.value.language || '',
      order: this.repositoryForm.value?.selectedOrder?.order || 'asc',
      sort: this.repositoryForm.value?.selectedSort?.sort || 'star',
    };

    this.searchEvent.emit(searchCriteria);
  }
}
