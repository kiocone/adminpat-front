import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserNew } from './pages/user-new/user-new.component';
import { UserEdit } from './pages/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: 'new',
    component: UserNew
  },
  {
    path: ':id',
    component: UserEdit
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
