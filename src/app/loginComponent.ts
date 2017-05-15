import {Component, Class}  from "@angular/core"
import {FormsModule,Form} from  "@angular/forms"
import {UserLoginService} from "./service/login.service";
import {Router} from "@angular/router";
import {UserModel} from "./model/user.model";
@Component({
  selector:"login",
  templateUrl:"login/login.html"
})
export class LoginComponent{
  email:string="admin";
  passwd:string="LJuy!Zg#uB3rNFxZ";

  constructor(public userLoginService:UserLoginService,private router:Router){
  }

  login(){
    //{email:"admin",passwd:"LJuy!Zg#uB3rNFxZ" }
    let email:string=this.email;
    let passwd:string=this.passwd;
    this.userLoginService.login({email,passwd})
      /*.subscribe(data=>{
        alert(23424)
        let result=data.json();
        if(result.code==200){
          var userInfo:UserModel=new UserModel(this.email);
               userInfo.isLogin=true;
          this.userLoginService.updateLoginInfo(userInfo);
          this.router.navigate(["demoForm"]);
        }
      });*/
  }
}
