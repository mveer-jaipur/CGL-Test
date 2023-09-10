import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { RepositoryTransformer } from 'src/app/repository/repository.transformer';
import { StateModel } from 'src/shared/models/state.model';
import { StateService } from './state.service';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  readonly baseUrl = `https://api.github.com/search/repositories`;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly repositoryTransformer: RepositoryTransformer,
    private readonly stateService: StateService
  ) {}

  getRepositories() {
    return this.stateService.getState().pipe(
      filter((state) => !!state),
      switchMap((state) => {
        const queryParams = this.getQueryParams(state);
        return this.httpClient.get(`${this.baseUrl}?${queryParams}`).pipe(
          catchError(() => of(null)),
          map((response) => this.repositoryTransformer.transform(response))
        );
      })
    );
  }

  private getQueryParams(state: StateModel) {
    const { name, ...otherParams } = state;
    const query = `q=${name}`;

    return Object.keys(otherParams ?? {}).reduce(
      (buildQuery: string, param: string) => {
        if (param === 'language') {
          buildQuery += `+language:${state[param]}`;
        } else {
          buildQuery += `&${param}=${state[param]}`;
        }

        return buildQuery;
      },
      query
    );
  }
}
