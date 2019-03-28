import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { CommonModule } from '@angular/common';
import { FormService } from './services/form.service';
import { HistoryService } from './services/history.service';

@NgModule({
  providers: [FormService, HistoryService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
     // Import guard
     if (parentModule) {
       throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
     }
   }
}
