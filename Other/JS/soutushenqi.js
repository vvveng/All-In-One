let obj = JSON.parse($response.body)
let pro= obj["data"];
pro["vipType"] = 1024;
pro["vipLabel"] = "永久会员";
$done({body: JSON.stringify(obj)})