import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { tasksReducer } from './app/store/tasks.reducer';

bootstrapApplication(AppComponent, {providers: [
  provideStore({ tasks: tasksReducer }),
  { provide: 'APP_CONFIG', useValue: appConfig }
]})
  .catch((err) => console.error(err));
