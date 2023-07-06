import { Component } from '@angular/core';
import { UserService } from '../user.service';
export type User = {
  id:number,
  name:string,
  age:number,
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
constructor( public userService:UserService){

}
addJuan(){
  this.userService.addUser({
    id:100,
    name:'Juan',
    age: 50,
  })

}

}
