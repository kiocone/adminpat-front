import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";
import { User } from "../../interfaces/user.interface";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmModalComponent } from "src/app/shared/components/confirm-modal/confirm-modal.component";
import { ToastService } from "src/app/shared/service/toast.service";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html',
  styleUrls: ['user-list.scss']
})
export class UserListComponent implements OnInit {

  usersList: User[] = [];

  show:boolean = true

  displayedColumns: string[] = [
    'id',
    'email',
    'username',
    'fullname',
    'actions'
  ]

  constructor(
    private userService: UserService,
    private router: Router,
    public confirmDialog: MatDialog,
    private toast: ToastService,
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
    this.router.navigateByUrl(`/users/${id.toString()}`)
  }

  remove(id: number){
    const dialogRef = this.confirmDialog.open(ConfirmModalComponent, {
      data: {
        title: 'Eliminar Usuario',
        message: `¿Está seguro que deséa eliminar el Ususario ID: ${id}?`,
        confirmBtnText: 'Eliminar',
        showCancelButton: true
      },
        minWidth: 550
      }
    );
    dialogRef.afterClosed().subscribe((result: {
      confirm: boolean
    }) => {
      if (result?.confirm) {
        this.userService.deleteUser(id).subscribe({
          next: (response: HttpResponse<any>) => {
            if (response.status == 204){
              this.ngOnInit();
              this.toast.open(`Usuario con ID ${id} fue eliminado.`, "success");
            } else {
              this.toast.open(`${response.status} - ${response.statusText}`, "warning")
            }
          },
          error: (e: HttpErrorResponse) => {
            this.toast.open(`${e.error} - Ocurrio un error al eliminar el objetivo empresa`, "danger")
          }
        })
      }
    })
  }

  resetChildForm(){
    this.show = false;

    setTimeout(() => {
        this.show = true
      }, 100);
  }
}