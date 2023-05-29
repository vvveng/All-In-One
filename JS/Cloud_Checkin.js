let email = $persistentStore.read('A_Cloud_checkinemail');
let password = $persistentStore.read('A_Cloud_checkinpwd');
let url =$persistentStore.read('A_Cloud_checkinurl');
let name = $persistentStore.read('A_Cloud_checkintitle');

// 登录
let login = {
  url: url + '/auth/login',
  body: 'email=' + email + '&passwd=' + password,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

$httpClient.post(login, function(error, response, data) {
  if (response.status === 200) {
    $notification.post(name, '登录成功', '');
    // 签到
    let checkin = {
      url: url + '/user/checkin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': url + '/user',
      },
    };
    $httpClient.post(checkin, function(error, response, data) {
      if (response.status === 200) {
        let result = JSON.parse(data);
        if (result.ret === 1) {
          let detail = '签到成功，获得 ' + result.traffic + ' 流量';
          $notification.post(name, detail, ''); 
        } else if (result.ret === 0) {
          let detail = '今日已签到';
          $notification.post(name, detail, '');
        }
      } else {
        $notification.post(name, '签到失败', '');
      }
    });
  } else {
    $notification.post(name, '登录失败', '');
  }
});

$done({});