import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from 'src/shared/primeng.module';
import { CommitRoutingModule } from './commit-routing.module';
import { CommitComponent } from './commit.component';

@NgModule({
  declarations: [CommitComponent],
  imports: [CommonModule, CommitRoutingModule, PrimengModule],
})
export class CommitModule {}
