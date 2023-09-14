import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { CommitRoutingModule } from './commit-routing.module';
import { CommitComponent } from './commit.component';

@NgModule({
  declarations: [CommitComponent],
  imports: [CommitRoutingModule, SharedModule],
})
export class CommitModule {}
