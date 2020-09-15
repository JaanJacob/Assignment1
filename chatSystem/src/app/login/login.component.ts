import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router"; 
import { Router } from "@angular/router"
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name= "";
  password= "";

  users: any;

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { 
    this.users=[
      {"name": "aa", "email": "aa@gmail.com", "id": 1, "role": "user" },
      {"name": "bb", "email": "bb@gmail.com", "id": 1, "role": "user" },
      {"name": "cc", "email": "cc@gmail.com", "id": 1, "role": "user" }
    ];
  }

  ngOnInit(): void {
  }

  login(){
    for (let i in this.users) {
      if (this.name == this.users[i].name && this.password == "123"){
        this.router.navigate(['account'], { queryParams: { user: this.users[i] } });
        localStorage.setItem("loggedInUser", JSON.stringify(this.users[i]) );
        this.loginService.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(this.loginService.isLoggedIn) );
      }
    }
  }



}
