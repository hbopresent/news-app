var news = (function() {
  var mobileNavBtn = document.getElementById("mobileNavBtn");
  var mobileNavPage = document.getElementById("mobileNavPage");
  var navBtn = document.getElementById("navBtn");
  var mobileNavState = false;

  // headline carousel handler
  function playHeadlineCarousel() {
    
  }

  // mobile nav handler
  function mobileNavBtnSwitch() {
    mobileNavState = !mobileNavState;
    if(mobileNavState) {
      showMobileNavPage();
    }
    else {
      closeMobileNavPage();
    }
  }
  function showMobileNavPage() {
    mobileNavBtn.style.position = "fixed";
    mobileNavPage.style.zIndex = 10;
    mobileNavPage.style.opacity = 1;
    navBtn.style.justifyContent = "center";
  }
  function closeMobileNavPage() {
    mobileNavBtn.style.position = "absolute";
    mobileNavPage.style.opacity = 0;
    setTimeout(function() {
      mobileNavPage.style.zIndex = -10;
    }, 200);
    navBtn.style.justifyContent = "space-evenly";
  }

  function setListeners() {
    mobileNavBtn.addEventListener("click", mobileNavBtnSwitch);
  }
  function initialize() {
    setListeners();
    playHeadlineCarousel();
  }

  return {
    init: initialize
  }
}());

news.init();
