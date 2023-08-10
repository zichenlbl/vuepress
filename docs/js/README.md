定时器

```js
var a = Math.round(Math.random() * 254 + 1);
var b = Math.round(Math.random() * 254 + 1);
var c = Math.round(Math.random() * 254 + 1);
var d = "rgb(" + a + ',' + b + ',' + c + ")";
function setH1() {
  var a = Math.round(Math.random() * 254 + 1);
  var b = Math.round(Math.random() * 254 + 1);
  var c = Math.round(Math.random() * 254 + 1);
  d = "rgb(" + a + ',' + b + ',' + c + ")";
}
var timer = setInterval(function(){
  setH1();
  console.log(d);
}, 1000)
```

