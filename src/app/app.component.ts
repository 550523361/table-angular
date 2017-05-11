import { Component } from '@angular/core';
import {UserLoginService} from "./service/login.service";
import {UserModel} from "./model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[UserLoginService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(public userLoginService:UserLoginService,private router:Router){

  }

  logout(){
  //{email:"admin",passwd:"LJuy!Zg#uB3rNFxZ" }
  this.userLoginService.logout()
    .subscribe(data=>{
      let result=data.json();
      if(result.code==200){
        var userInfo:UserModel=new UserModel("");
        userInfo.isLogin=false;
        this.userLoginService.updateLoginInfo(userInfo);
        this.router.navigate(["login"]);
      }
    });
}
}
