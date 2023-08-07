const text = document.querySelector(".k12");
const strText = text.length;

console.log(strText);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let animation = anime({
	targets: '.k12',
	opacity: 1,
	translateY: 50, 
	rotate: {
		value: 360,
		duration: 2000,
		easing: 'easeInExpo'
	}, 
	scale: anime.stagger([0.7, 1], {from: 'center'}), 
	delay: anime.stagger(100, {start: 1000}), 
	translateX: [-10, 30]
});
