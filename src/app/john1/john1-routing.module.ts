import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { John1Page } from './john1.page';

const routes: Routes = [
  {
    path: '',
    component: John1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class John1PageRoutingModule {}
