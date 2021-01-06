$(document).ready(function() {

	$('.link-tab').click(function(event) {
		$('.link-tab,.tab').toggleClass('tabactive');
	});
});

$(document).ready(function() {

	$('.burger__menu').click(function(event) {
		$('.burger__menu,.header__menu').toggleClass('headeractive');
	});
});

$(document).ready(function() {
	$('.tabs__triggers_item').click(function(e) {
		e.preventDefault();

		$('.tabs__triggers_item').removeClass('tabs__triggers_item--active');
		$('.tabs__content_item').removeClass('tabs__content_item--active');

		$(this).addClass('tabs__triggers_item--active');
		$($(this).attr('href')).addClass('tabs__content_item--active');
	});

	$('.tabs__triggers_item:first').click();
});