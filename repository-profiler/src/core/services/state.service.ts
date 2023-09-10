import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RepositoryRequestModel } from 'src/shared/models/api/repository.model';
import { InitialState, StateModel } from 'src/shared/models/state.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state = new BehaviorSubject<StateModel>(InitialState);

  setState(state: RepositoryRequestModel) {
    this.state.next(state);
  }

  getState() {
    return this.state.asObservable();
  }

  constructor() {}
}
