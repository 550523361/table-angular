webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListConfig; });
/**
 * Created by Administrator on 2017/4/21.
 */
var TableListConfig = (function () {
    function TableListConfig(url, colums, operator, query, httpMethod, listAdapter, pager) {
        if (httpMethod === void 0) { httpMethod = 'post'; }
        if (pager === void 0) { pager = {
            pageSizeProp: "rowsPerPage",
            pageSizeQueryProp: "pageSize",
            pageNumProp: "currentPage",
            pageNumQueryProp: "pageNum",
            totalRowsProp: "totalRows",
            pageSize: 3
        }; }
        this.url = url;
        this.colums = colums;
        this.operator = operator;
        this.query = query;
        this.httpMethod = httpMethod;
        this.listAdapter = listAdapter;
        this.pager = pager;
    }
    return TableListConfig;
}());
//# sourceMappingURL=table.list.config.model.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDateChooseDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseDateChooseDirective = (function () {
    function BaseDateChooseDirective(elementPre) {
        this.elementPre = elementPre;
    }
    BaseDateChooseDirective.prototype.onClick = function () {
        var element = this.elementPre.nativeElement;
        var chooseConfig = this.chooseConfig;
        /*添加清空时间框逻辑*/
        $(".laydate_btn #laydate_clear").unbind("click").bind("click", function () {
            var formControl = chooseConfig.control;
            formControl.setValue("");
        });
    };
    BaseDateChooseDirective.prototype.ngOnInit = function () {
        var element = this.elementPre.nativeElement;
        var chooseConfig = this.chooseConfig;
        var dateConfig = chooseConfig.dateConfig;
        this.elementPre.nativeElement.onclick = function (data) {
            laydate({
                elem: "#" + element.id,
                format: dateConfig.format || 'YYYY-MM-DD hh:mm:ss',
                istime: true,
                istoday: false,
                festival: true,
                min: function () {
                    if (dateConfig && dateConfig.next) {
                        var dateTimeString = laydate.now(dateConfig.next * 1);
                        return dateTimeString;
                    }
                    else {
                        return $('input[id*=' + dateConfig.minelementid).val();
                    }
                }(),
                max: $('input[id*=' + dateConfig.maxelementid).val(),
                choose: function (dates) {
                    var formControl = chooseConfig.control;
                    formControl.setValue(dates);
                }
            });
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseDateChooseDirective.prototype, "chooseConfig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaseDateChooseDirective.prototype, "onClick", null);
    BaseDateChooseDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[dateChoose]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], BaseDateChooseDirective);
    return BaseDateChooseDirective;
    var _a;
}());
//# sourceMappingURL=base.date.choose.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"formGroup\" (ngSubmit)=\"submit(formGroup.value)\">\r\n  <div *ngFor=\"let element of formModel.elements;let i = index;\" [ngSwitch]=\"element.type\" class=\"formRow\">\r\n            <span  *ngSwitchCase=\"'input'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"input_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"input_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'baseAreaChoose'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <base-area-choose (chooseResult)=\"chooseResult($event)\"></base-area-choose>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'date'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"date_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"date_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" dateChoose [chooseConfig]=\"{element:element,dateConfig:element.chooseConfig,control:formGroup.get(element.prop)}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'upload'\">\r\n                <div *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                  <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <label for=\"upload_{{element.prop}}_{{i}}\">\r\n                    <span class=\"uploadImageContainer\" [ngClass]=\"element.uploadClass\">\r\n                      <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove')\">×</span>\r\n                      <img *ngIf=\"formGroup.get(element.prop).value\" src=\"{{formGroup.get(element.prop).value.showUrl}}\">\r\n                      <img *ngIf=\"!formGroup.get(element.prop).value\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                      <div class=\"operateBtnContainer\" style=\"display: none;\">\r\n                        <span class=\"left\"  (click)=\"operateUtil($event,element,'left',i)\">←</span>\r\n                        <span class=\"right\" (click)=\"operateUtil($event,element,'right',i)\">→</span>\r\n                      </div>\r\n                    </span>\r\n                  </label>\r\n                  <input type=\"file\" [multiple]=\"element.multiple\" fileUpload=\"element\" [accept]=\"element.imageConfig.extend\" [uploadConfig]=\"{formControl:formGroup.get(element.prop),config:element.imageConfig}\" id=\"upload_{{element.prop}}_{{i}}\" >\r\n                  <input type=\"hidden\" id=\"upload_{{element.prop}}_{{i}}_hidden\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'radio'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <span *ngFor=\"let option of element.options;let i=index;\">\r\n                          <input type=\"radio\"  id=\"radio_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\" [checked]=\"option.value==element.defaultValue\" value=\"{{option.value}}\" formControlName=\"{{element.prop}}\">\r\n                          <label for=\"radio_{{element.prop}}_{{i}}\">{{option.label}}</label>\r\n                      </span>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'checkbox'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                    <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                    <span formArrayName=\"{{element.prop}}\">\r\n                        <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                              <input type=\"checkbox\"  id=\"{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                              <label for=\"{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                        </span>\r\n                    </span>\r\n                    <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'select'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <select formControlName=\"{{element.prop}}\" id=\"select_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\">\r\n                        <option *ngFor=\"let option of element.options;let i=index;\" [selected]=\"option.value==element.defaultValue\" value=\"{{option.value}}\">{{option.label}}</option>\r\n                      </select>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'array'\">\r\n                <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                <input type=\"hidden\" formControlName=\"{{element.prop}}LinkValidate\">\r\n                <span formArrayName=\"{{element.prop}}\" class=\"arrayElementsContainer\">\r\n                        <span *ngFor=\"let optionFormControl of formGroup.get(element.prop).controls;let ii=index;let first=first;let last=last;\" [formGroupName]=\"ii\">\r\n                               <span [ngSwitch]=\"optionFormControl.value.type\" class=\"formRowArray\">\r\n                                      <span  *ngSwitchCase=\"'input'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"formLeftLabelArray\" for=\"array_input_{{optionFormControl.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <input type=\"text\" id=\"array_input_{{optionFormControl.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'date'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"formLeftLabelArray\" for=\"array_date_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <input type=\"text\" id=\"array_date_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\" name=\"{{element.prop}}\" dateChoose [chooseConfig]=\"{element:element,dateConfig:optionFormControl.value.chooseConfig,control:optionFormControl.controls['value']}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'upload'\">\r\n                                          <span *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                                            <label class=\"formLeftLabelArray\"><span *ngIf=\"optionFormControl.value.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <label for=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\">\r\n                                              <span class=\"uploadImageContainer\" [ngClass]=\"optionFormControl.value.uploadClass\">\r\n                                                <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove',optionFormControl.controls['value'])\" title=\"删除图片\">×</span>\r\n                                                <img *ngIf=\"optionFormControl.value.value.showUrl!=''&&optionFormControl.value.value.showUrl!=null&&optionFormControl.value.value.showUrl!=undefined\" src=\"{{optionFormControl.value.value.showUrl}}\">\r\n                                                <img *ngIf=\"optionFormControl.value.value.showUrl==''||optionFormControl.value.value.showUrl==null||optionFormControl.value.value.showUrl==undefined\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                                                <div class=\"operateBtnContainer\">\r\n                                                  <span class=\"left\" *ngIf=\"first\" style=\"width: 0px;padding: 0px;\"></span>\r\n                                                  <span class=\"left\" *ngIf=\"!first\"  (click)=\"operateUtil($event,element,'left',optionFormControl.controls['value'],ii)\" title=\"向左移动\">←</span>\r\n                                                  <span class=\"right\" *ngIf=\"last\" style=\"width: 0px;padding: 0px;\">→</span>\r\n                                                  <span class=\"right\" *ngIf=\"!last\" (click)=\"operateUtil($event,element,'right',optionFormControl.controls['value'],ii)\" title=\"向右移动\">→</span>\r\n                                                </div>\r\n                                              </span>\r\n                                            </label>\r\n                                            <input type=\"file\" [multiple]=\"optionFormControl.value.multiple\" fileUpload=\"optionFormControl.value\" [accept]=\"optionFormControl.value.imageConfig.extend\" [uploadConfig]=\"{formControl:optionFormControl.controls['value'],config:optionFormControl.value.imageConfig}\" id=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\" >\r\n                                            <input type=\"hidden\" id=\"array_upload_{{optionFormControl.value.prop}}_{{i}}_hidden\" name=\"{{optionFormControl.value.prop}}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of optionFormControl.errors|keys \">{{optionFormControl.errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <!--<span  *ngSwitchCase=\"'radio'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                                <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                                                <span *ngFor=\"let option of element.options;let i=index;\">\r\n                                                    <input type=\"radio\"  id=\"array_radio_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\" [checked]=\"option.value==element.defaultValue\" value=\"{{option.value}}\" formControlName=\"{{element.prop}}\">\r\n                                                    <label for=\"array_radio_{{element.prop}}_{{i}}\">{{option.label}}</label>\r\n                                                </span>\r\n                                                <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'checkbox'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                              <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                                              <span formArrayName=\"{{element.prop}}\">\r\n                                                  <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                                                        <input type=\"checkbox\"  id=\"array_{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                                                        <label for=\"array_{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                                                  </span>\r\n                                              </span>\r\n                                              <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>-->\r\n                              </span>\r\n                        </span>\r\n                 </span>\r\n                <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop+'LinkValidate').errors|keys \">{{formGroup.get(element.prop+'LinkValidate').errors[key]}}</span>\r\n            </span>\r\n  </div>\r\n  <div class=\"submitBtnContainer\">\r\n    <input type=\"submit\" value=\"提交\" class=\"submitBtn\" [disabled]=\"formGroup.status=='INVALID'\" >\r\n  </div>\r\n</form>\r\n<!--{{formGroup.value|json}}-->\r\n"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseDataService = (function () {
    function BaseDataService(http, route) {
        this.http = http;
        this.route = route;
        //https://testbackend.goodaa.com.cn
        this.baseUrl = "/ejiazi-backend/";
    }
    BaseDataService.prototype.get = function () {
    };
    BaseDataService.prototype.list = function (param) {
        return this.http.post(param.url, param.body, param.options);
    };
    BaseDataService.prototype.listData = function (param) {
        if (param == null)
            return;
        var loginUser = JSON.parse($.cookie("login_user") || "{}");
        if (!loginUser.isLogin && param.url != "login.json") {
            this.route.navigate(["login"]);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (Observable) {
                Observable.next({ error: "noLogin", json: function (data) { return {}; } });
            });
        }
        var heraders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        option.headers = param.headers || heraders;
        option.body = param.param;
        var searchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in param.param) {
            param.param[key] = param.param[key] == undefined ? null : param.param[key];
        }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        params.search = searchParam;
        params.body = param.param;
        params.headers = param.headers || heraders;
        params.method = param.httpMethod || 'post';
        params.url = (param.baseUrl || this.baseUrl) + param.url;
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Request */](params);
        //let popId=layer.load(2, {shade: false});
        /*let response:Observable<Response>=params.method=="post"?this.http.request(request,params):this.http.get(params.url+"?"+this.obj2queryString(option.body),option);
        response.subscribe(data=> {
          layer.close(popId);
          return Observable.create((Observable) => {
            console.log("request times",params.url)
            Observable.next(data);
          })
        });
        return response;*/
        return params.method == "post" ? this.http.request(request, params) : this.http.get(params.url + "?" + this.obj2queryString(option.body), option);
    };
    BaseDataService.prototype.save = function () {
    };
    BaseDataService.prototype.delete = function () {
    };
    BaseDataService.prototype.update = function () {
    };
    /**
     * js对象转查询字符串
     * @param obj 被转对象
     * @returns {string}
     */
    BaseDataService.prototype.obj2queryString = function (obj) {
        var queryString = "";
        if (obj) {
            var isNotFirst = false;
            for (var key in obj) {
                if (obj[key] != null) {
                    if (isNotFirst) {
                        queryString += "&";
                    }
                    queryString += key + "=" + obj[key];
                    isNotFirst = true;
                }
            }
        }
        return queryString;
    };
    BaseDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BaseDataService);
    return BaseDataService;
    var _a, _b;
}());
//# sourceMappingURL=base.data.service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
/**
 * Created by Administrator on 2017/4/20.
 */
var UserModel = (function () {
    function UserModel(name) {
        this.name = name;
        this.isLogin = false;
    }
    ;
    return UserModel;
}());
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HERO_DI_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });

var HERO_DI_CONFIG = {
    title: 'hero demo test',
    version: "1.0.0"
};
var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* OpaqueToken */]('app.config');
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) {
        console.log(msg);
    };
    LoggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListSimpleConfig; });
/**
 * Created by Administrator on 2017/4/21.
 */
var TableListSimpleConfig = (function () {
    function TableListSimpleConfig(url, colums, operator, query, httpMethod, listAdapter, pager) {
        if (httpMethod === void 0) { httpMethod = 'post'; }
        if (pager === void 0) { pager = {
            pageSizeProp: "rowsPerPage",
            pageSizeQueryProp: "pageSize",
            pageNumProp: "currentPage",
            pageNumQueryProp: "pageNum",
            totalRowsProp: "totalRows",
            pageSize: 3
        }; }
        this.url = url;
        this.colums = colums;
        this.operator = operator;
        this.query = query;
        this.httpMethod = httpMethod;
        this.listAdapter = listAdapter;
        this.pager = pager;
    }
    return TableListSimpleConfig;
}());
//# sourceMappingURL=table.list.simple.config.model.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Administrator on 2017/4/17.
 */
var UserService = (function () {
    function UserService() {
        this.isAuth = false;
    }
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(533);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userLoginService, router) {
        this.userLoginService = userLoginService;
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.activate = function (event) {
        console.log('>>>>>>>>>>>>', event);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(597),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */]],
            styles: [__webpack_require__(587)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loginComponent__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directive_highlight_directive__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_demo_form_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_login_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lottery_lottery_list_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__baseComponent_base_table_list_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__baseComponent_base_table_list_pager_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__baseComponent_base_table_list_query_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_base_table_list_config_form_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__baseComponent_base_from_create_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directive_base_upload_directive__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__merchant_goods_form_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__baseComponent_base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__baseComponent_base_model_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__merchant_create_goods_form_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__merchant_create_goods_form_component_form_group__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directive_base_upload_directive_form_group__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directive_base_date_choose__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__baseComponent_base_area_choose_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__merchant_create_merchant_form_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__baseComponent_base_pop_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__merchant_create_mallGoodsCatogery_form_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__test_base_test_pop_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__main_main_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































// 定义常量 嵌套自路由
var appChildRoutes = [
    {
        path: "goods",
        component: __WEBPACK_IMPORTED_MODULE_22__merchant_create_goods_form_component__["a" /* CreateGoodsFormComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__["a" /* MainComponentGuard */]]
    },
    { path: "createMerchant", component: __WEBPACK_IMPORTED_MODULE_27__merchant_create_merchant_form_component__["a" /* CreateMerchantFormComponent */] } /*,
    {
      path: '**', redirectTo: "goods"
    }*/
];
var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__loginComponent__["a" /* LoginComponent */]
    },
    {
        path: "hero",
        component: __WEBPACK_IMPORTED_MODULE_7__hero_component__["a" /* HeroComponent */]
    },
    {
        path: "demoForm",
        component: __WEBPACK_IMPORTED_MODULE_9__form_demo_form_component__["a" /* DemoFormComponent */]
    },
    {
        path: "lotteryList",
        component: __WEBPACK_IMPORTED_MODULE_11__lottery_lottery_list_component__["a" /* LotteryListComponent */]
    },
    {
        path: "listConfig",
        component: __WEBPACK_IMPORTED_MODULE_15__utils_base_table_list_config_form_component__["a" /* BaseTableListConfigFormComponent */]
    },
    {
        path: "formCreate",
        component: __WEBPACK_IMPORTED_MODULE_16__baseComponent_base_from_create_component__["a" /* BaseFormCreateComponent */]
    },
    {
        path: "goodsForm",
        component: __WEBPACK_IMPORTED_MODULE_19__merchant_goods_form_component__["a" /* GoodsFormComponent */]
    },
    {
        path: "group",
        component: __WEBPACK_IMPORTED_MODULE_23__merchant_create_goods_form_component_form_group__["a" /* CreateGoodsFormComponentFormGroup */]
    },
    {
        path: "areaChoose",
        component: __WEBPACK_IMPORTED_MODULE_26__baseComponent_base_area_choose_component__["a" /* BaseAreaChooseComponent */]
    },
    {
        path: "merchant",
        component: __WEBPACK_IMPORTED_MODULE_27__merchant_create_merchant_form_component__["a" /* CreateMerchantFormComponent */]
    },
    {
        path: "mallCatogery",
        component: __WEBPACK_IMPORTED_MODULE_29__merchant_create_mallGoodsCatogery_form_component__["a" /* CreateMallGoodsCatogeryFormComponent */]
    },
    {
        path: "basePop",
        component: __WEBPACK_IMPORTED_MODULE_28__baseComponent_base_pop_component__["a" /* BasePopComponent */]
    },
    {
        path: "testPop",
        component: __WEBPACK_IMPORTED_MODULE_30__test_base_test_pop_component__["a" /* BaseTestPopComponent */]
    },
    {
        path: "main",
        component: __WEBPACK_IMPORTED_MODULE_31__main_main_component__["a" /* MainComponent */],
        children: appChildRoutes,
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__["a" /* MainComponentGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__["a" /* MainComponentGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__["a" /* MainComponentGuard */]]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_6__loginComponent__["a" /* LoginComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__loginComponent__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directive_highlight_directive__["a" /* HighLightDirective */],
                __WEBPACK_IMPORTED_MODULE_9__form_demo_form_component__["a" /* DemoFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__lottery_lottery_list_component__["a" /* LotteryListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__baseComponent_base_table_list_component__["a" /* BaseTableListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__baseComponent_base_table_list_pager_component__["a" /* BaseTableListPager */],
                __WEBPACK_IMPORTED_MODULE_14__baseComponent_base_table_list_query_component__["a" /* BaseTableListQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__utils_base_table_list_config_form_component__["a" /* BaseTableListConfigFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__baseComponent_base_from_create_component__["a" /* BaseFormCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__baseComponent_base_from_create_component_new__["a" /* BaseFormCreateComponentNew */],
                __WEBPACK_IMPORTED_MODULE_17__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */],
                __WEBPACK_IMPORTED_MODULE_18__directive_base_upload_directive__["a" /* BaseUploadDirective */],
                __WEBPACK_IMPORTED_MODULE_24__directive_base_upload_directive_form_group__["a" /* BaseUploadDirectiveFormGroup */],
                __WEBPACK_IMPORTED_MODULE_19__merchant_goods_form_component__["a" /* GoodsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__baseComponent_base_model_component__["a" /* BaseModelComponent */],
                __WEBPACK_IMPORTED_MODULE_22__merchant_create_goods_form_component__["a" /* CreateGoodsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__merchant_create_goods_form_component_form_group__["a" /* CreateGoodsFormComponentFormGroup */],
                __WEBPACK_IMPORTED_MODULE_25__directive_base_date_choose__["a" /* BaseDateChooseDirective */],
                __WEBPACK_IMPORTED_MODULE_26__baseComponent_base_area_choose_component__["a" /* BaseAreaChooseComponent */],
                __WEBPACK_IMPORTED_MODULE_27__merchant_create_merchant_form_component__["a" /* CreateMerchantFormComponent */],
                __WEBPACK_IMPORTED_MODULE_29__merchant_create_mallGoodsCatogery_form_component__["a" /* CreateMallGoodsCatogeryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__baseComponent_base_pop_component__["a" /* BasePopComponent */],
                __WEBPACK_IMPORTED_MODULE_30__test_base_test_pop_component__["a" /* BaseTestPopComponent */],
                __WEBPACK_IMPORTED_MODULE_31__main_main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__service_login_service__["a" /* UserLoginService */], __WEBPACK_IMPORTED_MODULE_32__guards_MainComponentGuard_main_component_guard__["a" /* MainComponentGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_base_validate_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseAreaChooseComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseAreaChooseComponent = (function (_super) {
    __extends(BaseAreaChooseComponent, _super);
    function BaseAreaChooseComponent(formBuilder, baseDataService, baseValidateService) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseDataService = baseDataService;
        this.baseValidateService = baseValidateService;
        this.chooseResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.chooseArray = [];
        this.chooseAreaArray = [];
    }
    BaseAreaChooseComponent.prototype.noticeChooseResult = function () {
        var communityList = this.chooseArray;
        var areaList = this.chooseAreaArray;
        var data = {
            communityList: communityList,
            areaList: areaList,
            list: areaList.concat(communityList)
        };
        this.noticeWrap(data);
    };
    BaseAreaChooseComponent.prototype.noticeWrap = function (data) {
        console.log("noticeWrap", data);
        this.chooseResult.emit(data);
    };
    BaseAreaChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
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
                    label: "小区选择",
                    type: "array",
                    prop: "communityChoose",
                    noNeedValidateElement: true,
                    options: [
                        {
                            label: "",
                            prop: "provinceId",
                            defaultValue: "",
                            type: "select",
                            value: "",
                            init: true,
                            options: [
                                {
                                    label: "请选择省",
                                    value: "0"
                                }
                            ],
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            },
                            validates: [
                                function (control) {
                                    console.log("aaaaaaaaaaaaaaaaaaaaaaa", control);
                                    var param = { prop: "province", formModel: _this.formModel, grandfather: "activeTime", formGroup: _this.formGroup };
                                    _this.baseValidateService.baseValidate(control, { checkboxWatchers: true }, param);
                                }
                            ]
                        },
                        {
                            label: "市",
                            prop: "cityId",
                            defaultValue: "",
                            type: "select",
                            switchers: [
                                {
                                    prop: "provinceId",
                                    showValue: "0"
                                }
                            ],
                            value: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                propMap: { areaProvinceId: "provinceId", areaCityId: "cityId", areaDistrictId: "districtId" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "区",
                            prop: "districtId",
                            defaultValue: "",
                            type: "select",
                            switchers: [
                                {
                                    prop: "cityId",
                                    showValue: "0"
                                }
                            ],
                            value: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                propMap: { areaProvinceId: "provinceId", areaCityId: "cityId", areaDistrictId: "districtId" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "小区名称",
                            prop: "communityName",
                            type: "input",
                            defaultValue: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "community/queryCommunitiesList.json",
                                httpMethod: "get",
                                param: { cityId: "testName", promotionType: "1", extend: "pid" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "搜索",
                            prop: "searchBtn",
                            type: "searchBtn",
                            defaultValue: "",
                            click: function (data) {
                                console.log(data);
                                _this.queryCommunityList(data);
                            }
                        }
                    ],
                    validates: [function (control) {
                            var param = { prop: "provinceId", formModel: _this.formModel, grandfather: "communityChoose", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayWatchers: 1 }, param);
                        }]
                },
                {
                    label: "区域选择",
                    type: "array",
                    prop: "areaChoose",
                    noNeedValidateElement: true,
                    options: [
                        {
                            label: "",
                            prop: "provinceId",
                            defaultValue: "",
                            type: "select",
                            value: "",
                            init: true,
                            options: [
                                {
                                    label: "请选择省",
                                    value: "0"
                                }
                            ],
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            },
                            validates: [
                                function (control) {
                                    var param = { prop: "province", formModel: _this.formModel, grandfather: "activeTime", formGroup: _this.formGroup };
                                    _this.baseValidateService.baseValidate(control, { checkboxWatchers: true }, param);
                                }
                            ]
                        },
                        {
                            label: "市",
                            prop: "cityId",
                            defaultValue: "",
                            type: "select",
                            switchers: [
                                {
                                    prop: "provinceId",
                                    showValue: "0"
                                }
                            ],
                            value: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                propMap: { provinceId: "provinceId", cityId: "cityId", districtId: "districtId" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "区",
                            prop: "districtId",
                            defaultValue: "",
                            type: "select",
                            switchers: [
                                {
                                    prop: "cityId",
                                    showValue: "0"
                                }
                            ],
                            value: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "citys/queryOpeningCitiesList.json",
                                httpMethod: "get",
                                param: { extend: "pid" },
                                propMap: { provinceId: "provinceId", cityId: "cityId", districtId: "districtId" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "环",
                            prop: "rings",
                            defaultValue: "",
                            type: "select",
                            switchers: [
                                {
                                    prop: "cityId",
                                    showValue: "0"
                                }
                            ],
                            value: "",
                            remoteInfo: {
                                baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                                url: "ring/queryOpeningRingList.json",
                                httpMethod: "get",
                                param: {},
                                propMap: { provinceId: "provinceId", cityId: "cityId", districtId: "districtId" },
                                convert: function (data) {
                                    var options = [
                                        {
                                            label: "请选择",
                                            value: ""
                                        }
                                    ];
                                    if (data && data.citiesList) {
                                        data.citiesList.forEach(function (item) {
                                            options.push({
                                                label: item["name"],
                                                value: item["id"]
                                            });
                                        });
                                    }
                                    return options;
                                }
                            }
                        },
                        {
                            label: "添加",
                            prop: "addAreaBtn",
                            type: "button",
                            defaultValue: "",
                            click: function (data) {
                                console.log(data);
                                var area = { name: "" };
                                data.forEach(function (item) {
                                    area[item.prop] = item.value;
                                    var areaName = $("[name=" + item.prop + "]:last option:selected").text();
                                    if (areaName != "请选择" && area[item.prop]) {
                                        area.name += (area.name == "" ? "" : "-") + areaName;
                                    }
                                });
                                _this.chooseArea(area);
                            }
                        }
                    ],
                    validates: [function (control) {
                            var param = { prop: "provinceId", formModel: _this.formModel, grandfather: "areaChoose", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayWatchers: 1 }, param);
                        }]
                }
            ]
        };
        this.initForm();
    };
    BaseAreaChooseComponent.prototype.queryCommunityList = function (data) {
        var _this = this;
        var queryParmaBody = {};
        data.forEach(function (item) {
            queryParmaBody[item.prop] = item.value;
        });
        var queryParam = {
            baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
            url: "community/queryCommunitiesList.json",
            httpMethod: "get",
            param: queryParmaBody
        };
        this.baseDataService.listData(queryParam).subscribe(function (resultDataRemote) {
            var resultData = resultDataRemote.json();
            if (resultData && resultData.code == 1) {
                _this.queryResultCommunityList = resultData.data;
            }
        });
    };
    BaseAreaChooseComponent.prototype.chooseCommunity = function (community) {
        var result = this.findCommunity(community.id, community);
        if (result == 0) {
            return;
        }
        if (!community["checked"] || community["checked"] == false) {
            if (!result) {
                community["checked"] = true;
                this.chooseArray.push(community);
            }
        }
        else {
            result["checked"] = false;
            this.removeCommunity(community.id);
        }
        this.noticeChooseResult();
    };
    BaseAreaChooseComponent.prototype.findCommunity = function (findId, community) {
        if (!this.isCommunityInChooseArea(community)) {
            return 0;
        }
        var findCommunity = this.chooseArray.filter(function (community) {
            if (community.id == findId) {
                return community;
            }
        });
        return findCommunity.length == 0 ? null : findCommunity[0];
    };
    BaseAreaChooseComponent.prototype.removeCommunity = function (removeId) {
        var index = -1;
        var findIndex = this.chooseArray.forEach(function (community, seq) {
            if (community.id == removeId) {
                community.checked = false;
                index = seq;
            }
        });
        this.chooseArray.splice(index, 1);
        this.noticeChooseResult();
    };
    BaseAreaChooseComponent.prototype.chooseArea = function (area) {
        var checkResult = this.checkAreaCanAdd(area);
        if (!checkResult) {
            this.addArea(area);
        }
        this.noticeChooseResult();
    };
    BaseAreaChooseComponent.prototype.checkAreaCanAdd = function (area) {
        /*1：检查区域 被覆盖，2：检查区域 覆盖区域，3：检查区域覆盖小区*/
        var result;
        this.chooseAreaArray.forEach(function (arrayArea) {
            if (arrayArea.provinceId == area.provinceId) {
                if (arrayArea.cityId == "" && arrayArea.cityId == "" && arrayArea.districtId == "" && arrayArea.rings == "") {
                    result = arrayArea; /*被省覆盖 不添加当前区域*/
                    return;
                }
                if (arrayArea.cityId != "" && arrayArea.cityId == area.cityId && arrayArea.districtId == "" && arrayArea.rings == "") {
                    result = arrayArea; /*被城市覆盖 不添加当前区域*/
                    return;
                }
                if (arrayArea.districtId != "" && arrayArea.cityId == area.cityId && arrayArea.districtId == area.districtId && arrayArea.rings == "") {
                    result = arrayArea; /*被城区覆盖 不添加当前区域*/
                    return;
                }
                if (arrayArea.districtId != "" && arrayArea.cityId == area.cityId && arrayArea.districtId == area.districtId && area.rings != "" && arrayArea.rings != "" && arrayArea.rings >= area.rings) {
                    result = arrayArea; /*被有区环覆盖 不添加当前区域*/
                    return;
                }
                if (arrayArea.districtId == "" && area.districtId == "" && arrayArea.cityId == area.cityId && area.rings != "" && arrayArea.rings != "" && arrayArea.rings >= area.rings) {
                    result = arrayArea; /*被无区环覆盖 不添加当前区域*/
                    return;
                }
                if (arrayArea.districtId == "" && area.districtId != "" && area.rings != "" && arrayArea.cityId == area.cityId && area.rings != "" && arrayArea.rings != "" && arrayArea.rings >= area.rings) {
                    result = arrayArea; /*被无区环覆盖 不添加当前区域*/
                    return;
                }
            }
        });
        console.log(result, area);
        var areaDeleteArr = [];
        /*查找被新区域覆盖的已选择的区域*/
        this.chooseAreaArray.forEach(function (arrayArea) {
            if (arrayArea.provinceId == area.provinceId && arrayArea.cityId == area.cityId &&
                arrayArea.districtId == area.districtId && arrayArea.rings == area.rings) {
                //不要排除自己啊
                return;
            }
            if (arrayArea.provinceId == area.provinceId) {
                if (arrayArea.cityId != "" && area.cityId == "" && area.districtId == "" && area.rings == "") {
                    areaDeleteArr.push(arrayArea); /*省覆盖省下面任何区域*/
                    return;
                }
                if (arrayArea.cityId == area.cityId && area.cityId != "" && area.districtId == "" && area.rings == "" && (arrayArea.districtId != "" || arrayArea.rings != "")) {
                    areaDeleteArr.push(arrayArea); /*城市覆盖其下面任何区域*/
                    return;
                }
                if (arrayArea.districtId == area.districtId && arrayArea.cityId == area.cityId && area.cityId != "" && area.districtId != "" && area.rings == "" && arrayArea.rings != "") {
                    areaDeleteArr.push(arrayArea); /*区覆盖其下面任何区域*/
                    return;
                }
                if (area.districtId == "" && arrayArea.cityId == area.cityId && area.cityId != "" && area.rings > arrayArea.rings) {
                    areaDeleteArr.push(arrayArea); /*无区环覆盖其下面任何区域*/
                    return;
                }
                if (arrayArea.districtId == area.districtId && area.districtId != "" && arrayArea.cityId == area.cityId && area.cityId != "" && arrayArea.rings != "" && area.rings > arrayArea.rings) {
                    areaDeleteArr.push(arrayArea); /*有区环覆盖其下面任何区域*/
                    return;
                }
                if (arrayArea.districtId == "" && area.districtId == "" && arrayArea.cityId == area.cityId && area.cityId != "" && arrayArea.rings != "" && area.rings != "" && area.rings > arrayArea.rings) {
                    areaDeleteArr.push(arrayArea); /*无区 对无区 环覆盖其下面任何区域*/
                    return;
                }
                if (arrayArea.districtId != "" && area.districtId == "" && arrayArea.cityId == area.cityId && area.cityId != "" && arrayArea.rings != "" && area.rings != "" && area.rings >= arrayArea.rings) {
                    areaDeleteArr.push(arrayArea); /*无区 对有区 环覆盖其下面任何区域*/
                    return;
                }
                if (arrayArea.districtId == "" && area.districtId != "" && arrayArea.cityId == area.cityId && area.cityId != "" && area.rings > arrayArea.rings) {
                    //areaDeleteArr.push(arrayArea);/*有区 对无区 环覆盖其下面任何区域*/
                    return;
                }
            }
        });
        console.log("delete array", areaDeleteArr);
        this.removeArea(areaDeleteArr);
        //3.查找和删除小区
        var findDeleteCommunity = this.chooseArray.filter(function (community) {
            if (area.provinceId == community.provinceId && area.cityId == "") {
                return community; //省
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == "" && area.rings == "") {
                return community; //城市
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == community.districtId && area.rings == "") {
                return community; //区
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == "" && area.rings >= community.rings) {
                return community; //无区环
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == community.districtId && area.rings >= community.rings) {
                return community; //有区环
            }
        });
        console.log("findDeleteCommunity", findDeleteCommunity);
        this.removeCommunities(findDeleteCommunity);
        return result;
    };
    BaseAreaChooseComponent.prototype.findArea = function (findId) {
        var findCommunity = this.chooseAreaArray.filter(function (community) {
            if (community.id == findId) {
                return community;
            }
        });
        return findCommunity.length == 0 ? null : findCommunity[0];
    };
    BaseAreaChooseComponent.prototype.addArea = function (area) {
        this.chooseAreaArray.push(area);
    };
    BaseAreaChooseComponent.prototype.removeArea = function (deleteArray) {
        var _this = this;
        deleteArray.forEach(function (deleteArea) {
            var index = -1;
            var findIndex = _this.chooseAreaArray.forEach(function (area, seq) {
                if (area.provinceId == deleteArea.provinceId && area.cityId == deleteArea.cityId && area.districtId == deleteArea.districtId && area.rings == deleteArea.rings) {
                    index = seq;
                }
            });
            _this.chooseAreaArray.splice(index, 1);
        });
        this.noticeChooseResult();
    };
    /**
     * 批量删除小区
     * @param deleteArray
     */
    BaseAreaChooseComponent.prototype.removeCommunities = function (deleteArray) {
        var _this = this;
        deleteArray.forEach(function (deleteCommunity) {
            var index = -1;
            var findIndex = _this.chooseArray.forEach(function (community, seq) {
                if (community.id == deleteCommunity.id) {
                    community.checked = false;
                    index = seq;
                }
            });
            _this.chooseArray.splice(index, 1);
        });
        this.noticeChooseResult();
    };
    /**
     * 查找小区是否被已选择区域覆盖
     * @param community
     */
    BaseAreaChooseComponent.prototype.isCommunityInChooseArea = function (community) {
        var checkResult = this.chooseAreaArray.filter(function (area) {
            if (area.provinceId == community.provinceId && area.cityId == "") {
                return community; //省
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == "" && area.rings == "") {
                return community; //城市
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == community.districtId && area.rings == "") {
                return community; //区
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == "" && area.rings >= community.rings) {
                return community; //无区环
            }
            else if (area.provinceId == community.provinceId && area.cityId == community.cityId && area.districtId == community.districtId && area.rings >= community.rings) {
                return community; //有区环
            }
        });
        return checkResult.length == 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BaseAreaChooseComponent.prototype, "chooseResult", void 0);
    BaseAreaChooseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-area-choose",
            template: __webpack_require__(598),
            styles: [__webpack_require__(71), __webpack_require__(588)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_base_data_service__["a" /* BaseDataService */], __WEBPACK_IMPORTED_MODULE_4__service_base_validate_service__["a" /* BaseValidateService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _c) || Object])
    ], BaseAreaChooseComponent);
    return BaseAreaChooseComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_2__base_from_create_component_new__["a" /* BaseFormCreateComponentNew */]));
//# sourceMappingURL=base.area.choose.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFormCreateComponentNewFormGroup; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseFormCreateComponentNewFormGroup = (function () {
    function BaseFormCreateComponentNewFormGroup(formBuilder, baseDataService) {
        this.formBuilder = formBuilder;
        this.baseDataService = baseDataService;
    }
    BaseFormCreateComponentNewFormGroup.prototype.submit = function () {
        console.log("submit data....");
    };
    BaseFormCreateComponentNewFormGroup.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group(this.recreateFormByModel());
    };
    BaseFormCreateComponentNewFormGroup.prototype.operateUtil = function ($event, element, operateType, formControl, index) {
        $event.stopPropagation();
        $event.preventDefault();
        console.log(element, operateType, formControl, index, typeof formControl, formControl instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]);
        if (operateType == "remove") {
            formControl.setValue("");
        }
        else if (operateType == "left") {
            var groupArray = this.formGroup.get(element.prop);
            var options = groupArray.controls;
            var operateOption = options.splice(index, 1)[0];
            options.splice(index - 1, 0, operateOption);
        }
        else if (operateType == "right") {
            var groupArray = this.formGroup.get(element.prop);
            var options = groupArray.controls;
            var operateOption = options.splice(index, 1)[0];
            options.splice(index + 1, 0, operateOption);
        }
    };
    BaseFormCreateComponentNewFormGroup.prototype.recreateFormByModel = function () {
        var _this = this;
        var formGroupModel = {};
        this.formModel.elements.forEach(function (item) {
            if (item.type == "checkbox" || item.type == "array") {
                var addressFormArray = _this.formBuilder.array(item.options);
                formGroupModel[item.prop] = addressFormArray;
                if (item.type == "array") {
                    formGroupModel[item.prop + "LinkValidate"] = [item.defaultValue, item.validates];
                }
            }
            else if (item.type == "select") {
                if (item.remoteInfo != null) {
                    _this.baseDataService.listData({ url: item.remoteInfo.url, param: item.remoteInfo.param, httpMethod: item.remoteInfo.httpMethod }).subscribe(function (data) {
                        item.options = item.remoteInfo.convert(data.json()) || data.json();
                    });
                }
                formGroupModel[item.prop] = [item.defaultValue, item.validates, item.asyncValidates];
            }
            else {
                formGroupModel[item.prop] = [item.defaultValue, item.validates, item.asyncValidates];
            }
        });
        return formGroupModel;
    };
    BaseFormCreateComponentNewFormGroup = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: "<span></span>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _b) || Object])
    ], BaseFormCreateComponentNewFormGroup);
    return BaseFormCreateComponentNewFormGroup;
    var _a, _b;
}());
//# sourceMappingURL=base.from.create.component.new.form.group.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_validate_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFormCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseFormCreateComponent = (function () {
    function BaseFormCreateComponent(formBuilder, baseValidateService) {
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.createFormModel();
    }
    BaseFormCreateComponent.prototype.createFormModel = function () {
        var _this = this;
        var formGroup = this.formGroup;
        this.formModel = {
            url: "",
            elements: [
                {
                    type: "input",
                    label: "远程校验",
                    prop: "name21",
                    removeValidateUrl: "",
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    switcher: [{
                            prop: "sports",
                            showValue: 2
                        }, {
                            prop: "sex",
                            showValue: 0
                        }],
                    validates: [function (control) {
                            var remoteValidateRequiredParam = { "name21": true, name1: true };
                            var remoteService = {
                                url: "goods/existName",
                                baseUrl: "https://testmerchant.goodaa.com.cn/ejiazi-merchant/",
                            };
                            return _this.baseValidateService.baseValidate(control, { remote: true }, remoteValidateRequiredParam, remoteService);
                        }]
                },
                {
                    type: "input",
                    label: "名称1",
                    prop: "name1",
                    removeValidateUrl: "",
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 1
                        }
                    ],
                    validates: [function (data) {
                            var error = _this.baseValidateService.baseValidate(data, { required: true, maxlength: 15, minlength: 1, number: "###.##", maxvalue: 300.01, minvalue: 100.00 });
                            return error;
                        }]
                },
                {
                    type: "radio",
                    label: "性别",
                    prop: "sex",
                    defaultValue: "0",
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 3
                        }
                    ],
                    options: [
                        {
                            label: "男",
                            value: "0"
                        },
                        {
                            label: "女",
                            value: "1"
                        }
                    ],
                    placeholder: "请输入名称",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "sex", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ],
                },
                {
                    type: "checkbox",
                    label: "爱好",
                    prop: "love",
                    options: [
                        {
                            label: "看报",
                            value: "0"
                        },
                        {
                            label: "看电视",
                            value: "1"
                        },
                        {
                            label: "交友",
                            value: "2"
                        },
                        {
                            label: "创作",
                            value: "3"
                        }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    validates: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(5)]
                },
                {
                    type: "checkbox",
                    label: "体育运动",
                    prop: "sports",
                    options: [
                        {
                            label: "跑步",
                            value: "0"
                        },
                        {
                            label: "健身",
                            value: "1"
                        },
                        {
                            label: "瑜伽",
                            value: "2"
                        },
                        {
                            label: "太极",
                            value: "3" }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "2",
                    required: true,
                    validates: [function (control) {
                            var param = { prop: "sports", formModel: _this.formModel, grandfather: "sports", formGroup: _this.formGroup };
                            _this.baseValidateService.baseValidate(control, { checkboxRequired: true, checkboxWatchers: true }, param);
                        }]
                },
                {
                    type: "input",
                    label: "内增高",
                    switcher: [{
                            prop: "sex",
                            showValue: "1"
                        }],
                    prop: "innerHeight",
                    validates: [
                        function (data) {
                            return _this.baseValidateService.baseValidate(data, { required: true, number: "##.##", maxvalue: 10, minvalue: 0.5 });
                        }
                    ]
                },
                {
                    label: "头像",
                    prop: "photo",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle: true },
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            console.log(control.value);
                            _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    label: "详情图片",
                    prop: "detail",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle2: true },
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            console.log(control.value);
                            _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                }
            ]
        };
        this.initForm();
    };
    BaseFormCreateComponent.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group(this.recreateFormByModel());
    };
    BaseFormCreateComponent.prototype.recreateFormByModel = function () {
        var _this = this;
        var formGroupModel = {};
        this.formModel.elements.forEach(function (item) {
            if (item.type == "checkbox") {
                var addressFGs = item.options.map(function (option) {
                    var optionModel = {};
                    for (var prop in option) {
                        optionModel[prop] = [option[prop]];
                    }
                    optionModel["checked"] = [item.defaultValue == option.value, item.validates];
                    return _this.formBuilder.group(optionModel);
                });
                var addressFormArray = _this.formBuilder.array(addressFGs);
                formGroupModel[item.prop] = addressFormArray;
            }
            else {
                formGroupModel[item.prop] = [item.defaultValue, item.validates, item.asyncValidates];
            }
        });
        return formGroupModel;
    };
    BaseFormCreateComponent.prototype.getArrayFormByName = function (name) {
        return this.formGroup.get(name);
    };
    BaseFormCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-form-create",
            template: __webpack_require__(599),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_3__service_base_validate_service__["a" /* BaseValidateService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object])
    ], BaseFormCreateComponent);
    return BaseFormCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=base.from.create.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Administrator on 2017/5/5.
 */
var BaseModelComponent = (function () {
    function BaseModelComponent(elementRef) {
        this.elementRef = elementRef;
        this.modelStatus = { hidden: false, show: true };
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaseModelComponent.prototype.open = function () {
        if (this.elementRef.nativeElement) {
            this.elementRef.nativeElement.className = "base-model";
        }
        this.modelStatus = { hidden: false, show: true };
    };
    BaseModelComponent.prototype.close = function () {
        if (this.elementRef.nativeElement) {
            this.elementRef.nativeElement.className = "";
        }
        this.modelStatus = { hidden: true, show: false };
        this.closeEvent.emit({ "popClose": true });
    };
    BaseModelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BaseModelComponent.prototype, "closeEvent", void 0);
    BaseModelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-model",
            template: __webpack_require__(601),
            styles: [__webpack_require__(589)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], BaseModelComponent);
    return BaseModelComponent;
    var _a;
}());
//# sourceMappingURL=base.model.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_table_list_simple_config_model__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Administrator on 2017/5/15.
 */
var BasePopComponent = (function () {
    function BasePopComponent(_iterableDiffers, _keyValueDiffers, changeDetectorRef) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this.changeDetectorRef = changeDetectorRef;
    }
    BasePopComponent.prototype.simpleConfig = function (data) {
        console.log("simpleConfig", console.log(data));
        /*this._keyValueDiffer = this._keyValueDiffers.find(data).create(null);
        this.simpleConfigData=data;*/
    };
    ;
    BasePopComponent.prototype.ngOnChanges = function (changes) {
        console.log("this.simpleConfig ngOnChanges");
        for (var propName in changes) {
            var changedProp = changes[propName];
            console.log(propName, changedProp);
        }
    };
    BasePopComponent.prototype.ngDoCheck = function () {
        console.log("this.simpleConfig ngDoCheck");
        /*if(this._keyValueDiffers) {
            const changes = this._keyValueDiffer.diff(this.simpleConfigData);
            if (changes) {
                console.log("this.simpleConfig",changes)
                this.whatIsChanged(changes);
            }
        }*/
    };
    BasePopComponent.prototype.whatIsChanged = function (changes) {
        changes.forEachAddedItem(function (record) {
            console.log("Added item", record.key, record.currentValue);
        });
        changes.forEachChangedItem(function (record) {
            console.log("change item", record.key, record.currentValue);
        });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                console.log("remove", record);
            }
        });
    };
    BasePopComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__["a" /* TableListConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__["a" /* TableListConfig */]) === 'function' && _a) || Object)
    ], BasePopComponent.prototype, "tableListConfig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_table_list_simple_config_model__["a" /* TableListSimpleConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_table_list_simple_config_model__["a" /* TableListSimpleConfig */]) === 'function' && _b) || Object]), 
        __metadata('design:returntype', void 0)
    ], BasePopComponent.prototype, "simpleConfig", null);
    BasePopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-pop-component",
            template: __webpack_require__(602),
            styles: [__webpack_require__(590)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */]) === 'function' && _e) || Object])
    ], BasePopComponent);
    return BasePopComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=base.pop.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTableListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 分页功能组件 只需要给它数据源
 */
var BaseTableListComponent = (function () {
    function BaseTableListComponent(baseDataService) {
        this.baseDataService = baseDataService;
        this.tableData = { headers: [], data: { dataList: [], dataPages: [] } };
        this.queryParam = {};
    }
    BaseTableListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.queryParam = {};
        console.log("this.tableListConfig", this.tableListConfig);
        for (var propName in changes) {
            var changedProp = changes[propName];
            if (this.tableListConfig.query) {
                this.tableListConfig.query.forEach(function (queryItem) {
                    _this.queryParam[queryItem.prop] = queryItem.value;
                });
            }
            if (changedProp.isFirstChange()) {
                this.queryDataByPage({ pageNum: 1 });
            }
        }
    };
    BaseTableListComponent.prototype.pagerDataHelper = function (dataType, data) {
        var pagerData = {};
        if (!data) {
            pagerData[dataType + "List"] = [];
            pagerData[dataType + "Pages"] = {
                totalRows: 0,
                totalPages: 0,
                rowsPerPage: 0,
                currentPage: 0
            };
            return;
        }
        pagerData[dataType + "List"] = data.dataPerPage;
        pagerData[dataType + "Pages"] = {
            totalRows: data[this.tableListConfig.pager.totalRowsProp],
            rowsPerPage: data[this.tableListConfig.pager.pageSizeProp],
            currentPage: data[this.tableListConfig.pager.pageNumProp]
        };
        if (this.tableListConfig.colums != null && this.tableListConfig.colums.length > 0) {
            return pagerData;
        }
        this.tableListConfig.defaultColums = null;
        var dataTemplate = pagerData["dataList"][0];
        for (var prop in dataTemplate) {
            var columsType = null;
            if (prop == "picUrl") {
                columsType = "image";
            }
            else if (prop == "jumpParam") {
                columsType = "href";
            }
            if (!this.tableListConfig.defaultColums) {
                if (this.tableListConfig.defaultColumsHeaderMap) {
                    if (this.tableListConfig.defaultColumsHeaderMap[prop]) {
                        this.tableListConfig.defaultColums = [{ label: this.tableListConfig.defaultColumsHeaderMap[prop], prop: prop, type: columsType }];
                    }
                }
                else {
                    this.tableListConfig.defaultColums = [{ label: prop, prop: prop, type: columsType }];
                }
            }
            else {
                if (this.tableListConfig.defaultColumsHeaderMap) {
                    if (this.tableListConfig.defaultColumsHeaderMap[prop]) {
                        this.tableListConfig.defaultColums.push({ label: this.tableListConfig.defaultColumsHeaderMap[prop], prop: prop, type: columsType });
                    }
                }
                else {
                    this.tableListConfig.defaultColums.push({ label: prop, prop: prop, type: columsType });
                }
            }
        }
        return pagerData;
    };
    BaseTableListComponent.prototype.queryDataByPage = function (param) {
        this.queryParam[this.tableListConfig.pager.pageSizeQueryProp] = this.tableListConfig.pager.pageSize || 15;
        this.queryParam[this.tableListConfig.pager.pageNumQueryProp] = param && param.pageNum || 1;
        this.listData();
    };
    ;
    BaseTableListComponent.prototype.listData = function () {
        var _this = this;
        var url = this.tableListConfig.url;
        this.baseDataService.listData({ url: url, param: this.queryParam, httpMethod: this.tableListConfig.httpMethod }).subscribe(function (data) {
            var result = data.json() || { data: {} };
            if (result.code == "1") {
                _this.tableData.data = _this.pagerDataHelper("data", _this.tableListConfig.listAdapter && _this.tableListConfig.listAdapter(result.data) || result.data);
            }
        });
    };
    BaseTableListComponent.prototype.batchChoose = function ($event, param) {
        for (var key in this.tableData.data.dataList) {
            this.tableData.data.dataList[key].checked = $event.target.checked;
        }
    };
    /*分页功能触发*/
    BaseTableListComponent.prototype.pageClick = function (page) {
        this.queryDataByPage(page);
    };
    /*查询组件搜索按钮事件触发*/
    BaseTableListComponent.prototype.queryClick = function (queryParam) {
        this.queryParam = queryParam || {};
        this.queryDataByPage({});
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__["a" /* TableListConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_table_list_config_model__["a" /* TableListConfig */]) === 'function' && _a) || Object)
    ], BaseTableListComponent.prototype, "tableListConfig", void 0);
    BaseTableListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-table-list",
            template: __webpack_require__(603),
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */]],
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _b) || Object])
    ], BaseTableListComponent);
    return BaseTableListComponent;
    var _a, _b;
}());
//# sourceMappingURL=base.table.list.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTableListPager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseTableListPager = (function () {
    function BaseTableListPager() {
        this.pageClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.pages = [];
        this.allPages = [];
    }
    BaseTableListPager.prototype.changePage = function (page) {
        this.pageClick.emit(page);
    };
    BaseTableListPager.prototype.choosePage = function () {
        this.changePage({ pageNum: this.selectedPage, label: this.selectedPage });
    };
    BaseTableListPager.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
            if (typeof changedProp == "object") {
                this.initPager(changedProp.currentValue, changedProp.previousValue);
            }
        }
    };
    BaseTableListPager.prototype.initPager = function (newValue, oldValue) {
        this.pages = [];
        this.allPages = [];
        var isPushPreShopFlag = false, isPushNextShopFlag = false;
        this.pageData = this.pageData || {
            totalRows: 0,
            totalPages: 0,
            rowsPerPage: 10,
            currentPage: 1
        };
        if (!this.pageData)
            return;
        var totalRows = this.pageData.totalRows, rowsPerPage = this.pageData.rowsPerPage, currentPage = this.pageData.currentPage, totalPages = Math.floor((this.pageData.totalRows - 1) / rowsPerPage) + 1;
        this.selectedPage = currentPage;
        for (var i_1 = 0; i_1 < totalPages; i_1++) {
            var page = {
                pageNum: i_1 + 1,
                label: i_1 + 1,
                clickAble: (i_1 + 1) != currentPage,
                isShow: currentPage > 1
            };
            this.allPages.push(page);
        }
        /*总共显示个数*/
        var showTotalNumber = this.pageData.showTotalNumber || 7;
        if (totalPages > 1) {
            var firstPage = {
                pageNum: 1,
                label: '首页',
                clickAble: true,
                isShow: currentPage > 1
            };
            var prePage = {
                pageNum: (this.pageData.currentPage - 1),
                clickAble: true,
                label: '上一页',
                isShow: currentPage > 1
            };
            this.pages.push(firstPage);
            this.pages.push(prePage);
        }
        for (var i = 1; i <= totalPages; i++) {
            if (totalPages > showTotalNumber) {
                if (i == 1) {
                    this.pages.push({
                        pageNum: i,
                        label: i,
                        isCurrent: i == currentPage,
                        clickAble: true,
                        isShow: true
                    });
                }
                if (i < currentPage - (showTotalNumber - 1) / 2 && i > 1) {
                    if (!isPushPreShopFlag) {
                        this.pages.push({
                            pageNum: i,
                            label: "...",
                            isCurrent: false,
                            clickAble: false,
                            isShow: true
                        });
                        isPushPreShopFlag = !isPushPreShopFlag;
                    }
                }
                else if (i > (currentPage + (showTotalNumber - 1) / 2)) {
                    if (!isPushNextShopFlag) {
                        this.pages.push({
                            pageNum: i,
                            label: "...",
                            isCurrent: false,
                            clickAble: false,
                            isShow: true
                        });
                        isPushNextShopFlag = !isPushNextShopFlag;
                    }
                }
                else if (i != totalPages && i != 1) {
                    this.pages.push({
                        pageNum: i,
                        label: i,
                        isCurrent: i == currentPage,
                        clickAble: true,
                        isShow: true
                    });
                }
                if (i == totalPages) {
                    this.pages.push({
                        pageNum: i,
                        label: i,
                        isCurrent: i == currentPage,
                        clickAble: true,
                        isShow: true
                    });
                }
            }
            else {
                this.pages.push({
                    pageNum: i,
                    label: i,
                    isCurrent: i == currentPage,
                    clickAble: true,
                    isShow: true
                });
            }
        }
        if (totalPages > 1) {
            var lastPage = {
                pageNum: totalPages,
                label: '尾页',
                clickAble: true,
                isShow: currentPage < totalPages
            };
            var nextPage = {
                pageNum: (this.pageData.currentPage + 1),
                label: '下一页',
                clickAble: true,
                isShow: currentPage < totalPages
            };
            this.pages.push(nextPage);
            this.pages.push(lastPage);
        }
        console.log("pager", this.pages);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseTableListPager.prototype, "pageData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BaseTableListPager.prototype, "pageClick", void 0);
    BaseTableListPager = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-table-list-pager",
            template: "<nav class=\"pager\">\n                  <span *ngFor=\"let page of pages\">\n                    <span  *ngIf=\"page.pageNum>=1&&page.isShow\">\n                      <span *ngIf=\"page.isCurrent\" style=\"background: #f00;cursor: not-allowed;color:#fff;border-color:#f00;\">{{page.label}}</span>\n                      <span *ngIf=\"!page.isCurrent&&page.clickAble\" (click)=\"changePage(page)\">{{page.label}}</span>\n                      <span *ngIf=\"!page.isCurrent&&!page.clickAble\" style=\"cursor: not-allowed\">{{page.label}}</span>\n                    </span>\n                  </span>\n                  \n                  <span class=\"selectContainer\">\n                    <select [(ngModel)]=\"selectedPage\" (change)=\"choosePage()\">\n                      <option value=\"{{page.label}}\" *ngFor=\"let page of allPages\">{{page.label}}</option>\n                    </select>\n                  </span>\n                  <span >\n                    <span>\u6BCF\u9875{{pageData.rowsPerPage}}\u6761</span>\n                  </span>\n                  <span>\n                    <span>\u5171{{allPages.length}}\u9875  \u5171{{pageData.totalRows}}\u6761</span>\n                  </span>\n              </nav>",
            styles: ["\n    .pager{\n      padding: 3px 10px;\n      background: #eee;\n      color: rgba(133, 129, 129, 0.99);\n      text-align: right;\n      font-size: 12px;\n    }\n    .pager span{\n      display: inline-block;\n    }\n    .pager>span>span{\n      display: inline-block;\n      padding: 0px;\n      border-radius: 3px;\n      margin-right: 5px;\n      cursor: pointer;\n    }\n    .pager>span>span>span{\n      display: inline-block;\n      border: 1px solid rgba(133, 129, 129, 0.99);\n      border-radius: 3px;\n      padding: 2px 8px;\n      min-width: 20px;\n      text-align: center;\n      font-size: 12px;\n      cursor: pointer;\n    }\n    .selectContainer{\n    }\n    .selectContainer select{\n          height: 24px;\n          line-height: 24px;\n          min-width: 50px;\n          font-size: 14px;\n          border: 1px solid rgba(133, 129, 129, 0.99);\n          border-radius: 50px;\n          text-align: center;\n          padding-left: 10px;\n    }\n    .selectContainer select:focus{\n      outline: none;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], BaseTableListPager);
    return BaseTableListPager;
}());
//# sourceMappingURL=base.table.list.pager.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTableListQueryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseTableListQueryComponent = (function () {
    function BaseTableListQueryComponent(baseDataService) {
        this.baseDataService = baseDataService;
        this.dataQuery = { query: {} };
        this.queryParam = { aa: 121 };
        this.outClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    BaseTableListQueryComponent.prototype.ngOnInit = function () {
    };
    BaseTableListQueryComponent.prototype.ngOnChanges = function (changes) {
        this.initQueryElement();
    };
    /**
     * 属性变化监控
     * @param prop
     */
    BaseTableListQueryComponent.prototype.changeQueryParam = function (prop) {
        this.changeHelp(prop);
    };
    BaseTableListQueryComponent.prototype.changeHelp = function (prop) {
        var _this = this;
        if (prop === void 0) { prop = {}; }
        if (prop.type == "select") {
            var currentSwitchValue_1 = this.queryParam[prop.prop];
            if (prop.switchElements) {
                var needInitSelected_1 = [].filter.call(prop.switchElements, function (item) { if (item.whenSwitchValue == currentSwitchValue_1) {
                    return true;
                } })[0];
                console.log("needInitSelected", needInitSelected_1);
                if (needInitSelected_1) {
                    for (var key in needInitSelected_1.dropProps) {
                        delete this.queryParam[needInitSelected_1.dropProps[key]];
                    }
                    this.baseDataService.listData({ url: needInitSelected_1.dataUrl, param: this.queryParam, httpMethod: needInitSelected_1.httpMethod || "get" }).subscribe(function (data) {
                        var listData = data.json();
                        _this.dataQuery.query[needInitSelected_1.propKeyList] = listData[needInitSelected_1.propValueList];
                        _this.queryParam[needInitSelected_1.prop] = needInitSelected_1.defaultValue;
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else if (prop.casecadeChild) {
                var casecadeChild_1 = this.findCasecadeChild(prop.casecadeChild);
                console.log("casecadeChild", casecadeChild_1);
                if (casecadeChild_1.extendsProp) {
                    for (var seq in casecadeChild_1.extendsProp) {
                        this.queryParam[casecadeChild_1.extendsProp[seq]] = currentSwitchValue_1;
                    }
                }
                this.baseDataService.listData({ url: casecadeChild_1.dataUrl, param: this.queryParam, httpMethod: casecadeChild_1.httpMethod || "get" }).subscribe(function (data) {
                    var listData = data.json();
                    _this.dataQuery.query[casecadeChild_1.propKeyList] = listData[casecadeChild_1.propValueList];
                    _this.queryParam[casecadeChild_1.prop] = casecadeChild_1.defaultValue;
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else if (prop.type = "input") {
        }
    };
    BaseTableListQueryComponent.prototype.findCasecadeChild = function (elementKey) {
        var result = {};
        for (var j = 0; j < this.queryElements.length; j++) {
            var item = this.queryElements[j];
            if (item.prop == elementKey) {
                result = item;
                break;
            }
            if (item.switchElements) {
                for (var i = 0; i < item.switchElements.length; i++) {
                    var innerItem = item.switchElements[i];
                    if (innerItem.prop == elementKey) {
                        result = innerItem;
                    }
                }
            }
        }
        return result;
    };
    BaseTableListQueryComponent.prototype.queryBtnClick = function (data) {
        this.outClick.emit(data);
    };
    BaseTableListQueryComponent.prototype.initQueryElement = function () {
        var _this = this;
        /*n 级 级联查询开始*/
        var queryParam = this.queryParam;
        if (this.queryElements == null || this.queryElements.length == 0)
            return;
        var requestUrlParam = [].filter.call(this.queryElements, function (item) {
            if (item.dataUrl && item.initQuery) {
                return item;
            }
        });
        var _loop_1 = function(seq) {
            var item = requestUrlParam[seq];
            if (item.casecadeParen == null || item.casecadeParen == "") {
                /*顶级元素优先查询完成一级数据初始化*/
                this_1.baseDataService.listData({ url: item.dataUrl, param: this_1.queryParam, httpMethod: item.httpMethod || "get" }).subscribe(function (data) {
                    var listData = data.json();
                    _this.dataQuery.query[item.propKeyList] = listData[item.propValueList];
                    _this.queryParam[item.prop] = item.defaultValue;
                }, function (error) {
                    console.log(error);
                });
            }
        };
        var this_1 = this;
        for (var seq in requestUrlParam) {
            _loop_1(seq);
        }
        /*n 级 级联查询结束*/
        this.queryButtons = this.queryElements.filter(function (item) { return item.type == 'button' || item.type == 'search'; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], BaseTableListQueryComponent.prototype, "queryElements", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseTableListQueryComponent.prototype, "pageData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseTableListQueryComponent.prototype, "reInit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], BaseTableListQueryComponent.prototype, "outClick", void 0);
    BaseTableListQueryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-table-list-query",
            template: __webpack_require__(604),
            styles: [__webpack_require__(592)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _a) || Object])
    ], BaseTableListQueryComponent);
    return BaseTableListQueryComponent;
    var _a;
}());
//# sourceMappingURL=base.table.list.query.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUploadDirectiveFormGroup; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Administrator on 2017/5/4.
 */
var BaseUploadDirectiveFormGroup = (function () {
    function BaseUploadDirectiveFormGroup(elementRef) {
        this.elementRef = elementRef;
    }
    BaseUploadDirectiveFormGroup.prototype.uploadFile = function () {
        var formControl = this.uploadConfig.formControl;
        var imgConfig = this.uploadConfig.config;
        var element = this.elementRef.nativeElement;
        this.checkImgUpload(element, imgConfig, formControl);
    };
    BaseUploadDirectiveFormGroup.prototype.upload = function (element, url, formControl, imgConfig) {
        var xmlHttpRequest = new XMLHttpRequest();
        var genId = "UPLOAD_" + new Date().getTime();
        var file = element;
        var format = file["files"][0].name;
        var _index = format.lastIndexOf(".") + 1;
        var _length = format.length;
        var _string = format.substr(_index, _length).toLowerCase();
        if (_string != 'jpg' && _string != 'gif' && _string != 'jpeg' && _string != 'png') {
            alert("选择的文件应该为图片");
            return false;
        }
        var formData = new FormData();
        formData.append(genId, file["files"][0]);
        if (file["files"].length > 1) {
            for (var i = 1; i < file["files"].length; i++) {
                var genId2 = "UPLOAD_" + new Date().getTime() + Math.ceil(Math.random() * 1000000);
                formData.append(genId2, file["files"][i]);
            }
        }
        xmlHttpRequest.open("POST", url, true);
        xmlHttpRequest.send(formData);
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
                var ids = JSON.parse(xmlHttpRequest.responseText);
                if (ids != null) {
                    var imageInfo = {};
                    for (var i = 0; i < ids.data.length; i++) {
                        var data = ids.data[i];
                        var imgId = data.imageId;
                        var imgUrl = data.imageUrl;
                        if (imgConfig) {
                            imageInfo[imgConfig.id] = imgId;
                            imageInfo[imgConfig.url] = imgUrl;
                        }
                        else {
                            imageInfo["imgId"] = imgId;
                            imageInfo["imgUrl"] = imgUrl;
                        }
                        imageInfo["showUrl"] = imgUrl;
                    }
                    var oldValue = formControl.value;
                    for (var prop in imageInfo) {
                        oldValue[prop] = imageInfo[prop];
                    }
                    formControl.setValue(oldValue);
                    formControl.updateValueAndValidity();
                    element.value = ""; //删除之后再上传同个图片 这个需求貌似不合理 会产生垃圾图片
                }
            }
        };
    };
    //uploadConfigMap = JSON.parse('{"merchant-logo":{"key":"merchant-logo","detail":"商户logo","width":"200","height":"200","size":"<10000000","validate":false},"merchant-header":{"key":"merchant-header","detail":"店铺首图","width":"750","height":"263","size":"<100k","validate":false},"merchant-show":{"key":"merchant-show","detail":"店铺宣传图","width":"750","height":"<1500","size":"<200k","validate":false},"merchant-id-f#merchant-id-b":{"key":"merchant-id-f#merchant-id-b","detail":"身份证照片","validate":false},"merchant-yyzz-three2one":{"key":"merchant-yyzz-three2one","detail":"营业执照3合1","validate":false},"merchant-other":{"key":"merchant-other","detail":"其它证件1电子版","validate":false},"merchant-yyzz-one2one":{"key":"merchant-yyzz-one2one","detail":"营业执照单独","validate":false},"merchant-zzjg":{"key":"merchant-zzjg","detail":"组织机构代码证电子版","validate":false},"merchant-swdj":{"key":"merchant-swdj","detail":"税务登记证电子版","validate":false},"mall-catergory":{"key":"mall-catergory","detail":"电商商品分类","width":"200","height":"200","size":"<50k","extend":"png、jpeg、jpg","validate":false},"advance-assets":{"key":"advance-assets","detail":"上传素材","width":"750","height":"280","size":"50k","extend":"bmp、png、jpeg、jpg、gif","validate":false},"push-header-tgwxc-large":{"key":"push-header-tgwxc-large","detail":"首页-推广位宣传图","width":"374","height":"300","size":"<200k","extend":"png、jpeg、jpg","validate":false},"push-header-tgwxc":{"key":"push-header-tgwxc","detail":"首页-推广位宣传图","width":"374","height":"150","size":"<200k","extend":"png、jpeg、jpg","validate":false},"push-header-tonglan":{"key":"push-header-tonglan","detail":"首页-通栏推广1宣传","width":"730","height":"250","size":"<100k","extend":"png、jpeg、jpg","validate":false},"push-header-bqhh-loop":{"key":"push-header-bqhh-loop","detail":"首页-必抢好货轮播图","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-fix-catergory":{"key":"mall-fix-catergory","detail":"商城-固定分类","width":"150","height":"150","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-zxhw-goods":{"key":"mall-zxhw-goods","detail":"商城-甄选好物","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-zxhw-merchant":{"key":"mall-zxhw-merchant","detail":"商城-优质店铺","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-advace-catergory":{"key":"mall-advace-catergory","detail":"商城-分类广告图","width":"730","height":"250","size":"<100k","extend":"png、jpeg、jpg","validate":false},"visit-push":{"key":"visit-push","detail":"上门-推广位1宣传图","width":"374","height":"300","size":"<200k","extend":"png、jpeg、jpg","validate":false},"presell-activity-lager":{"key":"presell-activity-lager","detail":"活动大图区","width":"750","height":"<1000000","size":"<100k","extend":"png、jpeg、jpg","validate":false},"presell-goods":{"key":"presell-goods","detail":"预售商品1图","width":"246","height":"184","size":"<100k","extend":"png、jpeg、jpg","validate":false},"presell-bottom":{"key":"presell-bottom","detail":"底部规则图片","width":"750","height":"<1000000","size":"<100k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-header":{"key":"merchant-goods-header","detail":"头图","width":"344","height":"258","size":"<200k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-focus":{"key":"merchant-goods-focus","detail":"焦点图","width":"750","height":"562","size":"<200k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-detail":{"key":"merchant-goods-detail","detail":"详情图","width":"50","height":"<1500px","size":"<200k","extend":"png、jpeg、jpg","validate":false},"property-notice-content-img":{"key":"property-notice-content-img","detail":"图文内容","width":"680","height":"406","size":"<60k","validate":false},"backend-lottery-share-img":{"key":"backend-lottery-share-img","detail":"大转盘分享图标大小","size":"<30k","validate":true}}');
    BaseUploadDirectiveFormGroup.prototype.getFileExtend = function (fileName) {
        fileName = fileName || "";
        return fileName.substring(fileName.lastIndexOf(".") + 1);
    };
    BaseUploadDirectiveFormGroup.prototype.checkImgUpload = function (element, imageConfig, formControl) {
        if (!imageConfig.validate) {
            var uploadUrl = "https://testbackend.goodaa.com.cn/ejiazi-upload/image/upload.do?belongId=" + Math.random();
            this.upload(element, uploadUrl, formControl, imageConfig);
            return;
        }
        var fileObj = element.files[0];
        var fileSize = fileObj.size;
        var fileType = fileObj.type;
        var imgConfig = imageConfig;
        if (imgConfig == undefined || imgConfig == null) {
            imgConfig = {};
        }
        var fileExtend = imgConfig.extend;
        var currentExtend = this.getFileExtend(fileObj.name);
        if (fileExtend && !(fileExtend.indexOf(currentExtend) >= 0)) {
            var errMessage = "文件格式不正确，应为：" + fileExtend + " 所选文件为：" + currentExtend + " 请重新选择符合要求的文件！";
            formControl.setErrors({ "fileError": errMessage });
            return;
        }
        var upload = this.upload;
        var localImgSrc = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window["webkitURL"].createObjectURL(element["files"][0]) : window.URL.createObjectURL(element["files"][0]);
        var testImg = new Image();
        testImg.src = localImgSrc;
        testImg.onload = function (event) {
            //console.log(fileObj, "*******************", testImg.width, testImg.height, key);
            if (imgConfig && imgConfig.validate) {
                var filePermisionConfig = {
                    width: imgConfig.width,
                    maxWidth: imgConfig.width,
                    height: /^</.test(imgConfig.height) ? null : imgConfig.height,
                    maxHeight: /^</.test(imgConfig.height) ? imgConfig.height.replace("<", "") : null,
                    maxFileSize: (imgConfig.size == null || imgConfig.size == undefined) ? null : imgConfig.size.replace("<", "").replace("k", "") * 1024
                };
                //console.log(filePermisionConfig, testImg)
                var errMessage = "";
                if (/^\d+$/.test(filePermisionConfig.maxWidth) && filePermisionConfig.width * 1 != testImg.width) {
                    errMessage = "允许图片宽度为：" + filePermisionConfig.width + " 所选文件宽度为：" + testImg.width + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.height) && filePermisionConfig.height * 1 != testImg.height) {
                    errMessage = "允许图片高度为：" + filePermisionConfig.height + " 所选文件高度为：" + testImg.height + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxWidth) && filePermisionConfig.maxWidth * 1 < testImg.width) {
                    errMessage = "允许图片宽度为：" + filePermisionConfig.maxWidth + " 所选文件宽度为：" + testImg.width + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxHeight) && filePermisionConfig.maxHeight * 1 < testImg.height) {
                    errMessage = "允许图片最大高度为：" + filePermisionConfig.maxHeight + " 所选文件高度为：" + testImg.height + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxFileSize + "") && filePermisionConfig.maxFileSize * 1 < fileSize) {
                    errMessage = "允许图片最大为：" + filePermisionConfig.maxFileSize / 1024 + "k 所选文件大小为：" + fileSize / 1024 + "k 请重新选择符合要求的文件！";
                }
                if (errMessage != "") {
                    formControl.setErrors({ "fileError": errMessage });
                    return;
                }
                var uploadUrl = "https://testbackend.goodaa.com.cn/ejiazi-upload/image/upload.do?belongId=" + Math.random();
                upload(element, uploadUrl, formControl, imageConfig);
            }
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseUploadDirectiveFormGroup.prototype, "uploadConfig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("change"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaseUploadDirectiveFormGroup.prototype, "uploadFile", null);
    BaseUploadDirectiveFormGroup = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: "[fileUploadFormGroup]"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], BaseUploadDirectiveFormGroup);
    return BaseUploadDirectiveFormGroup;
    var _a;
}());
//# sourceMappingURL=base.upload.directive.form.group.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUploadDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Administrator on 2017/5/4.
 */
var BaseUploadDirective = (function () {
    function BaseUploadDirective(elementRef) {
        this.elementRef = elementRef;
    }
    BaseUploadDirective.prototype.uploadFile = function () {
        var formControl = this.uploadConfig.formControl;
        var imgConfig = this.uploadConfig.config;
        var element = this.elementRef.nativeElement;
        this.checkImgUpload(element, imgConfig, formControl);
    };
    BaseUploadDirective.prototype.upload = function (element, url, formControl, imgConfig) {
        var xmlHttpRequest = new XMLHttpRequest();
        var genId = "UPLOAD_" + new Date().getTime();
        var file = element;
        var format = file["files"][0].name;
        var _index = format.lastIndexOf(".") + 1;
        var _length = format.length;
        var _string = format.substr(_index, _length).toLowerCase();
        if (_string != 'jpg' && _string != 'gif' && _string != 'jpeg' && _string != 'png') {
            alert("选择的文件应该为图片");
            return false;
        }
        var formData = new FormData();
        formData.append(genId, file["files"][0]);
        if (file["files"].length > 1) {
            for (var i = 1; i < file["files"].length; i++) {
                var genId2 = "UPLOAD_" + new Date().getTime() + Math.ceil(Math.random() * 1000000);
                formData.append(genId2, file["files"][i]);
            }
        }
        xmlHttpRequest.open("POST", url, true);
        xmlHttpRequest.send(formData);
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
                var ids = JSON.parse(xmlHttpRequest.responseText);
                if (ids != null) {
                    var imageInfo = {};
                    for (var i = 0; i < ids.data.length; i++) {
                        var data = ids.data[i];
                        var imgId = data.imageId;
                        var imgUrl = data.imageUrl;
                        if (imgConfig) {
                            imageInfo[imgConfig.id] = imgId;
                            imageInfo[imgConfig.url] = imgUrl;
                        }
                        else {
                            imageInfo["imgId"] = imgId;
                            imageInfo["imgUrl"] = imgUrl;
                        }
                        imageInfo["showUrl"] = imgUrl;
                    }
                    formControl.setValue(imageInfo);
                    element.value = ""; //删除之后再上传同个图片 这个需求貌似不合理 会产生垃圾图片
                }
            }
        };
    };
    //uploadConfigMap = JSON.parse('{"merchant-logo":{"key":"merchant-logo","detail":"商户logo","width":"200","height":"200","size":"<10000000","validate":false},"merchant-header":{"key":"merchant-header","detail":"店铺首图","width":"750","height":"263","size":"<100k","validate":false},"merchant-show":{"key":"merchant-show","detail":"店铺宣传图","width":"750","height":"<1500","size":"<200k","validate":false},"merchant-id-f#merchant-id-b":{"key":"merchant-id-f#merchant-id-b","detail":"身份证照片","validate":false},"merchant-yyzz-three2one":{"key":"merchant-yyzz-three2one","detail":"营业执照3合1","validate":false},"merchant-other":{"key":"merchant-other","detail":"其它证件1电子版","validate":false},"merchant-yyzz-one2one":{"key":"merchant-yyzz-one2one","detail":"营业执照单独","validate":false},"merchant-zzjg":{"key":"merchant-zzjg","detail":"组织机构代码证电子版","validate":false},"merchant-swdj":{"key":"merchant-swdj","detail":"税务登记证电子版","validate":false},"mall-catergory":{"key":"mall-catergory","detail":"电商商品分类","width":"200","height":"200","size":"<50k","extend":"png、jpeg、jpg","validate":false},"advance-assets":{"key":"advance-assets","detail":"上传素材","width":"750","height":"280","size":"50k","extend":"bmp、png、jpeg、jpg、gif","validate":false},"push-header-tgwxc-large":{"key":"push-header-tgwxc-large","detail":"首页-推广位宣传图","width":"374","height":"300","size":"<200k","extend":"png、jpeg、jpg","validate":false},"push-header-tgwxc":{"key":"push-header-tgwxc","detail":"首页-推广位宣传图","width":"374","height":"150","size":"<200k","extend":"png、jpeg、jpg","validate":false},"push-header-tonglan":{"key":"push-header-tonglan","detail":"首页-通栏推广1宣传","width":"730","height":"250","size":"<100k","extend":"png、jpeg、jpg","validate":false},"push-header-bqhh-loop":{"key":"push-header-bqhh-loop","detail":"首页-必抢好货轮播图","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-fix-catergory":{"key":"mall-fix-catergory","detail":"商城-固定分类","width":"150","height":"150","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-zxhw-goods":{"key":"mall-zxhw-goods","detail":"商城-甄选好物","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-zxhw-merchant":{"key":"mall-zxhw-merchant","detail":"商城-优质店铺","width":"288","height":"216","size":"<200k","extend":"png、jpeg、jpg","validate":false},"mall-advace-catergory":{"key":"mall-advace-catergory","detail":"商城-分类广告图","width":"730","height":"250","size":"<100k","extend":"png、jpeg、jpg","validate":false},"visit-push":{"key":"visit-push","detail":"上门-推广位1宣传图","width":"374","height":"300","size":"<200k","extend":"png、jpeg、jpg","validate":false},"presell-activity-lager":{"key":"presell-activity-lager","detail":"活动大图区","width":"750","height":"<1000000","size":"<100k","extend":"png、jpeg、jpg","validate":false},"presell-goods":{"key":"presell-goods","detail":"预售商品1图","width":"246","height":"184","size":"<100k","extend":"png、jpeg、jpg","validate":false},"presell-bottom":{"key":"presell-bottom","detail":"底部规则图片","width":"750","height":"<1000000","size":"<100k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-header":{"key":"merchant-goods-header","detail":"头图","width":"344","height":"258","size":"<200k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-focus":{"key":"merchant-goods-focus","detail":"焦点图","width":"750","height":"562","size":"<200k","extend":"png、jpeg、jpg","validate":false},"merchant-goods-detail":{"key":"merchant-goods-detail","detail":"详情图","width":"50","height":"<1500px","size":"<200k","extend":"png、jpeg、jpg","validate":false},"property-notice-content-img":{"key":"property-notice-content-img","detail":"图文内容","width":"680","height":"406","size":"<60k","validate":false},"backend-lottery-share-img":{"key":"backend-lottery-share-img","detail":"大转盘分享图标大小","size":"<30k","validate":true}}');
    BaseUploadDirective.prototype.getFileExtend = function (fileName) {
        fileName = fileName || "";
        return fileName.substring(fileName.lastIndexOf(".") + 1);
    };
    BaseUploadDirective.prototype.checkImgUpload = function (element, imageConfig, formControl) {
        if (!imageConfig.validate) {
            var uploadUrl = "https://testbackend.goodaa.com.cn/ejiazi-upload/image/upload.do?belongId=" + Math.random();
            this.upload(element, uploadUrl, formControl, imageConfig);
            return;
        }
        var fileObj = element.files[0];
        var fileSize = fileObj.size;
        var fileType = fileObj.type;
        var imgConfig = imageConfig;
        if (imgConfig == undefined || imgConfig == null) {
            imgConfig = {};
        }
        var fileExtend = imgConfig.extend;
        var currentExtend = this.getFileExtend(fileObj.name);
        if (fileExtend && !(fileExtend.indexOf(currentExtend) >= 0)) {
            var errMessage = "文件格式不正确，应为：" + fileExtend + " 所选文件为：" + currentExtend + " 请重新选择符合要求的文件！";
            formControl.setErrors({ "fileError": errMessage });
            return;
        }
        var upload = this.upload;
        var localImgSrc = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window["webkitURL"].createObjectURL(element["files"][0]) : window.URL.createObjectURL(element["files"][0]);
        var testImg = new Image();
        testImg.src = localImgSrc;
        testImg.onload = function (event) {
            //console.log(fileObj, "*******************", testImg.width, testImg.height, key);
            if (imgConfig && imgConfig.validate) {
                var filePermisionConfig = {
                    width: imgConfig.width,
                    maxWidth: imgConfig.width,
                    height: /^</.test(imgConfig.height) ? null : imgConfig.height,
                    maxHeight: /^</.test(imgConfig.height) ? imgConfig.height.replace("<", "") : null,
                    maxFileSize: (imgConfig.size == null || imgConfig.size == undefined) ? null : imgConfig.size.replace("<", "").replace("k", "") * 1024
                };
                //console.log(filePermisionConfig, testImg)
                var errMessage = "";
                if (/^\d+$/.test(filePermisionConfig.maxWidth) && filePermisionConfig.width * 1 != testImg.width) {
                    errMessage = "允许图片宽度为：" + filePermisionConfig.width + " 所选文件宽度为：" + testImg.width + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.height) && filePermisionConfig.height * 1 != testImg.height) {
                    errMessage = "允许图片高度为：" + filePermisionConfig.height + " 所选文件高度为：" + testImg.height + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxWidth) && filePermisionConfig.maxWidth * 1 < testImg.width) {
                    errMessage = "允许图片宽度为：" + filePermisionConfig.maxWidth + " 所选文件宽度为：" + testImg.width + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxHeight) && filePermisionConfig.maxHeight * 1 < testImg.height) {
                    errMessage = "允许图片最大高度为：" + filePermisionConfig.maxHeight + " 所选文件高度为：" + testImg.height + " 请重新选择符合要求的文件！";
                }
                if (/^\d+$/.test(filePermisionConfig.maxFileSize + "") && filePermisionConfig.maxFileSize * 1 < fileSize) {
                    errMessage = "允许图片最大为：" + filePermisionConfig.maxFileSize / 1024 + "k 所选文件大小为：" + fileSize / 1024 + "k 请重新选择符合要求的文件！";
                }
                if (errMessage != "") {
                    formControl.setErrors({ "fileError": errMessage });
                    return;
                }
                var uploadUrl = "https://testbackend.goodaa.com.cn/ejiazi-upload/image/upload.do?belongId=" + Math.random();
                upload(element, uploadUrl, formControl, imageConfig);
            }
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], BaseUploadDirective.prototype, "uploadConfig", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("change"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaseUploadDirective.prototype, "uploadFile", null);
    BaseUploadDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: "[fileUpload]"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], BaseUploadDirective);
    return BaseUploadDirective;
    var _a;
}());
//# sourceMappingURL=base.upload.directive.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighLightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighLightDirective = (function () {
    function HighLightDirective(elementPre) {
        this.elementPre = elementPre;
    }
    HighLightDirective.prototype.onMouseEnter = function () {
        this.highLight(this.myEnterColor);
    };
    HighLightDirective.prototype.onMouseLeave = function () {
        this.highLight(this.myLeaveColor);
    };
    HighLightDirective.prototype.highLight = function (color) {
        this.elementPre.nativeElement.style.background = color;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], HighLightDirective.prototype, "myEnterColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], HighLightDirective.prototype, "myLeaveColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("mouseenter"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])("mouseleave"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onMouseLeave", null);
    HighLightDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[myHighLight]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], HighLightDirective);
    return HighLightDirective;
    var _a;
}());
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoFormComponent = (function () {
    function DemoFormComponent(fb, userInfoService) {
        this.fb = fb;
        this.userInfoService = userInfoService;
        this.heroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.addressFormArray = [];
        var testAddress = [];
        for (var i = 0; i < 3; i++) {
            testAddress.push(this.createAddressModel());
        }
        this.createForm(testAddress);
    }
    Object.defineProperty(DemoFormComponent.prototype, "addresses", {
        get: function () {
            return this.heroFormBuilder.get("addresses");
        },
        enumerable: true,
        configurable: true
    });
    DemoFormComponent.prototype.createForm = function (addresses) {
        var _this = this;
        this.heroFormBuilder = this.fb.group({
            name: ['xkfeng', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(13)],
            addresses: this.fb.array([])
        });
        console.log(addresses);
        var addressFGs = addresses.map(function (address) { return _this.fb.group(address); });
        var addressFormArray = this.fb.array(addressFGs);
        this.heroFormBuilder.setControl("addresses", addressFormArray);
        this.createValidateForm();
    };
    DemoFormComponent.prototype.createValidateForm = function () {
        this.validateForm = this.fb.group(this.createValidateFormModel());
    };
    DemoFormComponent.prototype.ngOnChanges = function () {
        console.log("**********" + Math.ceil(Math.random() * 10000));
        // this.resetForm();
    };
    DemoFormComponent.prototype.resetForm = function () {
        var demo = {
            name: "冯" + Math.ceil(Math.random() * 100),
            address: {
                province: ["安徽" + Math.ceil(Math.random() * 100)],
                city: ["合肥" + Math.ceil(Math.random() * 100)],
                community: ["城市花园" + Math.ceil(Math.random() * 100)]
            }
        };
        this.heroFormBuilder.setValue(demo);
    };
    DemoFormComponent.prototype.createAddressModel = function () {
        return {
            province: ["安徽" + Math.ceil(Math.random() * 100)],
            city: ["合肥" + Math.ceil(Math.random() * 100)],
            community: ["城市花园" + Math.ceil(Math.random() * 100)]
        };
    };
    DemoFormComponent.prototype.createValidateFormModel = function () {
        return {
            name: ["安徽" + Math.ceil(Math.random() * 100), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(3), function (data) {
                        var name = data.value;
                        console.log(data);
                        if (name.indexOf("xkfeng") != -1) {
                            return { 'forbiddenName': { name: name } };
                        }
                    }]],
        };
    };
    DemoFormComponent.prototype.addAddress = function () {
        this.addresses.push(this.fb.group(this.createAddressModel()));
    };
    DemoFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "demo-form",
            template: __webpack_require__(605)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* UserLoginService */]) === 'function' && _b) || Object])
    ], DemoFormComponent);
    return DemoFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=demo.form.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponentGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by Administrator on 2017/5/22.
 */
var MainComponentGuard = (function () {
    function MainComponentGuard(userLoginService, route) {
        this.userLoginService = userLoginService;
        this.route = route;
    }
    MainComponentGuard.prototype.canActivate = function (route, state) {
        // console.log("canActivatecanActivatecanActivatecanActivate");
        return true;
    };
    MainComponentGuard.prototype.canDeactivate = function (component, route, state) {
        console.log("canDeactivatecanDeactivatecanDeactivatecanDeactivate CreateGoodsFormComponentCreateGoodsFormComponentCreateGoodsFormComponentCreateGoodsFormComponent", component);
        return true;
    };
    MainComponentGuard.prototype.canActivateChild = function (childRoute, state) {
        //console.log("canActivateChildcanActivateChildcanActivateChildcanActivateChildcanActivateChild",this.userLoginService);
        return true;
    };
    MainComponentGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* UserLoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MainComponentGuard);
    return MainComponentGuard;
    var _a, _b;
}());
//# sourceMappingURL=main.component.guard.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hero_service__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_config__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HeroComponent = (function () {
    function HeroComponent(heroService, config) {
        this.heroService = heroService;
        this.color = "#aaa";
        this.hero = { name: "12" };
        this.heros = [];
        this.clickUtils = {
            save: function (item, eventParam) {
                console.log(item, eventParam, "234234");
            }
        };
        this.keyUtils = {
            keyUp: function (val, secondParam) {
                console.log(val, " compare ``12`12 aaaa ");
                secondParam.error = {
                    msg: '请输入url'
                };
            }
        };
        console.log("heroSeraaaawe", heroService.getHeros(), "   config=", config);
        this.heros = heroService.getHeros();
    }
    HeroComponent.prototype.test = function () {
        console.log("adsfadfasdf", this.heroService);
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "hero",
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__logger_logger_service__["a" /* LoggerService */], __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["a" /* HeroServiceProvider */], { provide: __WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_4__config_app_config__["b" /* HERO_DI_CONFIG */] }],
            template: __webpack_require__(606)
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* APP_CONFIG */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["b" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_hero_service__["b" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__config_app_config__["AppConfig"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__config_app_config__["AppConfig"]) === 'function' && _b) || Object])
    ], HeroComponent);
    return HeroComponent;
    var _a, _b;
}());
//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_model__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userLoginService, router) {
        this.userLoginService = userLoginService;
        this.router = router;
        this.email = "admin";
        this.passwd = "LJuy!Zg#uB3rNFxZ";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        //{email:"admin",passwd:"LJuy!Zg#uB3rNFxZ" }
        var email = this.email;
        var passwd = this.passwd;
        this.userLoginService.login({ email: email, passwd: passwd })
            .subscribe(function (data) {
            var result = data.json();
            if (result.code == 200) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_3__model_user_model__["a" /* UserModel */](_this.email);
                userInfo.isLogin = true;
                $.cookie("login_user", JSON.stringify(userInfo));
                $.cookie("complexId", result.complexId);
                $.cookie("adminId", result.adminId);
                $.cookie("sn", result.sn);
                _this.userLoginService.updateLoginInfo(userInfo);
                _this.router.navigate(["main"]);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "login",
            template: __webpack_require__(607)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=loginComponent.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_lottery_list_service__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotteryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotteryListComponent = (function () {
    function LotteryListComponent(lotteryListService) {
        this.lotteryListService = lotteryListService;
        this.query = {
            queryElements: [
                {
                    type: 'hidden',
                    prop: "upShelves",
                    value: "1"
                },
                {
                    label: '请选择省',
                    type: 'select',
                    placeholder: '请输入省',
                    dataUrl: 'citys/queryOpeningCitiesList.json',
                    prop: 'provinceId',
                    initQuery: true,
                    defaultValue: "",
                    propList: 'provinceList',
                    propKeyList: 'provinceList',
                    propValueList: 'citiesList',
                    casecadeParen: "",
                    casecadeChild: "cityId",
                    casecadeGrandsonList: ["cityId", "districtId", "communityId"]
                },
                {
                    label: '请选择市',
                    type: 'select',
                    defaultValue: "",
                    placeholder: '请输入市',
                    dataUrl: 'citys/queryOpeningCitiesList.json',
                    prop: 'cityId',
                    extendsProp: ["pid"],
                    propList: 'cityList',
                    propKeyList: 'cityList',
                    propValueList: 'citiesList',
                    casecadeParen: "provinceId",
                    casecadeChild: "districtId",
                    casecadeGrandsonList: ["districtId", "communityId"]
                },
                {
                    label: '请选择区',
                    defaultValue: "",
                    type: 'select',
                    dataUrl: 'citys/queryOpeningCitiesList.json',
                    placeholder: '请选择区',
                    prop: 'districtId',
                    extendsProp: ["pid"],
                    propList: 'districtList',
                    propKeyList: 'districtList',
                    propValueList: 'citiesList',
                    casecadeParen: "cityId",
                    casecadeChildDataUrl: "community/queryCommunitiesList.json",
                    casecadeChildListProp: "data",
                    casecadeChild: "",
                    queryParam: "cityId"
                },
                {
                    label: '小区名称',
                    type: 'input',
                    placeholder: '小区名称',
                    prop: 'communityIdStr'
                },
                {
                    label: '商品名称',
                    type: 'input',
                    placeholder: '商品名称',
                    prop: 'name'
                },
                {
                    label: '商品类型',
                    placeholder: '请选择商品类型',
                    defaultValue: "",
                    type: 'select',
                    casecadeChild: '',
                    switchElements: [
                        {
                            whenSwitchValue: '1',
                            label: '电商商品分类',
                            initQuery: false,
                            defaultValue: "",
                            type: 'select',
                            placeholder: '请选择',
                            dataUrl: 'mall/goods/queryCategoryList.json?type=1&',
                            prop: 'categoryId',
                            propList: 'categoryList',
                            propKeyList: 'categoryList',
                            propValueList: 'categoryList',
                            casecadeParen: "",
                            dropProps: ["pid"],
                            casecadeChild: "",
                            casecadeGrandsonList: []
                        },
                        {
                            whenSwitchValue: '2',
                            type: 'select',
                            label: '服务分类',
                            initQuery: false,
                            defaultValue: "",
                            placeholder: '请选择',
                            dataUrl: 'mall/goods/queryCategoryList.json?type=2&',
                            prop: 'pid',
                            propList: 'categoryList',
                            propKeyList: 'categoryList',
                            propValueList: 'categoryList',
                            casecadeParen: "",
                            casecadeChild: "categorySubId",
                            casecadeGrandsonList: ["categoryId"]
                        },
                        {
                            whenSwitchValue: '2',
                            type: 'select',
                            label: '二级分类',
                            defaultValue: "",
                            placeholder: '请选择',
                            initQuery: false,
                            dataUrl: 'mall/goods/queryCategoryList.json?type=2&',
                            prop: 'categorySubId',
                            propList: 'categorySubList',
                            propKeyList: 'categorySubList',
                            propValueList: 'categoryList',
                            casecadeParen: "categoryId",
                            casecadeChild: "",
                            casecadeGrandsonList: []
                        }
                    ],
                    options: [
                        { label: '电商', value: '1' },
                        { label: '服务', value: '2' },
                    ],
                    prop: 'goodsType'
                },
                {
                    label: '搜索',
                    type: 'search',
                    check: function (queryParam) {
                        console.log("queryParamqueryParamqueryParam", queryParam);
                        if (queryParam) {
                            var communityName = queryParam.communityName || "";
                            communityName = communityName.replace(/^\s+/, "").replace(/\s+$/, "");
                            if (communityName == "") {
                                return true;
                            }
                        }
                        return true;
                    }
                },
                {
                    label: '批量下架',
                    type: 'button',
                    param: true,
                    click: function (data, list) {
                        var checkList = [].filter.call(list, function (item) { return item.checked; });
                        console.log(data, checkList);
                    }
                },
                {
                    label: '导出',
                    type: 'button',
                    param: true,
                    listener: function (queryParam, dataList) {
                        console.log(queryParam, dataList);
                    },
                    click: function (queryParam, dataList) {
                        console.log(queryParam, dataList);
                    }
                }
            ]
        };
    }
    LotteryListComponent.prototype.listAdapter = function (listData) {
        var result = listData.page;
        result["dataPerPage"] = result.content.map(function (item) { return item.user; });
        return result;
    };
    LotteryListComponent.prototype.ngOnInit = function () {
        this.listConfig = new __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__["a" /* TableListConfig */]("lottery/winLog/queryLotteryWinLogList", [{ prop: 'lotteryName', label: "活动名称" }], [{ label: "修改", click: function (item) { console.log(item); } }, { label: "", map: { 1: '查看', 2: '修改', 3: '停止' }, prop: "lotteryStatus" }], this.query.queryElements, "get");
        this.listAdvertConfig = new __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__["a" /* TableListConfig */]("advert/queryAdvertList.json", [{ label: '选择', type: "checkbox", prop: "id" }], [{ label: "修改", click: function (item) { console.log(item); } }, { label: "", map: { 1: '查看', 2: '修改', 3: '停止' }, prop: "state" }, { label: "查看" }], this.query.queryElements, "post");
        this.listUserConfig = new __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__["a" /* TableListConfig */]("user/list", [{ label: '选择', type: "checkbox", prop: "id" }], [{ label: "修改", click: function (item) { console.log(item); } }, { label: "", map: { 1: '查看', 2: '修改', 3: '停止' }, prop: "status" }, { label: "查看" }], this.query.queryElements, "get", this.listAdapter, {
            pageSizeProp: "size",
            pageSizeQueryProp: "size",
            pageNumProp: "number",
            pageNumQueryProp: "number",
            totalRowsProp: "total",
            pageSize: 3
        });
    };
    LotteryListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "lottery-list-component",
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_lottery_list_service__["a" /* LotteryListService */]],
            template: __webpack_require__(608)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_lottery_list_service__["a" /* LotteryListService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_lottery_list_service__["a" /* LotteryListService */]) === 'function' && _a) || Object])
    ], LotteryListComponent);
    return LotteryListComponent;
    var _a;
}());
//# sourceMappingURL=lottery_list.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_model__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(userLoginService, router) {
        this.userLoginService = userLoginService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.menuList = [
            {
                label: "商户管理",
                options: [
                    {
                        label: "商户列表",
                        url: "goods"
                    },
                    {
                        label: "创建商户",
                        url: "createMerchant"
                    }
                ]
            }
        ];
    };
    MainComponent.prototype.navFunction = function (event, menu) {
        console.log(event, menu);
    };
    MainComponent.prototype.logout = function () {
        /*this.userLoginService.logout()
            .subscribe(data=>{
                let result=data.json();
                if(result.result==1){
                    $.removeCookie("login_user")
                    var userInfo:UserModel=new UserModel("");
                    userInfo.isLogin=false;
                    this.userLoginService.updateLoginInfo(userInfo);
                    this.router.navigate(["login"]);
                }
            });*/
        $.removeCookie("login_user");
        $.removeCookie("complexId");
        $.removeCookie("adminId");
        $.removeCookie("sn");
        var userInfo = new __WEBPACK_IMPORTED_MODULE_3__model_user_model__["a" /* UserModel */]("");
        userInfo.isLogin = false;
        this.userLoginService.updateLoginInfo(userInfo);
        this.router.navigate(["login"]);
    };
    MainComponent.prototype.activate = function (event) {
        if (this.userLoginService.userInfo.isLogin == false && $.cookie("login_user") != undefined) {
            this.userLoginService.userInfo = JSON.parse($.cookie("login_user"));
        }
        else {
        }
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "main-component",
            template: __webpack_require__(609),
            styles: [__webpack_require__(593)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* UserLoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baseComponent_base_from_create_component_new_form_group__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGoodsFormComponentFormGroup; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateGoodsFormComponentFormGroup = (function (_super) {
    __extends(CreateGoodsFormComponentFormGroup, _super);
    function CreateGoodsFormComponentFormGroup(formBuilder, baseValidateService, baseDataService, router) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.baseDataService = baseDataService;
        this.router = router;
    }
    CreateGoodsFormComponentFormGroup.prototype.ngOnInit = function () {
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
                {
                    label: "详情图片",
                    prop: "detailPics",
                    type: "array",
                    multiple: false,
                    uploadClass: { myUploadStyle2: true },
                    options: [
                        [
                            {
                                label: "",
                                prop: "detailA",
                                type: "upload",
                                value: "",
                                multiple: false,
                                uploadClass: { myUploadStyle2: true },
                                imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                                validates: [function (control) {
                                        //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
                                        console.log(control);
                                        //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                                    }]
                            }
                        ],
                        [
                            {
                                label: "",
                                prop: "detailB",
                                value: "",
                                type: "upload",
                                multiple: false,
                                uploadClass: { myUploadStyle2: true },
                                imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                                validates: [function (control) {
                                        //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
                                        console.log(control);
                                        //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                                    }]
                            }
                        ]
                    ],
                    validates: [function (control) {
                            //let param={prop:"detailPics",formModel:this.formModel,grandfather:"detailPics",formGroup:this.formGroup};
                            console.log(control);
                            //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                        }]
                }
            ]
        };
        this.initForm();
    };
    CreateGoodsFormComponentFormGroup.prototype.open = function () {
    };
    CreateGoodsFormComponentFormGroup.prototype.close = function (data) {
        console.log("closedata", data);
    };
    CreateGoodsFormComponentFormGroup.prototype.submit = function () {
        var _this = this;
        console.log("sub sub this.formGroup", this.formGroup.value);
        this.baseDataService.listData({ url: this.formModel.url, param: this.formGroup.value, httpMethod: "post" }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.router.navigate(["lotteryList"]);
        });
    };
    CreateGoodsFormComponentFormGroup = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "create-goods-form",
            template: __webpack_require__(600),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */], __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreateGoodsFormComponentFormGroup);
    return CreateGoodsFormComponentFormGroup;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_6__baseComponent_base_from_create_component_new_form_group__["a" /* BaseFormCreateComponentNewFormGroup */]));
//# sourceMappingURL=create.goods.form.component.form.group.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_login_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGoodsFormComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateGoodsFormComponent = (function (_super) {
    __extends(CreateGoodsFormComponent, _super);
    function CreateGoodsFormComponent(formBuilder, baseValidateService, baseDataService, router, userLoginService) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.baseDataService = baseDataService;
        this.router = router;
        this.userLoginService = userLoginService;
        console.log(userLoginService);
    }
    CreateGoodsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
                {
                    type: "input",
                    label: "商品类型",
                    prop: "goodsType",
                    removeValidateUrl: "",
                    placeholder: "请输入商品类型",
                    defaultValue: "",
                    required: true,
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    type: "radio",
                    label: "发放范围",
                    prop: "serviceRange",
                    removeValidateUrl: "",
                    placeholder: "商品发布范围",
                    defaultValue: "1",
                    required: true,
                    options: [
                        { label: "自动覆盖店铺", value: 1 },
                        { label: "自定范围", value: 2 }
                    ],
                    switcher: [
                        {
                            prop: "goodsType",
                            showValue: 1
                        }
                    ],
                    validates: [function (data) {
                            var param = { prop: "serviceRange", formModel: _this.formModel };
                            var error = _this.baseValidateService.baseValidate(data, { watchers: true }, param);
                            return error;
                        }]
                },
                {
                    label: "选择服务范围",
                    type: "baseAreaChoose",
                    prop: "goodsServiceRangeDetail",
                    defaultValue: "请输入商品服务范围",
                    switcher: [
                        {
                            prop: "serviceRange",
                            showValue: "2"
                        }
                    ]
                },
                {
                    type: "select",
                    label: "商品分类",
                    prop: "goodsCategory",
                    defaultValue: "",
                    remoteInfo: {
                        baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                        url: "indexPromotion/initJumpTypes.json",
                        httpMethod: "post",
                        param: { name: "testName", promotionType: "1" },
                        convert: function (data) {
                            var options = [
                                {
                                    label: "请选择",
                                    value: ""
                                }
                            ];
                            if (data.code == "1" && data.data) {
                                for (var key in data.data) {
                                    options.push({
                                        label: data.data[key],
                                        value: key
                                    });
                                }
                            }
                            return options;
                        }
                    },
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 3
                        }
                    ],
                    options: [
                        {
                            label: "休闲食品",
                            value: "0"
                        },
                        {
                            label: "家居日化",
                            value: "1"
                        }
                    ],
                    placeholder: "请选择分类",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "sex", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ],
                },
                {
                    type: "input",
                    label: "商品名称",
                    prop: "goodsName",
                    placeholder: "请输入商品名称",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "goodsName", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "商品原价",
                    prop: "goodsOrgPrice",
                    placeholder: "请输入商品原价",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "goodsOrgPrice", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "商品现价",
                    prop: "goodsCurPrice",
                    placeholder: "请输入商品现价",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "goodsCurPrice", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "商品库存",
                    prop: "goodsLib",
                    placeholder: "请输入商品库存",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "goodsLib", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "radio",
                    label: "是否限购",
                    prop: "isLimit",
                    placeholder: "请输入商品名称",
                    defaultValue: "1",
                    options: [
                        {
                            label: "是",
                            value: "0"
                        },
                        {
                            label: "否",
                            value: "1"
                        }
                    ],
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "isLimit", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "每人限购",
                    prop: "buyLimitNum",
                    placeholder: "请输入商品名称",
                    defaultValue: "",
                    required: true,
                    switcher: [
                        {
                            prop: "isLimit",
                            showValue: "0"
                        }
                    ],
                    validates: [
                        function (control) {
                            var param = { prop: "buyLimitNum", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "radio",
                    label: "是否包邮",
                    prop: "free",
                    defaultValue: "0",
                    options: [
                        {
                            label: "包邮",
                            value: "0"
                        },
                        {
                            label: "不包邮",
                            value: "1"
                        }
                    ],
                    placeholder: "请输入商品名称",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "buyLimitNum", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true }, param);
                        }
                    ]
                },
                {
                    type: "select",
                    label: "送达说明",
                    prop: "arriveInfo",
                    placeholder: "送达说明",
                    defaultValue: "1",
                    required: true,
                    options: [
                        {
                            label: "半小时",
                            value: "0"
                        },
                        {
                            label: "1小时",
                            value: "1"
                        }
                    ],
                    validates: [
                        function (control) {
                            var param = { prop: "arriveInfo", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true }, param);
                        }
                    ]
                },
                {
                    type: "checkbox",
                    label: "售后说明",
                    prop: "afterSale",
                    options: [
                        {
                            label: "7天无理由退换",
                            value: "0"
                        }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "2",
                    required: true,
                    validates: [function (control) {
                            var param = { prop: "afterSale", formModel: _this.formModel, grandfather: "afterSale", formGroup: _this.formGroup };
                            _this.baseValidateService.baseValidate(control, { checkboxWatchers: true }, param);
                        }]
                },
                {
                    type: "input",
                    label: "商品条码",
                    switcher: [{
                            prop: "sex",
                            showValue: "1"
                        }],
                    prop: "goodsQurt",
                    validates: [
                        function (data) {
                            return _this.baseValidateService.baseValidate(data, { required: true, number: "##.##", maxvalue: 10, minvalue: 0.5 });
                        }
                    ]
                },
                /* {
                   type:"checkbox",
                   label:"体育运动",
                   prop:"sports",
                   options:[
                     {
                       label:"跑步",
                       value:"0"
                     },
                     {
                       label:"健身",
                       value:"1"
                     },
                     {
                       label:"瑜伽",
                       value:"2"
                     },
                     {
                       label:"太极",
                       value:"3"}
                   ],
                   placeholder:"请输入名称",
                   defaultValue:"2",
                   required:true,
                   validates:[control=>{
                     let param={prop:"sports",formModel:this.formModel,grandfather:"sports",formGroup:this.formGroup};
                     this.baseValidateService.baseValidate(control,{checkboxRequired:true,checkboxWatchers:true},param)
                   }]
                 },*/
                /*{
                  type:"array",
                  label:"活动时间",
                  prop:"compSizeInnerHeight",
                  options:[
                    {
                      label:"",
                      type:"input",
                      prop:"compA",
                      value:"0"
                    },
                    {
                      label:"至",
                      type:"input",
                      prop:"compB",
                      value:"1"
                    },
                  ],
                  validates:[
                    data=>{
                      // return this.baseValidateService.baseValidate(data,{required:true,number:"##.##",maxvalue:10,minvalue:0.5})
                    }
                  ]
                },*/
                {
                    label: "头图",
                    prop: "firstPic",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle: true },
                    require: true,
                    defaultValue: "",
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    label: "详情图片",
                    prop: "detailPics",
                    type: "array",
                    multiple: false,
                    uploadClass: { myUploadStyle2: true },
                    options: [
                        {
                            label: "",
                            prop: "detailA",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailB",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailC",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailD",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailE",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailF",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailG",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailH",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailI",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailJ",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        }
                    ],
                    validates: [function (control) {
                            var param = { prop: "detailPics", formModel: _this.formModel, grandfather: "detailPics", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayUploadRequired: 3 }, param);
                        }]
                },
                {
                    label: "商品焦点图",
                    type: "array",
                    prop: "goodsDetailImages",
                    validates: [function (control) {
                            var param = { prop: "goodsDetailImages", formModel: _this.formModel, grandfather: "goodsDetailImages", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayUploadRequired: 1 }, param);
                        }],
                    options: [
                        {
                            label: "",
                            prop: "detailA",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailB",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailC",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailD",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailE",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        }
                    ]
                },
                {
                    label: "商品重量",
                    type: "input",
                    prop: "goodsWeight",
                    validates: [
                        function (control) {
                            var param = { prop: "goodsWeight", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.###", maxvalue: "9999.99", minvalue: "0.001", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    label: "描述",
                    type: "textarea",
                    prop: "goodsDetailInfo",
                    validates: [
                        function (data) {
                        }
                    ]
                },
                {
                    label: "商品发布",
                    type: "radio",
                    prop: "isPublish",
                    defaultValue: "0",
                    options: [
                        {
                            label: "放入仓库",
                            value: "0"
                        },
                        {
                            label: "立即上架",
                            value: "1"
                        }
                    ],
                    validates: [
                        function (control) {
                            var param = { prop: "isPublish", formModel: _this.formModel, grandfather: "sports", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ]
                },
                {
                    label: "定时上架",
                    prop: "timerUpSheep",
                    type: "input",
                    switcher: [
                        {
                            prop: "isPublish",
                            showValue: "0"
                        }
                    ],
                    defaultValue: "请输入上架时间"
                },
                {
                    label: "定时下架",
                    prop: "timerDownSheep",
                    type: "input",
                    defaultValue: "请输入下架时间"
                },
                {
                    label: "开始时间",
                    prop: "startTimeStr",
                    defaultValue: "",
                    type: "date",
                    chooseConfig: {
                        format: 'YYYY-MM-DD hh:mm:ss',
                        placeholder: '请输入开始时间',
                        next: 0.5,
                        maxelementid: 'endTimeStr',
                        minelementid: null
                    },
                    validates: [function (control) {
                            //let param={prop:"activeTime",formModel:this.formModel,grandfather:"activeTime",formGroup:this.formGroup};
                            console.log(control.value);
                            //return this.baseValidateService.baseValidate(control,{arrayUploadRequired:1},param);
                        }]
                },
                {
                    label: "结束时间",
                    prop: "endTimeStr",
                    defaultValue: "",
                    type: "date",
                    chooseConfig: {
                        format: 'YYYY-MM-DD hh:mm:ss',
                        placeholder: '请输入开始时间',
                        next: 0,
                        maxelementid: null,
                        minelementid: "startTimeStr"
                    }
                },
                {
                    label: "活动时间",
                    type: "array",
                    prop: "activeTime",
                    options: [
                        {
                            label: "",
                            prop: "activeStartTimeStr",
                            defaultValue: "",
                            type: "date",
                            value: "",
                            chooseConfig: {
                                format: 'YYYY-MM-DD',
                                placeholder: '请输入开始时间',
                                next: 0.5,
                                maxelementid: 'activeEndTimeStr',
                                minelementid: null
                            }
                        },
                        {
                            label: "-",
                            prop: "activeEndTimeStr",
                            defaultValue: "",
                            type: "date",
                            value: "",
                            chooseConfig: {
                                format: 'YYYY-MM-DD',
                                placeholder: '请输入开始时间',
                                next: 0,
                                maxelementid: null,
                                minelementid: "activeStartTimeStr"
                            }
                        }
                    ],
                    validates: [function (control) {
                            var param = { prop: "activeTime", formModel: _this.formModel, grandfather: "activeTime", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayUploadRequired: 1 }, param);
                        }]
                }
            ]
        };
        this.initForm();
    };
    CreateGoodsFormComponent.prototype.open = function () {
    };
    CreateGoodsFormComponent.prototype.close = function (data) {
        console.log("closedata", data);
    };
    CreateGoodsFormComponent.prototype.chooseResult = function (data) {
        console.log("goods form chooseResult", data);
        this.serviceArea = data;
    };
    CreateGoodsFormComponent.prototype.submit = function () {
        var _this = this;
        console.log("sub sub this.formGroup", this.formGroup.value, this.serviceArea);
        this.baseDataService.listData({ url: this.formModel.url, param: this.formGroup.value, httpMethod: "post" }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.router.navigate(["lotteryList"]);
        });
    };
    CreateGoodsFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "create-goods-form",
            template: __webpack_require__(166),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */], __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */], __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__["a" /* BaseDateChooseDirective */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__service_login_service__["a" /* UserLoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_login_service__["a" /* UserLoginService */]) === 'function' && _e) || Object])
    ], CreateGoodsFormComponent);
    return CreateGoodsFormComponent;
    var _a, _b, _c, _d, _e;
}(__WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__["a" /* BaseFormCreateComponentNew */]));
//# sourceMappingURL=create.goods.form.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMallGoodsCatogeryFormComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateMallGoodsCatogeryFormComponent = (function (_super) {
    __extends(CreateMallGoodsCatogeryFormComponent, _super);
    function CreateMallGoodsCatogeryFormComponent(formBuilder, baseValidateService, baseDataService, router) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.baseDataService = baseDataService;
        this.router = router;
    }
    CreateMallGoodsCatogeryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
                {
                    type: "input",
                    label: "分类名称",
                    prop: "goodsType",
                    removeValidateUrl: "",
                    placeholder: "请输入商品类型",
                    defaultValue: "",
                    required: true,
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true, maxlength: 5 });
                        }]
                },
                {
                    label: "分类图标",
                    prop: "firstPic",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle: true },
                    require: true,
                    defaultValue: "",
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
            ]
        };
        this.initForm();
    };
    CreateMallGoodsCatogeryFormComponent.prototype.open = function () {
    };
    CreateMallGoodsCatogeryFormComponent.prototype.close = function (data) {
        console.log("closedata", data);
    };
    CreateMallGoodsCatogeryFormComponent.prototype.chooseResult = function (data) {
        console.log("goods form chooseResult", data);
        this.serviceArea = data;
    };
    CreateMallGoodsCatogeryFormComponent.prototype.submit = function () {
        console.log("sub sub this.formGroup", this.formGroup.value, this.serviceArea);
        this.baseDataService.listData({ url: this.formModel.url, param: this.formGroup.value, httpMethod: "post" }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            //  this.router.navigate(["lotteryList"])
        });
    };
    CreateMallGoodsCatogeryFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "create-goods-form",
            template: __webpack_require__(166),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */], __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */], __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__["a" /* BaseDateChooseDirective */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreateMallGoodsCatogeryFormComponent);
    return CreateMallGoodsCatogeryFormComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__["a" /* BaseFormCreateComponentNew */]));
//# sourceMappingURL=create.mallGoodsCatogery.form.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMerchantFormComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateMerchantFormComponent = (function (_super) {
    __extends(CreateMerchantFormComponent, _super);
    function CreateMerchantFormComponent(formBuilder, baseValidateService, baseDataService, router) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.baseDataService = baseDataService;
        this.router = router;
    }
    CreateMerchantFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
                {
                    type: "input",
                    label: "店铺名称",
                    prop: "goodsType",
                    removeValidateUrl: "",
                    placeholder: "请输入商品类型",
                    defaultValue: "",
                    required: true,
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true, maxlength: 15 });
                        }]
                },
                {
                    type: "radio",
                    label: "服务区域",
                    prop: "serviceRange",
                    removeValidateUrl: "",
                    placeholder: "商品发布范围",
                    defaultValue: "2",
                    required: true,
                    options: [
                        { label: "自动覆盖店铺", value: 1 },
                        { label: "自定范围", value: 2 }
                    ],
                    switcher: [
                        {
                            prop: "goodsType",
                            showValue: 1
                        }
                    ],
                    validates: [function (data) {
                            var param = { prop: "serviceRange", formModel: _this.formModel };
                            var error = _this.baseValidateService.baseValidate(data, { watchers: true }, param);
                            return error;
                        }]
                },
                {
                    label: "选择服务范围",
                    type: "baseAreaChoose",
                    prop: "goodsServiceRangeDetail",
                    defaultValue: "请输入商品服务范围",
                    switcher: [
                        {
                            prop: "serviceRange",
                            showValue: "2"
                        }
                    ]
                },
                {
                    type: "select",
                    label: "店铺类型",
                    prop: "goodsCategory",
                    defaultValue: "",
                    remoteInfo: {
                        baseUrl: "https://testbackend.goodaa.com.cn/ejiazi-backend/",
                        url: "indexPromotion/initJumpTypes.json",
                        httpMethod: "post",
                        param: { name: "testName", promotionType: "1" },
                        convert: function (data) {
                            var options = [
                                {
                                    label: "请选择",
                                    value: ""
                                }
                            ];
                            if (data.code == "1" && data.data) {
                                for (var key in data.data) {
                                    options.push({
                                        label: data.data[key],
                                        value: key
                                    });
                                }
                            }
                            return options;
                        }
                    },
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 3
                        }
                    ],
                    options: [
                        {
                            label: "休闲食品",
                            value: "0"
                        },
                        {
                            label: "家居日化",
                            value: "1"
                        }
                    ],
                    placeholder: "请选择分类",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "sex", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ],
                },
                {
                    type: "checkbox",
                    label: "店铺标签",
                    prop: "sports",
                    options: [
                        {
                            label: "放心",
                            value: "0"
                        },
                        {
                            label: "专业",
                            value: "1"
                        },
                        {
                            label: "卫生",
                            value: "2"
                        },
                        {
                            label: "全面",
                            value: "3" }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "2",
                    required: true,
                    validates: [function (control) {
                            var param = { prop: "sports", formModel: _this.formModel, grandfather: "sports", formGroup: _this.formGroup };
                            _this.baseValidateService.baseValidate(control, { checkboxRequired: true, checkboxWatchers: true }, param);
                        }]
                },
                {
                    type: "input",
                    label: "一句话简评",
                    prop: "shotJump",
                    placeholder: "简要介绍",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "shotJump", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "门店地址",
                    prop: "address",
                    placeholder: "门店地址",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "address", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "店铺简介",
                    prop: "introduce",
                    placeholder: "introduce",
                    defaultValue: "",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "introduce", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true }, param);
                        }
                    ]
                },
                {
                    type: "checkbox",
                    label: "售后说明",
                    prop: "afterSale",
                    options: [
                        {
                            label: "7天无理由退换",
                            value: "0"
                        }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "2",
                    required: true,
                    validates: [function (control) {
                            var param = { prop: "afterSale", formModel: _this.formModel, grandfather: "afterSale", formGroup: _this.formGroup };
                            _this.baseValidateService.baseValidate(control, { checkboxWatchers: true }, param);
                        }]
                },
                {
                    type: "input",
                    label: "商品条码",
                    switcher: [{
                            prop: "sex",
                            showValue: "1"
                        }],
                    prop: "goodsQurt",
                    validates: [
                        function (data) {
                            return _this.baseValidateService.baseValidate(data, { required: true, number: "##.##", maxvalue: 10, minvalue: 0.5 });
                        }
                    ]
                },
                {
                    label: "店铺首图",
                    prop: "firstPic",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle: true },
                    require: true,
                    defaultValue: "",
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            return _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    label: "店铺宣传图",
                    prop: "detailPics",
                    type: "array",
                    multiple: false,
                    uploadClass: { myUploadStyle2: true },
                    options: [
                        {
                            label: "",
                            prop: "detailA",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailB",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailC",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailD",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailE",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailF",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailG",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailH",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailI",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailJ",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        }
                    ],
                    validates: [function (control) {
                            var param = { prop: "detailPics", formModel: _this.formModel, grandfather: "detailPics", formGroup: _this.formGroup };
                            return _this.baseValidateService.baseValidate(control, { arrayUploadRequired: 3 }, param);
                        }]
                },
                {
                    type: "radio",
                    label: "合作形式",
                    prop: "isLimit",
                    placeholder: "请输入商品名称",
                    defaultValue: "1",
                    options: [
                        {
                            label: "合作店铺",
                            value: "0"
                        },
                        {
                            label: "展示店铺",
                            value: "1"
                        }
                    ],
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "isLimit", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ]
                },
                {
                    type: "input",
                    label: "每人限购",
                    prop: "buyLimitNum",
                    placeholder: "请输入商品名称",
                    defaultValue: "",
                    required: true,
                    switcher: [
                        {
                            prop: "isLimit",
                            showValue: "0"
                        }
                    ],
                    validates: [
                        function (control) {
                            var param = { prop: "buyLimitNum", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { required: true, number: "###.##", maxvalue: "9999.99", minvalue: "0.01", maxlength: 5 }, param);
                        }
                    ]
                },
            ]
        };
        this.initForm();
    };
    CreateMerchantFormComponent.prototype.open = function () {
    };
    CreateMerchantFormComponent.prototype.close = function (data) {
        console.log("closedata", data);
    };
    CreateMerchantFormComponent.prototype.chooseResult = function (data) {
        console.log("goods form chooseResult", data);
        this.serviceArea = data;
    };
    CreateMerchantFormComponent.prototype.submit = function () {
        var _this = this;
        console.log("sub sub this.formGroup", this.formGroup.value, this.serviceArea);
        this.baseDataService.listData({ url: this.formModel.url, param: this.formGroup.value, httpMethod: "post" }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.router.navigate(["lotteryList"]);
        });
    };
    CreateMerchantFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "create-goods-form",
            template: __webpack_require__(166),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */], __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */], __WEBPACK_IMPORTED_MODULE_7__directive_base_date_choose__["a" /* BaseDateChooseDirective */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreateMerchantFormComponent);
    return CreateMerchantFormComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_4__baseComponent_base_from_create_component_new__["a" /* BaseFormCreateComponentNew */]));
//# sourceMappingURL=create.merchant.form.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_base_validate_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseComponent_base_from_create_component_new__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_base_customer_keys_pipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsFormComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Created by xkfeng on 2017/5/4.
 *
 * create goods  form
 *
 */
var GoodsFormComponent = (function (_super) {
    __extends(GoodsFormComponent, _super);
    function GoodsFormComponent(formBuilder, baseValidateService, baseDataService, router) {
        _super.call(this, formBuilder, baseDataService);
        this.formBuilder = formBuilder;
        this.baseValidateService = baseValidateService;
        this.baseDataService = baseDataService;
        this.router = router;
    }
    GoodsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formModel = {
            url: "goods/saveGoods.json",
            elements: [
                {
                    type: "input",
                    label: "远程校验",
                    prop: "name21",
                    removeValidateUrl: "",
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    switcher: [{
                            prop: "sports",
                            showValue: 2
                        }, {
                            prop: "sex",
                            showValue: 0
                        }],
                    validates: [function (control) {
                            var remoteValidateRequiredParam = { "name21": true, name1: true };
                            var remoteService = {
                                url: "goods/existName",
                                baseUrl: "https://testmerchant.goodaa.com.cn/ejiazi-merchant/",
                            };
                            return _this.baseValidateService.baseValidate(control, { remote: true }, remoteValidateRequiredParam, remoteService);
                        }]
                },
                {
                    type: "input",
                    label: "名称1",
                    prop: "name1",
                    removeValidateUrl: "",
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 1
                        }
                    ],
                    validates: [function (data) {
                            var error = _this.baseValidateService.baseValidate(data, { required: true, maxlength: 15, minlength: 1, number: "###.##", maxvalue: 300.01, minvalue: 100.00 });
                            return error;
                        }]
                },
                {
                    type: "radio",
                    label: "性别",
                    prop: "sex",
                    defaultValue: "0",
                    switcher: [
                        {
                            prop: "sports",
                            showValue: 3
                        }
                    ],
                    options: [
                        {
                            label: "男",
                            value: "0"
                        },
                        {
                            label: "女",
                            value: "1"
                        }
                    ],
                    placeholder: "请输入名称",
                    required: true,
                    validates: [
                        function (control) {
                            var param = { prop: "sex", formModel: _this.formModel };
                            return _this.baseValidateService.baseValidate(control, { watchers: true }, param);
                        }
                    ],
                },
                {
                    type: "checkbox",
                    label: "爱好",
                    prop: "love",
                    options: [
                        {
                            label: "看报",
                            value: "0"
                        },
                        {
                            label: "看电视",
                            value: "1"
                        },
                        {
                            label: "交友",
                            value: "2"
                        },
                        {
                            label: "创作",
                            value: "3"
                        }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "",
                    required: true,
                    validates: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].maxLength(5)]
                },
                {
                    type: "checkbox",
                    label: "体育运动",
                    prop: "sports",
                    options: [
                        {
                            label: "跑步",
                            value: "0"
                        },
                        {
                            label: "健身",
                            value: "1"
                        },
                        {
                            label: "瑜伽",
                            value: "2"
                        },
                        {
                            label: "太极",
                            value: "3" }
                    ],
                    placeholder: "请输入名称",
                    defaultValue: "2",
                    required: true,
                    validates: [function (control) {
                            var param = { prop: "sports", formModel: _this.formModel, grandfather: "sports", formGroup: _this.formGroup };
                            _this.baseValidateService.baseValidate(control, { checkboxRequired: true, checkboxWatchers: true }, param);
                        }]
                },
                {
                    type: "input",
                    label: "内增高",
                    switcher: [{
                            prop: "sex",
                            showValue: "1"
                        }],
                    prop: "innerHeight",
                    validates: [
                        function (data) {
                            return _this.baseValidateService.baseValidate(data, { required: true, number: "##.##", maxvalue: 10, minvalue: 0.5 });
                        }
                    ]
                },
                {
                    type: "array",
                    label: "活动时间",
                    prop: "compSizeInnerHeight",
                    options: [
                        {
                            label: "",
                            type: "input",
                            prop: "compA",
                            value: "0"
                        },
                        {
                            label: "至",
                            type: "input",
                            prop: "compB",
                            value: "1"
                        },
                    ],
                    validates: [
                        function (data) {
                            // return this.baseValidateService.baseValidate(data,{required:true,number:"##.##",maxvalue:10,minvalue:0.5})
                        }
                    ]
                },
                {
                    label: "头像",
                    prop: "photo",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle: true },
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            console.log(control.value);
                            _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    label: "详情图片",
                    prop: "detail",
                    type: "upload",
                    multiple: false,
                    uploadClass: { myUploadStyle2: true },
                    imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                    validates: [function (control) {
                            console.log(control.value);
                            _this.baseValidateService.baseValidate(control, { required: true });
                        }]
                },
                {
                    label: "商品详情图",
                    type: "array",
                    prop: "goodsDetailImages",
                    validates: [],
                    options: [
                        {
                            label: "",
                            prop: "detailA",
                            type: "upload",
                            value: "",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailB",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        },
                        {
                            label: "",
                            prop: "detailC",
                            value: "",
                            type: "upload",
                            multiple: false,
                            uploadClass: { myUploadStyle2: true },
                            imageConfig: { id: "imgId", url: "imageUrl", detail: "大转盘分享图标大小", size: "<30k", "validate": true, extend: ".png,.jpeg,.jpg" },
                            validates: [function (control) {
                                    console.log(control.value);
                                    _this.baseValidateService.baseValidate(control, { required: true });
                                }]
                        }
                    ]
                }
            ]
        };
        this.initForm();
    };
    GoodsFormComponent.prototype.open = function () {
    };
    GoodsFormComponent.prototype.close = function (data) {
        console.log("closedata", data);
    };
    GoodsFormComponent.prototype.submit = function () {
        var _this = this;
        console.log("sub sub this.formGroup", this.formGroup.value);
        this.baseDataService.listData({ url: this.formModel.url, param: this.formGroup.value, httpMethod: "post" }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.router.navigate(["lotteryList"]);
        });
    };
    GoodsFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_6" /* Component */])({
            selector: "goods-from-create",
            template: __webpack_require__(166),
            styles: [__webpack_require__(71)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__pipe_base_customer_keys_pipe__["a" /* BaseCustomerKeysPipe */], __WEBPACK_IMPORTED_MODULE_0__service_base_validate_service__["a" /* BaseValidateService */], __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_base_validate_service__["a" /* BaseValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__service_base_validate_service__["a" /* BaseValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], GoodsFormComponent);
    return GoodsFormComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_1__baseComponent_base_from_create_component_new__["a" /* BaseFormCreateComponentNew */]));
//# sourceMappingURL=goods.form.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_logger_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeroService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroServiceProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroService = (function () {
    function HeroService(loggerService, isAuth) {
        this.loggerService = loggerService;
        console.log("loggerService", loggerService);
    }
    HeroService.prototype.getHeros = function () {
        this.loggerService.log("getHeros function called");
        return [{
                name: "ooooxkfeeewwweng333",
                age: 2
            }];
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__logger_logger_service__["a" /* LoggerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__logger_logger_service__["a" /* LoggerService */]) === 'function' && _a) || Object, Boolean])
    ], HeroService);
    return HeroService;
    var _a;
}());
var heroServiceFactory = function (loggerService, userService) {
    return new HeroService(loggerService, userService.isAuth);
};
var HeroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_0__logger_logger_service__["a" /* LoggerService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]]
};
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotteryListService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LotteryListService = (function (_super) {
    __extends(LotteryListService, _super);
    function LotteryListService() {
        _super.apply(this, arguments);
    }
    LotteryListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LotteryListService);
    return LotteryListService;
}(__WEBPACK_IMPORTED_MODULE_1__base_data_service__["a" /* BaseDataService */]));
//# sourceMappingURL=lottery_list.service.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_table_list_simple_config_model__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTestPopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseTestPopComponent = (function () {
    function BaseTestPopComponent() {
        this.query = {
            queryElements: [
                {
                    label: '小区名称',
                    type: 'input',
                    placeholder: '小区名称',
                    prop: 'communityIdStr'
                },
                {
                    label: '商品名称',
                    type: 'input',
                    placeholder: '商品名称',
                    prop: 'name'
                },
                {
                    label: '搜索',
                    type: 'search'
                }
            ]
        };
    }
    BaseTestPopComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tableListConfig = new __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__["a" /* TableListConfig */]("advert/queryAdvertList.json", null, [{ label: "选择", click: function (data) {
                    _this.chooseSimple(data);
                } }], this.query.queryElements, "post");
        tableListConfig.defaultColumsHeaderMap = {
            name: "名称",
            communityName: "小区名称",
            startDate: "开始时间",
            endDate: "结束时间",
            pageTypeName: "页面类型"
        };
        this.tableListConfig = tableListConfig;
        this.tableListSimpleConfig = new __WEBPACK_IMPORTED_MODULE_1__model_table_list_simple_config_model__["a" /* TableListSimpleConfig */]("test");
        this.tableListSimpleConfig.watcher = { name: 123 };
    };
    BaseTestPopComponent.prototype.chooseSimple = function (data) {
        this.advert = data;
        this.tableListConfig.operator[0].label = "已选";
        layer.close(this.popId);
    };
    BaseTestPopComponent.prototype.popTest = function () {
        this.popNoCopy($("#testPop"), "70%", "60%");
    };
    BaseTestPopComponent.prototype.popNoCopy = function (dom, width, height, callBack, data) {
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
        this.popId = layer.open({
            title: null,
            type: 1,
            content: dom,
            btn: null,
            closeBtn: null,
            zIndex: layer.zIndex,
            area: [width, height],
            success: function (layer, index) {
                if (typeof callBack == 'function') {
                    callBack(data);
                }
            }
        });
    };
    BaseTestPopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-pop-test",
            template: __webpack_require__(610),
            styles: [__webpack_require__(594)]
        }), 
        __metadata('design:paramtypes', [])
    ], BaseTestPopComponent);
    return BaseTestPopComponent;
}());
//# sourceMappingURL=base.test.pop.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTableListConfigFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by Administrator on 2017/4/26.
 * 创建基础分页表单配置对象 将提供可实时预览功能
 * 目标：BaseTableListConfig（url,columns,operates,queryElements,httpMethod）
 * 使用reactiveForm进行创建
 */
var BaseTableListConfigFormComponent = (function () {
    function BaseTableListConfigFormComponent(formBuild, baseDataService) {
        this.formBuild = formBuild;
        this.baseDataService = baseDataService;
        this.currentType = "0";
        this.addTypes = [
            {
                label: '添加列',
                value: 0
            },
            {
                label: '添加操作',
                value: 1
            },
            {
                label: '添加复杂（级联）查询',
                value: 2
            },
            {
                label: '添加简单input查询',
                value: 3
            },
        ];
        this.columnFormData = {
            inputs: [
                {
                    key: "columnName",
                    name: "columnName",
                    label: "列名："
                },
                {
                    key: "columnProp",
                    name: "columnProp",
                    label: "属性："
                },
                {
                    key: "columnType",
                    name: "columnType",
                    label: "类型："
                }
            ]
        };
        this.querySimpleInputFormData = {
            inputs: [
                {
                    key: "queryLabel",
                    name: "queryLabel",
                    label: "标题名称："
                },
                {
                    key: "queryProp",
                    name: "queryProp",
                    label: "查询参数名："
                },
                {
                    key: "queryPlaceholder",
                    name: "queryPlaceholder",
                    label: "输入框占位符："
                },
                {
                    key: "queryType",
                    name: "queryType",
                    label: "查询条件类型："
                },
                {
                    key: "queryDefaultValue",
                    name: "queryDefaultValue",
                    label: "查询条件默认值："
                }
            ]
        };
        this.operatorFormData = {
            inputs: [
                {
                    key: "operateLabel",
                    name: "operateLabel",
                    label: "按钮名称："
                },
                {
                    key: "operateClick",
                    name: "operateClick",
                    label: "监听器名称："
                },
                {
                    key: "operateNeedParam",
                    name: "operateNeedParam",
                    label: "是否需要参数："
                },
                {
                    key: "operateShowMap",
                    name: "operateShowMap",
                    label: "显示关联逻辑："
                },
                {
                    key: "operateIsExecuteProp",
                    name: "operateIsExecuteProp",
                    label: "禁用属性："
                },
                {
                    key: "operateClickHandler",
                    name: "operateClickHandler",
                    label: "处理函数："
                }
            ]
        };
        this.queryComplexFormData = {
            inputs: [
                {
                    key: "queryLabel",
                    name: "queryLabel",
                    label: "按钮名称："
                },
                {
                    key: "queryType",
                    name: "queryType",
                    label: "查询类型 select："
                },
                {
                    key: "queryProp",
                    name: "queryProp",
                    label: "查询参数名："
                },
                {
                    key: "queryPropList",
                    name: "queryPropList",
                    label: "结果集属性："
                },
                {
                    key: "queryPropKeyList",
                    name: "queryPropKeyList",
                    label: "结果集KeyKey属性："
                },
                {
                    key: "queryPropValueList",
                    name: "queryPropValueList",
                    label: "结果集ValueKey属性："
                },
                {
                    key: "queryCasecadeChild",
                    name: "queryCasecadeChild",
                    label: "关联子查询参数："
                },
                {
                    key: "queryPropAlias",
                    name: "queryPropAlias",
                    label: "查询参数别名："
                },
                {
                    key: "queryCasecadeGrandsonList",
                    name: "queryCasecadeGrandsonList",
                    label: "级联子孙属性："
                },
                {
                    key: "queryDataUrl",
                    name: "queryDataUrl",
                    label: "数据源地址url："
                },
                {
                    key: "queryPlaceholder",
                    name: "queryPlaceholder",
                    label: "占位符："
                },
                {
                    key: "queryClick",
                    name: "queryClick",
                    label: "监听器名称："
                },
                {
                    key: "queryDefaultValue",
                    name: "queryDefaultValue",
                    label: "默认值："
                },
                {
                    key: "queryNeedParam",
                    name: "queryNeedParam",
                    label: "是否需要参数："
                },
                {
                    key: "queryShowMap",
                    name: "queryShowMap",
                    label: "显示关联逻辑："
                },
                {
                    key: "queryIsExecuteProp",
                    name: "queryIsExecuteProp",
                    label: "禁用属性："
                }
            ]
        };
        this.columns = [];
        this.operator = [];
        this.query = [];
        this.queryModel = [
            {
                label: '请选择省',
                type: 'select',
                placeholder: '请输入省',
                dataUrl: 'citys/queryOpeningCitiesList.json',
                prop: 'provinceId',
                initQuery: true,
                defaultValue: "",
                propList: 'provinceList',
                propKeyList: 'provinceList',
                propValueList: 'citiesList',
                casecadeParen: "",
                casecadeChild: "cityId",
                casecadeGrandsonList: ["cityId", "districtId", "communityId"]
            },
            {
                label: '请选择市',
                type: 'select',
                defaultValue: "",
                placeholder: '请输入市',
                dataUrl: 'citys/queryOpeningCitiesList.json',
                prop: 'cityId',
                extendsProp: ["pid"],
                propList: 'cityList',
                propKeyList: 'cityList',
                propValueList: 'citiesList',
                casecadeParen: "provinceId",
                casecadeChild: "districtId",
                casecadeGrandsonList: ["districtId", "communityId"]
            },
            {
                label: '请选择区',
                defaultValue: "",
                type: 'select',
                dataUrl: 'citys/queryOpeningCitiesList.json',
                placeholder: '请选择区',
                prop: 'districtId',
                extendsProp: ["pid"],
                propList: 'districtList',
                propKeyList: 'districtList',
                propValueList: 'citiesList',
                casecadeParen: "cityId",
                casecadeChildDataUrl: "community/queryCommunitiesList.json",
                casecadeChildListProp: "data",
                casecadeChild: "",
                queryParam: "cityId"
            } /*,
            {
              label:'小区名称',
              type:'input',
              placeholder:'小区名称',
              prop:'communityName'
            }*/
        ];
        this.baseTableListConfig = new __WEBPACK_IMPORTED_MODULE_2__model_table_list_config_model__["a" /* TableListConfig */]("url", this.columns, this.operator, this.query);
        this.configModel = { "url": "activity/getActivityPageList.json", "colums": [{ "label": "活动ID", "prop": "id", "name": "id", "type": "" }, { "label": "活动名称", "prop": "name", "name": "name", "type": "" }, { "label": "报名人数", "prop": "registrationCount", "name": "registrationCount", "type": "" }, { "label": "状态", "prop": "activityStateName", "name": "activityStateName", "type": "" }], "operator": [{ "label": "导出报名信息", "click": "click", "operateNeedParam": "true", "operateShowMap": "", "operateIsExecuteProp": "" }], "query": [{ "label": "活动名称", "placeholder": "请输入活动名称", "type": "input", "prop": "name" }, { "label": "搜索", "placeholder": "请输入活动名称", "type": "search", "prop": "name" }], "httpMethod": "get" };
        this.defaultValue = Math.ceil(Math.random() * 1000);
        this.isView = false;
        this.createForm();
        this.createColumnForm();
        this.createOperateForm();
        this.createQueryComplexForm();
        this.createQuerySimpleInputForm();
    }
    BaseTableListConfigFormComponent.prototype.createForm = function () {
        this.listConfigForm = this.formBuild.group({
            name: ["name", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            age: ["23", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
        });
    };
    BaseTableListConfigFormComponent.prototype.createColumnForm = function () {
        var formGroup = {};
        this.columnFormData.inputs.forEach(function (item) {
            formGroup[item.name] = [item.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]];
        });
        this.columnFrom = this.formBuild.group(formGroup);
    };
    BaseTableListConfigFormComponent.prototype.createOperateForm = function () {
        var formGroup = {};
        this.operatorFormData.inputs.forEach(function (item) {
            formGroup[item.name] = [item.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]];
        });
        this.operateFrom = this.formBuild.group(formGroup);
    };
    BaseTableListConfigFormComponent.prototype.createQueryComplexForm = function () {
        var formGroup = {};
        this.queryComplexFormData.inputs.forEach(function (item) {
            formGroup[item.name] = [item.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]];
        });
        this.queryComplexFrom = this.formBuild.group(formGroup);
    };
    BaseTableListConfigFormComponent.prototype.createQuerySimpleInputForm = function () {
        var formGroup = {};
        this.querySimpleInputFormData.inputs.forEach(function (item) {
            formGroup[item.name] = [item.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]];
        });
        this.querySimpleInputFrom = this.formBuild.group(formGroup);
    };
    BaseTableListConfigFormComponent.prototype.addColumnItem = function () {
        console.log("this.columnFrom.value", this.columnFrom.value);
        var columnItem = this.columnFrom.value;
        this.columns.push({
            label: columnItem.columnName,
            prop: columnItem.columnProp,
            name: columnItem.columnProp,
            type: columnItem.columnType
        });
    };
    BaseTableListConfigFormComponent.prototype.addOperateItem = function () {
        console.log("this.operateFrom.value", this.operateFrom.value);
        var columnItem = this.operateFrom.value;
        this.operator.push({
            label: columnItem.operateLabel,
            click: columnItem.operateClick,
            operateNeedParam: columnItem.operateNeedParam,
            operateShowMap: columnItem.operateShowMap,
            operateIsExecuteProp: columnItem.operateIsExecuteProp,
            clickHandler: columnItem.operateClickHandler,
            abc: function () { return console.log(121); }
        });
    };
    BaseTableListConfigFormComponent.prototype.addQueryComplexItem = function () {
        console.log("this.queryComplexFrom.value", this.queryComplexFrom.value);
        var columnItem = this.queryComplexFrom.value;
        this.query.push({
            queryLabel: columnItem.queryLabel,
            queryClick: columnItem.queryClick,
            queryNeedParam: columnItem.queryNeedParam,
            queryShowMap: columnItem.queryShowMap,
            queryIsExecuteProp: columnItem.queryIsExecuteProp
        });
    };
    BaseTableListConfigFormComponent.prototype.addQuerySimpleInputItem = function () {
        console.log("this.querySimpleInputFrom.value", this.querySimpleInputFrom.value);
        var columnItem = this.querySimpleInputFrom.value;
        this.query.push({
            label: columnItem.queryLabel,
            placeholder: columnItem.queryPlaceholder,
            type: columnItem.queryType,
            prop: columnItem.queryProp,
            queryClick: columnItem.queryClick,
            queryNeedParam: columnItem.queryNeedParam,
            queryShowMap: columnItem.queryShowMap,
            queryIsExecuteProp: columnItem.queryIsExecuteProp
        });
    };
    BaseTableListConfigFormComponent.prototype.exportConfig = function () {
        console.log(JSON.stringify(this.baseTableListConfig));
    };
    BaseTableListConfigFormComponent.prototype.previewConfig = function () {
        console.log("sorry!!! preview is not implements!!!");
        this.isView = !this.isView;
        this.previewTableListConfig = this.baseTableListConfig;
    };
    BaseTableListConfigFormComponent.prototype.addCasecadeQuery = function () {
        var _this = this;
        this.queryModel.forEach(function (item) {
            _this.query.push(item);
        });
        var date = new Date();
        this.reload = date;
    };
    BaseTableListConfigFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: "base-table-list-config-form",
            template: __webpack_require__(611),
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]],
            styles: [__webpack_require__(595)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _b) || Object])
    ], BaseTableListConfigFormComponent);
    return BaseTableListConfigFormComponent;
    var _a, _b;
}());
//# sourceMappingURL=base.table.list.config.form.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".searchBtn{\r\n  display: inline-block;padding: 3px 10px;background: #fff;border: 1px solid #e00;color: #e00;border-radius: 3px;font-size: 12px;cursor: pointer;\r\n}\r\n.communityList{\r\n  border: 1px dashed #eee;\r\n  border-left: 0px solid #f00;\r\n  border-right: 0px solid #f00;\r\n  border-top: 0px solid #f00;\r\n  width: 100%;\r\n  margin: 3px 0px;\r\n  border-radius: 3px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin-left:0px;\r\n}\r\n.communityList:hover{\r\n  background: rgba(117, 152, 255, 0.12);\r\n  color: #e00!important;\r\n  cursor: pointer!important;\r\n}\r\n.communityList:hover span{\r\n  color: #e00!important;\r\n}\r\n.arrayListContainer{\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n  font-size: 12px;\r\n}\r\n.lineChecked{\r\n  background:rgba(0, 188, 212, 0.18);\r\n  cursor: pointer;\r\n}\r\n\r\n.checkFlag{\r\n  display: inline-block;\r\n  width: 26px;\r\n  height: 26px;\r\n  background: url(https://testbackend.goodaa.com.cn/ejiazi-backend/images/checked.png) center center no-repeat;\r\n  background-size: contain;\r\n}\r\n.unCheckFlag{\r\n  display: inline-block;\r\n  width: 26px;\r\n  height: 26px;\r\n  background: url(https://testbackend.goodaa.com.cn/ejiazi-backend/images/unchecked.png) center center no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n.itemRemoveIcon{\r\n  display: inline-block;\r\n  width: 14px;\r\n  height: 14px;\r\n  text-align: center;\r\n  line-height: 13px;\r\n  background: #f33;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.areaChooseContainer,.communityChooseContainer{\r\n  padding:5px 3px;\r\n  background: #eee;\r\n  font-size: 12px;\r\n  padding-top: 15px;\r\n  margin-left: 160px;\r\n}\r\n.areaChooseContainer >span,.communityChooseContainer>span{\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  border: 1px solid #0000aa;\r\n  color:#0000aa ;\r\n  border-radius: 3px;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.communityChooseContainer >span{\r\n  background: #7598ff;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".show{\r\n  position: absolute;\r\n  background: rgba(0,0,0,0.85);\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0px;\r\n  text-align: center;\r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "table{\r\n  border-collapse: collapse;\r\n  color: #333;\r\n}\r\n\r\ntbody tr{\r\n  border-top: 1px solid #eee;\r\n}\r\nth{\r\n  background: #eee;\r\n  font-weight: 500;\r\n  border: 0px solid #000!important;\r\n  padding: 3px 0px;\r\n  font-size: 15px;\r\n  color: #888;\r\n}\r\ntd{\r\n  font-size: 12px;\r\n}\r\n\r\n.operateBtn{\r\n  display: inline-block;\r\n  border: 1px solid #a2caff;\r\n  border-radius: 3px;\r\n  margin-right: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  color: rgba(1, 0, 255, 0.93);\r\n  cursor: pointer;\r\n}\r\ntable{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\ntd{\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".searchContainer{\r\n  padding: 10px;\r\n  padding: 10px;\r\n  background: rgba(30, 97, 233, 0.25);\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  color: #616161;\r\n  font-size: 13px;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.searchContainer select{\r\n  height: 26px;\r\n  line-height: 26px;\r\n  border: none;\r\n  min-width: 120px;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  margin-bottom: 10px;\r\n}\r\noption{\r\n  padding: 5px 0px;\r\n}\r\n.searchContainer input{\r\n  height: 26px;\r\n  line-height: 26px;\r\n  display: inline-block;\r\n  border: none;\r\n  min-width: 120px;\r\n  padding-right: 3px;\r\n  border-radius: 3px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.searchContainer .btn {\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  font-size: 13px;\r\n  border: 1px solid #eee;\r\n  color: #333;\r\n  background: #1b8414;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n\r\n.searchContainer .btnContainer{\r\n  display: inline-block;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack:start;\r\n      -ms-flex-pack:start;\r\n          justify-content:flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".firstLeaveMenu{\r\n    padding-left: 10px;\r\n}\r\n\r\n.firstLeaveMenu+div >div{\r\n    padding-left: 25px;\r\n    cursor: pointer;\r\n    color: #7598ff;\r\n    margin: 10px 0px;\r\n    font-size: 14px;\r\n}\r\n\r\n.leftIcon{\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n.rightContainer{\r\n    overflow-y: auto;\r\n    padding: 5px 0px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "table{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\ntable thead th{\r\n  border-top: 1px solid #f00;\r\n  border-bottom: 1px solid #f00;\r\n}\r\ntd{\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\nform{\r\n  background: #616161;\r\n  padding: 10px;\r\n  border-radius: 3px;\r\n  max-width: 90%;\r\n}\r\n\r\ninput{\r\n  height: 33px;\r\n  line-height: 33px;\r\n  border-radius: 3px;\r\n  margin-bottom: 3px;\r\n}\r\n.inputLabel{\r\n  width: 240px;\r\n  text-align: right;\r\n  display: inline-block;\r\n  color: #fff;\r\n}\r\n.operateBtn{\r\n  display: inline-block;\r\n  padding: 5px 10px;\r\n  border-radius: 3px;\r\n  background: #ffffff;\r\n  border: 1px solid #ee0000;\r\n  color: #ee0000;\r\n  margin-right: 10px;\r\n}\r\n\r\nform input[type=text]{\r\n  min-width: 70%;\r\n  border-radius: 3px;\r\n  margin-bottom: 10px;\r\n}\r\n.flexContainer{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin-bottom: 20px;\r\n}\r\n.flexContainer form{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  -ms-flex-negative: 1;\r\n      flex-shrink: 1;\r\n}\r\n.flexContainer>span{\r\n  -webkit-box-flex: 0;\r\n      -ms-flex-positive: 0;\r\n          flex-grow: 0;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n  cursor: pointer;\r\n  padding: 0px 10px;\r\n  background: #1b8414;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n}\r\n.flexContainer .placeholder{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  -ms-flex-negative: 1;\r\n      flex-shrink: 1;\r\n}\r\n.addTypeContainer{\r\n  margin-bottom: 20px;\r\n}\r\n.addTypeContainer label{\r\n  display: inline-block;\r\n  padding: 5px 15px;\r\n  border: 1px solid #ee00aa;\r\n  color: #ee00aa;\r\n  border-radius: 3px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.addTypeContainer input[type=radio]{\r\n  display: none;\r\n}\r\n\r\ntable{\r\n  font-size: 12px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "    <div class=\"communityChooseContainer\" *ngIf=\"chooseArray.length>0\">\r\n      <span class=\"leftInnerGroupContainer\" *ngFor=\"let community of chooseArray\">\r\n          <span class=\"itemBlock\">{{community.name}} <span class=\"itemRemoveIcon\" (click)=\"removeCommunity(community.id)\">×</span></span>\r\n      </span>\r\n    </div>\r\n    <div *ngIf=\"chooseAreaArray.length>0\" class=\"areaChooseContainer\">\r\n        <span class=\"leftInnerGroupContainer\" *ngFor=\"let area of chooseAreaArray\">\r\n            <span class=\"itemBlock\">{{area.name}}<span class=\"itemRemoveIcon\"  (click)=\"removeArea([area])\">×</span></span>\r\n        </span>\r\n    </div>\r\n<form novalidate [formGroup]=\"formGroup\" (ngSubmit)=\"submit(formGroup.value)\">\r\n  <div *ngFor=\"let element of formModel.elements;let i = index;\" [ngSwitch]=\"element.type\" class=\"formRow\" style=\"padding: 0px;\">\r\n            <span  *ngSwitchCase=\"'input'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"input_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"input_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'date'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"date_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"date_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" dateChoose [chooseConfig]=\"{element:element,dateConfig:element.chooseConfig,control:formGroup.get(element.prop)}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'upload'\">\r\n                <div *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                  <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <label for=\"upload_{{element.prop}}_{{i}}\">\r\n                    <span class=\"uploadImageContainer\" [ngClass]=\"element.uploadClass\">\r\n                      <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove')\">×</span>\r\n                      <img *ngIf=\"formGroup.get(element.prop).value\" src=\"{{formGroup.get(element.prop).value.showUrl}}\">\r\n                      <img *ngIf=\"!formGroup.get(element.prop).value\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                      <div class=\"operateBtnContainer\" style=\"display: none;\">\r\n                        <span class=\"left\"  (click)=\"operateUtil($event,element,'left',i)\">←</span>\r\n                        <span class=\"right\" (click)=\"operateUtil($event,element,'right',i)\">→</span>\r\n                      </div>\r\n                    </span>\r\n                  </label>\r\n                  <input type=\"file\" [multiple]=\"element.multiple\" fileUpload=\"element\" [accept]=\"element.imageConfig.extend\" [uploadConfig]=\"{formControl:formGroup.get(element.prop),config:element.imageConfig}\" id=\"upload_{{element.prop}}_{{i}}\" >\r\n                  <input type=\"hidden\" id=\"upload_{{element.prop}}_{{i}}_hidden\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'radio'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <span *ngFor=\"let option of element.options;let i=index;\">\r\n                          <input type=\"radio\"  id=\"radio_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\" [checked]=\"option.value==element.defaultValue\" value=\"{{option.value}}\" formControlName=\"{{element.prop}}\">\r\n                          <label for=\"radio_{{element.prop}}_{{i}}\">{{option.label}}</label>\r\n                      </span>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'checkbox'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                    <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                    <span formArrayName=\"{{element.prop}}\">\r\n                        <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                              <input type=\"checkbox\"  id=\"{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                              <label for=\"{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                        </span>\r\n                    </span>\r\n                    <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'select'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <select formControlName=\"{{element.prop}}\" id=\"select_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\">\r\n                        <option *ngFor=\"let option of element.options;let i=index;\" [selected]=\"option.value==element.defaultValue\" value=\"{{option.value}}\">{{option.label}}</option>\r\n                      </select>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'array'\">\r\n                <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}: </label>\r\n                <input type=\"text\" formControlName=\"{{element.prop}}LinkValidate\" *ngIf=\"!element.noNeedValidateElement==true\">\r\n                <span formArrayName=\"{{element.prop}}\" class=\"arrayElementsContainer\">\r\n                        <span *ngFor=\"let optionFormControl of formGroup.get(element.prop).controls;let ii=index;let first=first;let last=last;\" [formGroupName]=\"ii\">\r\n                               <span [ngSwitch]=\"optionFormControl.value.type\" class=\"formRowArray\">\r\n                                      <span  *ngSwitchCase=\"'input'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"formLeftLabelArray\" for=\"array_input_{{optionFormControl.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <input type=\"text\" id=\"array_input_{{optionFormControl.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'searchBtn'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"searchBtn\" (click)=\"optionFormControl.value.click(formGroup.value[element.prop])\">{{optionFormControl.value.label}}</label>\r\n                                          </span>\r\n                                          <div class=\"arrayListContainer\">\r\n                                              <div *ngFor=\"let community of queryResultCommunityList;let index=index;\" class=\"communityList\" (click)=\"chooseCommunity(community)\" [ngClass]=\"{lineChecked:community.checked}\">\r\n                                                <span style=\"display: inline-block;padding: 3px;background: #eee;color: #333;width: 20px;text-align: center;\">\r\n                                                  {{index+1}}\r\n                                                </span>\r\n                                                <span style=\"display: inline-block;padding: 3px 10px;color: #000;\">\r\n                                                  {{community.name}}\r\n                                                </span>\r\n                                                <span [ngClass]=\"{checkFlag:community.checked,unCheckFlag:!community.checked}\"></span>\r\n                                              </div>\r\n                                          </div>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'button'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"searchBtn\" (click)=\"optionFormControl.value.click(formGroup.value[element.prop])\">{{optionFormControl.value.label}}</label>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'date'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                            <label class=\"formLeftLabelArray\" for=\"array_date_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <input type=\"text\" id=\"array_date_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\" name=\"{{element.prop}}\" dateChoose [chooseConfig]=\"{element:element,dateConfig:optionFormControl.value.chooseConfig,control:optionFormControl.controls['value']}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'select'\">\r\n                                          <span *ngIf=\"!element.hidden\">\r\n                                                <label class=\"formLeftLabelArray\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                                <select formControlName=\"value\" id=\"array_select_{{optionFormControl.value.prop}}_{{ii}}{{i}}\"  name=\"{{optionFormControl.value.prop}}\">\r\n                                                  <option *ngFor=\"let option of element.options[ii].options;\" [selected]=\"option.value==optionFormControl.value.defaultValue\" value=\"{{option.value}}\">{{option.label}}</option>\r\n                                                </select>\r\n                                                <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                                      <span  *ngSwitchCase=\"'upload'\">\r\n                                          <span *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                                            <label class=\"formLeftLabelArray\"><span *ngIf=\"optionFormControl.value.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <label for=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\">\r\n                                              <span class=\"uploadImageContainer\" [ngClass]=\"optionFormControl.value.uploadClass\">\r\n                                                <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove',optionFormControl.controls['value'])\" title=\"删除图片\">×</span>\r\n                                                <img *ngIf=\"optionFormControl.value.value.showUrl!=''&&optionFormControl.value.value.showUrl!=null&&optionFormControl.value.value.showUrl!=undefined\" src=\"{{optionFormControl.value.value.showUrl}}\">\r\n                                                <img *ngIf=\"optionFormControl.value.value.showUrl==''||optionFormControl.value.value.showUrl==null||optionFormControl.value.value.showUrl==undefined\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                                                <div class=\"operateBtnContainer\">\r\n                                                  <span class=\"left\" *ngIf=\"first\" style=\"width: 0px;padding: 0px;\"></span>\r\n                                                  <span class=\"left\" *ngIf=\"!first\"  (click)=\"operateUtil($event,element,'left',optionFormControl.controls['value'],ii)\" title=\"向左移动\">←</span>\r\n                                                  <span class=\"right\" *ngIf=\"last\" style=\"width: 0px;padding: 0px;\">→</span>\r\n                                                  <span class=\"right\" *ngIf=\"!last\" (click)=\"operateUtil($event,element,'right',optionFormControl.controls['value'],ii)\" title=\"向右移动\">→</span>\r\n                                                </div>\r\n                                              </span>\r\n                                            </label>\r\n                                            <input type=\"file\" [multiple]=\"optionFormControl.value.multiple\" fileUpload=\"optionFormControl.value\" [accept]=\"optionFormControl.value.imageConfig.extend\" [uploadConfig]=\"{formControl:optionFormControl.controls['value'],config:optionFormControl.value.imageConfig}\" id=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\" >\r\n                                            <input type=\"hidden\" id=\"array_upload_{{optionFormControl.value.prop}}_{{i}}_hidden\" name=\"{{optionFormControl.value.prop}}\" formControlName=\"value\">\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of optionFormControl.errors|keys \">{{optionFormControl.errors[key]}}</span>\r\n                                          </span>\r\n                                      </span>\r\n                              </span>\r\n                        </span>\r\n                 </span>\r\n                <span *ngIf=\"!element.noNeedValidateElement==true\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop+'LinkValidate').errors|keys \">{{formGroup.get(element.prop+'LinkValidate').errors[key]}}</span>\r\n                </span>\r\n                <span *ngIf=\"element.noNeedValidateElement==true\">\r\n                </span>\r\n            </span>\r\n  </div>\r\n  <!--<div class=\"submitBtnContainer\">\r\n    <input type=\"submit\" value=\"提交\" class=\"submitBtn\" [disabled]=\"formGroup.status=='INVALID'\" >\r\n  </div>-->\r\n</form>\r\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>动态表单创建啊</title>\r\n</head>\r\n<body>\r\n\r\n<form novalidate [formGroup]=\"formGroup\" (ngSubmit)=\"submit(formGroup.value)\">\r\n  <div *ngFor=\"let element of formModel.elements;let i = index;\" [ngSwitch]=\"element.type\" class=\"formRow\">\r\n            <span  *ngSwitchCase=\"'input'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"input_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"input_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'upload'\">\r\n                <div *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                  <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <label for=\"upload_{{element.prop}}_{{i}}\">\r\n                    <span class=\"uploadImageContainer\" [ngClass]=\"element.uploadClass\">\r\n                      <img *ngIf=\"formGroup.get(element.prop).value\" src=\"{{formGroup.get(element.prop).value.showUrl}}\">\r\n                      <img *ngIf=\"!formGroup.get(element.prop).value\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                    </span>\r\n                  </label>\r\n                  <input type=\"file\" [multiple]=\"element.multiple\" fileUpload=\"element\" [accept]=\"element.imageConfig.extend\" [uploadConfig]=\"{formControl:formGroup.get(element.prop),config:element.imageConfig}\" id=\"upload_{{element.prop}}_{{i}}\" >\r\n                  <input type=\"hidden\" [multiple]=\"element.multiple\" fileUpload=\"element\" id=\"upload_{{element.prop}}_{{i}}_hidden\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'radio'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <span *ngFor=\"let option of element.options;let i=index;\">\r\n                          <input type=\"radio\"  id=\"radio_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\" [checked]=\"option.value==element.defaultValue\" value=\"{{option.value}}\" formControlName=\"{{element.prop}}\">\r\n                          <label for=\"radio_{{element.prop}}_{{i}}\">{{option.label}}</label>\r\n                      </span>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'checkbox'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                    <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                    <span formArrayName=\"{{element.prop}}\">\r\n                        <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                              <input type=\"checkbox\"  id=\"{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                              <label for=\"{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                        </span>\r\n                    </span>\r\n                    <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'array'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                    <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                    <span formArrayName=\"{{element.prop}}\">\r\n                        <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                              <input type=\"checkbox\"  id=\"array_{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                              <label for=\"array_{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                        </span>\r\n                    </span>\r\n                    <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n\r\n  </div>\r\n  <input type=\"submit\" value=\"提交\" [disabled]=\"formGroup.status=='INVALID'\" >\r\n</form>\r\n<hr>\r\n{{formGroup.value|json}}\r\n<hr color=\"#a00\">\r\n{{formGroup.status|json}}\r\n<hr>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"formGroup\" (ngSubmit)=\"submit(formGroup.value)\">\r\n  <div *ngFor=\"let element of formModel.elements;let i = index;\" [ngSwitch]=\"element.type\" class=\"formRow\">\r\n            <span  *ngSwitchCase=\"'input'\">\r\n                <div *ngIf=\"!element.hidden\">\r\n                  <label class=\"formLeftLabel\" for=\"input_{{element.prop}}_{{i}}\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <input type=\"text\" id=\"input_{{element.prop}}_{{i}}\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'upload'\">\r\n                <div *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                  <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                  <label for=\"upload_{{element.prop}}_{{i}}\">\r\n                    <span class=\"uploadImageContainer\" [ngClass]=\"element.uploadClass\">\r\n                      <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove')\">×</span>\r\n                      <img *ngIf=\"formGroup.get(element.prop).value\" src=\"{{formGroup.get(element.prop).value.showUrl}}\">\r\n                      <img *ngIf=\"!formGroup.get(element.prop).value\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                      <div class=\"operateBtnContainer\" style=\"display: none;\">\r\n                        <span class=\"left\"  (click)=\"operateUtil($event,element,'left',i)\">←</span>\r\n                        <span class=\"right\" (click)=\"operateUtil($event,element,'right',i)\">→</span>\r\n                      </div>\r\n                    </span>\r\n                  </label>\r\n                  <input type=\"file\" [multiple]=\"element.multiple\" fileUpload=\"element\" [accept]=\"element.imageConfig.extend\" [uploadConfig]=\"{formControl:formGroup.get(element.prop),config:element.imageConfig}\" id=\"upload_{{element.prop}}_{{i}}\" >\r\n                  <input type=\"hidden\" id=\"upload_{{element.prop}}_{{i}}_hidden\" name=\"{{element.prop}}\" formControlName=\"{{element.prop}}\">\r\n                  <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </div>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'radio'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <span *ngFor=\"let option of element.options;let i=index;\">\r\n                          <input type=\"radio\"  id=\"radio_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\" [checked]=\"option.value==element.defaultValue\" value=\"{{option.value}}\" formControlName=\"{{element.prop}}\">\r\n                          <label for=\"radio_{{element.prop}}_{{i}}\">{{option.label}}</label>\r\n                      </span>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'checkbox'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                    <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                    <span formArrayName=\"{{element.prop}}\">\r\n                        <span *ngFor=\"let option of formGroup.get(element.prop).controls;let i=index;\" [formGroupName]=\"i\">\r\n                              <input type=\"checkbox\"  id=\"{{element.type}}_{{element.prop}}_{{i}}\" name=\"value\" formControlName=\"checked\">\r\n                              <label for=\"{{element.type}}_{{element.prop}}_{{i}}\">{{option.value.label}}</label>\r\n                        </span>\r\n                    </span>\r\n                    <span class=\"ng-invalid-msg\" *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'select'\">\r\n                <span *ngIf=\"!element.hidden\">\r\n                      <label class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                      <select formControlName=\"{{element.prop}}\" id=\"select_{{element.prop}}_{{i}}\"  name=\"{{element.prop}}\">\r\n                        <option *ngFor=\"let option of element.options;let i=index;\" [selected]=\"option.value==element.defaultValue\" value=\"{{option.value}}\">{{option.label}}</option>\r\n                      </select>\r\n                      <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop).errors|keys \">{{formGroup.get(element.prop).errors[key]}}</span>\r\n                </span>\r\n            </span>\r\n            <span  *ngSwitchCase=\"'array'\">\r\n                <label  class=\"formLeftLabel\"><span *ngIf=\"element.required\" class=\"required\">*</span>{{element.label}}:</label>\r\n                <input type=\"text\" formControlName=\"{{element.prop}}LinkValidate\">\r\n                <span formArrayName=\"{{element.prop}}\" class=\"arrayElementsContainer\">\r\n                        <span *ngFor=\"let optionFormControl of formGroup.get(element.prop).controls;let ii=index;let first=first;let last=last;\" [formGroupName]=\"ii\">\r\n                          {{optionFormControl.value|json}}\r\n                               <span [ngSwitch]=\"optionFormControl.value.type\" class=\"formRowArray\">\r\n                                      <span *ngIf=\"!element.hidden\" class=\"uploadContainer\">\r\n                                            <label class=\"formLeftLabelArray\"><span *ngIf=\"optionFormControl.value.required\" class=\"required\">*</span>{{optionFormControl.value.label}}</label>\r\n                                            <label for=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\">\r\n                                              <span class=\"uploadImageContainer\" [ngClass]=\"optionFormControl.value.uploadClass\">\r\n                                                <span class=\"deleteIcon\" (click)=\"operateUtil($event,element,'remove',optionFormControl.controls['value'])\" title=\"删除图片\">×</span>\r\n                                                <img *ngIf=\"optionFormControl.value.showUrl!=''&&optionFormControl.value.showUrl!=null&&optionFormControl.value.showUrl!=undefined\" src=\"{{optionFormControl.value.showUrl}}\">\r\n                                                <img *ngIf=\"optionFormControl.value.showUrl==''||optionFormControl.value.showUrl==null||optionFormControl.value.showUrl==undefined\" src=\"http://ejiaziimgtest.goodaa.com.cn/pic_5b2e79e9-6e7c-4bfb-8330-01a9313bbcbd.jpg\">\r\n                                                <div class=\"operateBtnContainer\">\r\n                                                  <span class=\"left\" *ngIf=\"first\" style=\"width: 0px;padding: 0px;\"></span>\r\n                                                  <span class=\"left\" *ngIf=\"!first\"  (click)=\"operateUtil($event,element,'left',optionFormControl.controls['value'],ii)\" title=\"向左移动\">←</span>\r\n                                                  <span class=\"right\" *ngIf=\"last\" style=\"width: 0px;padding: 0px;\">→</span>\r\n                                                  <span class=\"right\" *ngIf=\"!last\" (click)=\"operateUtil($event,element,'right',optionFormControl.controls['value'],ii)\" title=\"向右移动\">→</span>\r\n                                                </div>\r\n                                              </span>\r\n                                            </label>\r\n                                            <input type=\"file\" [multiple]=\"optionFormControl.value.multiple\" fileUploadFormGroup=\"optionFormControl.value\" [accept]=\"optionFormControl.value.imageConfig.extend\"\r\n                                                   [uploadConfig]=\"{formControl:optionFormControl,config:optionFormControl.value.imageConfig}\" id=\"array_upload_{{optionFormControl.value.prop}}_{{ii}}_{{i}}\" >\r\n                                            <span class=\"ng-invalid-msg\"  *ngFor=\"let key of optionFormControl.errors|keys \">{{optionFormControl.errors[key]}}</span>\r\n                                      </span>\r\n                              </span>\r\n                        </span>\r\n                  <hr>\r\n                 </span>\r\n                <span class=\"ng-invalid-msg\"  *ngFor=\"let key of formGroup.get(element.prop+'LinkValidate').errors|keys \">{{formGroup.get(element.prop+'LinkValidate').errors[key]}}</span>\r\n            </span>\r\n  </div>\r\n  <input type=\"submit\" value=\"提交\" [disabled]=\"formGroup.status=='INVALID'\" >\r\n</form>\r\n<hr>\r\n{{formGroup.value|json}}\r\n<hr color=\"#a00\">\r\n{{formGroup.status|json}}\r\n{{formGroup.errors|json}}\r\n<hr>\r\n<!--<base-model (closeEvent)=\"close(data)\"></base-model>-->\r\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"modelStatus\">\r\n  <div style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;height: 100%;width: 100%;overflow-y: auto;\">\r\n    <div class=\"innerContainer\" style=\"background: #ffffff;width: 80%;border-radius: 3px;padding: 0px;max-height: 70%;overflow-y: auto;height: 500px;\">\r\n      <div class=\"innerContainer\" style=\"display: flex;flex-direction: column;justify-content: space-between;height: 100%;max-height: 100%;\">\r\n        <div class=\"herder\" style=\"flex-shrink:0;flex-grow: 0;height: 80px;\">headeraaa</div>\r\n        <div class=\"body\" style=\"flex-shrink: 1;flex-grow: 1;overflow-y: auto;\">asdfasdf</div>\r\n        <div class=\"footer\"  style=\"flex-shrink: 0;flex-grow: 0;height: 80px;\" (click)=\"close()\">关闭</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "    <base-table-list [tableListConfig]=\"tableListConfig\"></base-table-list>"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "  <base-table-list-query [queryElements]=\"tableListConfig.query\" [pageData]=\"tableData.data.dataList\" (outClick)=\"queryClick($event)\"></base-table-list-query>\r\n  <table>\r\n    <thead>\r\n      <th>序列</th>\r\n      <th *ngFor=\"let column of tableListConfig.colums&&tableListConfig.colums.length>0?tableListConfig.colums:tableListConfig.defaultColums\">\r\n        <span *ngIf=\"column.type=='checkbox'\">\r\n          <input   *ngIf=\"column.type=='checkbox'\"   (change)=\"batchChoose($event,this)\"  type=\"checkbox\"/>\r\n        </span>\r\n        <span *ngIf=\"column.type!='checkbox'\">\r\n          {{column.label}}\r\n        </span>\r\n      </th>\r\n      <th *ngIf=\"tableListConfig.operator&&tableListConfig.operator.length>0\" width=\"{{tableListConfig.operator.length*70}}\" style=\"min-width: 180px;\">操作</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let rowData of tableData.data.dataList;let i = index\">\r\n        <td>{{i+1}}</td>\r\n        <td *ngFor=\"let column of tableListConfig.colums&&tableListConfig.colums.length>0?tableListConfig.colums:tableListConfig.defaultColums\">\r\n                    <span    *ngIf=\"column.type==null||column.type==''\"            (click)=\"column['click']&&column['click'](rowData)\">{{rowData[column.prop]}}</span>\r\n                   <input   *ngIf=\"column.type=='checkbox'\"     (click)=\"column['click']&&column['click']($event,rowData)\"   (change)=\"column['change']&&column['change']($event,rowData)\" [(ngModel)]=\"rowData.checked\"  type=\"checkbox\"/>\r\n                   <a        *ngIf=\"column.type=='href'\"           href=\"{{rowData[column.prop]}}\" target=\"_blank\" style=\"cursor: pointer;color: blue;\" title=\"点击看看\">{{rowData[column.prop]}}</a>\r\n                  <input   *ngIf=\"column.type=='sortOrder'\"     type=\"number\"  [(ngModel)]=\"rowData[column.prop]\" (change)=\"column['change']&&column['change']($event,rowData)\"  style=\"max-width: 40px;\" alt=\"\"/>\r\n                  <label   *ngIf=\"column.type=='diy'\"            (click)=\"column['click']&&column['click']($event,rowData)\">{{column.diy&&column.diy(rowData)}}</label>\r\n                  <input   *ngIf=\"column.type=='setOrder'\"      type=\"text\"  ng-model=\"item.orderNo\"  (blur)=\"column['blur']&&column['blur']($event,rowData)\" maxlength=\"6\" style=\"max-width: 80px;\" alt=\"\"/>\r\n                  <span    *ngIf=\"column.type=='image'\" >\r\n                      <img           *ngFor=\"let img of (rowData[column.prop]+''||'').split(',')\" src=\"{{img}}\" style=\"max-width: 80px;margin-right:10px\" alt=\"\"/>\r\n                  </span>\r\n        </td>\r\n        <td *ngIf=\"tableListConfig.operator&&tableListConfig.operator.length>0\">\r\n           <span class=\"operateBtn\" *ngFor=\"let operate of tableListConfig.operator\" (click)=\"operate['click']&&operate['click'](rowData)\">\r\n              {{operate.label}}{{operate.map&&operate.map[rowData[operate.prop]]}}\r\n           </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <base-table-list-pager [pageData]=\"tableData.data.dataPages\" (pageClick)=\"pageClick($event)\"></base-table-list-pager>\r\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "    <div class=\"searchContainer\">\r\n        <div>\r\n          <span *ngFor=\"let queryItem of queryElements\">\r\n            <span [ngSwitch]=\"queryItem.type\">\r\n                <span class=\"form-group form-inline \" *ngSwitchCase=\"'input'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                    {{queryItem.label}}:\r\n                    <input type=\"text\" style=\"width: 235px;\"  placeholder=\"{{queryItem.placeholder}}\" class=\"form-control\" [(ngModel)]=\"queryParam[queryItem.prop]\"  (change)=\"changeQueryParam(queryItem)\" (input)=\"changeQueryParam(queryItem)\">\r\n                </span>\r\n                <span class=\"form-group form-inline \" *ngSwitchCase=\"'date'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                    {{queryItem.label}}:\r\n                    <input type=\"text\" style=\"width: 235px;\"   placeholder=\"{{queryItem.placeholder}}\"  id=\"{{queryItem.id}}\"\r\n                           class=\"form-control\" name=\"merchantName\" [(ngModel)]=\"queryParam[queryItem.prop]\">\r\n                </span>\r\n                <span class=\"form-group form-inline \" *ngSwitchCase=\"'composite'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                    {{queryItem.label}}:\r\n                    <span  *ngFor=\"let component of queryItem.components\">\r\n                        <input type=\"text\" class=\"form-control width170\" [(ngModel)]=\"queryParam[component.prop]\" placeholder=\"{{component.placeholder}}\"\r\n                               layer-date id=\"{{component.id}}\" maxelementid=\"component.maxelementid\" minelementid=\"component.minelementid\"\r\n                               selected-time>\r\n                                <span *ngIf=\"$index==0\">{{queryItem.link}}</span>\r\n                     </span>\r\n                </span>\r\n                <span class=\"form-group form-inline \" *ngSwitchCase=\"'select'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                    {{queryItem.label}}:\r\n                    <span *ngIf=\"!queryItem.dataUrl\">\r\n                      <select    class=\"form-control width170\" [(ngModel)]=\"queryParam[queryItem.prop]\"   (change)=\"changeQueryParam(queryItem)\">\r\n                          <option value=\"\">{{queryItem.placeholder||'请选择'}}</option>\r\n                          <option  *ngFor=\"let component of queryItem.options\" value=\"{{component.value}}\">{{component.label}}</option>\r\n                      </select>\r\n                    </span>\r\n                    <span *ngIf=\"queryItem.dataUrl\">\r\n                      <select  class=\"form-control width170\" [(ngModel)]=\"queryParam[queryItem.prop]\"   (change)=\"changeQueryParam(queryItem)\">\r\n                          <option value=\"\">{{queryItem.placeholder||'请选择'}}</option>\r\n                          <option *ngFor=\"let component of dataQuery.query[queryItem.propList]\" value=\"{{component.id}}\">{{component.name}}</option>\r\n                      </select>\r\n                    </span>\r\n\r\n                  <!--被开关元素控制的元素集合-->\r\n                    <span *ngIf=\"queryItem.switchElements\">\r\n                        <span *ngFor=\"let queryItemInner of queryItem.switchElements\">\r\n                            <span [ngSwitch]=\"queryItemInner.type\">\r\n                                <span class=\"form-group form-inline \" *ngSwitchCase=\"'input'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                                    {{queryItemInner.label}}:\r\n                                    <input type=\"text\" style=\"width: 235px;\" placeholder=\"{{queryItemInner.placeholder}}\" class=\"form-control\" name=\"merchantName\" [(ngModel)]=\"queryParam[queryItemInner.prop]\"  (change)=\"changeQueryParam(queryItemInner)\">\r\n                                </span>\r\n                                <span class=\"form-group form-inline \" *ngSwitchCase=\"'date'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                                    {{queryItemInner.label}}:\r\n                                    <input type=\"text\" style=\"width: 235px;\"   placeholder=\"{{queryItemInner.placeholder}}\"  id=\"{{queryItemInner.id}}\" layer-date maxelementid=\"queryItemInner.maxelementid\" minelementid=\"\"  (change)=\"changeQueryParam(queryItemInner)\"\r\n                                           class=\"form-control\" name=\"merchantName\" [(ngModel)]=\"queryParam[queryItemInner.prop]\">\r\n                                </span>\r\n                                <span class=\"form-group form-inline \" *ngSwitchCase=\"'composite'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                                    {{queryItemInner.label}}:\r\n                                    <span  *ngFor=\"let component of queryItemInner.components\">\r\n                                            <input type=\"text\" class=\"form-control width170\" [(ngModel)]=\"queryParam[component.prop]\" placeholder=\"{{component.placeholder}}\"  (change)=\"changeQueryParam(queryItemInner)\"\r\n                                                   layer-date id=\"{{component.id}}\" maxelementid=\"component.maxelementid\" minelementid=\"component.minelementid\"\r\n                                                   selected-time  >\r\n                                                    <span *ngIf=\"$index==0\">{{queryItem.link}}</span>\r\n                                        </span>\r\n                                </span>\r\n                                <span class=\"form-group form-inline \" *ngSwitchCase=\"'select'\"  style=\"margin-top:10px;padding-right: 10px;\">\r\n                                    <span *ngIf=\"queryParam[queryItem.prop]==queryItemInner.whenSwitchValue\">\r\n                                        {{queryItemInner.label}}:\r\n                                        <span *ngIf=\"!queryItemInner.initQuery\">\r\n                                          <select  class=\"form-control width170\" [(ngModel)]=\"queryParam[queryItemInner.prop]\" (change)=\"changeQueryParam(queryItemInner)\">\r\n                                              <option value=\"\">{{queryItemInner.placeholder||'请选择'}}</option>\r\n                                              <option  *ngFor=\"let component of dataQuery.query[queryItemInner.propList]\" value=\"{{component.id}}\">{{component.name}}</option>\r\n                                          </select>\r\n                                        </span>\r\n                                        <span *ngIf=\"queryItemInner.initQuery\">\r\n                                          自动查询\r\n                                          <select class=\"form-control width170\" [(ngModel)]=\"queryParam[queryItemInner.prop]\"  (change)=\"changeQueryParam(queryItemInner)\">\r\n                                              <option value=\"\">{{queryItemInner.placeholder||'请选择'}}</option>\r\n                                              <option *ngFor=\"let component of  queryItemInner.options\" value=\"{{component.value}}\">{{component.key}}</option>\r\n                                          </select>\r\n                                        </span>\r\n                                    </span>\r\n                                </span>\r\n                            </span>\r\n                        </span>\r\n                    </span>\r\n\r\n                </span>\r\n                <span class=\"form-group form-inline \" *ngSwitchCase=\"'tab'\"  style=\"margin-top:20px;background: rgb(252,252,252);width: 100%;margin-bottom: 0px;margin-left: 0px;\">\r\n                    <span class=\"label_checkbox\">\r\n                        <ul class=\"mytableTest\" style=\"display: inline-block;\">\r\n                            <li *ngFor=\"let component of queryItem.components\">\r\n                                <input type=\"radio\" name=\"{{queryItem.prop}}\" id=\"table__{{queryItem.prop}}_{{$index}}\" value=\"{{component.value}}\" (click)=\"utils.clearQueryParam()\"\r\n                                       [(ngModel)]=\"queryParam[queryItem.prop]\">\r\n                                <label for=\"table__{{queryItem.prop}}_{{$index}}\" class=\"btn\">{{component.label}}</label>\r\n                            </li>\r\n                        </ul>\r\n                    </span>\r\n                </span>\r\n            </span>\r\n          </span>\r\n        </div>\r\n        <div class=\"btnContainer\">\r\n              <span *ngFor=\"let queryItem of queryButtons\" [ngSwitch]=\"queryItem.type\">\r\n                      <span class=\"form-group form-inline label_checkbox\" *ngSwitchCase=\"'search'\">\r\n                        <label class=\"btn btn-default borderGreen\"  (click)=\"queryBtnClick(queryParam)\">{{queryItem.label}}</label>\r\n                      </span>\r\n                      <span class=\"form-group form-inline label_checkbox\"  *ngSwitchCase=\"'button'\" >\r\n                          <label class=\"btn btn-default borderGreen\" *ngIf=\"queryItem.param\"  (click)=\"queryItem['listener']&&queryItem['listener'](queryParam,pageData)||queryItem['click']&&queryItem['click'](queryParam,pageData)\">{{queryItem.label}}</label>\r\n                          <label class=\"btn btn-default borderGreen\" *ngIf=\"!queryItem.param\"  (click)=\"queryItem['listener']&&queryItem['listener']()||queryItem['click']&&queryItem['click']()\">{{queryItem.label}}</label>\r\n                      </span>\r\n              </span>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n  <form [formGroup]=\"heroForm\" novalidate>\r\n    <input type=\"text\"  formControlName=\"name\" required>\r\n    <input type=\"text\"  formControlName=\"age\" required>\r\n  </form>\r\n\r\n\r\n  ||{{userInfoService.userInfo|json}}||\r\n\r\n  {{heroForm.get(\"name\").value|json}}\r\n\r\n  <form [formGroup]=\"heroFormBuilder\" novalidate>\r\n    <input type=\"text\" formControlName=\"name\">\r\n    <div formArrayName=\"addresses\">\r\n      <div *ngFor=\"let address of addresses.controls; let i=index\" [formGroupName]=\"i\" >\r\n        <input type=\"checkbox\" formControlName=\"province\">\r\n        <input type=\"checkbox\" formControlName=\"city\">\r\n        <input type=\"checkbox\" formControlName=\"community\">\r\n      </div>\r\n    </div>\r\n    <!--<div formGroupName=\"address\">\r\n      <input type=\"text\" formControlName=\"province\">\r\n      <input type=\"text\" formControlName=\"city\">\r\n      <input type=\"text\" formControlName=\"community\">\r\n    </div>-->\r\n  </form>\r\n  <!--{{addresses.value|json}}\r\n  {{addresses.status|json}}-->\r\n{{heroFormBuilder.value | json}}\r\n{{heroFormBuilder.status | json}}\r\n  <input type=\"button\" (click)=\"resetForm()\" value=\"重置表单啊qq\">\r\n  <input type=\"button\" (click)=\"addAddress()\" value=\"添加地址\">\r\n<div style=\"background: #ff0000;color: #faa;font-size: 12px;\">\r\n</div>\r\n\r\n\r\n  <form novalidate [formGroup]=\"validateForm\">\r\n    <input type=\"text\" formControlName=\"name\">\r\n  </form>\r\n{{validateForm.value|json}}\r\n{{validateForm.status|json}}\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>英雄信息</title>\r\n  <style>\r\n    input[type=text],input[type=text]:focus{\r\n      border: none;\r\n      border-bottom: 1px solid #aaa;\r\n      outline: none;\r\n      position: relative;\r\n    }\r\n\r\n\r\n    .require{\r\n      color: #f00;\r\n      font-size: 12px;\r\n    }\r\n    .ng-invalid input{\r\n      border-left: 12px solid #f00;\r\n      color: #ff0000;\r\n    }\r\n    .ng-valid input:before{\r\n      content:\" √ \"!important;\r\n      top: -0px!important;;\r\n      font-size: 14px!important;;\r\n      margin-left:10px!important;;\r\n      color: #ff0000!important;;\r\n    }\r\n    .afterTest:after{\r\n      content:\" √ \";\r\n      top: -0px;\r\n      font-size: 14px;\r\n      margin-left:10px;\r\n      color: #ff0000;\r\n    }\r\n    .ng-valid input{\r\n      border-left: 0px solid #0f0;\r\n      border-right: 4px solid #0f0;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n  <div *ngIf=\"true\" >\r\n    <div *ngFor = \" let hero of heros \">\r\n      名称: <span (click)=\"clickUtils.save(hero,$event)\">{{hero.name}}</span>\r\n      id:{{hero.id}}\r\n      年龄: <span (click)=\"test(hero)\">{{hero.age}}</span>\r\n    </div>\r\n  </div>\r\n  <div myHighLight [myEnterColor]=\"color\" [myLeaveColor]=\"'#0a0'\">\r\n    asdfasdf\r\n  </div>\r\n  <input type=\"text\" myHighLight>\r\n  <form action=\"\">\r\n    <input type=\"text\" #name=\"ngModel\"  name=\"name\" [(ngModel)]=\"hero.name\" (keyup) = \"keyUtils.keyUp(name.value,name)\" required>\r\n    <div [hidden]=\"name.valid || name.pristine\" class=\"require\">\r\n      名称不能不为空啊!\r\n    </div>\r\n    <div *ngIf=\"name.error&&name.error.msg\"  class=\"require\">\r\n      {{name.error&&name.error.msg}}\r\n    </div>\r\n\r\n  </form>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<div class=\"loginContainer\">\r\n    <div class=\"topContainer\">\r\n        <img src=\"http://ejiaziimgtest.goodaa.com.cn/pic_b1860b4e-ef8b-4347-944e-892c1f524940.png\" alt=\"\">\r\n         e家子运营管理平台\r\n    </div>\r\n    <form class=\"loginForm\">\r\n        <div class=\"userName\"><input type=\"text\" [(ngModel)]=\"email\" name=\"emain\" placeholder=\"用户名\"></div>\r\n        <div class=\"password\"><input type=\"password\" [(ngModel)]=\"passwd\" name=\"passwd\" placeholder=\"密码\"></div>\r\n        <div class=\"loginBtnContainer\">\r\n            <input (click)=\"login()\" type=\"button\" value=\"登陆\">\r\n        </div>\r\n    </form>\r\n    <div class=\"footContainer\">copyright by goodaa.com.cn</div>\r\n</div>"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>活动列表页面模板</title>\r\n</head>\r\n<body>\r\n  <base-table-list  [tableListConfig]=\"listConfig\"></base-table-list>\r\n  <base-table-list  [tableListConfig]=\"listAdvertConfig\"></base-table-list>\r\n  <base-table-list  [tableListConfig]=\"listUserConfig\"></base-table-list>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "    <div class=\"mainContainer\">\r\n        <div class=\"topContainer\">\r\n            <nav style=\"text-align: right;\" *ngIf=\"userLoginService.userInfo.isLogin\">\r\n                <span class=\"leftIcon\">\r\n                    <img src=\"http://ejiaziimgtest.goodaa.com.cn/pic_b1860b4e-ef8b-4347-944e-892c1f524940.png\" alt=\"\">\r\n                    e家子运营管理平台\r\n                </span>\r\n                <span *ngIf=\"!userLoginService.userInfo.isLogin\">login</span>\r\n                <span *ngIf=\"userLoginService.userInfo.isLogin\">欢迎您{{userLoginService.userInfo.name}}</span>\r\n                <span (click)=\"logout()\" *ngIf=\"userLoginService.userInfo.isLogin\" style=\"display: inline-block;background: #060606;padding: 2px 20px;color: #fff;border-radius: 3px;cursor: pointer;line-height: 26px;font-size: 14px;margin-right: 15px;\">退出</span>\r\n            </nav>\r\n        </div>\r\n        <div class=\"mainBottomContainer\">\r\n            <div class=\"menuContainer\">\r\n                <div *ngFor=\"let firstMenu of menuList\">\r\n                    <div class=\"firstLeaveMenu\">{{firstMenu.label}}</div>\r\n                    <div *ngIf=\"firstMenu.options.length>0\">\r\n                        <div *ngFor=\"let menu of firstMenu.options\" routerLink=\"{{menu.url}}\">\r\n                            {{menu.label}}\r\n                            <!-- (click)=\"navFunction($event,menu)\"-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"rightContainer\">\r\n                <router-outlet (activate)=\"activate($event)\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "    <label  (click)=\"popTest()\">\r\n      <span *ngIf=\"advert\">{{advert.name}}  修改</span>\r\n      <span *ngIf=\"!advert\">请选择广告</span>\r\n    </label>\r\n    <div id=\"testPop\">\r\n        <base-pop-component [simpleConfig]=\"tableListSimpleConfig\" [tableListConfig]=\"tableListConfig\" ></base-pop-component>\r\n    </div>\r\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Title</title>\r\n</head>\r\n<body>\r\n<div>\r\n  接口地址：\r\n  <input type=\"text\" [(ngModel)]=\"baseTableListConfig.url\" style=\"min-width: 80%;\">\r\n  <div></div>\r\n  接口方法：\r\n  <input type=\"text\" [(ngModel)]=\"baseTableListConfig.httpMethod\" style=\"min-width: 80%;\">\r\n  <div></div>\r\n  列名设置：\r\n  <base-table-list-query [queryElements]=\"baseTableListConfig.query\" [reInit]=\"reload\" (outClick)=\"queryClick($event)\"></base-table-list-query>\r\n  <table>\r\n    <thead>\r\n      <th *ngFor=\"let input of baseTableListConfig.colums\">\r\n          <div>{{input.label}}</div>\r\n          <div>{{input.prop}}</div>\r\n          <div>{{input.type}}</div>\r\n      </th>\r\n      <th style=\"width: 300px;\">操作</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let i of [1,2,3,4]\">\r\n        <td *ngFor=\"let input of baseTableListConfig.colums\">\r\n          {{defaultValue}}\r\n        </td>\r\n        <td align=\"center\">\r\n          <span class=\"operateBtn\" *ngFor=\"let operate of baseTableListConfig.operator\">\r\n            {{operate.label}}\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"addTypeContainer\">\r\n  <span *ngFor=\"let item of addTypes\">\r\n    <label for=\"{{item.value}}\">{{item.label}}</label>\r\n    <input type=\"radio\" [(ngModel)]=\"currentType\" value=\"{{item.value}}\" id=\"{{item.value}}\">\r\n  </span>\r\n</div>\r\n  <div *ngIf=\"currentType==0\" class=\"flexContainer\">\r\n    <form novalidate [formGroup]=\"columnFrom\">\r\n      <div *ngFor=\"let input of columnFormData.inputs\">\r\n        <label for=\"{{input.key}}\" class=\"inputLabel\">{{input.label}}</label>\r\n        <input type=\"text\" id=\"{{input.key}}\" formControlName=\"{{input.name}}\">\r\n      </div>\r\n    </form>\r\n    <span  (click)=\"addColumnItem()\">\r\n    添加操作\r\n  </span>\r\n    <div class=\"placeholder\"></div>\r\n  </div>\r\n  <div *ngIf=\"currentType==1\" class=\"flexContainer\">\r\n    <form novalidate [formGroup]=\"operateFrom\">\r\n      <div *ngFor=\"let input of operatorFormData.inputs\">\r\n        <label for=\"{{input.key}}\" class=\"inputLabel\">{{input.label}}</label>\r\n        <input type=\"text\" id=\"{{input.key}}\" formControlName=\"{{input.name}}\">\r\n      </div>\r\n    </form>\r\n    <span  (click)=\"addOperateItem()\">\r\n    添加操作\r\n  </span>\r\n    <div class=\"placeholder\"></div>\r\n  </div>\r\n  <div *ngIf=\"currentType==2\" class=\"flexContainer\">\r\n    <form novalidate [formGroup]=\"queryComplexFrom\">\r\n      <div *ngFor=\"let input of queryComplexFormData.inputs\">\r\n        <label for=\"{{input.key}}\" class=\"inputLabel\">{{input.label}}</label>\r\n        <input type=\"text\" id=\"{{input.key}}\" formControlName=\"{{input.name}}\">\r\n      </div>\r\n    </form>\r\n    <span  (click)=\"addQueryComplexItem()\">\r\n    添加操作\r\n  </span>\r\n    <div class=\"placeholder\"></div>\r\n  </div>\r\n  <div *ngIf=\"currentType==3\" class=\"flexContainer\">\r\n    <form novalidate [formGroup]=\"querySimpleInputFrom\">\r\n      <div *ngFor=\"let input of querySimpleInputFormData.inputs\">\r\n        <label for=\"{{input.key}}\" class=\"inputLabel\">{{input.label}}</label>\r\n        <input type=\"text\" id=\"{{input.key}}\" formControlName=\"{{input.name}}\">\r\n      </div>\r\n    </form>\r\n    <span  (click)=\"addQuerySimpleInputItem()\">\r\n    添加操作\r\n  </span>\r\n    <div class=\"placeholder\"></div>\r\n  </div>\r\n\r\n<span (click)=\"addCasecadeQuery()\" class=\"operateBtn\">添加省市区级联</span>\r\n<span (click)=\"exportConfig()\" class=\"operateBtn\">导出配置</span>\r\n<span (click)=\"previewConfig()\" class=\"operateBtn\">预览接口</span>\r\n\r\n<div *ngIf=\"previewTableListConfig&&isView\" class=\"previewContainer\">\r\n  <base-table-list  [tableListConfig]=\"previewTableListConfig\"></base-table-list>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCustomerKeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Administrator on 2017/5/2.
 */
var BaseCustomerKeysPipe = (function () {
    function BaseCustomerKeysPipe() {
    }
    BaseCustomerKeysPipe.prototype.transform = function (value, args) {
        if (!value) {
            return [];
        }
        return Object.keys(value);
    };
    BaseCustomerKeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: "keys" }), 
        __metadata('design:paramtypes', [])
    ], BaseCustomerKeysPipe);
    return BaseCustomerKeysPipe;
}());
//# sourceMappingURL=base.customer.keys.pipe.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseValidateService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by xiankun.feng on 2017/5/3.
 */
var BaseValidateService = (function (_super) {
    __extends(BaseValidateService, _super);
    function BaseValidateService(http, route) {
        _super.call(this, http, route);
    }
    /**
     * 复杂校验 完成 非空、字符(长度，maxlength,minlength)、数字(大小，位数 如 12.31  maxvalue,minvalue)、mobile、email、url、remote(异步远程校验。。可以携带参数)
     * 异步校验会发生在最后
     * @param prop formControl
     * @param rulues  校验规则map 如{mobile:true,number:"##.###"最多三位小数整数最多2位}
     * @param param 异步校验参数配置 如商品名称全商家不重名，此时商户id可以配置上就可以自动携带作为查询条件
     * @returns {{}} 返回验证结果 是json对象或Promise实例(异步校验)
     */
    BaseValidateService.prototype.baseValidate = function (prop, rulues, param, remoteService) {
        var _this = this;
        if (param === void 0) { param = {}; }
        if (remoteService === void 0) { remoteService = {}; }
        var error = {};
        var value = prop.value || "";
        var _loop_1 = function(key) {
            var ruleValue = rulues[key];
            if (key == "required" && value == "") {
                error = { "required": "不能为空" };
                return "break";
            }
            else if (key == "maxlength" && value.length > ruleValue) {
                error = { "maxlength": "不能超过" + ruleValue + "字符" };
                return "break";
            }
            else if (key == "minlength" && value.length < ruleValue) {
                error = { "maxlength": "不能少于" + ruleValue + "字符" };
                return "break";
            }
            else if (key == "number") {
                var pattenStr = ruleValue;
                var splitArr = pattenStr.split(".");
                var aboveZero = null;
                var bellowZero = "";
                if (splitArr.length == 2) {
                    aboveZero = pattenStr.split(".")[0];
                    bellowZero = pattenStr.split(".")[1];
                }
                else if (splitArr.length == 1) {
                    aboveZero = pattenStr.split(".")[0];
                }
                var valueArr = value.split(".");
                var valueAboveZero = null;
                var valueBellowZero = "";
                if (valueArr.length == 2) {
                    valueAboveZero = value.split(".")[0];
                    valueBellowZero = value.split(".")[1];
                }
                else if (valueArr.length == 1) {
                    valueAboveZero = value.split(".")[0];
                }
                if (/^0\d+/.test(valueAboveZero)) {
                    error = { "number": "请输入合法数字,整数不能以两个0开头" };
                }
                else if (valueAboveZero.length > aboveZero.length) {
                    error = { "number": "请输入合法数字,只允许" + aboveZero.length + "位整数" };
                }
                else if (valueBellowZero.length > bellowZero.length) {
                    error = { "number": "请输入合法数字,只允许" + bellowZero.length + "位小数" };
                }
                else if (valueBellowZero.length == 0 && valueArr.length == 2) {
                    error = { "number": "请输入合法数字,小数位不能为空！" };
                }
                if (rulues["maxvalue"] || rulues["minvalue"]) {
                }
                else {
                    return "break";
                }
            }
            else if (key == "email" && !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
                error = { "required": "请输入合法邮箱！" };
                return "break";
            }
            else if (key == "url" && !/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)) {
                error = { "required": "请输入合法地址" };
                return "break";
            }
            else if (key == "mobile" && !/^\d{11}$/.test(value)) {
                error = { "required": "请输入11位手机号码！" };
                return "break";
            }
            else if (key == "maxvalue" && value * 1 > ruleValue * 1) {
                error = { "required": "不能大于" + ruleValue };
                return "break";
            }
            else if (key == "minvalue" && value * 1 < ruleValue * 1) {
                error = { "required": "不能小于" + ruleValue };
                return "break";
            }
            else if (key == "checkboxRequired") {
                var grandfather = param["grandfather"];
                var formGroup = param["formGroup"];
                if (!formGroup) {
                    return "continue";
                }
                var grandfatherControl_1 = formGroup.get(grandfather);
                var lazyTimerId = setTimeout(function () {
                    var checkedNum = grandfatherControl_1.controls.filter(function (optionControl) {
                        return optionControl.value.checked;
                    }).length;
                    if (checkedNum == 0) {
                        grandfatherControl_1.setErrors({ "required": "至少得选择一个吧！" });
                    }
                    //clearTimeout(lazyTimerId);
                }, 10);
            }
            else if (key == "arrayUploadRequired") {
                error = {};
                var grandfather = param["grandfather"] + "LinkValidate";
                var formGroup = param["formGroup"];
                if (!formGroup) {
                    return "continue";
                }
                var grandfatherControl_2 = formGroup.get(grandfather);
                if (prop.parent) {
                    var lazyTimerId = setTimeout(function () {
                        var checkedNum = prop.parent.parent.controls.filter(function (optionControl) {
                            return optionControl.value.value != "";
                        }).length;
                        if (checkedNum < rulues["arrayUploadRequired"] * 1) {
                            grandfatherControl_2.setErrors({ "required": "得至少上传！" + rulues["arrayUploadRequired"] + "个图吧！" });
                            grandfatherControl_2.setValue("得至少上传！" + rulues["arrayUploadRequired"] + "个图吧！");
                        }
                        else {
                            grandfatherControl_2.setErrors({});
                            grandfatherControl_2.setValue("");
                        }
                        //clearTimeout(lazyTimerId);
                    }, 10);
                }
            }
            else if (key == "checkboxWatchers") {
                error = {};
                var propName_1 = param["prop"];
                var formModel_1 = param["formModel"];
                var formGroup_1 = param["formGroup"];
                if (formGroup_1) {
                    var queryParam = {};
                    var grandfather = param["grandfather"];
                    if (!formGroup_1) {
                        return "continue";
                    }
                    var grandfatherControl_3 = formGroup_1.get(grandfather);
                    var lazyTimerId = setTimeout(function () {
                        grandfatherControl_3.controls.forEach(function (optionControl) {
                            var isChecked = optionControl.value.checked;
                            var optionValue = optionControl.value.value;
                            for (var queryProp in formModel_1.elements) {
                                var item = formModel_1.elements[queryProp];
                                var innerProp = item.prop;
                                if (propName_1 != innerProp && item.switcher && item.switcher[0].prop == propName_1) {
                                    var watchersControl = formGroup_1.get(innerProp);
                                    var watcherValue = item.switcher[0].showValue;
                                    if (watcherValue == optionValue) {
                                        if (isChecked) {
                                            watchersControl.enable({ onlySelf: false, emitEvent: false });
                                            item.hidden = false;
                                        }
                                        else {
                                            watchersControl.disable({ onlySelf: false, emitEvent: false });
                                            item.hidden = true;
                                        }
                                    }
                                }
                            }
                        });
                        //clearTimeout(lazyTimerId);
                    }, 10);
                }
                return "break";
            }
            else if (key == "arrayWatchers") {
                error = {};
                if (!prop.parent)
                    return { value: void 0 };
                var propName_2 = prop.parent.controls["prop"].value; // who am i
                var formModel = param["formModel"];
                var formGroup = param["formGroup"];
                if (formGroup) {
                    var queryParam = {};
                    var grandfather_1 = param["grandfather"];
                    if (!formGroup) {
                        return "continue";
                    }
                    var formValues_1 = {};
                    formGroup.value[grandfather_1].forEach(function (item) {
                        formValues_1[item.prop] = item.value;
                    });
                    var grandfatherControl = formGroup.get(grandfather_1);
                    formModel.elements.forEach(function (element) {
                        if (element.type == "array" && element.keyPropMap && grandfather_1 == element.prop) {
                            element.options.forEach(function (option) {
                                if (option.switchers && option.switchers.length > 0 && option.switchers[0].prop == propName_2) {
                                    if (option.remoteInfo != null) {
                                        option.remoteInfo.param[option.remoteInfo.param["extend"]] = value;
                                        if (option.remoteInfo.propMap) {
                                            for (var propKey in option.remoteInfo.propMap) {
                                                option.remoteInfo.param[option.remoteInfo.propMap[propKey]] = propKey == propName_2 ? value : formValues_1[propKey];
                                            }
                                        }
                                        if (value == "" || value == null) {
                                            option["options"] = option.remoteInfo.convert({});
                                        }
                                        else {
                                            console.log("element", element.prop);
                                            _this.listData({ url: option.remoteInfo.url, param: option.remoteInfo.param, httpMethod: option.remoteInfo.httpMethod }).subscribe(function (data) {
                                                option["options"] = option.remoteInfo.convert(data.json()) || data.json();
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    });
                    grandfatherControl.controls.forEach(function (optionControl) {
                        if (optionControl.controls["switchers"] && optionControl.controls["switchers"].value["prop"] == propName_2 && optionControl.controls["value"].value != "") {
                            optionControl.controls["value"].setValue("");
                        }
                    });
                }
                return "break";
            }
            else if (key == "watchers") {
                error = {};
                var propName = param["prop"];
                var formModel = param["formModel"];
                var formGroup = prop.parent;
                if (formGroup) {
                    var queryParam = {};
                    for (var queryProp in formModel.elements) {
                        var item = formModel.elements[queryProp];
                        var innerProp = item.prop;
                        if (propName != innerProp && item.switcher && item.switcher[0].prop == propName) {
                            var watchersControl = formGroup.get(innerProp);
                            var watcherValue = item.switcher[0].showValue;
                            if (watcherValue == prop.value) {
                                watchersControl.enable({ onlySelf: false, emitEvent: false });
                                item.hidden = false;
                            }
                            else {
                                watchersControl.disable({ onlySelf: false, emitEvent: false });
                                item.hidden = true;
                            }
                        }
                    }
                }
                return "break";
            }
            else if (key == "remote") {
                //http 远程验证。。。
                var formGroup = prop.parent;
                if (formGroup) {
                    var queryParam = {};
                    for (var queryProp in param) {
                        queryParam[queryProp] = formGroup.get(queryProp).value;
                    }
                    this_1.remoteSyncValidate({ body: queryParam, value: value }, remoteService).subscribe(function (item) {
                        prop.setErrors({ "remote": item.json().msg });
                    });
                }
            }
        };
        var this_1 = this;
        for (var key in rulues) {
            var state_1 = _loop_1(key);
            if (typeof state_1 === "object") return state_1.value;
            if (state_1 === "break") break;
        }
        return error;
    };
    /**
     * 远程异步校验 放在这里是为了这个校验比较复杂 需要单独处理
     * @param param 校验参数
     */
    BaseValidateService.prototype.remoteValidate = function (param, remoteService) {
        var _this = this;
        if (remoteService === void 0) { remoteService = {}; }
        var queryParam = {
            url: remoteService.url,
            baseUrl: remoteService.baseUrl,
            param: param.body,
            httpMethod: "post"
        };
        return new Promise(function (resolve) {
            var remoteCheckResult = _this.listData(queryParam);
            remoteCheckResult.subscribe(function (data) {
                var result = data.json();
                if (result.code == "1") {
                    resolve();
                }
                else {
                    if (param.value == "admin") {
                        resolve({ "remote": result.msg });
                    }
                    else {
                        resolve();
                    }
                }
            });
        });
    };
    /**
     * 远程异步校验使用同步方法可能导致页面闪烁 放在这里是为了这个校验比较复杂 需要单独处理
     * @param param 校验参数
     */
    BaseValidateService.prototype.remoteSyncValidate = function (param, remoteService) {
        if (remoteService === void 0) { remoteService = {}; }
        var queryParam = {
            url: remoteService.url,
            baseUrl: remoteService.baseUrl,
            param: param.body,
            httpMethod: "post"
        };
        return this.listData(queryParam);
    };
    BaseValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BaseValidateService);
    return BaseValidateService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__base_data_service__["a" /* BaseDataService */]));
//# sourceMappingURL=base.validate.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_model__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserLoginService = (function (_super) {
    __extends(UserLoginService, _super);
    function UserLoginService(http, route) {
        _super.call(this, http, route);
        this.http = http;
        this.route = route;
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2__model_user_model__["a" /* UserModel */]("");
        this.loginUrl = "http://backend.ejiazi.com:8093/ejiazi-backend/login";
        this.logoutUrl = "http://backend.ejiazi.com:8093/ejiazi-backend/systemUser/logout.json";
    }
    /**
     * 登陆方法
     * @param param
     */
    UserLoginService.prototype.login = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }); //其实不表明 json 也可以, ng 默认好像是 json
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //return this.http.post(this.loginUrl,this.obj2queryString(param),options);
        //console.log("login",param)
        return this.listData({ baseUrl: "http://backend.ejiazi.com:8093/ejiazi-backend/", url: "login.json", param: param, httpMethod: "post", headers: headers });
    };
    UserLoginService.prototype.logout = function () {
        /*var heraders=new Headers();
            heraders.set("JSESSIONID","C21BB78E1B50B5359D76AB9124A83420");
         heraders.set("adminId","1");
         heraders.set("sn","86b9726a3b0dcddc440a19d53165d213");
        var option=new RequestOptions();
        option.headers=heraders;
        console.log("option",option)*/
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }); //其实不表明 json 也可以, ng 默认好像是 json
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.logoutUrl, options);
    };
    /**
     * js对象转查询字符串
     * @param obj 被转对象
     * @returns {string}
     */
    UserLoginService.prototype.obj2queryString = function (obj) {
        var queryString = "";
        if (obj) {
            var isNotFirst = false;
            for (var key in obj) {
                if (isNotFirst) {
                    queryString += "&";
                }
                queryString += key + "=" + obj[key];
                isNotFirst = true;
            }
        }
        return queryString;
    };
    UserLoginService.prototype.updateLoginInfo = function (userInfo) {
        this.userInfo.name = userInfo.name;
        this.userInfo.isLogin = userInfo.isLogin;
    };
    UserLoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UserLoginService);
    return UserLoginService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__base_data_service__["a" /* BaseDataService */]));
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".required{\r\n  color: red;\r\n}\r\n\r\nselect{\r\n  height: 30px;\r\n  padding: 0px 10px;\r\n}\r\n\r\ninput{\r\n  border: 1px solid #CCCCCC;\r\n}\r\ninput.ng-invalid{\r\n  border-bottom: 2px solid #ff0000;\r\n}\r\n.ng-invalid-msg{\r\n  font-size: 12px;\r\n  color: #d00;\r\n  position: relative;\r\n}\r\n.ng-invalid-msg:after{\r\n  /*content: \"√\";\r\n  color: #f00;\r\n  background: #fff;\r\n  border: 1px solid #f00;\r\n  width: 8px;\r\n  height: 8px;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  vertical-align: text-top;\r\n  top:0px;\r\n  left: -15px;*/\r\n}\r\n.uploadImageContainer{\r\n  display: inline-block;\r\n  min-width: 80px;\r\n  padding: 2px;\r\n  height:80px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n.uploadImageContainer img{\r\n /* width: 100%;*/\r\n  height: 100%;\r\n  vertical-align: middle;\r\n}\r\n.uploadContainer{\r\n  position: relative;\r\n}\r\n.uploadContainer input[type=file]{\r\n  display: none;\r\n}\r\n\r\n.myUploadStyle{\r\n  border: 1px solid #ee00aa;\r\n  padding: 3px;\r\n  border-radius: 3px;\r\n}\r\n.myUploadStyle2{\r\n  border: 1px solid #0000aa;\r\n  padding: 3px;\r\n  border-radius: 3px;\r\n}\r\n.formLeftLabel{\r\n  display: inline-block;\r\n  min-width: 160px;\r\n  text-align: right;\r\n  color: #7598ff;\r\n}\r\n.formRow{\r\n  border-bottom: 0px solid #616161;\r\n  margin-bottom: 10px;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.formRow input[type=text]{\r\n  outline: none;\r\n  border: 1px solid #aaa;\r\n  border-radius: 3px;\r\n  line-height: 28px;\r\n  font-size: 16px;\r\n}\r\n\r\n.formRow input[type=checkbox]+label,.formRow input[type=radio]+label{\r\n  cursor: pointer;\r\n}\r\n\r\n.formRow[ng-reflect-ng-switch=array] > span{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.formRow[ng-reflect-ng-switch=array] > span > label.formLeftLabel{\r\n  -webkit-box-flex: 0;\r\n      -ms-flex-positive: 0;\r\n          flex-grow: 0;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.formRow[ng-reflect-ng-switch=array] > span >span{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  -ms-flex-negative: 1;\r\n      flex-shrink: 1;\r\n}\r\n\r\n\r\n.deleteIcon{\r\n  position: absolute;\r\n  right: -8px;\r\n  text-align: center;\r\n  top: -8px;\r\n  width: 16px;\r\n  height: 16px;\r\n  line-height: 16px;\r\n  background: #7598ff;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  border: 1px solid #b1d2ec;\r\n  display: none;\r\n}\r\n.operateBtnContainer{\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  background: rgba(0,0,0,0.3);\r\n}\r\n.operateBtnContainer .left,.operateBtnContainer .right{\r\n  display: none;\r\n  background: #333;\r\n  padding: 2px 6px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  color: #ffffff;\r\n}\r\n.uploadImageContainer:hover .left,.uploadImageContainer:hover .right,.uploadImageContainer:hover .deleteIcon{\r\n  display: inline-block;\r\n}\r\n.uploadImageContainer:hover{\r\n  background: #fff;\r\n}\r\n.operateBtnContainer .left{\r\n  justify-self: start;\r\n}\r\n.operateBtnContainer .right{\r\n  justify-self: end;\r\n}\r\n\r\n.arrayElementsContainer{\r\n  -webkit-box-flex: 0!important;\r\n      -ms-flex-positive: 0!important;\r\n          flex-grow: 0!important;\r\n}\r\n.submitBtnContainer{\r\n  text-align: center;\r\n}\r\n.submitBtn{\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  background: #7598ff;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  margin: 0px auto;\r\n  width: 80%;\r\n}\r\n\r\n.submitBtn:disabled{\r\n  background: #CCCCCC;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFormCreateComponentNew; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseFormCreateComponentNew = (function () {
    function BaseFormCreateComponentNew(formBuilder, baseDataService) {
        this.formBuilder = formBuilder;
        this.baseDataService = baseDataService;
    }
    BaseFormCreateComponentNew.prototype.submit = function () {
        console.log("submit data....");
    };
    BaseFormCreateComponentNew.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group(this.recreateFormByModel());
    };
    BaseFormCreateComponentNew.prototype.chooseResultFun = function (data) {
        console.log("chooseResult", data);
    };
    BaseFormCreateComponentNew.prototype.operateUtil = function ($event, element, operateType, formControl, index) {
        $event.stopPropagation();
        $event.preventDefault();
        console.log(element, operateType, formControl, index, typeof formControl, formControl instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]);
        if (operateType == "remove") {
            formControl.setValue("");
        }
        else if (operateType == "left") {
            var groupArray = this.formGroup.get(element.prop);
            var options = groupArray.controls;
            var operateOption = options.splice(index, 1)[0];
            options.splice(index - 1, 0, operateOption);
        }
        else if (operateType == "right") {
            var groupArray = this.formGroup.get(element.prop);
            var options = groupArray.controls;
            var operateOption = options.splice(index, 1)[0];
            options.splice(index + 1, 0, operateOption);
        }
    };
    BaseFormCreateComponentNew.prototype.recreateFormByModel = function () {
        var _this = this;
        var formGroupModel = {};
        this.formModel.elements.forEach(function (item) {
            if (item.type == "checkbox") {
                var addressFGs = item.options.map(function (option) {
                    var optionModel = {};
                    for (var prop in option) {
                        if (prop == "value") {
                            optionModel[prop] = [option[prop], item.validates];
                        }
                        else {
                            optionModel[prop] = [option[prop]];
                        }
                    }
                    if (item.type == "checkbox") {
                        optionModel["checked"] = [item.defaultValue == option.value, item.validates];
                    }
                    if (option.type == "select") {
                        if (option.remoteInfo != null) {
                            _this.baseDataService.listData({ url: option.remoteInfo.url, param: option.remoteInfo.param, httpMethod: option.remoteInfo.httpMethod }).subscribe(function (data) {
                                item["options" + option.prop] = option.remoteInfo.convert(data.json()) || data.json();
                            });
                        }
                    }
                    return _this.formBuilder.group(optionModel);
                });
                var addressFormArray = _this.formBuilder.array(addressFGs);
                formGroupModel[item.prop] = addressFormArray;
                if (item.type == "array" && !item.noNeedValidateElement == true) {
                    formGroupModel[item.prop + "LinkValidate"] = [item.defaultValue, [function (control) {
                                if (control.value != "") {
                                    return { "required": control.value };
                                }
                            }]];
                }
            }
            else if (item.type == "array") {
                var keyPropMap_1 = {};
                var addressFGs = item.options.map(function (option, index) {
                    option["value"] = [option["value"], item.validates];
                    keyPropMap_1[option.prop] = index;
                    if (option.type == "select") {
                        if (option.remoteInfo != null && option.init) {
                            _this.baseDataService.listData({ url: option.remoteInfo.url, param: option.remoteInfo.param, httpMethod: option.remoteInfo.httpMethod }).subscribe(function (data) {
                                option["options"] = option.remoteInfo.convert(data.json()) || data.json();
                            });
                        }
                    }
                    return _this.formBuilder.group(option);
                });
                item["keyPropMap"] = keyPropMap_1;
                var addressFormArray = _this.formBuilder.array(addressFGs);
                formGroupModel[item.prop] = addressFormArray;
                if (item.type == "array" && !item.noNeedValidateElement == true) {
                    formGroupModel[item.prop + "LinkValidate"] = [item.defaultValue, [function (control) {
                                if (control.value != "") {
                                    return { "required": control.value };
                                }
                            }]];
                }
            }
            else if (item.type == "select") {
                if (item.remoteInfo != null) {
                    _this.baseDataService.listData({ url: item.remoteInfo.url, param: item.remoteInfo.param, httpMethod: item.remoteInfo.httpMethod }).subscribe(function (data) {
                        item.options = item.remoteInfo.convert(data.json()) || data.json();
                    });
                }
                formGroupModel[item.prop] = [item.defaultValue, item.validates, item.asyncValidates];
            }
            else {
                formGroupModel[item.prop] = [item.defaultValue, item.validates, item.asyncValidates];
            }
        });
        return formGroupModel;
    };
    BaseFormCreateComponentNew = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: "<span></span>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_base_data_service__["a" /* BaseDataService */]) === 'function' && _b) || Object])
    ], BaseFormCreateComponentNew);
    return BaseFormCreateComponentNew;
    var _a, _b;
}());
//# sourceMappingURL=base.from.create.component.new.js.map

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[882]);
//# sourceMappingURL=main.bundle.js.map