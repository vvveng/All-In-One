let email = $persistentStore.read('A_Cloud_email');
let sessionid = $persistentStore.read('A_Cloud_passwd');
let sessionid = 'week';
$httpClient.post(requestid, (data) => {
	$done({ key, sessionid, sessiondigest,requestid});
});



if (requestidVal) {
  let sessionid = $persistentStore.write(sessionidVal, sessionidKey)
  let sessiondigest = $persistentStore.write(sessiondigestVal, sessiondigestKey)
  let requestid = $persistentStore.write(requestidVal, requestidKey)
  let key = $persistentStore.write(kVal, kKey)
  if (requestid) {
    let msg = `${APPName}`
    $notification.post(msg, '数据写入成功', '详见日志')
    console.log(msg)
    console.log(sessionidVal,sessiondigestVal,requestidVal,keyVal)
  }
}

$done({})