import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActsPage } from './acts.page';

const routes: Routes = [
  {
    path: '',
    component: ActsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActsPageRoutingModule {}
