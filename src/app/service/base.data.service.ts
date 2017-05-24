/**
 * Created by Administrator on 2017/4/20.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams, Request, Response, CookieXSRFStrategy} from "@angular/http";
import {Observable} from "rxjs";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {document} from "@angular/platform-browser/src/facade/browser";
import {Router} from "@angular/router";
declare var layer;
declare var $;
@Injectable()
export class BaseDataService{
  //https://testbackend.goodaa.com.cn
  baseUrl="/ejiazi-backend/";
  constructor(public http:Http,public route:Router){

  }

  get(){

  }

  list(param){
     return this.http.post(param.url,param.body,param.options);
  }


  listData(param){
    if(param==null) return;
    let loginUser=JSON.parse($.cookie("login_user")||"{}");
    if(!loginUser.isLogin&&param.url!="login.json"){
      this.route.navigate(["login"]);
      return Observable.create((Observable) => {
        Observable.next({error:"noLogin",json:data=>{return {}}});
      })
    }
    var heraders=new Headers();
    var option=new RequestOptions();
    option.headers=param.headers||heraders;
    option.body=param.param;
    var searchParam=new URLSearchParams();
    for(let key in param.param){
      param.param[key]=param.param[key]==undefined?null:param.param[key];
    }

    let params=new RequestOptions();
    params.search=searchParam;
    params.body=param.param;
    params.headers=param.headers||heraders;
    params.method=param.httpMethod||'post';
    params.url=(param.baseUrl||this.baseUrl)+param.url;
    let request=new Request(params);
    //let popId=layer.load(2, {shade: false});
    /*let response:Observable<Response>=params.method=="post"?this.http.request(request,params):this.http.get(params.url+"?"+this.obj2queryString(option.body),option);
    response.subscribe(data=> {
      layer.close(popId);
      return Observable.create((Observable) => {
        console.log("request times",params.url)
        Observable.next(data);
      })
    });
    return response;*/
    return params.method=="post"?this.http.request(request,params):this.http.get(params.url+"?"+this.obj2queryString(option.body),option);
  }

  save():any{

  }

  delete():any{

  }

  update():any{

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
        if(obj[key]!=null){
          if(isNotFirst){
            queryString+="&"
          }
          queryString+=key+"="+obj[key];
          isNotFirst=true;
        }
      }
    }
    return queryString;
  }
}
