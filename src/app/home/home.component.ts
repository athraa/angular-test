import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list;
  constructor(public db:AngularFireDatabase,public router:Router) { 
   this.list = this.db.list("posts").snapshotChanges();
  }

  ngOnInit() {
  }

  showDetails(key,text,desc){
this.router.navigate(["/info"])
  }
}
