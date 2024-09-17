import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from "../shared/control/control.component";

import { type InvData } from '../data.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ControlComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredIniInvestment!:string;
  enteredAnnInvestment!:string;
  enteredExpReturn!:string;
  enteredDuration!:string;

  Appservice = inject(AppService);
  private routes = inject(Router);

  OnSubmit(){
   this.Appservice.OnCalculateInvData({
      InitialInvestment: +this.enteredIniInvestment,
      AnnualInvestment: +this.enteredAnnInvestment,
      ExpectedReturn: +this.enteredExpReturn,
      Duration: +this.enteredDuration
    }); 
    this.routes.navigate(['calculate']);
  }


}
