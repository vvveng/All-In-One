// 使用时先打开模块然后再看应用点击签到

const APPName = '捷径社区参数'
const url = $request.url

const userKey = 'A_JieJing_User'
const userVal = $request.headers['x-user']

const tokenKey = 'A_JieJing_Token'
const tokenVal = $request.headers['x-token']

if (tokenVal) {
  let token = $persistentStore.write(tokenVal, tokenKey)
  let user = $persistentStore.write(userVal, userKey)
  if (token) {
    let msg = `${APPName}`
    $notification.post(msg, '写入成功', '详见日志')
    console.log(msg)
    console.log(tokenVal,userVal)
  }
}

$done({})