import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/shared/primeng.module';
import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';

@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
})
export class RepositoryModule {}
