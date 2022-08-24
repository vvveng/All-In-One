let obj = JSON.parse($response.body)
obj["ret"] = 1
let pro= obj["data"];
pro["isGuest"] = "false";
pro["id"] = 666;
pro["vipExpireTime"] = "2027-01-01T00:00:00Z";
pro["isVip"] = "true";
$done({body: JSON.stringify(obj)})