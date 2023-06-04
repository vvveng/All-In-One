const APPName = 'TestFlight';
const url = $request.url;
const regex = /(?<=accounts\/)[^\/]+/;
const match = url.match(regex);
const A_TF = {};
A_TF.Key = match[0];
A_TF.Session_id = $request.headers['x-session-id'];
A_TF.Session_digest = $request.headers['x-session-digest'];
A_TF.Request_id = $request.headers['x-request-id'];
$persistentStore.write(JSON.stringify(A_TF), 'A_TF');
if (A_TF.Request_id) {
let msg = `${APPName}`;
$notification.post(msg,'','写入成功');
console.log(msg);
console.log(A_TF.Key, A_TF.Session_id, A_TF.Session_digest, A_TF.Request_id);
}
$done();