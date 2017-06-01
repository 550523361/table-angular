import {Component, OnInit} from "@angular/core";
import {BaseCustomerKeysPipe} from "../pipe/base.customer.keys.pipe";
import {BaseValidateService} from "../service/base.validate.service";
import {BaseDataService} from "../service/base.data.service";
import {BaseFormCreateComponentNew} from "../baseComponent/base.from.create.component.new";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {BaseDateChooseDirective} from "../directive/base.date.choose";


@Component({
  selector:"create-goods-form",
  templateUrl:"../baseComponent/base.from.create.component.new.html",
  styleUrls:["../baseComponent/base.from.create.component.css"],
  providers:[BaseCustomerKeysPipe,BaseValidateService,BaseDataService,BaseDateChooseDirective]
})
export class CreateMallGoodsCatogeryFormComponent extends BaseFormCreateComponentNew implements OnInit{

  constructor(
    public formBuilder:FormBuilder,public baseValidateService:BaseValidateService,public baseDataService:BaseDataService,private router:Router
  ){
    super(formBuilder,baseDataService);
  }

  ngOnInit(){
    this.formModel={
      url:"goods/saveGoods.json",
      elements:[
        {
          type:"input",
          label:"分类名称",
          prop:"goodsType",
          removeValidateUrl:"",
          placeholder:"请输入商品类型",
          defaultValue:"",
          required:true,
          validates:[(control:any)=>{
            return this.baseValidateService.baseValidate(control,{required:true,maxlength:5});
          }]
        },
        {
          label:"分类图标",
          prop:"firstPic",
          type:"upload",
          multiple:false,
          uploadClass:{myUploadStyle:true},
          require:true,
          defaultValue:"",
          imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
          validates:[(control:any)=>{
            return this.baseValidateService.baseValidate(control,{required:true});
          }]
        },
      ]
    };
    this.initForm()
  }


  open(){

  }

  close(data:any){
    console.log("closedata",data)
  }

  serviceArea:any;
  chooseResult(data:any){
    console.log("goods form chooseResult",data);
    this.serviceArea=data;
  }

  submit(){
    console.log("sub sub this.formGroup",this.formGroup.value,this.serviceArea)
    this.baseDataService.listData({url:this.formModel.url,param:this.formGroup.value,httpMethod:"post"}).subscribe((data:any)=>{
      console.log(data)
    },(error:any)=>{
      console.log(error);
    //  this.router.navigate(["lotteryList"])
    })
  }
}
