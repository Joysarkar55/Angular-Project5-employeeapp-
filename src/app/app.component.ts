import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeapp';
  result:any;
  constructor(private http:HttpClient)
  {
  }
  ngOnInit(): void{
    {
      this.http.get("http://localhost:5112/api/Employees").subscribe(data=>{console.log(data)});

    }
  }
}
  