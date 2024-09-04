import { Component, Input } from '@angular/core';

import {type InvResult } from '../data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-inv-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './inv-result.component.html',
  styleUrl: './inv-result.component.css'
})
export class InvResultComponent {
  @Input() CalculatedResult?:InvResult[];

}
