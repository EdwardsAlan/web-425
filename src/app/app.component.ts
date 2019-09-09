import { Component } from '@angular/core';
import { swtichService } from './switcher.service';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatIcon
} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [swtichService]
})
export class AppComponent {
  title = 'app'; 
  constructor(public switcherService: swtichService){
  }

   
}
