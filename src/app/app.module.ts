import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CoreModule } from '@app/core';
import { HistoryModule } from './modules/history/history.module';
import { SearchModule } from './modules/search/search.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    HistoryModule,
    SearchModule
  ],
  providers: [
    // FormService,
    // HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
