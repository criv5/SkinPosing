const params = new URLSearchParams(document.location.search)
const u = params.get("u") ?? "Steve"
console.log("Username: " + u)

var hHorSlider = document.getElementById("hHorSlider")
var hHorOutput = document.getElementById("hHorOutput")
hHorOutput.innerHTML = hHorSlider.value * Math.PI / 180 //default
hHorSlider.oninput = function () {
  hHorOutput.innerHTML = this.value * Math.PI / 180
}

var hVerSlider = document.getElementById("hVerSlider")
var hVerOutput = document.getElementById("hVerOutput")
hVerOutput.innerHTML = hVerSlider.value * Math.PI / 180 //default
hVerSlider.oninput = function () {
  hVerOutput.innerHTML = this.value * Math.PI / 180
}

var lArmVerSlider = document.getElementById("lArmVerSlider")
var lArmVerOutput = document.getElementById("lArmVerOutput")
lArmVerOutput.innerHTML = lArmVerSlider.value * Math.PI / 180 //default
lArmVerSlider.oninput = function () {
  lArmVerOutput.innerHTML = this.value * Math.PI / 180
}

var lArmHorSlider = document.getElementById("lArmHorSlider")
var lArmHorOutput = document.getElementById("lArmHorOutput")
lArmHorOutput.innerHTML = lArmHorSlider.value * Math.PI / 180 //default
lArmHorSlider.oninput = function () {
  lArmHorOutput.innerHTML = this.value * Math.PI / 180
}

var rArmVerSlider = document.getElementById("rArmVerSlider")
var rArmVerOutput = document.getElementById("rArmVerOutput")
rArmVerOutput.innerHTML = rArmVerSlider.value * Math.PI / 180 //default
rArmVerSlider.oninput = function () {
  rArmVerOutput.innerHTML = this.value * Math.PI / 180
}

var rArmHorSlider = document.getElementById("rArmHorSlider")
var rArmHorOutput = document.getElementById("rArmHorOutput")
rArmHorOutput.innerHTML = rArmHorSlider.value * Math.PI / 180 //default
rArmHorSlider.oninput = function () {
  rArmHorOutput.innerHTML = this.value * Math.PI / 180
}

var container = document.getElementById("mySkinContainer")
var skinRender = new SkinRender(
  { width: 40, height: 100, controls: true },
  container,
)

container.addEventListener("skinRender", function () {
  var player = skinRender.getPlayerModel()

  player.children[0].rotation.y = hHorOutput.innerHTML //head horizontal
  player.children[0].rotation.x = hVerOutput.innerHTML //head vertical
  player.children[2].rotation.x = lArmVerOutput.innerHTML
  player.children[2].rotation.z = lArmHorOutput.innerHTML //left arm vertical
  player.children[3].rotation.x = rArmVerOutput.innerHTML
  player.children[3].rotation.z = rArmHorOutput.innerHTML //left arm vertical
})
skinRender.render(u)
