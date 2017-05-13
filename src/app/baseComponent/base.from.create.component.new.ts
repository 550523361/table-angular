import {Component} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl} from "@angular/forms";
import {BaseDataService} from "../service/base.data.service";

@Component({
  template:"<span></span>"
})
export class BaseFormCreateComponentNew{

  formGroup:FormGroup;
  formModel;
  constructor( public formBuilder:FormBuilder,public baseDataService:BaseDataService){

  }

  submit(){
    console.log("submit data....")
  }

  initForm(){
      this.formGroup=this.formBuilder.group(this.recreateFormByModel());
  }

  operateUtil($event,element,operateType,formControl,index){
    $event.stopPropagation();
    $event.preventDefault();
    console.log(element,operateType,formControl,index,typeof formControl,formControl instanceof FormControl);
    if(operateType=="remove"){
      formControl.setValue("");
    }else if(operateType=="left"){
      let groupArray=this.formGroup.get(element.prop) as FormArray;
      let options=groupArray.controls;
      let operateOption=options.splice(index,1)[0];
      options.splice(index-1,0,operateOption);
    }else if(operateType=="right"){
      let groupArray=this.formGroup.get(element.prop) as FormArray;
      let options=groupArray.controls;
      let operateOption=options.splice(index,1)[0];
      options.splice(index+1,0,operateOption);
    }
  }

  recreateFormByModel(){
    let formGroupModel={};
    this.formModel.elements.forEach(item=>{
      if(item.type=="checkbox"){
        const addressFGs = item.options.map(option => {
          let optionModel={};
          for(let prop in option){
            if(prop=="value"){
              optionModel[prop]=[option[prop],item.validates];
            }else{
              optionModel[prop]=[option[prop]];
            }
          }
          if(item.type=="checkbox"){
            optionModel["checked"]=[item.defaultValue==option.value,item.validates];
          }

          if(option.type=="select"){
            if(option.remoteInfo!=null){
              this.baseDataService.listData({url:option.remoteInfo.url,param:option.remoteInfo.param,httpMethod:option.remoteInfo.httpMethod}).subscribe(data=>{
                item["options"+option.prop]=option.remoteInfo.convert(data.json())||data.json();
              })
            }
          }

          return this.formBuilder.group(optionModel);
        });
        const addressFormArray = this.formBuilder.array(addressFGs);
        formGroupModel[item.prop]=addressFormArray;
        if(item.type=="array"&&!item.noNeedValidateElement==true){
          formGroupModel[item.prop+"LinkValidate"]=[item.defaultValue,[control=>{
            if(control.value!=""){
              return {"required":control.value}
            }
          }]];
        }
      }else if(item.type=="array"){
        let keyPropMap={};
        const addressFGs = item.options.map((option,index) => {
          option["value"]=[option["value"],item.validates];
          keyPropMap[option.prop]=index;
          if(option.type=="select"){
            if(option.remoteInfo!=null&&option.init){
              this.baseDataService.listData({url:option.remoteInfo.url,param:option.remoteInfo.param,httpMethod:option.remoteInfo.httpMethod}).subscribe(data=>{
                option["options"]=option.remoteInfo.convert(data.json())||data.json();
              })
            }
          }
          return this.formBuilder.group(option);
        });
        item["keyPropMap"]=keyPropMap;
        const addressFormArray = this.formBuilder.array(addressFGs);
        formGroupModel[item.prop]=addressFormArray;
        if(item.type=="array"&&!item.noNeedValidateElement==true){
          formGroupModel[item.prop+"LinkValidate"]=[item.defaultValue,[control=>{
            if(control.value!=""){
              return {"required":control.value}
            }
          }]];
        }
      }else if(item.type=="select"){
        if(item.remoteInfo!=null){
          this.baseDataService.listData({url:item.remoteInfo.url,param:item.remoteInfo.param,httpMethod:item.remoteInfo.httpMethod}).subscribe(data=>{
            item.options=item.remoteInfo.convert(data.json())||data.json();
          })
        }
        formGroupModel[item.prop]=[item.defaultValue,item.validates,item.asyncValidates];
      }else{
        formGroupModel[item.prop]=[item.defaultValue,item.validates,item.asyncValidates];
      }
    });
    return formGroupModel;
  }
}
