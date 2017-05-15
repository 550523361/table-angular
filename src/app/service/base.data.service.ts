/**
 * Created by Administrator on 2017/4/20.
 */


import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams, Request} from "@angular/http";
import {Observable} from "rxjs";
declare var layer;
@Injectable()
export class BaseDataService{

  baseUrl="https://testbackend.goodaa.com.cn/ejiazi-backend/";

  constructor(private http:Http){

  }

  get(){

  }

  list(param){
     return this.http.post(param.url,param.body,param.options);
  }


  listData(param){
    var heraders=new Headers();
    var option=new RequestOptions();
    option.headers=heraders;
    option.body=param.param;
    var searchParam=new URLSearchParams();
    for(let key in param.param){
      param.param[key]=param.param[key]==undefined?null:param.param[key];
    }

    let params=new RequestOptions();
    params.search=searchParam;
    params.body=param.param;
    params.method=param.httpMethod||'post';
    params.url=(param.baseUrl||this.baseUrl)+param.url;
    var request=new Request(params);
    //var popId=layer.open({type: 3});
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
