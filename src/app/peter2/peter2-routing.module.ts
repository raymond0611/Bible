import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Peter2Page } from './peter2.page';

const routes: Routes = [
  {
    path: '',
    component: Peter2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Peter2PageRoutingModule {}
