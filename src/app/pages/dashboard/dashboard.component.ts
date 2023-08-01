import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    const ctx = document.getElementById('MyChart') as HTMLCanvasElement;
    const gradient = ctx.getContext('2d')!.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0.2, 'rgba(255, 165, 0, 1)'); // Orange
    gradient.addColorStop(0.9, 'rgba(148, 163, 184, 1)'); // Grey
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)'); // White

    this.chart = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Amount',
            data: ['467', '576', '572', '79', '92', '574', '973', '576', '572', '79', '892', '574'],
            fill: 'start',
            tension: 0.4,
            borderWidth: 1,
            borderColor: 'orange',
            backgroundColor: gradient,
            pointHoverRadius: 10,
            pointBorderColor: 'grey',
            pointHoverBorderWidth: 3,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: gradient,
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (Months)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Amount Produced (Kgs)'
            }
          }
        },
      }

    });
  }
}
