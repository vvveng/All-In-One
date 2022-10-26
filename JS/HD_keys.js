let authcode = $request.body['authcode']
let tongzhi = {
  url: "https://api.day.app/push",
  body: {
	title: "已抓取，请立即下拉后点复制",
	device_key: "mQmpv6johUdatwgYhXvsAL",
	body: authcode,
}
};
$httpClient.post(tongzhi)
	$done({ tongzhi });