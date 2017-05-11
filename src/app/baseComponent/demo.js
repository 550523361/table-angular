/**
 * Created by Administrator on 2017/5/10.
 */

/**
 * 封装一个获取数据方法
 * @param param 查询参数
 * @param success 成功回调方法
 * @param error 失败回调方法
 * @param complete 完成回调方法
 */
function getData(param,success,error,complete) {
  var queryParam=param.queryParam;
  var queryHeaders=param.queryHeaders;
  var queryMethod=param.queryMethod;
  var queryUrl=param.url;
  var type=param.type;
  $.ajax({
    method:queryMethod||"post",
    headers:queryHeaders,
    type:type,
    xhrFields: {  withCredentials: true  },
    url:queryUrl,
    data:JSON.stringify(queryParam),
    param:JSON.stringify(queryParam),
    success:function(data){
      success&&success(data);
    },
    error:function(data){
      console.log("resp",data);
      error&&error(data);
    },
    complete:function(data){
      console.log("resp",data);
      complete&&complete(data);
    }
  })
}

/*成功回调方法*/
function success(data) {
  console.log("success",data)
}

/**
 * 测试方法
 */
function getTest() {

  var cuid ="519830100006";/*jquery动态获取*/
  var cid = "330127198312282237";/*jquery动态获取*/
  var pageIndex=0;
  var pageSize=1;


//装配请求方法
  var param ={
    "MMTS":{
      "REQ_HEADER":
        {
          "CLT_VERSION":"1.0.0",
          "CLT_TIMESTAMP":Date.parse(new Date()),
          "CLT_SEQ":1
        },
      "REQ_BODY":
        {
          "CUSTOMER_CODE": cuid,
          "CARD_CODE": cid,
          "STARTNUM": pageIndex * pageSize,
          "RECCNT":pageSize
        }
    }
  };


  var AppKey = "123456qweasd";
  var secret = "123qwe";
  var Nonce = "123456";
  var Time =  Date.parse(new Date());
  var Token = CryptoJS.SHA1(secret + Nonce + Time);

  /*装配 请求头对象*/
  var headers={
    AppKey:AppKey,
    Nonce:Nonce,
    Token:Token,
    Time:Time
  }

  var queryParamDemo={
    queryParam:param,
    queryHeaders:headers,
    queryMethod:"post",
    type:"application/x-www-form-urlencoded",
    url:"http://cx.lgjyzx.com:20002/dealerinterface/dealer/query_logistics.do"
  }

  getData(queryParamDemo,success);
}
