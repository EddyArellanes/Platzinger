import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUser: User = {
      nick: 'Eddy',
      subnick: 'ArB',
      age: 24,
      email: 'earellanes@hotmail.com',
      friend: true,
      uid: 1
    }

    //Data Types
    //number, string, boolean, object, any
    let a: number = 1
    let b: string = '1'
    let c: boolean = true
    let d: object = {}
    let e = [a, b, c, d]
    let f: boolean [] = [c, true]
    let g: object [] = [{}, d]
    let h: any[] = e
   
   }
  
  ngOnInit() {
  }

}
