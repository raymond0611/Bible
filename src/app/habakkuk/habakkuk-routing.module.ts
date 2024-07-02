import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabakkukPage } from './habakkuk.page';

const routes: Routes = [
  {
    path: '',
    component: HabakkukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabakkukPageRoutingModule {}
