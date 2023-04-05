import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class POSTComponent {
  id!: number;
  firstName!: string;
  lastName!: string;
  serviceType!: string;
  address!:string;
  constructor(private http: HttpClient){}
  onSubmit()
  {
    const forData={
      firstName: this.firstName,
      lastName:this.lastName,
      serviceType:this.serviceType,
      address:this.address
    };
    this.http.post('http://localhost:5112/api/Employees', forData).subscribe(
      response=>{
        console.log('Data saved successfully:', response);
      },
      error=>{
        console.error('Error saving Data:',error)
      }
    )
  }
}


