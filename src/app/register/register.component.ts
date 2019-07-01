import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import $ from "jquery";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth:AngularFireAuth) { }

  ngOnInit() {
  }

  register(email,password){
this.auth.auth.createUserWithEmailAndPassword(email,password).then(()=>{
  alert("login sucessufully")
}).catch(err=>{
  if(err.message === "The email address is already in use by another account."){
    err.message = "هذا الايميل مستخدم"
  
  $('.alert').text(err.message);
  $('.alert').fadeIn();
}
});
  }

}
