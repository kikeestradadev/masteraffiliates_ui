const topNav = () => {
	const 
		d = document,
		headerBtn = d.querySelector('.hamburger'),
		menu = d.querySelector('.top-nav__menu');
		headerBtn.addEventListener('click', e => {
			console.log('Hola Mundo')
			e.preventDefault();
			headerBtn.classList.toggle('is-active'),
			menu.classList.toggle('is-active');
		}); 
};

export default topNav
