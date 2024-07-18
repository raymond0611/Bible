import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatthewPage } from './matthew.page';

const routes: Routes = [
  {
    path: '',
    component: MatthewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatthewPageRoutingModule {}
