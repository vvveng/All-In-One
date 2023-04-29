用于substore批量重命名
更新地址：https://keywos.cf/rename.js
使用方法如下：
//作者 @key

 substore-脚本-本地批量重命名
// in: ——机场原本节点名 默认中文
// out: ——输出节点名 默认中文 
// 可选: cn ，us ，quan
// 中文，英文缩写 ，英文全民
// flag: ——加国旗
const addflag = $arguments[”flag“];
// nx: -——过滤高倍率
const nx = $arguments[”nx“];
// clear:——清理乱名
const clear = $arguments[”clear“];
// bl: -——保留家宽 ，IPLC 之类的
const bl = $arguments[”bl“];
// name=: ——添加机场名前缀