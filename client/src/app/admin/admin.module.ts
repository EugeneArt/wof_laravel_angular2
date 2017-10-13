import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AdminComponent }    from './admin.component';
import { NavigationAdminComponent} from "../shared/navigation/navigation-admin/navigation-admin.component"

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    NavigationAdminComponent
  ],
  providers: []
})
export class AdminModule {}