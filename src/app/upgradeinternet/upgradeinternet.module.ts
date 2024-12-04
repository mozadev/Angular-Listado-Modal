import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeinternetRoutingModule } from './upgradeinternet-routing.module';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { UpgradeinternetComponent } from './pages/upgradeinternet/upgradeinternet.component';


@NgModule({
  declarations: [
    UpgradeComponent,
    UpgradeinternetComponent
  ],
  imports: [
    CommonModule,
    UpgradeinternetRoutingModule
  ]
})
export class UpgradeinternetModule { }
