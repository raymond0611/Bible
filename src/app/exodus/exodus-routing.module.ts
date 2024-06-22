import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExodusPage } from './exodus.page';

const routes: Routes = [
  {
    path: '',
    component: ExodusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExodusPageRoutingModule {}
