import { Component } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import { BtnComponent } from "../btn/btn.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from "@angular/router";
@Component({
    selector: "app-header",
    standalone: true,
    imports: [MatTabsModule,BtnComponent,FlexLayoutModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {
    constructor(private router: Router) {}
  
    createTaskHandler = (): void => {
      this.router.navigate(['/create']);
  };
}