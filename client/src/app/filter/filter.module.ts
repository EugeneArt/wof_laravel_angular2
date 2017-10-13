import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FilterComponent } from './filter.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FilterRoutingModule} from './filter-routing.module';

import { FilterService } from './filter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    FilterRoutingModule
  ],
  declarations: [
    FilterComponent,
    FilterFormComponent
  ],
  providers: [ FilterService ]
})
export class FilterModule {}