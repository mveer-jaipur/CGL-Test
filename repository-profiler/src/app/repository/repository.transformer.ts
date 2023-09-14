import { Injectable } from '@angular/core';
import { ColumnTypeEnum } from 'src/shared/components/grid/columnEnum';
import { GridModel } from 'src/shared/components/grid/grid.model';
import { RepositoryModel } from './repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryTransformer {
  transform(apiModel: any): GridModel<RepositoryModel> {
    return {
      cols: this.getCols(),
      rows: this.getRows(apiModel),
    };
  }

  private getCols() {
    return [
      { field: 'name', header: 'Repository Name' },
      { field: 'avatar', header: 'Owner', type: ColumnTypeEnum.Image },
      {
        field: 'date',
        header: 'Repository Creation Date',
        type: ColumnTypeEnum.Date,
      },
    ];
  }

  private getRows(apiModel: any) {
    return apiModel?.items.map((item: any) => ({
      name: item?.name,
      avatar: item?.owner?.avatar_url,
      author: item?.owner?.login,
      date: item?.created_at,
    }));
  }
}
