import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/shared/primeng.module';
import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { SearchComponent } from './search/search.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [RepositoryComponent, SearchComponent, GridComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class RepositoryModule {}
