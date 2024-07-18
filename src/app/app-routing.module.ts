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
  {
    path: 'mark',
    loadChildren: () => import('./mark/mark.module').then( m => m.MarkPageModule)
  },
  {
    path: 'peter1',
    loadChildren: () => import('./peter1/peter1.module').then( m => m.Peter1PageModule)
  },
  {
    path: 'peter2',
    loadChildren: () => import('./peter2/peter2.module').then( m => m.Peter2PageModule)
  },
  {
    path: 'matthew',
    loadChildren: () => import('./matthew/matthew.module').then( m => m.MatthewPageModule)
  },
  {
    path: 'luke',
    loadChildren: () => import('./luke/luke.module').then( m => m.LukePageModule)
  },
  {
    path: 'acts',
    loadChildren: () => import('./acts/acts.module').then( m => m.ActsPageModule)
  },
  {
    path: 'john',
    loadChildren: () => import('./john/john.module').then( m => m.JohnPageModule)
  },
  {
    path: 'john1',
    loadChildren: () => import('./john1/john1.module').then( m => m.John1PageModule)
  },
  {
    path: 'john2',
    loadChildren: () => import('./john2/john2.module').then( m => m.John2PageModule)
  },
  {
    path: 'john3',
    loadChildren: () => import('./john3/john3.module').then( m => m.John3PageModule)
  },
  {
    path: 'revelation',
    loadChildren: () => import('./revelation/revelation.module').then( m => m.RevelationPageModule)
  },
  {
    path: 'corinthians',
    loadChildren: () => import('./corinthians/corinthians.module').then( m => m.CorinthiansPageModule)
  },
  {
    path: 'corinthians2',
    loadChildren: () => import('./corinthians2/corinthians2.module').then( m => m.Corinthians2PageModule)
  },
  {
    path: 'galatians',
    loadChildren: () => import('./galatians/galatians.module').then( m => m.GalatiansPageModule)
  },
  {
    path: 'ephesians',
    loadChildren: () => import('./ephesians/ephesians.module').then( m => m.EphesiansPageModule)
  },
  {
    path: 'philippians',
    loadChildren: () => import('./philippians/philippians.module').then( m => m.PhilippiansPageModule)
  },
  {
    path: 'colossians',
    loadChildren: () => import('./colossians/colossians.module').then( m => m.ColossiansPageModule)
  },
  {
    path: 'thessalonians1',
    loadChildren: () => import('./thessalonians1/thessalonians1.module').then( m => m.Thessalonians1PageModule)
  },
  {
    path: 'thessalonians2',
    loadChildren: () => import('./thessalonians2/thessalonians2.module').then( m => m.Thessalonians2PageModule)
  },
  {
    path: 'romans',
    loadChildren: () => import('./romans/romans.module').then( m => m.RomansPageModule)
  },
  {
    path: 'timothy2',
    loadChildren: () => import('./timothy2/timothy2.module').then( m => m.Timothy2PageModule)
  },
  {
    path: 'titus',
    loadChildren: () => import('./titus/titus.module').then( m => m.TitusPageModule)
  },
  {
    path: 'philemon',
    loadChildren: () => import('./philemon/philemon.module').then( m => m.PhilemonPageModule)
  },
  {
    path: 'hebrews',
    loadChildren: () => import('./hebrews/hebrews.module').then( m => m.HebrewsPageModule)
  },
  {
    path: 'james',
    loadChildren: () => import('./james/james.module').then( m => m.JamesPageModule)
  },
  {
    path: 'jude',
    loadChildren: () => import('./jude/jude.module').then( m => m.JudePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
