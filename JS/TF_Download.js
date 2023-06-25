$request.headers = formatHeaders($request.headers)
function formatHeaders(h) {
    return Object.keys(h).reduce((t, i) => (t[i.toLowerCase()] = h[i], t), {})
}
let app = JSON.parse($request.body);
app.storefrontId = '143441-19,29';
$done({body:JSON.stringify(app)});