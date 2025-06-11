import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { RoService } from './api-services/ro.service';
import { PrettyJsonPipe } from './layout/prettier-json.pipe';
import { ApiServiceModule } from './api-services';
import { SummaryService } from './api-services/summary.service';

const customComponent = [PrettyJsonPipe];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    ApiServiceModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, RoService, SummaryService, ...customComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
