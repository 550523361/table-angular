import {Component, OnInit} from "@angular/core";
import {BaseDataService} from "../service/base.data.service";
import {BaseFormCreateComponentNew} from "./base.from.create.component.new";
import {FormBuilder} from "@angular/forms";
import {BaseValidateService} from "../service/base.validate.service";
/**
 * Created by Administrator on 2017/5/10.
 */


@Component({
  selector:"base-area-choose",
  templateUrl:"base.area.choose.component.html",
  styleUrls:["base.from.create.component.css","base.area.choose.component.css"],
  providers:[BaseDataService,BaseValidateService]
})
export class BaseAreaChooseComponent extends BaseFormCreateComponentNew implements OnInit{
  constructor(
    public formBuilder:FormBuilder,
    public baseDataService:BaseDataService,
    public baseValidateService:BaseValidateService
  ){
    super(formBuilder,baseDataService);

  }

  ngOnInit(){
    this.formModel={
      url:"goods/saveGoods.json",
      elements:[
        /*{
          type:"select",
          label:"商品分类",
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
          type:"input",
          label:"商品名称",
          prop:"goodsName",
          placeholder:"请输入商品名称",
          defaultValue:"",
          required:true,
          validates:[
            control=>{
              let param={prop:"goodsName",formModel:this.formModel};
              return this.baseValidateService.baseValidate(control,{required:true,maxlength:5},param);
            }
          ]
        },
        {
          type:"radio",
          label:"是否限购",
          prop:"isLimit",
          placeholder:"请输入商品名称",
          defaultValue:"1",
          options:[
            {
              label:"是",
              value:"0"
            },
            {
              label:"否",
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
          type:"select",
          label:"送达说明",
          prop:"arriveInfo",
          placeholder:"送达说明",
          defaultValue:"1",
          required:true,
          options:[
            {
              label:"半小时",
              value:"0"
            },
            {
              label:"1小时",
              value:"1"
            }
          ],
          validates:[
            control=>{
              let param={prop:"arriveInfo",formModel:this.formModel};
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
        },*/
        {
          label:"活动时间",
          type:"array",
          prop:"activeTime",
          noNeedValidateElement:true,
          options:[
            {
              label:"",
              prop:"provinceId",
              defaultValue:"",
              type:"select",
              value:"",
              init:true,
              options:[
                {
                  label:"请选择省",
                  value:"0"
                }
              ],
              remoteInfo:{
                baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
                url:"citys/queryOpeningCitiesList.json",
                httpMethod:"get",
                param:{name:"testName",promotionType:"1"},
                convert:data=>{
                  let options=[
                    {
                      label:"请选择",
                      value:""
                    }
                  ];
                  if(data&&data.citiesList){
                    data.citiesList.forEach(
                      item=>{
                        options.push({
                          label:item["name"],
                          value:item["id"]
                        })
                      }
                    )
                  }
                  return options;
                }
              },
              validates:[
                control=>{
                console.log("aaaaaaaaaaaaaaaaaaaaaaa",control)
                  let param={prop:"province",formModel:this.formModel,grandfather:"activeTime",formGroup:this.formGroup};
                  this.baseValidateService.baseValidate(control,{checkboxWatchers:true},param)
                }
              ]
            },
            {
              label:"市",
              prop:"cityId",
              defaultValue:"",
              type:"select",
              switchers:[
                {
                  prop:"provinceId",
                  showValue:"0"
                }
              ],
              value:"",
              remoteInfo:{
                baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
                url:"citys/queryOpeningCitiesList.json",
                httpMethod:"get",
                param:{name:"testName",promotionType:"1"},
                convert:data=>{
                  let options=[
                    {
                      label:"请选择",
                      value:""
                    }
                  ];
                  if(data&&data.citiesList){
                    data.citiesList.forEach(
                      item=>{
                        options.push({
                          label:item["name"],
                          value:item["id"]
                        })
                      }
                    )
                  }
                  return options;
                }
              }
            },
            {
              label:"区",
              prop:"districtId",
              defaultValue:"",
              type:"select",
              switchers:[
                {
                  prop:"cityId",
                  showValue:"0"
                }
              ],
              value:"",
              remoteInfo:{
                baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
                url:"citys/queryOpeningCitiesList.json",
                httpMethod:"get",
                param:{name:"testName",promotionType:"1"},
                convert:data=>{
                  let options=[
                    {
                      label:"请选择",
                      value:""
                    }
                  ];
                  if(data&&data.citiesList){
                    data.citiesList.forEach(
                      item=>{
                        options.push({
                          label:item["name"],
                          value:item["id"]
                        })
                      }
                    )
                  }
                  return options;
                }
              }
            },
            {
              label:"小区名称",
              prop:"communityName",
              type:"input",
              defaultValue:"",
              remoteInfo:{
                baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
                url:"community/queryCommunitiesList.json",
                httpMethod:"get",
                param:{cityId:"testName",promotionType:"1"},
                convert:data=>{
                  let options=[
                    {
                      label:"请选择",
                      value:""
                    }
                  ];
                  if(data&&data.citiesList){
                    data.citiesList.forEach(
                      item=>{
                        options.push({
                          label:item["name"],
                          value:item["id"]
                        })
                      }
                    )
                  }
                  return options;
                }
              }
            },
            {
              label:"搜索",
              prop:"searchBtn",
              type:"searchBtn",
              defaultValue:"",
              click:data=>{
                  console.log(data);
                this.queryCommunityList(data);
              }
            }
          ],
          validates:[control=>{
            let param={prop:"provinceId",formModel:this.formModel,grandfather:"activeTime",formGroup:this.formGroup};
            return this.baseValidateService.baseValidate(control,{arrayWatchers:1},param);
          }]
        },

      ]
    };
    this.initForm()
  }

  queryResultCommunityList;
  queryCommunityList(data){
    let queryParmaBody={};
    data.activeTime.forEach(item=>{
      queryParmaBody[item.prop]=item.value;
    })
    let queryParam={
      baseUrl:"https://testbackend.goodaa.com.cn/ejiazi-backend/",
      url:"community/queryCommunitiesList.json",
      httpMethod:"get",
      param:queryParmaBody
    }
    this.baseDataService.listData(queryParam).subscribe(resultDataRemote=>{
      let resultData=resultDataRemote.json();
      if(resultData&&resultData.code==1){
        this.queryResultCommunityList=resultData.data;
      }
    });
  }

}
