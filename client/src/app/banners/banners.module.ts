import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { BannersComponent }    from './banners.component';
import { BannerFormComponent }  from './banner-form/banner-form.component';

import { BannerService } from './banner.service';

import { BannersRoutingModule } from './banners-routing.module';

import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    FileUploadModule,
    BannersRoutingModule
  ],
  declarations: [
    BannersComponent,
    BannerFormComponent
  ],
  providers: [ BannerService ]
})
export class BannersModule {}