import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Idata} from '../Idata';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PUTComponent {

  id!: number;
  firstName!: string;
  lastName!: string;
  serviceType!: string;
  address!:string
  constructor(private http: HttpClient){}
  onSubmit()
  {
    const forData={
      id: this.id,
      firstName: this.firstName,
      lastName:this.lastName,
      serviceType:this.serviceType,
      address:this.address
    };
    this.http.put<Idata>('http://localhost:5112/api/Employees', forData).subscribe({
      next : data => {
        this.id = data.id
      },
      error : error=>{
        console.error('Error saving Data:',error)
      }
  
  });
}
}