import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    FormComponent,
    DataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
