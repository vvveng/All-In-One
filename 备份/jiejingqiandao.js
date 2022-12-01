let A_jiejing_user = $persistentStore.read('A_jiejing_user')
let A_jiejing_token = $persistentStore.read('A_jiejing_token')
let capture = {
	url: "https://sharecuts.cn/api/checkin",
	headers: {
		"Cookie": "auth.currentUserId=" + A_jiejing_user + "; auth.currentUserToken=" + A_jiejing_token,
		"X-User": A_jiejing_user,
		"X-Token": A_jiejing_token,
		"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/SharecutsIOS",
	},
};
$httpClient.post(capture, (data) => {
	let detail ="签到成功";
	$notification.post("捷径社区", "", detail);
	$done({ detail });
});