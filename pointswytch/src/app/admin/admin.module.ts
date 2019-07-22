import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankListComponent } from './banks/bank-list/bank-list.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { AddBankComponent } from './banks/add-bank/add-bank.component';
import { EditBankComponent } from './banks/edit-bank/edit-bank.component';
import { SelectBankComponent } from './banks/select-bank/select-bank.component';
import { AddChannelComponent } from './channel/add-channel/add-channel.component';
import { EditChannelComponent } from './channel/edit-channel/edit-channel.component';
import { DeleteChannelComponent } from './channel/delete-channel/delete-channel.component';
import { ChannelsComponent } from './channel/channels/channels.component';

import { PermissionsComponent } from './permission/permissions/permissions.component';
import { AddPermissionComponent } from './permission/add-permission/add-permission.component';
import { EditPermissionComponent } from './permission/edit-permission/edit-permission.component';
import { DeletePermissionComponent } from './permission/delete-permission/delete-permission.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { ProcessorsComponent } from './psp/processors/processors.component';
import { AddProcessorComponent } from './psp/add-processor/add-processor.component';
import { EditProcessorComponent } from './psp/edit-processor/edit-processor.component';
import { DeleteProcessorComponent } from './psp/delete-processor/delete-processor.component';

import { ListUsersComponent } from './user/list-users/list-users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SelectUserComponent } from './user/select-user/select-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { RolesComponent } from './user-role/roles/roles.component';
import { AddRoleComponent } from './user-role/add-role/add-role.component';



@NgModule({
  declarations: [
    BankListComponent,
    AddBankComponent,
    EditBankComponent,
    SelectBankComponent,
    AddChannelComponent,
    ChannelsComponent,
    EditChannelComponent,
    DeleteChannelComponent,
    PermissionsComponent,
    AddPermissionComponent,
    EditPermissionComponent,
    DeletePermissionComponent,
    EditProductComponent,
    DeleteProductComponent,
    ProcessorsComponent,
    AddProcessorComponent,
    EditProcessorComponent,
    DeleteProcessorComponent,
    ListUsersComponent,
    AddUserComponent,
    SelectUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ProductsComponent,
    AddProductComponent,
    RolesComponent,
    AddRoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes),
  ]
})
export class AdminModule { }
