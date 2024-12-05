import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'anexos',
    pathMatch: 'full'
  },
  {
    path: 'anexos',
    loadChildren: () => import('./anexos/anexos.module').then(m =>m.AnexosModule),
  },
  {
    path: 'upgrade',
    loadChildren: () => import('./upgradeinternet/upgradeinternet.module').then(m =>m.UpgradeinternetModule),
  },
  {
    path:'404',
    component: Error404PageComponent
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
