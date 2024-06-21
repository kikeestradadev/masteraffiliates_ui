const testimonialSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let testimonialSlider = document.querySelector('.testimonial-slider'); 
		if (testimonialSlider) {		
			const testimonialSlider = new Swiper('.testimonial-slider', { 
				// Optional parameters
				effect: "fade",
				speed: 800,
				autoHeight: true,
				fadeEffect: {
					crossFade: true
				},
				watchOverflow: true,
				pagination: {
					el: ".swiper-pagination",
					// type: "progressbar"
					clickable: true,
					// dynamicBullets: true
				},
				// Navigation arrows
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},				
				// Add init event	
				
			});
		}
	});
}
export default testimonialSlider
