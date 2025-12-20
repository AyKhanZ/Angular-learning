import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule],
  styleUrl: './app.css'
})
export class App {
  enteredName = '';
  enteredEmail = signal('')
}
