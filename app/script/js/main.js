var news = (function() {
  // mobile nav
  var mobileNavBtn = document.getElementById("mobileNavBtn");
  var mobileNavPage = document.getElementById("mobileNavPage");
  var navBtn = document.getElementById("navBtn");
  var mobileNavState = false;
  // headline carousel pages
  var firstHeadline = document.getElementById("first-headline-carousel-page");
  var secondHeadline = document.getElementById("second-headline-carousel-page");
  var thirdHeadline = document.getElementById("third-headline-carousel-page");
  var firstHeadlineProgress = document.getElementById("first-headline-progress");
  var secondHeadlineProgress = document.getElementById("second-headline-progress");
  var thirdHeadlineProgress = document.getElementById("third-headline-progress");
  var headlineAry = [
    {"carouselPage": firstHeadline, "progress": firstHeadlineProgress},
    {"carouselPage": secondHeadline, "progress": secondHeadlineProgress},
    {"carouselPage": thirdHeadline, "progress": thirdHeadlineProgress}
  ];
  var headlineIndex = 0;
  // nav guide link
  var navMobileHome = document.getElementById("navMobileHome");
  var navMobileBusiness = document.getElementById("navMobileBusiness");
  var navMobileTech = document.getElementById("navMobileTech");
  var navMobileRealEstate = document.getElementById("navMobileRealEstate");
  var navDesktopHome = document.getElementById("navDesktopHome");
  var navDesktopBusiness = document.getElementById("navDesktopBusiness");
  var navDesktopTech = document.getElementById("navDesktopTech");
  var navDesktopRealEstate = document.getElementById("navDesktopRealEstate");
  var moreBusiness = document.getElementById("moreBusiness");
  var moreTech = document.getElementById("moreTech");
  var moreRealEstate = document.getElementById("moreRealEstate");
  var navFooterBusiness = document.getElementById("navFooterBusiness");
  var navFooterTech = document.getElementById("navFooterTech");
  var navFooterRealEstate = document.getElementById("navFooterRealEstate");
  var businessPageAry = [navMobileBusiness, navDesktopBusiness, moreBusiness, navFooterBusiness];
  var techPageAry = [navMobileTech, navDesktopTech, moreTech, navFooterTech];
  var realestatePageAry = [navMobileRealEstate, navDesktopRealEstate, moreRealEstate, navFooterRealEstate];
  var countOfDirectedLinks = 4;
  // news title
  var businessTitle = document.getElementById("businessTitle");
  var techTitle = document.getElementById("techTitle");
  var realestateTitle = document.getElementById("realestateTitle");
  // page title
  var pageTitle = document.getElementById("pageTitle");
  // news view
  var businessNews = document.getElementById("businessNews");
  var techNews = document.getElementById("techNews");
  var realEstateNews = document.getElementById("realEstateNews");
  // news title
  var businessTitle = document.getElementById("businessTitle");
  var techTitle = document.getElementById("techTitle");
  var realestateTitle = document.getElementById("realestateTitle");
  // headline
  var headline = document.getElementById("headline");




  // headline carousel handler
  function playHeadlineCarousel() {
    headlineAry[headlineIndex].carouselPage.classList.add("selected-carouselpage");
    headlineAry[headlineIndex].progress.classList.add("selected-progress");
  }
  function playNextHeadlineCarousel(e) {
    if(e.animationName == "progressUpdate") {
      // remove effect class for elements have played
      headlineAry[headlineIndex].carouselPage.classList.remove("selected-carouselpage");
      headlineAry[headlineIndex].progress.classList.remove("selected-progress");

      if(headlineIndex == 2) {
        headlineIndex = 0;
      }
      else {
        headlineIndex += 1;
      }
      playHeadlineCarousel();
    }
  }


  // go to specfic news
  function gotoPage(directedPage) {
    pageTitle.innerHTML = directedPage;
    switch(directedPage) {
      case "HOME":
        headline.style.display = "block";
        businessNews.style.display = "block";
        techNews.style.display = "block";
        realEstateNews.style.display = "block";
        moreBusiness.style.display = "flex";
        moreTech.style.display = "flex";
        moreRealEstate.style.display = "flex";
        businessTitle.style.display = "block";
        techTitle.style.display = "block";
        realestateTitle.style.display = "block";
        break;
      case "BUSINESS":
        headline.style.display = "none";
        businessNews.style.display = "block";
        techNews.style.display = "none";
        realEstateNews.style.display = "none";
        moreBusiness.style.display = "none";
        businessTitle.style.display = "none";
        break;
      case "TECH":
        headline.style.display = "none";
        techNews.style.display = "block";
        businessNews.style.display = "none";
        realEstateNews.style.display = "none";
        moreTech.style.display = "none";
        techTitle.style.display = "none";
        break;
      case "REAL ESTATE":
        headline.style.display = "none";
        realEstateNews.style.display = "block";
        techNews.style.display = "none";
        businessNews.style.display = "none";
        moreRealEstate.style.display = "none";
        realestateTitle.style.display = "none";
        break;
    }
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
    navMobileHome.addEventListener("click", mobileNavBtnSwitch);
    navMobileBusiness.addEventListener("click", mobileNavBtnSwitch);
    navMobileTech.addEventListener("click", mobileNavBtnSwitch);
    navMobileRealEstate.addEventListener("click", mobileNavBtnSwitch);

    // progress handler
    firstHeadlineProgress.addEventListener("animationend", playNextHeadlineCarousel);
    secondHeadlineProgress.addEventListener("animationend", playNextHeadlineCarousel);
    thirdHeadlineProgress.addEventListener("animationend", playNextHeadlineCarousel);

    // page direction links handler
    for(let i = 0 ; i < countOfDirectedLinks ; i++) {
      let businesstitle = businessPageAry[0].innerHTML.toUpperCase();
      let techTitle = techPageAry[0].innerHTML.toUpperCase();
      let realestateTitle = realestatePageAry[0].innerHTML.toUpperCase();

      businessPageAry[i].addEventListener("click", function() {
        gotoPage(businesstitle);
      });
      techPageAry[i].addEventListener("click", function() {
        gotoPage(techTitle);
      });
      realestatePageAry[i].addEventListener("click", function() {
        gotoPage(realestateTitle);
      });
    }
    navMobileHome.addEventListener("click", function() {
      gotoPage(navMobileHome.innerHTML.toUpperCase());
    });
    navDesktopHome.addEventListener("click", function() {
      gotoPage(navDesktopHome.innerHTML.toUpperCase());
    });

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
