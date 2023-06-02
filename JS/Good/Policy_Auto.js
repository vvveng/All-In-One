let Time = "20";

let GroupAuto = JSON.parse($persistentStore.read('A_GroupAuto')); //读取数据库的词典值

const groupName = GroupAuto.Testflight[0];
const policyNew = GroupAuto.Testflight[1];
let policyOld = GroupAuto.Testflight[2];

const policyNow = JSON.parse(JSON.stringify($surge.selectGroupDetails().decisions[groupName]));//获取当前分组的策略值

if (policyNow === policyNew) {
  $surge.setSelectGroupPolicy(`${groupName}`,`${policyOld}`);
  $notification.post(`${groupName}`,`   ↓ ↓ ↓`,`${policyOld}`);
  console.log(`[${groupName}] 已切换至 ${policyOld}`);
  GroupAuto.Testflight[2] = policyNew;
  $persistentStore.write(JSON.stringify(GroupAuto), 'A_GroupAuto');
} else if (policyNow === policyOld) {
  $surge.setSelectGroupPolicy(`${groupName}`,`${policyNew}`);
  $notification.post(`${groupName}`,`   ↓ ↓ ↓`,`${policyNew}`);
  console.log(`[${groupName}] 已切换至 ${policyNew}`);
  GroupAuto.Testflight[2] = policyOld;
  $persistentStore.write(JSON.stringify(GroupAuto), 'A_GroupAuto');
} else if (policyNow !== policyOld && policyNow !== policyNew) {
  policyOld = policyNow;
  GroupAuto.Testflight[2] = policyOld;
  $persistentStore.write(JSON.stringify(GroupAuto), 'A_GroupAuto');
  $surge.setSelectGroupPolicy(`${groupName}`,`${policyNew}`);
  $notification.post(`${groupName}`,`   ↓ ↓ ↓`,`${policyNew}`);
  console.log(`[${groupName}] 已切换至 ${policyNew}`);
  setTimeout(() => {
    $surge.setSelectGroupPolicy(`${groupName}`, `${policyOld}`);
    $notification.post(
      `${groupName}`,
      `   ↓ ↓ ↓`,
      `${policyOld}`
    );
    console.log(`[${groupName}] 已切换至 ${policyOld}`);
    GroupAuto.Testflight[2] = policyNew;
    $persistentStore.write(JSON.stringify(GroupAuto), 'A_GroupAuto');
  }, Time * 1000 * 60);
}

$done();