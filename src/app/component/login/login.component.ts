import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login= new FormGroup({
    email: new FormControl(),
    password: new FormControl(),

  });

  constructor (private route:Router) {
  }
  onsubmit(form:NgForm):void {
 if (form.valid){
  const username =form.value.username;
  const password =form.value.password;

  if (username === 'sushma' && password ==='devansh'){
    this.route.navigate (['/home']);
  }
  else {
    alert('Invalid credentials. Please try again.');
  }
 }
  }





}
