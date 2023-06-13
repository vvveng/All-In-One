// 使用时先打开模块然后再看应用点击签到

const APPName = '墨迹天气'
const url = $request.url
const regex1 = /(?<=user_id=)[^\&]+/
const regex2 = /(?<=sns_id=)[^\&]+/
const match1 = url.match(regex1)
const match2 = url.match(regex2)
const useridKey = 'A_Moji_User_id'
const useridVal = match1[0]
const snsidKey = 'A_Moji_Sns_id'
const snsidVal = match2[0]

if (snsidVal) {
  let userid = $persistentStore.write(useridVal, useridKey)
  
  let snsid = $persistentStore.write(snsidVal, snsidKey)

  if (snsid) {
    let msg = `${APPName}`
    $notification.post(msg, '数据写入成功', '详见日志')
    console.log(msg)
    console.log(snsidVal,useridVal)
  }
}

$done({})