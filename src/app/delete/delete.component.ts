import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Idata} from '../Idata';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DELETEComponent {

id!: number;
  firstName!: string;
  lastName!: string;
  serviceType!: string;
  address!: string;
  result!: string;
  constructor(private http: HttpClient){}
  onSubmit()
  {
      this.http.delete<Idata>('http://localhost:5112/api/Employees')
          .subscribe(() => this.result = 'Delete successful');
    }
    
  }
      
