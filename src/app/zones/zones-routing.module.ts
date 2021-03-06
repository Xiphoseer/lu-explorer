import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZoneIndexComponent } from './zone-index/zone-index.component';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

const zonesRoutes: Routes = [
  { path: ':id', component: ZoneDetailComponent, data: { title: params => `Zone #${params['id']}` } },
  { path: ':id/:sc', component: ScenesComponent, data: { title: params => `Scene #${params['sc']} | Zone #${params['id']}` } },
  { path: ':id/:sc/:obj', component: ScenesComponent, data: { title: params => `Object #${params['obj']} | Scene #${params['sc']} | Zone #${params['id']}` } },
  { path: '', component: ZoneIndexComponent, data: { title: "Zones" } }
]

@NgModule({
  imports: [ RouterModule.forChild(zonesRoutes) ],
  exports: [ RouterModule ]
})
export class ZonesRoutingModule { }
