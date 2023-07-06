import { Injectable } from '@angular/core';
import { User } from './user-list/user-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {id:1, name: 'Ricardo', age:30},
  /*   {id:3, name: 'Azul', age:20}, */
    {id:2, name: 'Mariano', age:25},
    {id:4, name: 'Selene', age:50},
  ]
  constructor(private http:HttpClient) {
   const responseObservable: Observable<any> = this.http.get('');
   }

  addUser(newUser:User){
    if(!this.users.find(user => user.name === newUser.name))
    this.users.push(newUser);

  }
}
