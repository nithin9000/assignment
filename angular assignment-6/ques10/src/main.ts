import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Import your app config
import { AppComponent } from './app/app.component'; // Import your standalone component

// Bootstrap the application with the standalone AppComponent and appConfig
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
