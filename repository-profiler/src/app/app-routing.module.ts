import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
