import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RepositoryService } from 'src/core/services/repository.service';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';
import {
  RepositoryViewModel,
  initialRepositoryModel,
} from './repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  model$: Observable<RepositoryViewModel> = of(initialRepositoryModel);

  constructor(private readonly repositoryService: RepositoryService) {}

  ngOnInit(): void {
    this.model$ = this.repositoryService.getRepositories(
      this.getRepositoryPayload()
    );
  }

  private getRepositoryPayload(): RepositoryRequestModel {
    return {
      name: 'octopress',
      language: 'Ruby',
      order: 'asc',
      sort: 'starts',
    };
  }
}
