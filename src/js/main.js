// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var $ = require("./lib/qsa");

var parties = $(".party-select");
var stateSelect = document.querySelector(".state-select");
var stateDetails = $(".state-details .state");
var resultContainer = document.querySelector(".results");
var results = $(".result");
var none = document.querySelector(".result.none");

var filter = function() {
  var val = stateSelect.value;
  var count = 0;
  results.forEach(function(el) {
    var state = el.getAttribute("data-state");
    if (state == val) {
      count++;
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });

  stateDetails.forEach(function(el) {
    console.log(el);
    if (el.getAttribute("data-state") == val) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  })
};

filter();

stateSelect.addEventListener("change", filter);

var setParty = function() {
  var party = this.getAttribute("data-party");
  resultContainer.setAttribute("data-filter", party);
  $(".party-select.selected").forEach(el => el.classList.remove("selected"));
  this.classList.add("selected");
};

parties.forEach(el => el.addEventListener("click", setParty));