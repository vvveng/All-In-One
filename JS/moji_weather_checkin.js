var url = $request.url;
var headers = $request.headers;
var body = $response.body;

if (url.indexOf("condition.json") != -1) {
    var obj = JSON.parse(body);
    if (obj.result && obj.result.status == 200 && obj.result.isForeign == false) {
        var city = obj.city;
        var province = obj.province;
        var url = "https://api.m.jd.com/client.action?functionId=signBeanIndex&body=%7B%22monitor_refer%22%3A%22%22%2C%22rnVersion%22%3A%224.5%22%2C%22rnClient%22%3A%22app%22%7D&appid=ld";
        $httpClient.get(url, function(error, response, data){
            if (error){
                console.log(error);
                $notification.post("墨迹天气签到", "接口请求失败", error);
            } else {
                var obj = JSON.parse(data);
                if (obj.code == 3) {
                    $notification.post("墨迹天气签到", "签到成功", "获得" + obj.data.addDays + "天气象豆");
                } else if (obj.code == 2) {
                    $notification.post("墨迹天气签到", "签到失败", "今天已经签到过了");
                } else {
                    $notification.post("墨迹天气签到", "签到失败", obj.msg);
                }
            }
        });
    }
}

$done({});