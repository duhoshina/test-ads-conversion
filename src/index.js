let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function trackGetStarted() {
  if (window.TrackierWebSDK) {
    window.TrackierWebSDK.trackConvForBrand('reclame45.gotrackier.io', '691dc033f5d3640d480eb14c', {"is_iframe":true});
    console.log('Conversion tracked');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const getStartedButtons = document.querySelectorAll('.primary__button');
  
  getStartedButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      trackGetStarted();
    });
  });
});