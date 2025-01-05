import { Component } from "@angular/core";
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { BtnComponent } from "../btn/btn.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from "@angular/router";
import { ContentComponent } from "../content/content.component";
@Component({
    selector: "app-header",
    standalone: true,
    imports: [MatTabsModule,BtnComponent,FlexLayoutModule,ContentComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
  selectedTab: string = "All";
  constructor(private router: Router) {}
  
  createTaskHandler = (): void => {
    this.router.navigate(['/create']);
  };

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent); 
    console.log('index => ', tabChangeEvent.index); 
}
}