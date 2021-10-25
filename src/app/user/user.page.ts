import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user.model'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['userId']);
      this.getUser(params['userId']);
    });
  }

  getUser(id:string):void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        console.log(response);
        this.user = response.user;
      }
    );
  }

}