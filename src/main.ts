import { bootstrapApplication } from '@angular/platform-browser';
import { AsyncPipeDemoComponent } from './app/async-pipe-demo/async-pipe-demo.component';

bootstrapApplication(AsyncPipeDemoComponent).catch((err) =>
  console.error(err)
);



// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
