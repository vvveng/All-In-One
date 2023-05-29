let email = $persistentStore.read('A_Cloud_checkinemail')
let pwd = $persistentStore.read('A_Cloud_checkinpwd')
let url0 = $persistentStore.read('A_Cloud_checkinurl')


let login = {
	url: url0 + "/auth/login",
    body: "code=&email=" + email + "&passwd=" pwd + "&remember_me=week",
};
$httpClient.get(login, (data) => {
	let detail ="登陆成功";
	$notification.post("开始签到", "", detail);
	$done({ detail });
});

const checkin = {
    url: url0 + "/user/checkin",
    body: "",
};
$httpClient.post(checkin, function(error, response, data) {
    if (error) {
        console.log(error)
	let detail ="签到失败";
	$notification.post("", "", detail);
        $done(detail);
    } else  {
        //let data = JSON.parse(data)
        console.log(data)
	let detail = console.log(data);
	$notification.post("", "", detail);
        $done(detail);
    }
});