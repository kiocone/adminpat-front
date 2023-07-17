import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user.component';
import { UserNew } from './pages/user-new/user-new.component';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: 'new',
    component: UserNew
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
