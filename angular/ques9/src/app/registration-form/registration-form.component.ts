import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    country: ''
  };

  countries = ['India', 'USA', 'UK', 'Canada'];
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
