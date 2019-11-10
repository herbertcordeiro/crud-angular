import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: '',
  };

  response: ResponseCreate;

  constructor(private userSevice: UserService, private _route: Router) { }

  ngOnInit() {
  }

  save() {
    this.userSevice.createUser(this.request)
      .subscribe(res => this.response = res);
  }

  cancel() {
    this._route.navigate(['/users']);
  }
}
