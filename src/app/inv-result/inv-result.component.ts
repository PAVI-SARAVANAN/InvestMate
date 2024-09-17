import { AfterContentChecked, Component, inject, Input } from '@angular/core';

import {type InvResult } from '../data.model';
import { CurrencyPipe } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-inv-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './inv-result.component.html',
  styleUrl: './inv-result.component.css'
})
export class InvResultComponent implements AfterContentChecked{
 
  CalculatedResult:InvResult[] = [];

  appservice = inject(AppService);

  ngAfterContentChecked(): void {
    this.CalculatedResult = this.appservice.getResultdata();
  }

}
