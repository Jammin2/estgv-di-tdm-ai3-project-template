import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { from } from 'rxjs';

const routes: Routes = [
   // {
  //   path: 'login',
  //   component: UserLoginComponent,
  // },
  {
    path: '',
    component: UserManagementComponent,
  },
  {
    path: 'create',
    component: UserCreateComponent,
  },
  {
    path: ':id',
    component: UserViewComponent,
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
