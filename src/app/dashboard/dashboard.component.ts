import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { MatCardModule } from '@angular/material/card'
import { CommonModule, NgFor } from '@angular/common';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { first, fourth, multi, second, third, referrals, colorSchemeBc, colorScheme2, colorScheme3, colorScheme4 } from './data'
import { Dougnuttype } from '../dougnuttype';
import { Multidata } from '../multidata';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatCardModule, CommonModule, NgxChartsModule, MatProgressBarModule],
  standalone: true
})
export class DashboardComponent implements OnInit {
  userRole: string = 'Guest'; // Initialize with a default role
  single: Dougnuttype[] = first
  second: Dougnuttype[] = second
  third: Dougnuttype[] = third
  fourth: Dougnuttype[] = fourth
  view: [number, number] = [180, 100];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  arcWidth: number = 0.45

  colorScheme = [{
    "name": "sold",
    "value": '#3F51B5'
  },
  {
    "name": "unsold",
    "value": '#E8EAF6'
  }];


  //bar chrt
  multiData: Multidata[] = multi;
  viewBc: [number, number] = [600, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradientBc: boolean = false;
  showLegendBc: boolean = false;
  colorschemebc = colorSchemeBc
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  //referrals
  object = referrals
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit(): void {
    this.authService.getUserRole().subscribe((role: string) => {
      this.userRole = role; // Store the user's role
    });
  }
}
