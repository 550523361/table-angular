import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./loginComponent";
import {UserLoginService} from "./service/login.service";
import {MainComponent} from "./main/main.component";
import {MainComponentGuard} from "./guards/MainComponentGuard/main.component.guard";
import {BaseCustomerKeysPipe} from "./pipe/base.customer.keys.pipe";
import {BaseFormCreateComponentNew} from "./baseComponent/base.from.create.component.new";
import {BaseDateChooseDirective} from "./directive/base.date.choose";
import {CreateGoodsFormComponent} from "./merchant/create.goods.form.component";
import {BaseAreaChooseComponent} from "./baseComponent/base.area.choose.component";
import {CreateMerchantFormComponent} from "./merchant/create.merchant.form.component";
/*import {CreateMallGoodsCatogeryFormComponent} from "./merchant/create.mallGoodsCatogery.form.component";*/
import {CreateGoodsFormComponentFormGroup} from "./merchant/create.goods.form.component.form.group";
import {BaseFormCreateComponentNewFormGroup} from "./baseComponent/base.from.create.component.new.form.group";
import {BaseUploadDirective} from "./directive/base.upload.directive";
import {BaseUploadDirectiveFormGroup} from "./directive/base.upload.directive.form.group";


// 定义常量 嵌套自路由
const appChildRoutes: Routes = [
  {
    path: "goods",
    component: CreateGoodsFormComponent,
    canDeactivate:[MainComponentGuard]
  },
  {path: "createMerchant", component: CreateMerchantFormComponent},
  {
    path: '**', redirectTo: "goods"
  }
];

const appRoutes:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"areaChoose",
    component:BaseAreaChooseComponent
  },
  {
    path:"merchant",
    component:CreateMerchantFormComponent
  },
  /*{
    path:"mallCatogery",
    component:CreateMallGoodsCatogeryFormComponent
  },*/
  /*{
    path:"demoForm",
    component:DemoFormComponent
  },
  {
    path:"lotteryList",
    component:LotteryListComponent
  },
  {
    path:"listConfig",
    component:BaseTableListConfigFormComponent
  },
  {
    path:"goodsForm",
    component:GoodsFormComponent
  },
  {
    path:"group",
    component:CreateGoodsFormComponentFormGroup
  },

  {
    path:"basePop",
    component:BasePopComponent
  },
  {
    path:"testPop",
    component:BaseTestPopComponent
  },*/
  {
    path:"main",
    component:MainComponent,
    children:appChildRoutes,
    canDeactivate:[MainComponentGuard],
    canActivate:[MainComponentGuard],
    canActivateChild:[MainComponentGuard]
  },
 {
 path:"**",
 component:LoginComponent
 }
];
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    BaseCustomerKeysPipe,
    BaseFormCreateComponentNew,
    BaseDateChooseDirective,
    CreateGoodsFormComponent,
    /*HighLightDirective,
    DemoFormComponent,
    LotteryListComponent,
    BaseTableListComponent,
    BaseTableListPager,
    BaseTableListQueryComponent,
    BaseTableListConfigFormComponent,


    GoodsFormComponent,
    BaseModelComponent,

    CreateMallGoodsCatogeryFormComponent,
    BasePopComponent,
    BaseTestPopComponent,*/
    BaseUploadDirective,
    BaseUploadDirectiveFormGroup,
    BaseFormCreateComponentNewFormGroup,
    CreateGoodsFormComponentFormGroup,
    BaseAreaChooseComponent,
    CreateMerchantFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [UserLoginService,MainComponentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
