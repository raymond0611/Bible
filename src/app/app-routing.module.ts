import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'exodus',
    loadChildren: () => import('./exodus/exodus.module').then( m => m.ExodusPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'genesis',
    loadChildren: () => import('./genesis/genesis.module').then( m => m.GenesisPageModule)
  },
  {
    path: 'habakkuk',
    loadChildren: () => import('./habakkuk/habakkuk.module').then( m => m.HabakkukPageModule)
  },
  {
    path: 'zephaniah',
    loadChildren: () => import('./zephaniah/zephaniah.module').then( m => m.ZephaniahPageModule)
  },
  {
    path: 'haggai',
    loadChildren: () => import('./haggai/haggai.module').then( m => m.HaggaiPageModule)
  },
  {
    path: 'zechariah',
    loadChildren: () => import('./zechariah/zechariah.module').then( m => m.ZechariahPageModule)
  },
  {
    path: 'timothy1',
    loadChildren: () => import('./timothy1/timothy1.module').then( m => m.Timothy1PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
