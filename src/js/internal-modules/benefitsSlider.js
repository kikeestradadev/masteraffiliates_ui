const benefitsSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let benefitsSliderItem = document.querySelector('.benefits-slider'); 
		if (benefitsSliderItem) {
			const benefitsSlider = new Swiper('.benefits-slider', {
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
export default benefitsSlider
