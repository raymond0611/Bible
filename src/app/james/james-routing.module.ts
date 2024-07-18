import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamesPage } from './james.page';

const routes: Routes = [
  {
    path: '',
    component: JamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamesPageRoutingModule {}
