/**
 * Created by Administrator on 2017/4/20.
 */
import {
  Http, Headers, HttpModule, RequestMethod, URLSearchParams, RequestOptions,
  RequestOptionsArgs, Response
} from "@angular/http"
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";



@Injectable()
export class UserLoginService{

  userInfo:UserModel=new UserModel("");
  constructor(private http:Http){

  }

  loginUrl:string="http://localhost/ejiazi-backend/login";

  logoutUrl:string="http://localhost/ejiazi-backend/systemUser/logout";

  /**
   * 登陆方法
   * @param param
   */
  login(param):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }); //其实不表明 json 也可以, ng 默认好像是 json
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl,this.obj2queryString(param),options);
  }

  /**
   * 登陆方法
   * @param param
   */
  logout():Observable<any>{

    /*var heraders=new Headers();
        heraders.set("JSESSIONID","C21BB78E1B50B5359D76AB9124A83420");
     heraders.set("adminId","1");
     heraders.set("sn","86b9726a3b0dcddc440a19d53165d213");
    var option=new RequestOptions();
    option.headers=heraders;
    console.log("option",option)*/
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }); //其实不表明 json 也可以, ng 默认好像是 json
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.logoutUrl,options);
  }

  /**
   * js对象转查询字符串
   * @param obj 被转对象
   * @returns {string}
   */
  obj2queryString(obj:any){
    let queryString="";
    if(obj){
      let isNotFirst:boolean=false;
      for(let key in obj){
        if(isNotFirst){
          queryString+="&"
        }
        queryString+=key+"="+obj[key];
        isNotFirst=true;
      }
    }
    return queryString;
  }

  updateLoginInfo(userInfo:UserModel){
    this.userInfo.name=userInfo.name;
    this.userInfo.isLogin=userInfo.isLogin;
    console.log("updateLoginInfoupdateLoginInfo",userInfo)
  }

}
