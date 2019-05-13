import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';

import { HomeComponent } from './home.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';
import { ChartPanelSummaryComponent } from './progress-chart/chart-panel-summary/chart-panel-summary.component';
import { ChartPanelHeaderComponent } from './progress-chart/chart-panel-header/chart-panel-header.component';
import { OrdersChartComponent} from './progress-chart/charts/orders-chart.component';
import { DietModalComponent } from './diet-modal/diet-modal.component';
import { DietCalendarComponent } from './diet-calendar/diet-calendar.component';
import { LegendChartComponent  } from './progress-chart/legend-chart/legend-chart.component';
import { ChartjsPieComponent } from './macros-chart/chartjs-pie.component';

@NgModule({
  declarations: [
    HomeComponent, 
    ProgressChartComponent, 
    DietModalComponent, 
    DietCalendarComponent, 
    ChartPanelSummaryComponent,
    ChartPanelHeaderComponent,
    OrdersChartComponent,
    LegendChartComponent,
    ChartjsPieComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule
  ],
  exports: [
    HomeComponent, 
    ProgressChartComponent, 
    DietModalComponent, 
    DietCalendarComponent
  ],
})
export class HomeModule { }
