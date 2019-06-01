import { NgModule } from '@angular/core';
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
  ]
})
export class AdminModule { }
