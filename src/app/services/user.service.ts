import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[]
  constructor() { 
    let myUser: User = {
      nick: 'Eddy',
      subnick: 'ArB',
      age: 24,
      email: 'earellanes@hotmail.com',
      friend: true,
      status: 'online',
      uid: 1
    }
    this.friends = [
      myUser,
      {nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true, uid: 2},
      {nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true, uid: 3},
      {nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false, uid: 4}
    ]    
  }
  getFriends(){
    return this.friends
  }
}
