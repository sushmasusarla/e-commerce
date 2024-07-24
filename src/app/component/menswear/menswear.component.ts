import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestService, tshirts } from 'src/app/service/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menswear',
  templateUrl: './menswear.component.html',
  styleUrls: ['./menswear.component.css']
})
export class MenswearComponent {

  tshirt :tshirts[]=[]

  data:any;
  

  constructor (private http:HttpClient, private tees:TestService, private router:Router){
    this.geteeshirt()
  }

  geteeshirt() {
    this.tees.getteeshirt().subscribe({
      next :(data:tshirts[]) => {
        console.log("data"+data)
        this.tshirt=data
      },
      error:(error) => {
        console.log(error)
      }
    })
  }

  deleteEvent(id:number) {
    this.tees.deleteshirt(id).subscribe( data=>{
      console.log(data);
      this.geteeshirt();

      error: (error: any) => {
        console.log(error)
      }
    })
    }
  }


  /*getEvents() {
    this.EventService.getEvents().subscribe({
      next: (data: Event[]) => {
        this.events = data
      },
      error: (error) => {
        console.log(error)
      }
    })
  }*/
  






