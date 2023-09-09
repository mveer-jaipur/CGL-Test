import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RepositoryTransformer } from 'src/app/repository/repository.transformer';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  readonly baseUrl = `https://api.github.com/search/repositories`;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly repositoryTransformer: RepositoryTransformer
  ) {}

  getRepositories(payload: RepositoryRequestModel) {
    const queryParams = this.getQueryParams(payload);
    return this.httpClient
      .get(`${this.baseUrl}?${queryParams}`)
      .pipe(map((response) => this.repositoryTransformer.transform(response)));
  }

  private getQueryParams(payload: RepositoryRequestModel) {
    const { name, ...updatedPayload } = payload;
    const query = `q=${name}`;

    return Object.keys(updatedPayload ?? {}).reduce(
      (buildQuery: string, param: string) => {
        if (param === 'language') {
          buildQuery += `+language:${payload[param]}`;
        } else {
          buildQuery += `&${param}=${payload[param]}`;
        }

        return buildQuery;
      },
      query
    );
  }
}
