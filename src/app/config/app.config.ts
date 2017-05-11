import { OpaqueToken } from "@angular/core";
export interface AppConfig{
  title:string;
  version:string;
}

export const HERO_DI_CONFIG:AppConfig={
  title:'hero demo test',
  version:"1.0.0"
}

export let APP_CONFIG=new OpaqueToken('app.config')
