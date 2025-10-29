import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasktemplatedrivenforms',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasktemplatedrivenforms.html',
  styleUrl: './tasktemplatedrivenforms.css',
})
export class Tasktemplatedrivenforms {
  title = 'Task Template Driven Forms Example';

  model = new User(
    '', // firstName
    '', // lastName
    '', // userName
    '', // password
    new Date().toISOString().split('T')[0], // dob (default to current date)
    '', // email
    '', // address
    [], // skills (empty array)
    '' // location
  );

    onSubmit(data: any) {
    console.log("Form Submitted!" , data);
  }

  onSkillChange(event: any) {
  const skill = event.target.value;
  if (event.target.checked) {
    if (!this.model.skills.includes(skill)) {
      this.model.skills.push(skill);
    }
  } else {
    this.model.skills = this.model.skills.filter(s => s !== skill);
  }
}
}