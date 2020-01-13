import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName
  password
  mouseOverLogin
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit() {
  }
  login(e){
    // console.log(e)
    this.auth.loginUser(e.userName,e.password)
    this.route.navigate(['events']);
  }
  cancel(){
    this.route.navigate(['events']);
  }
}
