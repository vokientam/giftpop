function draw() {
  var c = document.getElementById("cvOriginVideo");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95,50,30,0,2*Math.PI);
  ctx.stroke();
}
