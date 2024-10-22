import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data.records;
    });
  }
}
