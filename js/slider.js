	$('.slider__cards').slick({
		arrows: true,
		dots: true,
		infinite: false,
		initialSlide: 0,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		waitForAnimate: false,
		speed: 700,
		responsive: [{
		breakpoint: 1100,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			centerMode: false,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		}
	}]

	})