let A_caiyun_userid = $persistentStore.read('A_caiyun_userid');
let A_caiyun_snsid = $persistentStore.read('A_caiyun_snsid');
let moji = {
	url: "https://rtn.api.moji.com/ucrating/sign_in/do?user_id=" + A_caiyun_userid + "&sns_id=" + A_caiyun_snsid + "&client_id=11",
};
$httpClient.get(moji, (data) => {
	let detail ="签到成功";
	$notification.post("墨迹天气", "", detail);
	$done({ detail });
});