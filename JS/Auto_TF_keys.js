$persistentStore.write(null, 'cai_request_id')
let url = $request.url
let key = url.replace(/(.*accounts\/)(.*)(\/apps)/, '$2')
let session_id = $request.headers['x-session-id']
let session_digest = $request.headers['x-session-digest']
let request_id = $request.headers['x-request-id']
$persistentStore.write(key, 'A_TF_key')
$persistentStore.write(session_id, 'A_TF_session_id')
$persistentStore.write(session_digest, 'A_TF_session_digest')
$persistentStore.write(request_id, 'A_TF_request_id')
if ($persistentStore.read('Cai_request_id') !== null) {
  $notification.post('请关闭本脚本', '信息获取成功','')
} else {
  $notification.post('信息获取失败','请打开MITM H2开关并添加testflight.apple.com','')
}
$done({})