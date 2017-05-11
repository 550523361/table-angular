/**
 * Created by Administrator on 2017/4/17.
 */
import { Hero } from "./../hero";
import {LoggerService} from "../logger/logger.service";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
@Injectable()
export class HeroService{
  loggerService;
  getHeros():Hero[]{
    this.loggerService.log("getHeros function called");
    return [{
      name:"ooooxkfeeewwweng333",
      age:2
    }]
  }
  constructor(
    loggerService:LoggerService,
    isAuth:boolean
  ){
    this.loggerService=loggerService;
    console.log("loggerService",loggerService)
  }
}

let heroServiceFactory = (loggerService:LoggerService,userService:UserService) => {
  return new HeroService(loggerService,userService.isAuth);
};

export let HeroServiceProvider={
  provide:HeroService,
  useFactory:heroServiceFactory,
  deps:[LoggerService,UserService]
};
