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
          label:"小区选择",
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
                param:{extend:"pid"},
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
                param:{extend:"pid"},
                propMap:{areaProvinceId:"provinceId",areaCityId:"cityId",areaDistrictId:"districtId"},
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
                param:{extend:"pid"},
                propMap:{areaProvinceId:"provinceId",areaCityId:"cityId",areaDistrictId:"districtId"},
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
                param:{cityId:"testName",promotionType:"1",extend:"pid"},
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
        {
          label:"区域选择",
          type:"array",
          prop:"areaChoose",
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
                param:{extend:"pid"},
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
                param:{extend:"pid"},
                propMap:{provinceId:"provinceId",cityId:"cityId",districtId:"districtId"},
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
                param:{extend:"pid"},
                propMap:{provinceId:"provinceId",cityId:"cityId",districtId:"districtId"},
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
              label:"环",
              prop:"rings",
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
                url:"ring/queryOpeningRingList.json",
                httpMethod:"get",
                param:{},
                propMap:{provinceId:"provinceId",cityId:"cityId",districtId:"districtId"},
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
              label:"添加",
              prop:"addAreaBtn",
              type:"button",
              defaultValue:"",
              click:data=>{
                console.log(data)
                let area={};
                data.forEach(item=>{
                  area[item.prop]=item.value;
                });
                this.chooseArea(area);
              }
            }
          ],
          validates:[control=>{
            let param={prop:"provinceId",formModel:this.formModel,grandfather:"areaChoose",formGroup:this.formGroup};
            return this.baseValidateService.baseValidate(control,{arrayWatchers:1},param);
          }]
        }

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
  chooseArray=[];
  chooseCommunity(community){
    let result=this.findCommunity(community.id);
    if(!community["checked"]||community["checked"]==false){
      if(!result){
        community["checked"]=true;
        this.chooseArray.push(community);
      }
    }else{
      result["checked"]=false;
      this.removeCommunity(community.id);
    }
  }

  findCommunity(findId){
    let findCommunity=this.chooseArray.filter(community=>{
      if(community.id==findId){
        return community;
      }
    });
    return findCommunity.length==0?null:findCommunity[0];
  }

  removeCommunity(removeId){
    let index=-1;
    let findIndex=this.chooseArray.forEach((community,seq)=>{
      if(community.id==removeId){
        index=seq;
      }
    });
    this.chooseArray.splice(index,1);
  }

  chooseAreaArray=[];

  chooseArea(area){
    let checkResult=this.checkAreaCanAdd(area);
    if(!checkResult){
      this.addArea(area);
    }
  }

  checkAreaCanAdd(area){
    /*1：检查区域 被覆盖，2：检查区域 覆盖区域，3：检查区域覆盖小区*/
    let result;
    this.chooseAreaArray.forEach(arrayArea=>{
      if(arrayArea.provinceId==area.provinceId){
        if(arrayArea.cityId==""){
          result=arrayArea;/*被省覆盖 不添加当前区域*/
          return;
        }
        if(arrayArea.cityId==area.cityId){
          if(arrayArea.districtId==""&&arrayArea.rings==""){
            result=arrayArea;/*被城市覆盖 不添加当前区域*/
            return;
          }
        }
        if(arrayArea.districtId==area.districtId){
          if(arrayArea.rings==""){
            result=arrayArea;/*被城区覆盖 不添加当前区域*/
            return;
          }else if(arrayArea.rings>=area.rings){
            result=arrayArea;/*被城大环覆盖 不添加当前区域*/
            return;
          }
        }
      }
    });
    console.log(result,area);

    let areaDeleteArr=[];
    /*查找被覆盖的区域*/
    this.chooseAreaArray.forEach(arrayArea=>{
      if(arrayArea.provinceId==area.provinceId){
        if(area.cityId==""){
            areaDeleteArr.push(arrayArea);/*省覆盖省下面任何区域*/
            return;
        }
        if(arrayArea.cityId==area.cityId){
          if(area.districtId==""&&area.rings==""){
            areaDeleteArr.push(arrayArea);/*城市覆盖下面任何区域*/
          }else if(area.districtId==""&&area.rings!=""&&area.rings>arrayArea.rings){
            areaDeleteArr.push(arrayArea);/*没区环 覆盖环*/
          }else if(area.districtId==arrayArea.districtId){
            if(area.rings==""){
              areaDeleteArr.push(arrayArea);/*区 覆盖区下所有*/
            }else if(area.rings>arrayArea.rings){
              areaDeleteArr.push(arrayArea);/*大环 覆盖小环*/
            }
          }
        }
      }
    });
    console.log("delete array",areaDeleteArr);
    this.removeArea(areaDeleteArr);
    return result;
  }

  findArea(findId){
    let findCommunity=this.chooseAreaArray.filter(community=>{
      if(community.id==findId){
        return community;
      }
    });
    return findCommunity.length==0?null:findCommunity[0];
  }

  addArea(area){
    this.chooseAreaArray.push(area);
  }

  removeArea(deleteArray){
    deleteArray.forEach(deleteArea=>{
      let index=-1;
      let findIndex=this.chooseAreaArray.forEach((area,seq)=>{
        if(area.provinceId==deleteArea.provinceId&&area.cityId==deleteArea.cityId&&area.districtId==deleteArea.districtId&&area.rings==deleteArea.rings){
          index=seq;
        }
      });
      this.chooseAreaArray.splice(index,1);
    })
  }

}
