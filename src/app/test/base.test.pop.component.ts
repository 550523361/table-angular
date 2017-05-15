import {Component, OnInit} from "@angular/core";
import {TableListSimpleConfig} from "../model/table.list.simple.config.model";
/**
 * Created by Administrator on 2017/5/15.
 */


declare var layer;
declare var $;
declare var _;

@Component({
    selector:"base-pop-test",
    templateUrl:"base.test.pop.component.html",
    styleUrls:["base.test.pop.component.css"]
})
export  class BaseTestPopComponent implements OnInit{
    simpleConfig:TableListSimpleConfig;
    ngOnInit(){
        this.simpleConfig=new TableListSimpleConfig("acs");
       /* setInterval(data=>{
            let name=Math.ceil(Math.random()*10000);
            this.simpleConfig.watcher={name:name};
            console.log("nameChanged",name)
        },5000)*/
    }
    popTest(){
        this.simpleConfig.watcher={name:"abc"+Math.ceil(Math.random()*10000)};
        this.popNoCopy($("#testPop"),"70%","60%");
    }

    popNoCopy(dom, width?, height?, callBack?, data?) {
    if (width == undefined) {
        width = "80%";
    }
    if (height == undefined) {
        height = "80%";
    }
    if (!_.contains(width + "", "%")) {
        width += "px";
    }
    if (!_.contains(height + "", "%")) {
        height += "px";
    }
    layer.open({
        title: null,
        type: 1,
        content: dom,
        btn: null,
        closeBtn: null,
        zIndex: layer.zIndex,
        area: [width, height],
        success: function (layer, index) {
            if (typeof  callBack == 'function') {
                callBack(data);
            }
        }
    })
}

}