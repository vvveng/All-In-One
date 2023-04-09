(async () => {
   let enabled = (await httpAPI("v1/modules")).enabled.includes("ipv6");

   let modules = !(typeof $argument === "undefined") && rule() || Net();

   `${enabled}` === `${modules}` || (await httpAPI("/v1/modules", "POST", { ipv6: `${modules}` }));
})().finally(() => $done());

function httpAPI(path, method = "GET", body = null) {
   return new Promise((resolve) => {
      $httpAPI(method, path, body, (result) => {
         resolve(result);
      });
   });
}

function rule() {
   let array = $argument.split(",");
   let _ssid = $network.wifi.ssid;

   function r(s) {
      for (var item of array) {
         if (item === `!${s}`) {
            return "false";
         } else if (item === s) return true;
      }
      return false;
   }

   return _ssid === null ? r("fwo") : r("wifi") || r(_ssid);
}

function Net(){
let ip = $network.v6.primaryAddress;
return ip === null ? false 
: !ip.includes('fe80:')
}
