import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitRoutingModule } from './commit-routing.module';
import { CommitComponent } from './commit.component';


@NgModule({
  declarations: [
    CommitComponent
  ],
  imports: [
    CommonModule,
    CommitRoutingModule
  ]
})
export class CommitModule { }
