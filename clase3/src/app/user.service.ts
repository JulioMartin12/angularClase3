import { Injectable } from '@angular/core';
import { User } from './user-list/user-list.component';
import { HttpClient } from '@angular/common/http';
import { from, timer} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService  {
//atributos
//metodos

  users: User[] = [
    {id:1, name: 'Ricardo', age:30},
  /*   {id:3, name: 'Azul', age:20}, */
    {id:2, name: 'Mariano', age:25},
    {id:4, name: 'Selene', age:50},
  ]

 
  constructor(private http:HttpClient) {
    //TypeScript
    //Generic

   const countries$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
   //responseObservablce: Observable<any>

 countries$.subscribe({
  next:(data:any)=>{
    console.log(data)
  },
  error:(err)=>{
    console.warn(err)
  },

  //no se usa el complete
  complete:()=>{
    console.log('Complete')
  }
 });



   }

   

  addUser(newUser:User){
    if(!this.users.find(user => user.name === newUser.name))
    this.users.push(newUser);

  }
}
