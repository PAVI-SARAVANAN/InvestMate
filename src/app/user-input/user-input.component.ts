import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from "../shared/control/control.component";

import { type InvData } from '../data.model';

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

  @Output() UserInputs = new EventEmitter<InvData>();

  OnSubmit(){
    console.log("clicked");
    this.UserInputs.emit({
      InitialInvestment: +this.enteredIniInvestment,
      AnnualInvestment: +this.enteredAnnInvestment,
      ExpectedReturn: +this.enteredExpReturn,
      Duration: +this.enteredDuration
    });
  }

}
