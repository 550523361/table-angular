/**
 * Created by Administrator on 2017/4/17.
 */
import {Component, Class, Inject} from "@angular/core"
import {HeroService, HeroServiceProvider} from "./service/hero.service";
import {Hero} from "./Hero";
import {LoggerService} from "./logger/logger.service";
import {UserService} from "./service/user.service";
import {APP_CONFIG, AppConfig} from "./config/app.config";
import {HERO_DI_CONFIG} from "./config/app.config";

@Component({
  selector:"hero",
  providers:[UserService,LoggerService,HeroServiceProvider,{provide:APP_CONFIG,useValue:HERO_DI_CONFIG}],
  templateUrl:'hero/hero.html'
})
export class HeroComponent{
  color:string="#aaa";
  hero={name:"12"}
  heros:Hero[]=[];
  constructor(public heroService:HeroService,@Inject(APP_CONFIG) config:AppConfig){
    console.log("heroSeraaaawe",heroService.getHeros(),"   config=",config)
    this.heros=heroService.getHeros();
  }
  clickUtils={
    save:function (item:any,eventParam:any) {
      console.log(item,eventParam,"234234");
    }
  }
  test(){
    console.log("adsfadfasdf",this.heroService)
  }
  keyUtils={
    keyUp:function (val:any,secondParam) {
      console.log(val," compare ``12`12 aaaa ")
      secondParam.error={
        msg:'请输入url'
      }
    }
  }
}
