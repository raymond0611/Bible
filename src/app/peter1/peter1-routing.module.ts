import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Peter1Page } from './peter1.page';

const routes: Routes = [
  {
    path: '',
    component: Peter1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Peter1PageRoutingModule {}
