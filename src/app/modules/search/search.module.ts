import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DataComponent } from './components/data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HistoryComponent } from '@app/modules/history/components/history/history.component';

@NgModule({
  declarations: [
    FormComponent,
    DataComponent,
    // HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    DataComponent
  ]
})
export class SearchModule { }
