import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
 @Input({required:true}) label!:string;
 @Input({required:true}) name!:string;

 @Output() userInputChange = new EventEmitter<string>();

 private _userInputModel!: string;

 @Input()
 get userInputModel() {
   return this._userInputModel;
 }

 set userInputModel(value: string) {
   this._userInputModel = value;
   this.userInputModelChange.emit(this._userInputModel);
 }

 @Output() userInputModelChange = new EventEmitter<string>();

 OnUserInputChange(value: string) {
   this.userInputModel = value;
 }
}

