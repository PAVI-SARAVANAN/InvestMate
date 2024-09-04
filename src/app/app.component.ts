import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvResultComponent } from './inv-result/inv-result.component';

import { type InvData, type InvResult } from './data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,UserInputComponent,InvResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvestMate';
  resultData?:InvResult[];

  OnCalculateInvData(InvestData:InvData){
    const {InitialInvestment, AnnualInvestment, ExpectedReturn, Duration} = InvestData;
    const annualData = [];
    let InvestmentValue = InitialInvestment;

    for(let i=0; i< Duration;i++){
      const year = i+1;
      const interestEarnedInYear = InvestmentValue * (ExpectedReturn / 100);
      InvestmentValue += interestEarnedInYear + AnnualInvestment;
      const totalInterest = InvestmentValue - AnnualInvestment * year - InitialInvestment;

      annualData.push({
        year:year,
        interest:interestEarnedInYear,
        valueEndOfYear: InvestmentValue,
        AnnualInvestment:AnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: InitialInvestment + AnnualInvestment * year
      });
    }
    console.log(annualData);
    this.resultData = annualData;
  }

}
