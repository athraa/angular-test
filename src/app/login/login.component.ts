import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AngularFireAuth) { }

  ngOnInit() {
  }

  login(email,password){
this.auth.auth.signInWithEmailAndPassword(email,password).then(()=>
alert("login successfully")).catch(error=>{
  console.log(error.message)
})
  }

}
