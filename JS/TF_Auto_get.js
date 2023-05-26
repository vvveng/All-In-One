const APPName = 'TF'
const keyKey = 'A_TF_Session_id'
const keyVal = $request.headers['x-session-id']
const sessionidKey = 'A_TF_Session_id'
const sessionidVal = $request.headers['x-session-id']
const sessiondigestKey = 'A_TF_Session_digest'
const sessiondigestVal = $request.headers['x-session-digest']
const requestidKey = 'A_TF_Request_id'
const requestidVal = $request.headers['x-request-id']

if (requestidVal) {
  let sessionid = $persistentStore.write(sessionidVal, sessionidKey)
  let sessiondigest = $persistentStore.write(sessiondigestVal, sessiondigestKey)
  let requestid = $persistentStore.write(requestidVal, requestidKey)
  let key = $persistentStore.write(keyVal, keyKey)
  if (requestid) {
    let msg = `${APPName}`
    $notification.post(msg, 'APP数据写入成功', '详见日志')
    console.log(msg)
    console.log(sessionidVal,sessiondigestVal,requestidVal,keyVal)
  }
}

$done({})