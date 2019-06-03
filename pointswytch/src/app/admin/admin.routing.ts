import { Routes } from '@angular/router';
import { BankListComponent } from './banks/bank-list/bank-list.component';
import { AddBankComponent } from './banks/add-bank/add-bank.component';
import { ChannelsComponent } from './channel/channels/channels.component';
import { AddChannelComponent } from './channel/add-channel/add-channel.component';
import { DeleteChannelComponent } from './channel/delete-channel/delete-channel.component';
import { EditChannelComponent } from './channel/edit-channel/edit-channel.component';
import { AddPermissionComponent } from './permission/add-permission/add-permission.component';
import { PermissionsComponent } from './permission/permissions/permissions.component';
import { EditPermissionComponent } from './permission/edit-permission/edit-permission.component';
import { DeletePermissionComponent } from './permission/delete-permission/delete-permission.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

export const AdminRoutes: Routes = [

    {
      path: '',
      children: [
        {
          path: 'list-users',
          component: ListUsersComponent,
          data: {
            title: 'Users',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Users' }
            ]
          }
        },
        {
          path: 'add-user',
          component: AddUserComponent,
          data: {
            title: 'Add User',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Add User' }
            ]
          }
        },
        {
          path: 'edit-user',
          component: EditUserComponent,
          data: {
            title: 'Edit User',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Edit User' }
            ]
          }
        },
        {
          path: 'select-user',
          component: BankListComponent,
          data: {
            title: 'Select User',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Select User' }
            ]
          }
        },
        {
          path: 'delete-user',
          component: BankListComponent,
          data: {
            title: 'Delete User',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Delete User' }
            ]
          }
        },
        {
          path: 'bank-list',
          component: BankListComponent,
          data: {
            title: 'Banks',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Banks' }
            ]
          }
        },
        {
          path: 'add-bank',
          component: AddBankComponent,
          data: {
            title: 'Add Bank',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Add Bank' }
            ]
          }
        }
        ,
        {
          path: 'channels',
          component: ChannelsComponent,
          data: {
            title: 'Payment Channels',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Payment Channels' }
            ]
          }
        },
        {
          path: 'add-channel',
          component: AddChannelComponent,
          data: {
            title: 'Add Channel',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Add Channel' }
            ]
          }
        },

        {
          path: 'edit-channel',
          component: EditChannelComponent,
          data: {
            title: 'Edit Channel',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Edit Channel' }
            ]
          }
        },
        {
          path: 'delete-channel ',
          component: DeleteChannelComponent,
          data: {
            title: 'Delete Channel',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Delete Channel' }
            ]
          }
        },
        {
          path: 'permissions',
          component: PermissionsComponent,
          data: {
            title: 'Permissions',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Permissions' }
            ]
          }
        },
        {
          path: 'add-permission',
          component: AddPermissionComponent,
          data: {
            title: 'Add Permission',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Add Permission' }
            ]
          }
        }
        ,
        {
          path: 'delete-permission ',
          component: DeletePermissionComponent,
          data: {
            title: 'Delete Permission',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Delete Permission' }
            ]
          }
        }
        ,
        {
          path: 'edit-permission ',
          component: EditPermissionComponent,
          data: {
            title: 'Edit Permission',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Edit Permission' }
            ]
          }
        }
      ]

    }
]
