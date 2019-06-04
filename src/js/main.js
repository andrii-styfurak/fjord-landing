// iphone-slider
var iphoneSlider = new Glide(".iphone-slider .glide", {
  type: "carousel",
  gap: 0
});

var iphoneSliderColors = ["#26e6e6", "#03A9F4", "#8c54f1"],
  iphoneSliderBox = document.querySelector(".iphone-slider");

iphoneSlider.on("run", function (move) {
  iphoneSliderBox.style.backgroundColor = iphoneSliderColors[iphoneSlider.index];
})

iphoneSlider.mount();

// ipad-slider
new Glide(".ipad-slider .glide", {
  type: "carousel",
  gap: 0
}).mount();

// quotes slider
var peekCalc = (window.innerWidth - 795) / 2;
new Glide(".quotes .glide", {
  type: "carousel",
  gap: 24,
  peek: peekCalc
}).mount();

// imgs lazy load
var el = document.querySelectorAll("[data-src]");
var observer = lozad(el);
observer.observe();

// ScrollWatch
setTimeout(function () {
  var sw = new ScrollWatch();
}, 1000);

