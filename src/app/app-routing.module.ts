import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

  {
    path: 'anexos',
    loadChildren: () => import('./anexos/anexos.module').then(m =>m.AnexosModule),
  },
  {
    path:'404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'anexos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
