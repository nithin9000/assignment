import { Component } from '@angular/core';

@Component({
  selector: 'app-registration', // Ensure this matches what you're using in the template
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  country: string = 'India'; // Default value

  onSubmit() {
    console.log('Form submitted:', this.name, this.email, this.password, this.gender, this.country);
  }
}
