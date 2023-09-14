import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnTypeEnum } from './columnEnum';
import { GridModel } from './grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  columnTypeEnum = ColumnTypeEnum;

  @Input()
  model: GridModel<any> = { cols: [], rows: [] };

  @Output()
  rowSelectionEvent = new EventEmitter();

  rowSelection(row: any) {
    this.rowSelectionEvent.emit(row);
  }
}
