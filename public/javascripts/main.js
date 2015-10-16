window.onresize = function() {
  var stripe = document.getElementById('stripe')
      stripe.style.width = window.innerWidth+"px"
      var winHalfHeight = (window.innerHeight/2) - 225
      stripe.style.top = winHalfHeight+"px"

      initialPos()
      switcher(iconsArray,iconsArray)
      
      background.style.width = window.innerWidth+"px"
      background.style.height = window.innerHeight+"px"
};

var stripe = document.getElementById('stripe')
    stripe.style.width = window.innerWidth+"px"
    var winHalfHeight = (window.innerHeight/2) - 225
    stripe.style.top = winHalfHeight+"px"

var background = document.getElementById('backgroundDiv')
    background.style.width = window.innerWidth+"px"
    background.style.height = window.innerHeight+"px"

var showing = "homeWindow"

var initialPos = function () {
  homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
  meWindow.style.right = offset2 - meWindow.clientWidth+"px"
  checkWindow.style.right = offset3 - checkWindow.clientWidth+"px"
  wordexWindow.style.right = offset4 - wordexWindow.clientWidth+"px"
  typoWindow.style.right = offset5 - typoWindow.clientWidth+"px"
  resumeWindow.style.right = offset6 - resumeWindow.clientWidth+"px"
}

var hideChildren = function () {
  homeWindow.children[1].children[0].style.opacity = 0;
  meWindow.children[1].children[0].style.opacity = 0;
  checkWindow.children[1].children[0].style.opacity = 0;
  wordexWindow.children[1].children[0].style.opacity = 0;
  typoWindow.children[1].children[0].style.opacity = 0;
  resumeWindow.children[1].children[0].style.opacity = 0;
}

var fade = function (elem,visibility) {
  var width = window.innerWidth
  var divWidth = 9000
  var slideDistance = 565 - width
  console.log(elem.style.width);

  if(visibility == "fadeIn"){
    elem.style.right = width - 1500+"px"
    var trans = slideDistance+"px"
  } else {
    elem.style.right = 720 - width+"px"
    var trans = slideDistance + (width - 565)+"px"
  }
}

var home = document.getElementById('home'),
    check = document.getElementById('check'),
    wordex = document.getElementById('wordex'),
    typo = document.getElementById('typo'),
    me = document.getElementById('me'),
    resume = document.getElementById('resume'),
    row = document.getElementById('mainRow'),
    checkWindow = document.getElementById('checkWindow'),
    wordexWindow = document.getElementById('wordexWindow'),
    homeWindow = document.getElementById('homeWindow'),
    typoWindow = document.getElementById('typoWindow'),
    meWindow = document.getElementById('meWindow')
    resumeWindow = document.getElementById('resumeWindow')

    bodyBackground = document.body

var offset1 = 20,
    offset2 = 39,
    offset3 = 58,
    offset4 = 77,
    offset5 = 96,
    offset6 = 115

    bodyBackground.style.backgroundColor = "#BF4728"

initialPos()

setTimeout(function () {
  homeWindow.style.right = 0+"px"
  setTimeout(function () {
    homeWindow.children[1].children[0].style.opacity = 1;
  },1000)
  bodyBackground.style.backgroundColor = "#BF4728"
},500)

var iconsArray = [
    'sql',
    'postgres',
    'mongo',
    'atom',
    'chrome',
    'css3',
    'html5',
    'gulp',
    'jade',
    'js',
    'angular',
    'node',
    'npm'
  ]

var turnOffAll = function (type) {
  if(showing != type){
  homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
    homeWindow.children[1].children[0].style.opacity = 0;
  meWindow.style.right = offset2 - meWindow.clientWidth+"px"
    meWindow.children[1].children[0].style.opacity = 0;
  checkWindow.style.right = offset3 - checkWindow.clientWidth+"px"
    checkWindow.children[1].children[0].style.opacity = 0;
  wordexWindow.style.right = offset4 - wordexWindow.clientWidth+"px"
    wordexWindow.children[1].children[0].style.opacity = 0;
  typoWindow.style.right = offset5 - typoWindow.clientWidth+"px"
    typoWindow.children[1].children[0].style.opacity = 0;
  resumeWindow.style.right = offset6 - resumeWindow.clientWidth+"px"
    resumeWindow.children[1].children[0].style.opacity = 0;
  }
}

var activePage = function (type,color) {
  console.log("ahsdjksajdhka",type, showing);
  var element = document.getElementById(type)
    element.style.right = 0+"px"
    if(showing != type){
      setTimeout(function () {
        hideChildren()
        element.children[1].children[0].style.opacity = 1;
        showing = type;
      },1000)
    }

    bodyBackground.style.backgroundColor = color
}

var switcher = function (activeIcons, iconsArray) {
  for (var i = 0; i < iconsArray.length; i++) {
    var thisIcon = document.getElementById(iconsArray[i])
    thisIcon.style.opacity = 0.15
  }
  for (var i = 0; i < activeIcons.length; i++) {
    var thisIcon = document.getElementById(activeIcons[i])
    thisIcon.style.opacity = 1
  }
}

home.addEventListener('mouseenter', function () {
  turnOffAll('homeWindow')
  setTimeout(function () {
    activePage('homeWindow',"#BF4728")
    var iconTimer = setTimeout(function () {
      switcher(iconsArray,iconsArray)
    })
  }, 0)
})

me.addEventListener('mouseenter', function () {
  turnOffAll('meWindow')
  setTimeout(function () {
    activePage('meWindow',"#BF4728")
    var iconTimer = setTimeout(function () {
      switcher(iconsArray,iconsArray)
    })
  }, 0)
})

check.addEventListener('mouseenter', function () {
  turnOffAll('checkWindow')
  setTimeout(function () {
    activePage('checkWindow',"#A773A7")
    var iconTimer = setTimeout(function () {
      var activeIcons = ['mongo','chrome','css3','html5','gulp','jade','js','angular','node']
      switcher(activeIcons,iconsArray)
    })
  }, 0)
})

wordex.addEventListener('mouseenter', function () {
  turnOffAll('wordexWindow')
  setTimeout(function () {
    activePage('wordexWindow',"#67A4BF")
    var iconTimer = setTimeout(function () {
      var activeIcons = ['mongo','css3','html5','jade','js','node']
      switcher(activeIcons,iconsArray)
    })
  }, 0)
})

typo.addEventListener('mouseenter', function () {
  turnOffAll('typoWindow')
  setTimeout(function () {
    activePage('typoWindow',"#7EAE9F")
    var iconTimer = setTimeout(function () {
      var activeIcons = ['mongo','css3','html5','jade','js','node']
      switcher(activeIcons,iconsArray)
    })
  }, 0)
})

resume.addEventListener('mouseenter', function () {
  turnOffAll('resumeWindow')
  setTimeout(function () {
    activePage('resumeWindow',"#666677")
    var iconTimer = setTimeout(function () {
      switcher(iconsArray,iconsArray)
    })
  }, 0)
})
