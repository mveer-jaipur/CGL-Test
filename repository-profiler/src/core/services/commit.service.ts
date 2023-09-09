import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { CommitTransformer } from 'src/app/commit/commit.transformer';

@Injectable({
  providedIn: 'root',
})
export class CommitService {
  readonly baseUrl = `https://api.github.com/search/commits`;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly commitTransformer: CommitTransformer
  ) {}

  getCommits(repoName: string | null) {
    const params = `q=${repoName}`;
    return this.httpClient.get(`${this.baseUrl}?${params}`).pipe(
      catchError(() => of(null)),
      map((response: any) => this.commitTransformer.transform(response))
    );
  }
}
