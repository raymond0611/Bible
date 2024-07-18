import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LukePage } from './luke.page';

const routes: Routes = [
  {
    path: '',
    component: LukePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LukePageRoutingModule {}
