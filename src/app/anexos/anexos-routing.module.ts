import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {path: 'list', component: ListPageComponent},
  {path: '**', redirectTo: 'list'},
  {path: '', redirectTo: 'list', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnexosRoutingModule { }
