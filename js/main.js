
$(document).ready(function(){
  setInterval(updatePro, 1000);
  setDeads();
});
var tick = 0;



function setDeads(){
  var now = new Date();
  var hours = parseInt(now.getHours());
  var mins = parseInt(now.getMinutes());
  var secs = now.getSeconds();
  var deadToday = hours * 42 + Math.round((mins/60 )*42);
  $("#drown").text(deadToday);
}

function updatePro(){
  $("#timer").text(87 - tick + "s");
  $("#pbar").css('width', (100 * (tick/87) + '%'));
  if(tick == 87){
    tick = 0;
    setDeads();
  }else{
    tick += 1;
  }
};


$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});





(function($) {
    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();
        var settings = $.extend({
            speed        : 0.15
        }, options);

        return this.each( function() {

        	var $this = $(this);

        	$(document).scroll(function(){
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
        	});
        });
    }
}(jQuery));

$('.bg').parallax({
	speed :	0.25
});
