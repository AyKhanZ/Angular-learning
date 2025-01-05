import { Component } from "@angular/core";
import { MatTabsModule} from '@angular/material/tabs';
import { BtnComponent } from "../btn/btn.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from "@angular/router";
import { ContentComponent } from "../content/content.component";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-header",
    standalone: true,
    imports: [MatTabsModule,BtnComponent,CommonModule,FlexLayoutModule,ContentComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
  tabs: string[] = ["All", "Completed", "Uncompleted"];
  selectedTab: string = this.tabs[0];
  
  constructor(private router: Router) {}
  
  createTaskHandler = (): void => {
    this.router.navigate(['/create']);
  };
  
  onTabChange(index: number): void {
    this.selectedTab = this.tabs[index];
    console.log('Selected tab index:', index);
    console.log('Selected tab in parent:', this.selectedTab);
  }
}