import {Component, OnInit} from "@angular/core";
import {BaseCustomerKeysPipe} from "../pipe/base.customer.keys.pipe";
import {BaseValidateService} from "../service/base.validate.service";
import {BaseDataService} from "../service/base.data.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {BaseFormCreateComponentNewFormGroup} from "../baseComponent/base.from.create.component.new.form.group";


@Component({
  selector:"create-goods-form",
  templateUrl:"../baseComponent/base.from.create.component.new.form.group.html",
  styleUrls:["../baseComponent/base.from.create.component.css"],
  providers:[BaseCustomerKeysPipe,BaseValidateService,BaseDataService]
})
export class CreateGoodsFormComponentFormGroup extends BaseFormCreateComponentNewFormGroup implements OnInit{

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
          label:"详情图片",
          prop:"detailPics",
          type:"array",
          multiple:false,
          uploadClass:{myUploadStyle2:true},
          options:[
            [
              {
                label:"",
                prop:"detailA",
                type:"upload",
                value:"",
                multiple:false,
                uploadClass:{myUploadStyle2:true},
                imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
                validates:[control=>{
                  //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
                  console.log(control)
                  //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                }]
              }
            ],
            [
              {
                label:"",
                prop:"detailB",
                value:"",
                type:"upload",
                multiple:false,
                uploadClass:{myUploadStyle2:true},
                imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
                validates:[control=>{
                  //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
                  console.log(control)
                  //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                }]
              }
            ]
          ],
          validates:[control=>{
            //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
            console.log(control)
            //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
          }]
        }
      ]
    };
    this.initForm()
  }


  open(){

  }

  close(data){
    console.log("closedata",data)
  }

  submit(){
    console.log("sub sub this.formGroup",this.formGroup.value)
    this.baseDataService.listData({url:this.formModel.url,param:this.formGroup.value,httpMethod:"post"}).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error);
      this.router.navigate(["lotteryList"])
    })
  }
}
