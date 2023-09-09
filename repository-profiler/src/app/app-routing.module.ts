import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'repos',
    loadChildren: () =>
      import('./repository/repository.module').then((m) => m.RepositoryModule),
  },
  {
    path: 'repos/:repoName/commits',
    loadChildren: () =>
      import('./commit/commit.module').then((m) => m.CommitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
