import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {

  private summary = [
    {
      title: 'Masa Muscular',
      value: 80.9,
    },
    {
      title: 'Masa Grasa',
      value: 23.6,
    },
    {
      title: 'Peso Total',
      value: 163.4,
    }
  ];

  constructor(private ordersChartService: OrdersChartData,
              private profitChartService: ProfitChartData) {
    super();
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return observableOf(this.summary);
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.ordersChartService.getOrdersChartData(period));
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
