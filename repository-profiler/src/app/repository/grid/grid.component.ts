import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  RepositoryModel,
  RepositoryViewModel,
  initialRepositoryModel,
} from '../repository.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  @Input()
  model: RepositoryViewModel = initialRepositoryModel;

  @Output()
  rowSelectionEvent = new EventEmitter<RepositoryModel>();

  rowSelection(row: RepositoryModel) {
    this.rowSelectionEvent.emit(row);
  }
}
