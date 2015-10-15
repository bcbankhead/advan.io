var stripe = document.getElementById('stripe')
    stripe.style.width = window.innerWidth+"px"
    var winHalfHeight = (window.innerHeight/2) - 225
    stripe.style.top = winHalfHeight+"px"

var background = document.getElementById('backgroundDiv')
    background.style.width = window.innerWidth+"px"
    background.style.height = window.innerHeight+"px"


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

  // elem.style["transform"] = "translate("+trans+",0)"
  // elem.style["webkit-transform"] = "translate("+trans+",0)"
  // elem.style["o-transform"] = "translate("+trans+",0)"
  // elem.style["moz-transform"] = "translate("+trans+",0)"
}

var home = document.getElementById('home'),
    check = document.getElementById('check'),
    wordex = document.getElementById('wordex'),
    resume = document.getElementById('resume'),
    row = document.getElementById('mainRow'),
    checkWindow = document.getElementById('checkWindow'),
    wordexWindow = document.getElementById('wordexWindow'),
    homeWindow = document.getElementById('homeWindow')
    bodyBackground = document.body

var offset1 = 25,
    offset2 = 50,
    offset3 = 75,
    offset4 = 100
    bodyBackground.style.backgroundColor = "#BF4728"
    homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
    checkWindow.style.right = offset2 - checkWindow.clientWidth+"px"
    wordexWindow.style.right = offset3 - wordexWindow.clientWidth+"px"

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
setTimeout(function () {
  homeWindow.style.right = 0+"px"
  homeWindow.children[1].style.opacity = 1;
  bodyBackground.style.backgroundColor = "#BF4728"
},500)
    window.onresize = function() {
      var stripe = document.getElementById('stripe')
          stripe.style.width = window.innerWidth+"px"
          var winHalfHeight = (window.innerHeight/2) - 225
          stripe.style.top = winHalfHeight+"px"

          homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
          checkWindow.style.right = offset2 - checkWindow.clientWidth+"px"
          wordexWindow.style.right = offset3 - wordexWindow.clientWidth+"px"

          background.style.width = window.innerWidth+"px"
          background.style.height = window.innerHeight+"px"
    };


// var eventNames = ['check', 'wordex'];
// var checkIcons = [ 'mongo','chrome','css3','html5','gulp','jade','js','angular','node']
// var wordIcons = [ 'mongo','css3','html5','jade','js','node']
//
// for (var i = 0; i < eventNames.length; i++) {
//   addEvents(eventNames[i],checkIcons,iconsArray)
// }

check.addEventListener('mouseenter', function () {

  homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
    homeWindow.children[1].style.opacity = 0;
  checkWindow.style.right = offset2 - checkWindow.clientWidth+"px"
    checkWindow.children[1].style.opacity = 0;
  wordexWindow.style.right = offset3 - wordexWindow.clientWidth+"px"
    wordexWindow.children[1].style.opacity = 0;

  setTimeout(function () {
    bodyBackground.style.backgroundColor = "#A773A7"
    checkWindow.style.right = 0+"px"
    checkWindow.children[1].style.opacity = 1;
    var iconTimer = setTimeout(function () {
      var activeIcons = [
          'mongo',
          'chrome',
          'css3',
          'html5',
          'gulp',
          'jade',
          'js',
          'angular',
          'node'
        ]
        for (var i = 0; i < iconsArray.length; i++) {
          var thisIcon = document.getElementById(iconsArray[i])
          thisIcon.style.opacity = 0.15
        }
        for (var i = 0; i < activeIcons.length; i++) {
          var thisIcon = document.getElementById(activeIcons[i])
          thisIcon.style.opacity = 1
        }
    })
  }, 0)
})

wordex.addEventListener('mouseenter', function () {

  homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
    homeWindow.children[1].style.opacity = 0;
  checkWindow.style.right = offset2 - checkWindow.clientWidth+"px"
    checkWindow.children[1].style.opacity = 0;
  wordexWindow.style.right = offset3 - wordexWindow.clientWidth+"px"
    wordexWindow.children[1].style.opacity = 0;

  setTimeout(function () {
    wordexWindow.style.right = 0+"px"
    wordexWindow.children[1].style.opacity = 1;
    bodyBackground.style.backgroundColor = "#67A4BF"
    var iconTimer = setTimeout(function () {
      var activeIcons = [
          'mongo',
          'css3',
          'html5',
          'jade',
          'js',
          'node'
        ]
        for (var i = 0; i < iconsArray.length; i++) {
          var thisIcon = document.getElementById(iconsArray[i])
          thisIcon.style.opacity = 0.15
        }
        for (var i = 0; i < activeIcons.length; i++) {
          var thisIcon = document.getElementById(activeIcons[i])
          thisIcon.style.opacity = 1
        }
    })
  }, 0)
})

home.addEventListener('mouseenter', function () {
  homeWindow.style.right = offset1 - checkWindow.clientWidth+"px"
    homeWindow.children[1].style.opacity = 0;
  checkWindow.style.right = offset2 - checkWindow.clientWidth+"px"
    checkWindow.children[1].style.opacity = 0;
  wordexWindow.style.right = offset3 - wordexWindow.clientWidth+"px"
    wordexWindow.children[1].style.opacity = 0;

  setTimeout(function () {
    homeWindow.style.right = 0+"px"
    homeWindow.children[1].style.opacity = 1;
    bodyBackground.style.backgroundColor = "#BF4728"
    var iconTimer = setTimeout(function () {
        for (var i = 0; i < iconsArray.length; i++) {
          var thisIcon = document.getElementById(iconsArray[i])
          thisIcon.style.opacity = 0.15
        }
        for (var i = 0; i < iconsArray.length; i++) {
          var thisIcon = document.getElementById(iconsArray[i])
          thisIcon.style.opacity = 1
        }
    })
  }, 0)
})

//
// check.addEventListener('mouseout', function () {
//   fade(checkWindow,'fadeOut')
// })
