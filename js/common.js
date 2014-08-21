head.ready(function() {

	var    navItem = $('.js-nav'),
			subNav = navItem.find('.js-subnav'),
		menuButton = $('.js-show-menu'),
		menuToShow = $('.js-menu-to-show');

	subNav.hide();

	navItem.click(function(event) {
		subNav.slideToggle();
	});

	// show-hide menu on mobile
	menuButton.click(function(event) {
		$(this).toggleClass('is-active');
		menuToShow.slideToggle();
		subNav.slideUp();
	});

	// $(document).click(function(event) {
	// 	if ($(event.target).closest('.js-subnav').length == 0) {
	// 		subNav.slideUp();
	// 	};
	// });

});