import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../service/user.service";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastService } from "src/app/shared/service/toast.service";

@Component({
  selector: 'new-user-form',
  templateUrl: 'user-new.html',
  styleUrls: ['user-new.scss']
})
export class UserNew {

  userForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    username: this.fb.control('', [Validators.required]),
    fullname: this.fb.control(''),
    password: this.fb.control('', [Validators.required])
  })

  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toast: ToastService,
  ){
  }

  onSubmit(){
    this.userService.createUser(this.userForm.value).subscribe({
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