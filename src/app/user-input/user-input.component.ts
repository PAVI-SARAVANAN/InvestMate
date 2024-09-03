import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from "../shared/control/control.component";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ControlComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredIniInvestment = '0';
  enteredAnnInvestment = '0';
  enteredExpReturn = '10';
  enteredDuration = '1';

  OnSubmit(){
    console.log(this.enteredAnnInvestment + 'Submitted');
  }

}
