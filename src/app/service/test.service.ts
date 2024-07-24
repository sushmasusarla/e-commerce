import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Leggins } from '../models/leggins';
import { Tdata } from '../models/tdata';

export interface tshirts{
  id:number;
  image:"string";
  colour:"string";
  brandname:"string";
  size:"string";
  description:"string";
  cost:"string";

}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  tshirts:any;
  leggins:any;

  constructor(private http:HttpClient) { }

  getteeshirt():Observable<tshirts[]>{
    return this.http.get<tshirts[]>('http://localhost:3000/tshirts');
    
  }
  getleeggins():Observable<Leggins[]>{
    return this.http.get<Leggins[]>('http://localhost:3000/leggins');
  }
 deleteshirt(id:number):Observable<Object>{
  return this.http.delete('http://localhost:3000/tshirts/${id}')
 }

 //updateteeshirt(id:number):Observable<tshirts[]>{
  //return this.http.put('http://localhost:3000/tshirts/' +id )
 //}
  
  //addtshirts(teeshirt:tshirts): Observable<tshirts[]>{
    //return this.http.post<tshirts[]>('http://localhost:3000/tshirts');
 // }

  //addEvent(Event: Event): Observable<Event> {
    //return this.http.post<Event>('http://localhost:3000/events', Event);
}



