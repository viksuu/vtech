import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from 'src/app/shared/services/login-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User;
  constructor(private loginService: LoginServicesService,private route:Router,private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
  }


  login(value:User){


    console.log("Doing login...");
    console.log(value);
    
      this.loginService.getUserByUserName(value.username).subscribe((res :User[] )=> {
        console.log(res);
        if(res[0].password === value.password){
          this.route.navigate(['home/dashboard/',res[0].id]);

        }

      });
    }


  }

