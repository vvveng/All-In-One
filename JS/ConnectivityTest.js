/*
感谢@小白脸 重写脚本原脚本
原作者@yibeizipeini来自于https://raw.githubusercontent.com/yibeizipeini/JavaScript/Surge/ConnectivityTest.js

Surge:
[Panel]
网络延迟 = script-name=网络延迟,update-interval=1

[Script]
网页连通性 = type=generic,timeout=3,argument=title=Connectivity Test&server=false,script-path=https://raw.githubusercontent.com/vvveng/All-In-One/main/JS/ConnectivityTest.js

 */
let $ = {
百度:'https://www.baidu.com',
谷歌:'https://www.google.com/generate_204',
油管:'https://www.youtube.com/',
内测:'https://testflight.apple.com',
商店:'https://itunes.apple.com',
Hub:'https://github.com',
Lab:'https://gitlab.com',
GPT:'https://api.openai.com'
}

!(async () => {
await Promise.all([http('百度'),http('谷歌'),http('油管'),http('商店'),http('内测'),http('Hub'),http('Lab'),http('GPT')]).then((x)=>{
	$done({
    title: '网络延迟',
    content: x.join('\n'),
    icon: 'bolt.horizontal.icloud',
    'icon-color': '#5AC8FA',
  })
})
})();

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
						'\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}