import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterComponent } from './filter.component';
import { FilterFormComponent } from './filter-form/filter-form.component';

const filterRoutes: Routes = [
  { path: '', component: FilterFormComponent },
  { path: 'query', component: FilterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(filterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FilterRoutingModule { }