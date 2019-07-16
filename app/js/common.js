$(function() {

	// preview-slider

	$("#preview__slider").slick({
    dots: true,
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		fade: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('#preview__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
		if(nextSlide==0){
			$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});
		}

		if(nextSlide==1){
				$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});
		}

		if(nextSlide==2){
				$(".preview").css({'background-image': 'url(img/preview/preview-1.jpg)'});  
		}

	});

	// preview-slider



	// collection-slider

	$("#collections__slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
				}
			},
		]
	});

	// collection-slider



	// imagery-slider

	$("#imagery__slider").slick({
    dots: false,
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev">ПРЕДЫДУЩИЙ ОБРАЗ</button>',
		nextArrow: '<button type="button" class="slick-next">СЛЕДУЮЩИЙ ОБРАЗ</button>',
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.slider-for-imagery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-imagery',
	});

	$('.slider-nav-imagery').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		asNavFor: '.slider-for-imagery',
		// dots: true,
		centerMode: true,
		focusOnSelect: true
	});

	// imagery-slider

	// catalog-slider

	$("#catalog__slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: true,
		arrows: true,
		nextArrow: '<img class="slick-next" src="img/catalog/arrow-right.png"></img>',
		rows: 2,
		responsive: [
			{
				breakpoint: 1520,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					rows: 1,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 1,
					dots: false,
					arrows: false,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1,
					dots: false,
					arrows: false,
				}
			},
		]
	});

	// catalog-slider


	// blog-grid
	let magicGrid = new MagicGrid({
		container: ".grid-container",
		animate: true,
		gutter: 30,
		static: true,
		useMin: true
	});

	magicGrid.listen();
	// blog-grid
		
	// menu

	$('.page-header__open-menu').click(function() {
		$('.page-header__nav-wrapper').show();
		$('.overlay').show();
	});

	$('.page-header__close-menu').click(function() {
		$('.page-header__nav-wrapper').hide();
		$('.overlay').hide();
	});

	// menu

	// slip-slider

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
	});

	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.slider-for',
		// dots: true,
		centerMode: true,
		focusOnSelect: true
	});

	// slip-slider

	// perfect-slider

	$("#perfect__slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	// perfect-slider

	// popup-gallery
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'div',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
		});
	});
	// popup-gallery

});
