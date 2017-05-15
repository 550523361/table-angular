
import {Component, Input, OnInit} from "@angular/core";
import {TableListConfig} from "../model/table.list.config.model";
/**
 * Created by Administrator on 2017/5/15.
 */

@Component({
    selector:"base-pop-component",
    templateUrl:"base.pop.component.html",
    styleUrls:["base.pop.component.css"]
})
export class BasePopComponent implements OnInit{

    /*@Input()*/
    tableListConfig:TableListConfig;

    query={
        queryElements:[
            {
                type:'hidden',
                prop:"upShelves",
                value:"1"
            },
            {
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
            },
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
    }

    ngOnInit(){//[{label:'选择',type:"checkbox",prop:"id"}]
        let tableListConfig=new TableListConfig("advert/queryAdvertList.json",
            null,
            [{label:"修改",click:function (item) {console.log(item)}},{label:"",map:{1:'查看',2:'修改',3:'停止'},prop:"state"},{label:"查看"}],
            this.query.queryElements,"post"
        );
        tableListConfig.defaultColumsHeaderMap={
            name:"名称",
            /*state:"状态",*/
            /*jumpParam:"跳转参数",
            sortOrder:"序号",
            picUrl:"图片",*/
            communityName:"小区名称",
            /*communityState:"小区状态",*/
            startDate:"开始时间",
            endDate:"结束时间",
            /*stateName:"状态名称",
            jumpTypeName:"跳转名称",*/
            pageTypeName:"页面类型"
        };
        this.tableListConfig=tableListConfig;
    }
}