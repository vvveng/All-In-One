let url = $request.url
if ('url') !== null) {
  $notification.post('请关闭本脚本', '信息获取成功','')
} else {
  $notification.post('信息获取失败','','')
}
$done({})