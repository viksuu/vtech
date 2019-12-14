import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/shared-module/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  constructor(private loginService: LoginService,private route:Router) {}
  ngOnInit() {
  }

  saveUser(body) {
    this.loginService.saveUser(body).subscribe(res => {
      console.log(res);
      this.route.navigate(['/index/login']);
    });
  }

}
