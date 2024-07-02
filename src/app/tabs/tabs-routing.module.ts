import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'exodus',
        loadChildren: () => import('../exodus/exodus.module').then(m => m.ExodusPageModule)
      },
      {
        path: 'genesis',
        loadChildren: () => import('../genesis/genesis.module').then(m => m.GenesisPageModule)
      },
      {
        path: 'habakkuk',
        loadChildren: () => import('../habakkuk/habakkuk.module').then(m => m.HabakkukPageModule)
      },
      {
        path: 'zephaniah',
        loadChildren: () => import('../zephaniah/zephaniah.module').then(m => m.ZephaniahPageModule)
      },
      {
        path: 'haggai',
        loadChildren: () => import('../haggai/haggai.module').then(m => m.HaggaiPageModule)
      },
      {
        path: 'zechariah',
        loadChildren: () => import('../zechariah/zechariah.module').then(m => m.ZechariahPageModule)
      },
      {
        path: 'timothy1',
        loadChildren: () => import('../timothy1/timothy1.module').then(m => m.Timothy1PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
