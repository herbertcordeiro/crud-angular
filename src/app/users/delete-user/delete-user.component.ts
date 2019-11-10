import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  constructor(private userSevice: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userSevice.getUser(this.id)
      .subscribe(res => {
        this.user = res.data;
      });
  }

  delete() {
    this.userSevice.deleteUser(this.id)
      .subscribe(res => {
        alert("Usuário excluido com sucesso!");
        this._route.navigate(['/users']);
      });
  }

  cancel() {
    this._route.navigate(['/users']);
  }
}
