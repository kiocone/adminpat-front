import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user.component';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  /* {
    path: ':id',
    component: '*.component.ts'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
