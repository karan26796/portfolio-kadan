// const text = document.querySelector(".k12");
// const strText = text.textContent.length;

// console.log(strText);
// text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.k12',
//     translateY: [200,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 2500,
//     delay: function(el, i) { return i * 500; }
//     // delay: (el, i) => 300 + 50 * i
//   });

//   var animation = anime({
//     // targets:".container-home",
//     translateY:600,
//     opacity:1,
//     easing:"easeInOutSine",
//     autoPlay:false
//   })

//   window.onscroll=function(e){
//     animation.seek(window.pageYOffset*2);
//     console.log(window.pageYOffset);
//   }

  
  // animation.seek(100);

//   anime.timeline({loop: false})
//   .add({
//     targets: '.container-home',
//     translateY: [200,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 2500,
//     delay: function(el, i) { return i * 500; }
//     // delay: (el, i) => 300 + 50 * i
//   });

//   var animation = anime({
//     targets: '.play-pause-demo .el',
//     translateX: 270,
//     delay: function(el, i) { return i * 100; },
//     direction: 'alternate',
//     loop: true,
//     autoplay: false,
//     easing: 'easeInOutSine'
//   });

// let darkMode = localStorage.getItem("dark-mode");
// var element = document.body;

// const enableDarkMode = () => {
//   localStorage.setItem("dark-mode", "enabled");
//   element.classList.toggle("dark-mode");
// };

// const disableDarkMode = () => {
//   localStorage.setItem("dark-mode", "disabled");
// };

// if (darkMode === "enabled") {
//   enableDarkMode(); // set state of darkMode on page load
// }

// function myFunction() {
//   darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
//   if (darkMode === "disabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// }

// Scroll To Top
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}