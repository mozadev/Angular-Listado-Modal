import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';
import { UpgradeinternetRoutingModule } from './upgradeinternet-routing.module';
import { UpgradeinternetComponent } from './pages/upgradeinternet/upgradeinternet.component';


@NgModule({
  declarations: [
    UpgradeinternetComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpgradeinternetRoutingModule,
    MaterialModule, 
  ]
})
export class UpgradeinternetModule { }
