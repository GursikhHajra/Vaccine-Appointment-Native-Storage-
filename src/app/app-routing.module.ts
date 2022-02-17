import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'booking-page/:parm',
    loadChildren: () => import('./pages/booking-page/booking-page.module').then( m => m.BookingPagePageModule)
  },
  {
    path: 'nav-com',
    loadChildren: () => import('./pages/nav-com/nav-com.module').then( m => m.NavComPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
