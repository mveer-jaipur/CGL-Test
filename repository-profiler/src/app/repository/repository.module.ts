import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [RepositoryComponent, SearchComponent],
  imports: [RepositoryRoutingModule, SharedModule],
})
export class RepositoryModule {}
