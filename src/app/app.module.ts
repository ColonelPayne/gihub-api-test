import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CoreModule } from '@app/core';
import { HistoryModule } from './modules/history/history.module';
import { SearchModule } from './modules/search/search.module';
// import { HistoryComponent } from '@app/modules/history/components/history/history.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    // HistoryComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
