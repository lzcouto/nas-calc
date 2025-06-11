import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DivinePrideService } from './divine-pride.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [DivinePrideService],
  exports: [],
})
export class ApiServiceModule {}
