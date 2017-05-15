import {
    Component, SimpleChange, OnChanges, OnInit, Input, DoCheck, IterableDiffer,
    KeyValueDiffer, KeyValueDiffers, IterableDiffers, KeyValueChangeRecord
} from "@angular/core";
import {TableListConfig} from "../model/table.list.config.model";
import {TableListSimpleConfig} from "../model/table.list.simple.config.model";
/**
 * Created by Administrator on 2017/5/15.
 */

@Component({
    selector:"base-pop-component",
    templateUrl:"base.pop.component.html",
    styleUrls:["base.pop.component.css"]
})
export class BasePopComponent implements OnInit,OnChanges,DoCheck{

    /*@Input()*/
    tableListConfig:TableListConfig;

    @Input()
    set simpleConfig(data:TableListSimpleConfig){
        this._keyValueDiffer = this._keyValueDiffers.find(data).create(null);
        this.simpleConfigData=data;
    };
    private _keyValueDiffer: KeyValueDiffer;
    private simpleConfigData:TableListSimpleConfig;
    query={
        queryElements:[
            /*{
                label:'请选择省',
                type:'select',
                placeholder:'请输入省',
                dataUrl:'citys/queryOpeningCitiesList.json',
                prop:'provinceId',
                initQuery:true,
                defaultValue:"",
                propList:'provinceList',
                propKeyList:'provinceList',
                propValueList:'citiesList',
                casecadeParen:"",
                casecadeChild:"cityId",
                casecadeGrandsonList:["cityId","districtId","communityId"]
            },
            {
                label:'请选择市',
                type:'select',
                defaultValue:"",
                placeholder:'请输入市',
                dataUrl:'citys/queryOpeningCitiesList.json',
                prop:'cityId',
                extendsProp:["pid"],
                propList:'cityList',
                propKeyList:'cityList',
                propValueList:'citiesList',
                casecadeParen:"provinceId",
                casecadeChild:"districtId",
                casecadeGrandsonList:["districtId","communityId"]
            },
            {
                label:'请选择区',
                defaultValue:"",
                type:'select',
                dataUrl:'citys/queryOpeningCitiesList.json',
                placeholder:'请选择区',
                prop:'districtId',
                extendsProp:["pid"],
                propList:'districtList',
                propKeyList:'districtList',
                propValueList:'citiesList',
                casecadeParen:"cityId",
                casecadeChildDataUrl:"community/queryCommunitiesList.json",
                casecadeChildListProp:"data",
                casecadeChild:"",
                queryParam:"cityId"
            },*/
            {
                label:'小区名称',
                type:'input',
                placeholder:'小区名称',
                prop:'communityIdStr'
            },
            {
                label:'商品名称',
                type:'input',
                placeholder:'商品名称',
                prop:'name'
            }
        ]
    };


    constructor(
        public _iterableDiffers: IterableDiffers, public _keyValueDiffers: KeyValueDiffers
    ){

    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        //console.log("this.simpleConfig",this.simpleConfig)
        for (let propName in changes) {
            let changedProp = changes[propName];
            console.log(propName,changedProp);

        }
    }

    ngDoCheck():void{
        if(this._keyValueDiffers) {
            const changes = this._keyValueDiffer.diff(this.simpleConfigData);
            if (changes) {
                console.log("this.simpleConfig",changes)
                this.whatIsChanged(changes);
            }
        }
    }

    whatIsChanged(changes){
        changes.forEachAddedItem(
            (record: KeyValueChangeRecord) => {
                console.log("Added item",record.key, record.currentValue)
            });

        changes.forEachChangedItem(
            (record: KeyValueChangeRecord) => {
                console.log("change item",record.key, record.currentValue)
            });

        changes.forEachRemovedItem((record: KeyValueChangeRecord) => {
            if (record.previousValue) {
               console.log("remove",record)
            }
        });
    }

    createTableListConfig(data){

    }

    ngOnInit(){
        let tableListConfig=new TableListConfig("advert/queryAdvertList.json",
            null,
            [{label:"选择",click:function (item) {console.log(item)}}],
            this.query.queryElements,"post"
        );
        tableListConfig.defaultColumsHeaderMap={
            name:"名称",
            communityName:"小区名称",
            startDate:"开始时间",
            endDate:"结束时间",
            pageTypeName:"页面类型"
        };
        this.tableListConfig=tableListConfig;
    }
}