import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './shared/components/panel/panel';

const routes: Routes = [
  {
    path: "",
    component: PanelComponent
  },
  {
    path: 'users',
    loadChildren:  () => import('./users/user.module').then(m => m.UserModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
