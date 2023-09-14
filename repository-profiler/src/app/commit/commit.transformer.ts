import { Injectable } from '@angular/core';
import { ColumnTypeEnum } from 'src/shared/components/grid/columnEnum';
import { GridModel } from 'src/shared/components/grid/grid.model';
import { ColumnModel } from 'src/shared/models/table/column.model';
import { CommitModel } from './commit.model';

@Injectable({
  providedIn: 'root',
})
export class CommitTransformer {
  transform(response: any): GridModel<CommitModel> {
    return {
      cols: this.getCols(),
      rows: this.getRows(response),
      config: this.getConfig(),
    };
  }

  private getCols(): ColumnModel[] {
    return [
      { field: 'avatar', header: 'Author Name', type: ColumnTypeEnum.Image },
      { field: 'url', header: 'Commit URL', type: ColumnTypeEnum.Text },
      { field: 'message', header: 'Commit Message', type: ColumnTypeEnum.Text },
    ];
  }

  private getRows(response: any): CommitModel[] {
    return response?.items.map((item: any) => ({
      author: item?.author?.login,
      avatar: item?.author?.avatar_url,
      url: item?.url,
      message: item?.commit?.message,
    }));
  }

  private getConfig() {
    return {
      header: {
        isCaption: true,
        text: 'Back',
        urlLink: '/repos',
      },
    };
  }
}
