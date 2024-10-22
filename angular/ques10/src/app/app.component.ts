import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Mark the component as standalone
})
export class AppComponent {
  // Default items in the shopping cart
  cartItems: string[] = ['Bread', 'Milk', 'Egg'];
  newItem: string = '';

  // Function to add a new item to the cart
  addItem() {
    if (this.newItem.trim()) {
      this.cartItems.push(this.newItem.trim());
      this.newItem = ''; // Clear the input field
    } else {
      alert('Please enter a product name.');
    }
  }

  // Function to update newItem when the input changes
  updateNewItem(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Type assertion
    this.newItem = inputElement.value; // Update newItem with input value
  }
}
