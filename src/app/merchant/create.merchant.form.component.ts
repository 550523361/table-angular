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
export class CreateMerchantFormComponent extends BaseFormCreateComponentNew implements OnInit{

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
          label:"店铺名称",
          prop:"goodsType",
          removeValidateUrl:"",
          placeholder:"请输入商品类型",
          defaultValue:"",
          required:true,
          validates:[control=>{
            return this.baseValidateService.baseValidate(control,{required:true,maxlength:15});
          }]
        },
        {
          type:"radio",
          label:"服务区域",
          prop:"serviceRange",
          removeValidateUrl:"",
          placeholder:"商品发布范围",
          defaultValue:"2",
          required:true,
          options:[
            {label:"自动覆盖店铺",value:1},
            {label:"自定范围",value:2}
          ],
          switcher:[
            {
              prop:"goodsType",
              showValue:1
            }
          ],
          validates:[data=>{
            let param={prop:"serviceRange",formModel:this.formModel};
            let error=this.baseValidateService.baseValidate(data,{watchers:true},param);
            return error;
          }]
        },
        {
          label:"选择服务范围",
          type:"baseAreaChoose",
          prop:"goodsServiceRangeDetail",
          defaultValue:"请输入商品服务范围",
          switcher:[
            {
              prop:"serviceRange",
              showValue:"2"
            }
          ]
        },
        {
          type:"select",
          label:"店铺类型",
          prop:"goodsCategory",
          defaultValue:"",
          remoteInfo:{
            baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
            url:"indexPromotion/initJumpTypes.json",
            httpMethod:"post",
            param:{name:"testName",promotionType:"1"},
            convert:data=>{
                let options=[
                  {
                    label:"请选择",
                    value:""
                  }
                ];
                if(data.code=="1"&&data.data){
                  for(let key in data.data){
                    options.push({
                      label:data.data[key],
                      value:key
                    })
                  }
                }
                return options;
            }
          },
          switcher:[
            {
              prop:"sports",
              showValue:3
            }
          ],
          options:[
            {
              label:"休闲食品",
              value:"0"
            },
            {
              label:"家居日化",
              value:"1"
            }
          ],
          placeholder:"请选择分类",
          required:true,
          validates:[
            control=>{
              let param={prop:"sex",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{watchers:true},param);
            }
          ],
        },
        {
          type:"checkbox",
          label:"店铺标签",
          prop:"sports",
          options:[
            {
              label:"放心",
              value:"0"
            },
            {
              label:"专业",
              value:"1"
            },
            {
              label:"卫生",
              value:"2"
            },
            {
              label:"全面",
              value:"3"}
          ],
          placeholder:"请输入名称",
          defaultValue:"2",
          required:true,
          validates:[control=>{
            let param={prop:"sports",formModel:this.formModel,grandfather:"sports",formGroup:this.formGroup};
            this.baseValidateService.baseValidate(control,{checkboxRequired:true,checkboxWatchers:true},param)
          }]
        },
        {
          type:"input",
          label:"一句话简评",
          prop:"shotJump",
          placeholder:"简要介绍",
          defaultValue:"",
          required:true,
          validates:[
            control=>{
              let param={prop:"shotJump",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{required:true,maxlength:5},param);
            }
          ]
        },
        {
          type:"input",
          label:"门店地址",
          prop:"address",
          placeholder:"门店地址",
          defaultValue:"",
          required:true,
          validates:[
            control=>{
              let param={prop:"address",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{required:true,number:"###.##",maxvalue:"9999.99",minvalue:"0.01",maxlength:5},param);
            }
          ]
        },
        {
          type:"input",
          label:"店铺简介",
          prop:"introduce",
          placeholder:"introduce",
          defaultValue:"",
          required:true,
          validates:[
            control=>{
              let param={prop:"introduce",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{required:true},param);
            }
          ]
        },
        {
          type:"checkbox",
          label:"售后说明",
          prop:"afterSale",
          options:[
            {
              label:"7天无理由退换",
              value:"0"
            }
          ],
          placeholder:"请输入名称",
          defaultValue:"2",
          required:true,
          validates:[control=>{
            let param={prop:"afterSale",formModel:this.formModel,grandfather:"afterSale",formGroup:this.formGroup};
            this.baseValidateService.baseValidate(control,{checkboxWatchers:true},param)
          }]
        },
        {
          type:"input",
          label:"商品条码",
          switcher:[{
            prop:"sex",
            showValue:"1"
          }],
          prop:"goodsQurt",
          validates:[
            data=>{
              return this.baseValidateService.baseValidate(data,{required:true,number:"##.##",maxvalue:10,minvalue:0.5})
            }
          ]
        },
        {
          label:"店铺首图",
          prop:"firstPic",
          type:"upload",
          multiple:false,
          uploadClass:{myUploadStyle:true},
          require:true,
          defaultValue:"",
          imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
          validates:[control=>{
            return this.baseValidateService.baseValidate(control,{required:true});
          }]
        },
        {
          label:"店铺宣传图",
          prop:"detailPics",
          type:"array",
          multiple:false,
          uploadClass:{myUploadStyle2:true},
          options:[
            {
              label:"",
              prop:"detailA",
              type:"upload",
              value:"",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailB",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailC",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailD",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailE",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailF",
              type:"upload",
              value:"",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailG",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailH",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailI",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            },
            {
              label:"",
              prop:"detailJ",
              value:"",
              type:"upload",
              multiple:false,
              uploadClass:{myUploadStyle2:true},
              imageConfig:{id:"imgId",url:"imageUrl",detail:"大转盘分享图标大小",size:"<30k","validate":true,extend:".png,.jpeg,.jpg"},
              validates:[control=>{
                console.log(control.value);
                this.baseValidateService.baseValidate(control,{required:true});
              }]
            }
          ],
          validates:[control=>{
            let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
            return this.baseValidateService.baseValidate(control,{arrayUploadRequired:3},param);
          }]
        },
        {
          type:"radio",
          label:"合作形式",
          prop:"isLimit",
          placeholder:"请输入商品名称",
          defaultValue:"1",
          options:[
            {
              label:"合作店铺",
              value:"0"
            },
            {
              label:"展示店铺",
              value:"1"
            }
          ],
          required:true,
          validates:[
            control=>{
              let param={prop:"isLimit",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{watchers:true},param);
            }
          ]
        },
        {
          type:"input",
          label:"每人限购",
          prop:"buyLimitNum",
          placeholder:"请输入商品名称",
          defaultValue:"",
          required:true,
          switcher:[
            {
              prop:"isLimit",
              showValue:"0"
            }
          ],
          validates:[
            control=>{
              let param={prop:"buyLimitNum",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{required:true,number:"###.##",maxvalue:"9999.99",minvalue:"0.01",maxlength:5},param);
            }
          ]
        },
      ]
    };
    this.initForm()
  }


  open(){

  }

  close(data){
    console.log("closedata",data)
  }

  serviceArea;
  chooseResult(data){
    console.log("goods form chooseResult",data);
    this.serviceArea=data;
  }

  submit(){
    console.log("sub sub this.formGroup",this.formGroup.value,this.serviceArea)
    this.baseDataService.listData({url:this.formModel.url,param:this.formGroup.value,httpMethod:"post"}).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error);
      this.router.navigate(["lotteryList"])
    })
  }
}
