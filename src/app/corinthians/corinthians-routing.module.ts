import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorinthiansPage } from './corinthians.page';

const routes: Routes = [
  {
    path: '',
    component: CorinthiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorinthiansPageRoutingModule {}
