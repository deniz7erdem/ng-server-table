import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataService:DataService){}
  title = 'app';
  columns = ['id','first_name','last_name','email','gender','date'];
}
