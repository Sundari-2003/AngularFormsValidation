import { Component } from '@angular/core';
import { Login } from '../login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templatedrivenforms',
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedrivenforms.html',
  styleUrl: './templatedrivenforms.css',
})
export class Templatedrivenforms {
  title = "Template Driven Forms Example";
  model = new Login('' , '' , '' , '' , false);


  onSubmit(data: any) {
    console.log("Form Submitted!" , data);
  }
}
