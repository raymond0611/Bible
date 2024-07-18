import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HebrewsPage } from './hebrews.page';

const routes: Routes = [
  {
    path: '',
    component: HebrewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HebrewsPageRoutingModule {}
