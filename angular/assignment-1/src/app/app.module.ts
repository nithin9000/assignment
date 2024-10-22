import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import ReactiveFormsModule here
    FormsModule           // Import FormsModule if you're using ngModel elsewhere
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
