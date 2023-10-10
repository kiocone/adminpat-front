import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserNew } from './pages/user-new/user-new.component';
import { UserEdit } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserNew,
    UserEdit,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
