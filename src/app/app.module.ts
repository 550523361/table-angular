import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./loginComponent";
import {HeroComponent} from "./hero.component";
import {HighLightDirective} from "./directive/highlight.directive";
import {DemoFormComponent} from "./form/demo.form.component";
import {UserLoginService} from "./service/login.service";
import {LotteryListComponent} from "./lottery/lottery_list.component";
import {BaseTableListComponent} from "./baseComponent/base.table.list.component";
import {BaseTableListPager} from "./baseComponent/base.table.list.pager.component";
import {BaseTableListQueryComponent} from "./baseComponent/base.table.list.query.component";
import {BaseTableListConfigFormComponent} from "./utils/base.table.list.config.form.component";
import {BaseFormCreateComponent} from "./baseComponent/base.from.create.component";
import {BaseCustomerKeysPipe} from "./pipe/base.customer.keys.pipe";
import {BaseUploadDirective} from "./directive/base.upload.directive";
import {GoodsFormComponent} from "./merchant/goods.form.component";
import {BaseFormCreateComponentNew} from "./baseComponent/base.from.create.component.new";
import {BaseModelComponent} from "./baseComponent/base.model.component";
import {CreateGoodsFormComponent} from "./merchant/create.goods.form.component";
import {CreateGoodsFormComponentFormGroup} from "./merchant/create.goods.form.component.form.group";
import {BaseUploadDirectiveFormGroup} from "./directive/base.upload.directive.form.group";
import {BaseDateChooseDirective} from "./directive/base.date.choose";
import {BaseAreaChooseComponent} from "./baseComponent/base.area.choose.component";
import {CreateMerchantFormComponent} from "./merchant/create.merchant.form.component";
import {CreateMallGoodsCatogeryFormComponent} from "./merchant/create.mallGoodsCatogery.form.component";
@NgModule({
  declarations: [
    LoginComponent,
    HeroComponent,
    AppComponent,
    HighLightDirective,
    DemoFormComponent,
    LotteryListComponent,
    BaseTableListComponent,
    BaseTableListPager,
    BaseTableListQueryComponent,
    BaseTableListConfigFormComponent,
    BaseFormCreateComponent,
    BaseFormCreateComponentNew,
    BaseCustomerKeysPipe,
    BaseUploadDirective,
    BaseUploadDirectiveFormGroup,
    GoodsFormComponent,
    BaseModelComponent,
    CreateGoodsFormComponent,
    CreateGoodsFormComponentFormGroup,
    BaseDateChooseDirective,
    BaseAreaChooseComponent,
    BasePopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:"hero",
        component:HeroComponent
      },
      {
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
        path:"formCreate",
        component:BaseFormCreateComponent
      },
      {
        path:"goodsForm",
        component:GoodsFormComponent
      },
      {
        path:"goods",
        component:CreateGoodsFormComponent
      },
      {
        path:"group",
        component:CreateGoodsFormComponentFormGroup
      },
      {
        path:"areaChoose",
        component:BaseAreaChooseComponent
      }

    ]),
    ReactiveFormsModule
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
