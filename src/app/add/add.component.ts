import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import $ from "jquery";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public db:AngularFireDatabase,public router:Router) { }

  ngOnInit() {
  }

  add(text,desc){
this.db.list('posts').push({text:text,desc:desc}).then(()=>{
  alert("add successfully");
  this.router.navigate(['']);
}).catch(err=>{
  $('.alert').text(err.message);
  $('.alert').fadeIn();
})
  }

}
