import { Injectable } from "@angular/core";
import { type InvData } from "./data.model";
import { type InvResult } from "./data.model";

@Injectable({
  providedIn: 'root'
})

export class AppService{
    private resultData:InvResult[] = [];

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
    this.resultData = annualData;
  }
  getResultdata():InvResult[]{
    return this.resultData;
  }
}
