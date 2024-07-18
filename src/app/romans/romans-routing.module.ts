import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomansPage } from './romans.page';

const routes: Routes = [
  {
    path: '',
    component: RomansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomansPageRoutingModule {}
