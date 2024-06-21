const newsSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let newsSliderItem = document.querySelector('.news-slider'); 
		if (newsSliderItem) {
			const newsSlider = new Swiper('.news-slider', {
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
export default newsSlider
