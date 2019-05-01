import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';
import { DietModalComponent } from './diet-modal/diet-modal.component';
import { DietCalendarComponent } from './diet-calendar/diet-calendar.component';

@NgModule({
  declarations: [HomeComponent, ProgressChartComponent, DietModalComponent, DietCalendarComponent],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent, ProgressChartComponent, DietModalComponent, DietCalendarComponent],
})
export class HomeModule { }
