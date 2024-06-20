const commissionSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let commissionSliderItem = document.querySelector('.commission-slider'); 
		if (commissionSliderItem) {
			const commissionSlider = new Swiper('.commission-slider', {
				// Optional parameters
				direction: 'horizontal',
				loop: false,
				allowThresholdMove: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				spaceBetween: 7,
				a11y: {
                    enabled: true,
					slideLabelMessage:"Slide {{index}} of {{slidesLength}}",
                    slideRole: null, // Custom role for slide
                },			
				
			});
		}
	});
}
export default commissionSlider
