import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../service/user.service";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { User } from "../../interfaces/user.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "src/app/shared/service/toast.service";

@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html',
  styleUrls: ['user-edit.scss']
})
export class UserEdit implements OnInit {

  userId!: number;

  userForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email, Validators.max(50)]),
    username: this.fb.control('', [Validators.required, Validators.max(50)]),
    fullname: this.fb.control('', [Validators.required, Validators.max(50)]),
  })
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
  ){

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.userId = Number(params['id'])
        this.userService.getUserbyId(this.userId).subscribe({
            next: (response: HttpResponse<User>) => {
              if (response.body){
                this.userForm.setValue(
                  {
                    email: response.body.email,
                    fullname: response.body.fullname,
                    username: response.body.username,
                  }
                )
              }
            }
          })
        }
      }
    )  
  }

  onSubmit(){
    this.userService.updateUserById(this.userId, this.userForm.value).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status == 200){
          this.router.navigateByUrl('/users')
          this.toast.open('Usuario creado')
        } else {
          this.toast.open(`${response.statusText} - ${response.statusText}`)
        }
      },
      error: (e: HttpErrorResponse) => {
        console.error(e.error)
        this.toast.open(e.error, 'danger')
      }
    })
  }
}