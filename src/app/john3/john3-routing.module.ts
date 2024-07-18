import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { John3Page } from './john3.page';

const routes: Routes = [
  {
    path: '',
    component: John3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class John3PageRoutingModule {}
