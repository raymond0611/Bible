import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Timothy1Page } from './timothy1.page';

const routes: Routes = [
  {
    path: '',
    component: Timothy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Timothy1PageRoutingModule {}
