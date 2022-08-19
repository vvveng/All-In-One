let obj = JSON.parse($response.body)
let pro= obj["data"];
pro["phoneNum"] = "18767117788";
pro["vipType"] = 1024;
pro["vipLabel"] = "永久会员";
$done({body: JSON.stringify(obj)})