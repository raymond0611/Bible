import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { John2Page } from './john2.page';

const routes: Routes = [
  {
    path: '',
    component: John2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class John2PageRoutingModule {}
