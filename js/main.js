// Menu altera de cor conforme o scroll é ativado
var windowWidth = window.innerWidth;

if (windowWidth > 10) {
	$(window).on('scroll', _.debounce(function () {
		var $nav = $('nav'),
			navHeight = $nav.outerHeight(),
			windowTop = $(this).scrollTop();

		if (windowTop > navHeight) {
			$nav.addClass('alterar-menu');
		} else {
			$nav.removeClass('alterar-menu');
		}
	}, 10));
};


// Configurações para o slide de blocos
$('.slide').slick({
  dots: true,
  infinite: false,
	speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
  infinite: false,
      }
    }
  ]
});