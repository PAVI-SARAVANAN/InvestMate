export interface InvData{
    InitialInvestment:number;
    AnnualInvestment:number;
    ExpectedReturn:number;
    Duration:number;
}

export interface InvResult{
    year:number;
    interest:number;
    valueEndOfYear:number;
    AnnualInvestment:number;
    totalInterest:number;
    totalAmountInvested:number;
};