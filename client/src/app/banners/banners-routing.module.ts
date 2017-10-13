import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannersComponent }    from './banners.component';
import { BannerFormComponent }  from './banner-form/banner-form.component';

const bannersRoutes: Routes = [
  { path: '',  component: BannersComponent },
  { path: 'new', component: BannerFormComponent },
  { path: ':id', component: BannerFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(bannersRoutes)
  ],
  exports: [
    RouterModule
  ]
})  
export class BannersRoutingModule { }