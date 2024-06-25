const casinoSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let casinoSliderItem = document.querySelector('.casino-slider'); 
		if (casinoSliderItem) {
			const casinoSlider = new Swiper('.casino-slider', {
				// Optional parameters
				direction: 'horizontal',
				loop: false,
				allowThresholdMove: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				spaceBetween: 10,
				a11y: {
                    enabled: true,
					slideLabelMessage:"Slide {{index}} of {{slidesLength}}",
                    slideRole: null, // Custom role for slide
                },			
				
			});
		}
	});
}
export default casinoSlider
