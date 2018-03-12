document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  var rootEl = document.documentElement;
  var navbarEl = document.getElementById('navbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var navbarOpen = false;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
      var $target = document.getElementById('main')
      $target.classList.add('blur');
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
      var $target = document.getElementById('main')
      $target.classList.remove('blur');
    }
  });
});

// var main = document.querySelector('#main');
// var statusElem = document.querySelector('#status');
// var progressElem = document.querySelector('progress');
// var supportsProgress = progressElem && progressElem.toString().indexOf('Unknown') === -1;
// var loadedImageCount, imageCount;

// var imgLoad = imagesLoaded(main);
// imgLoad.on('progress', onProgress);
// imgLoad.on( 'always', onAlways );
// imageCount = imgLoad.images.length;
// updateProgress( 0 );

// console.log(imageCount);

// function updateProgress(value) {
//   if (supportsProgress) {
//     progressElem.setAttribute('value', value);
//   } else {
   
//   }
// }

// function onProgress(imgLoad, image) {
//   var result = image.isLoaded ? 'loaded' : 'broken';
//   console.log( 'image is ' + result + ' for ' + image.img.src );
// }

// function onAlways() {
//   statusElem.style.opacity = 0;
// }