import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnexosRoutingModule } from './anexos-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { AnexoDetailComponent } from './pages/anexo-detail/anexo-detail.component';



@NgModule({
  declarations: [
    ListPageComponent,
    AnexoDetailComponent

  ],
  imports: [
    CommonModule,
    AnexosRoutingModule,
    MaterialModule,
  ]
})
export class AnexosModule { }
