let capture = {
	url: "https://sharecuts.cn/api/checkin",
	headers: {
		"Cookie": "auth.currentUserId=jL1z3BN03v; auth.currentUserToken=16fee0b10e49ab5a66f5ddda706024e49951f82b59832c73e6e68d776dbefb2e",
		"X-User": "jL1z3BN03v",
		"X-Token": "16fee0b10e49ab5a66f5ddda706024e49951f82b59832c73e6e68d776dbefb2e",
		"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/SharecutsIOS",
	},
};
$httpClient.post(capture, (data) => {
	let detail ="签到成功";
	$notification.post("捷径社区", "", detail);
	$done({ detail });
});