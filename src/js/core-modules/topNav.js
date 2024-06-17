const topNav = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const hamburger = document.querySelector('.top-nav__mobile-hamburguer');
		const menuContainer = document.querySelector('.top-nav__menu-container');
		const body = document.body;
	
		if (hamburger && menuContainer) {
			hamburger.addEventListener('click', () => {
				menuContainer.classList.toggle('active');
				body.classList.toggle('active');
				console.log('Hamburger menu toggled');
			});
		} else {
			console.error('Hamburger or menu container not found');
		}
	});
};

export default topNav;
