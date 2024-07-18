import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilippiansPage } from './philippians.page';

const routes: Routes = [
  {
    path: '',
    component: PhilippiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilippiansPageRoutingModule {}
