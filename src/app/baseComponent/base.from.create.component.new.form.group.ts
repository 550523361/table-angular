import {Component} from "@angular/core";
import {FormBuilder, FormGroup, FormArray, FormControl} from "@angular/forms";
import {BaseDataService} from "../service/base.data.service";

@Component({
  selector:"base-form-create-component-new-form-group",
  template:"<span></span>"
})
export class BaseFormCreateComponentNewFormGroup{

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
      if(item.type=="checkbox"||item.type=="array"){
        const addressFormArray = this.formBuilder.array(item.options);
        formGroupModel[item.prop]=addressFormArray;
        if(item.type=="array"){
          formGroupModel[item.prop+"LinkValidate"]=[item.defaultValue,item.validates];
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
