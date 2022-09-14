let moji = {
	url: "https://rtn.api.moji.com/ucrating/sign_in/do?user_id=LCjMOLvINIunWftgJGHl1qgj5sZ84vYfceIVOYh1w4g%3D&sns_id=4YoZYX2%2Fs6FqwzTxc907aw%3D%3D&client_id=11",
};
$httpClient.get(moji, (data) => {
	let detail ="签到成功";
	$notification.post("墨迹天气", "", detail);
	$done({ detail });
});