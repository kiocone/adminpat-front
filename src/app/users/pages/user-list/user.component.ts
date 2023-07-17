import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";
import { User } from "../../interfaces/user.interface";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html',
  styleUrls: ['user-list.scss']
})
export class UserListComponent implements OnInit {

  usersList: User[] = [];

  displayedColumns: string[] = [
    'id',
    'email',
    'username',
    'fullname',
    'actions'
  ]

  constructor(
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response: HttpResponse<User[]>) => {
        if (response.body){
          this.usersList = response.body
        }
      }
    })
  }

  edit(id: number){
    console.log(id)
  }

  remove(id: number){
    console.log(id)
  }
}