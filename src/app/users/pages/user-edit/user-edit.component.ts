import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../service/user.service";
import { HttpResponse } from "@angular/common/http";
import { User } from "../../interfaces/user.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html',
  styleUrls: ['user-edit.scss']
})
export class UserEdit implements OnInit {
  userForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    username: this.fb.control('', [Validators.required]),
    fullname: this.fb.control(''),
    password: this.fb.control('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
  ){

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.userService.getUserbyId(params['id']).subscribe({
            next: (response: HttpResponse<User>) => {
              if (response.body){
                this.userForm.setValue(
                  {
                    email: response.body.email,
                    fullname: response.body.fullname,
                    username: response.body.username,
                    password: response.body.password,
                  }
                )
                console.log(this.userForm.value)
              }
            }
          })
        }
      }
    )  
  }

  onSubmit() {

  }
}