
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://marathon.jd.com/seckillnew/orderService/submitOrder.action?skuId=100012043978`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://marathon.jd.com`,
'x-rp-client' : `h5_1.0.0`,
'User-Agent' : `jdapp;iPhone;12.0.10;;;M/5.0;appBuild/168844;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22ZWVrCJdrYJq1YJOnY2S0ZJSmDzC3EJK5DtTsY2Y1ENdrYJU1EQY3Yq%3D%3D%22%2C%22sv%22%3A%22CJckCK%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1692676800%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `__jd_ref_cls=MSecKillBalance_Order_Submit; mba_muid=16694748250562115673606.98.1692677135178; mba_sid=98.9; __jda=122270672.16694748250562115673606.1669474825.1692670512.1692676801.42; __jdb=122270672.5.16694748250562115673606|42.1692676801; __jdc=122270672; __jdv=122270672%7Ckong%7Ct_1000170136%7Ctuiguang%7Cnotset%7C1692670035307; pre_seq=6; pre_session=eea17aa85a11cb4e2073790962bcf587aa558f7b|194; unpl=JF8EALRnNSttDEMGUU4BGBAYHl9RW1gOHx9QaG9WV15bQlQNGQpMFBd7XlVdXxRKHh9vZxRUW1NPVA4aBisSFHtdVV9fDUsSB21iNWRVUCVXSBtsGHwTBhAZbl4IexYzb2ANVFtdTVEHHgAfERBIXF1aXQFJHgNfZjVUW2hLVQQaARgXFUNZUFZtOEonAl9mNQIzWEpVBBoDGxcXQxBUWVUITRIFamUAVllbS1cEEgYbGxJCXWRfbQs%7CJF8EAOZnNSttXkwHVUkATEcUQ1oDW1RcH0cKbjQBVVxQHgEDTgpLQkB7XlVdXhRLFB9sZxRUWVNLUw4fBisSFHtdVV9dAEISAmtmNWRUNklRARMDdRIRSjNkXV04SidXOzcFUg0IQlBVGwJJQRUfXlVYXw5DFgtoZFYGClxCUlVLBh8bR00OZF9tAUonCmxnDVJUaEtVBBoEHxMZT1Q6XzMIQxMCb2EEUF5ce1U1GjIaIkYlXVVfXAlKFQttZkgACQhLUlVLCx9CEEsPB1sJC0oRAWlvBFxaWxgGUh8LHUJAT1ldCVtbexYzbw; mid=369z6WLpqkMPmOx8Wps4CVjj-6p_Lpej0louqfuDZMk; pt_key=app_openAAJk5BeAADCorc4fOcQpIwoMYKPKKe18uiZkutSqV8FCjlAjU7Q4FhMPUmJ5b3mc5AVg1eLvluc; pt_pin=18767123966_p; pwdt_id=18767123966_p; sid=793c089da526a942cb29e0a72f8c0a5w; 3AB9D23F7A4B3C9B=27WHBBGAYC2XN64V262JMP3DVFJPJT2SJUBNXWEJ752U5XAAJDFDOEHUCUX5E65L2ZXJLDP5BZEYI6VBHBMGOIGHW4; 3AB9D23F7A4B3CSS=jdd0327WHBBGAYC2XN64V262JMP3DVFJPJT2SJUBNXWEJ752U5XAAJDFDOEHUCUX5E65L2ZXJLDP5BZEYI6VBHBMGOIGHW4AAAAMKDMDE6KYAAAAADPLD7LWW5MQPLAX; shshshfpb=uqrMy1dmRO7tdMLIxIBRONw; shshshfpa=20218715-bb2c-0619-c49d-2aab7388467f-1669474825; shshshfpx=20218715-bb2c-0619-c49d-2aab7388467f-1669474825; unionwsws=%7B%22devicefinger%22%3A%22eidIed738122b3s22lvYnCWmTkGL2WdWer515tpb2iDaGS2XsiBZfHSvO1r6kWG47mbePjd3okEvBqKdcL9%2FiooXHay2mZ%2BIrxChjUrIfzhhiLC8MUZB%22%7D; visitkey=60501912513733663; qid_ls=1684515323388; qid_ts=1685534799308; qid_vis=7; joyya=1685465225.1685465286.39.044y29qm7; shshshfpv=JD0111d47djSno977akj168546499912403YVLbOBk-f8lLbQ5e8rCMcaTCVX035vzxLt8Fn6JJmpi4CrewO0_O6Z3Xy1dnEqaPnWIoNjuSpwb6dwXTzNaCOtpFa_JucgcAiazjgrn-mkk19zr9bg~uJyvNZPedX9Su72IYKrU11EG1nFkdhID9iwu_ibQFmkCsocu2Pw2pR0-mnckokCobpGwGXrbW_oXri-M3SOPHhO3A5Z_70CMSCrV4qyg0O7t6KWFWs6QpX77_SkUBI4Q1cKgNGyaCPm5ABUVLv6KkdlZKyQEhXCROYtGVznHH8KQ-3JWRx3lT_lW7geIVraXi; shshshfp=0536e18f324b990aa3b71610dd7b1b80; qid_fs=1669475780042; qid_uid=0ee47357-564e-4a01-bbe3-16f69a608500`,
'Host' : `marathon.jd.com`,
'x-referer-page' : `https://marathon.jd.com/seckillM/seckill.action`,
'Referer' : `https://marathon.jd.com/seckillM/seckill.action?skuId=100012043978&num=1&rid=1692676810`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `num=1&addressId=138567162&name=%E5%AD%99%E5%85%88%E7%94%9F&provinceId=15&provinceName=%E6%B5%99%E6%B1%9F&cityId=1213&cityName=%E6%9D%AD%E5%B7%9E%E5%B8%82&countyId=3038&countyName=%E6%BB%A8%E6%B1%9F%E5%8C%BA&townId=59931&townName=%E8%A5%BF%E5%85%B4%E8%A1%97%E9%81%93&addressDetail=%E6%BB%A8%E5%BA%B7%E4%BA%8C%E8%8B%918%E5%B9%A21%E5%8D%95%E5%85%834%E6%A5%BC&mobile=178%2A%2A%2A%2A0515&mobileKey=cd17db529527a036e30926ce0f2d2493&email=&invoiceTitle=4&invoiceContent=1&invoicePhone=178%2A%2A%2A%2A0515&invoicePhoneKey=cd17db529527a036e30926ce0f2d2493&invoice=true&password=&codTimeType=3&paymentType=4&overseas=0&phone=&areaCode=86&token=7b51fb48bfe0670817179aa350e100f2&skuId=100012043978`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
