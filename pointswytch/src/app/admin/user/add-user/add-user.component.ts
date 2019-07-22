import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  title = 'User Account Creation';
  roles = [
    new Role(1, 'Admin'),
    new Role(2, 'Customer'),
    new Role(3, 'Merchant'),
    new Role(4, 'Agent') ,
    new Role(5, 'Operator') ,
    new Role(6, 'Support') ,
    new Role(7, 'Business Manager')
  ];

  user = { firstName: '', lastName: '', emailAddress: '', phoneNumber: '', password: '', userGroups: this.roles };

  constructor() { }

  ngOnInit() {
  }

  onSelectUserGroup() {}

}
