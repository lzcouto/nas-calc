import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PresetService } from './preset.service';
import { DivinePrideService } from './divine-pride.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [AuthService, PresetService, DivinePrideService],
  exports: [],
})
export class ApiServiceModule {}
