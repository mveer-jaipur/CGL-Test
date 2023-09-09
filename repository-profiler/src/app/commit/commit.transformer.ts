import { Injectable } from '@angular/core';
import { CommitViewModel } from './commit.model';

@Injectable({
  providedIn: 'root',
})
export class CommitTransformer {
  transform(response: any): CommitViewModel {
    return {
      cols: this.getCols(),
      commits: this.getCommits(response),
    };
  }

  private getCols() {
    return [
      { field: 'author', header: 'Author Name' },
      { field: 'url', header: 'Commit URL' },
      { field: 'message', header: 'Commit Message' },
    ];
  }

  private getCommits(response: any) {
    return response?.items.map((item: any) => ({
      author: {
        name: item?.author?.login,
        avatar: item?.author?.avatar_url,
      },
      url: item?.url,
      message: item?.commit?.message,
    }));
  }
}
