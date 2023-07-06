import { Component } from '@angular/core';
import { User } from '../user-list/user-list.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent {
constructor(public userService: UserService){

}
}
