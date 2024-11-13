import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnexosRoutingModule } from './anexos-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';



@NgModule({
  declarations: [
    ListPageComponent

  ],
  imports: [
    CommonModule,
    AnexosRoutingModule
  ]
})
export class AnexosModule { }
