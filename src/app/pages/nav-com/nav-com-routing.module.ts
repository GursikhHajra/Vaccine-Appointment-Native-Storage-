import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComPage } from './nav-com.page';

const routes: Routes = [
  {
    path: '',
    component: NavComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavComPageRoutingModule {}
