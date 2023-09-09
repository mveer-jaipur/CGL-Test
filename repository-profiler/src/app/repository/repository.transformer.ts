import { Injectable } from '@angular/core';
import { RepositoryViewModel } from './repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryTransformer {
  transform(apiModel: any): RepositoryViewModel {
    return {
      cols: this.getCols(),
      repositories: this.getRepositories(apiModel),
    };
  }

  private getCols() {
    return [
      { field: 'repoName', header: 'Repository Name' },
      { field: 'avatar', header: 'Owner' },
      { field: 'creationDate', header: 'Repository Creation Date' },
    ];
  }

  private getRepositories(apiModel: any) {
    return apiModel?.items.map((item: any) => ({
      id: item?.id,
      name: item?.name,
      owner: {
        name: item?.owner?.login,
        avatar: item?.owner?.avatar_url,
      },
      creationDate: item?.created_at,
    }));
  }
}
