import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeinternetComponent } from './pages/upgradeinternet/upgradeinternet.component';

const routes: Routes = [
  {path: '', redirectTo:'add' , pathMatch: 'full'},
  {path: 'add', component: UpgradeinternetComponent},
  {path: '**' , redirectTo: 'add'}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpgradeinternetRoutingModule { }
