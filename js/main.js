// Menu altera de cor conforme o scroll é ativado

var windowWidth = window.innerWidth;

if (windowWidth > 10) {
  console.log('Chegoooou');
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});