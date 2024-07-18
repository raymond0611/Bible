import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnPage } from './john.page';

const routes: Routes = [
  {
    path: '',
    component: JohnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnPageRoutingModule {}
