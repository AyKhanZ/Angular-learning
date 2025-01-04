import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ContentComponent } from '../../content/content.component';
import { tasks } from '../../../tasks';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent,ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks:any = tasks;
}
