import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure styleUrls is correctly spelled
})
export class AppComponent {
  title = 'quesfill';

  // Form properties
  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  country: string = 'India';
  submitted: boolean = false;

  // Method to handle form submission
  onSubmit() {
    this.submitted = true; // Set submitted to true to display the entered data
  }
}
