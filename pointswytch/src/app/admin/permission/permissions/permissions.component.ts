import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/permission';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  permissions: Permission[];
  title: String;
  fault: String;

  constructor() { }

  ngOnInit() {

    this.title = 'Permissions';
    this.show();
  }



  show(): void {

  }


  delete(permission: Permission): void {



  }

}
