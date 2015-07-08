$(document).ready(function(){
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });
});



// left animation

$(window).load(function() {
	var $containers = $('.box .scroll');

	$containers.each(function() {
		var $container = $(this);
		var $images = $container.find('img');

		var containerWidth = $container.width();
		var widths = [];
		var sum = 0;

		for(var i = 0; i < $images.length; i++) {
			var w = $images.eq(i).width();
			widths.push(w);
			sum += w;
		}

		var first = true;
		var pos = 0;
		var positions = [];
		for(var i = 0; i < widths.length; i++) {
			pos += widths[i];
			if(sum - pos >= containerWidth)
				positions.push(pos);
			else if(first) {
				positions.push(pos);
				first = false;
			}
		}
		positions.push(0);
		//console.log(positions);
		$container.data('positions', positions);
		$container.data('counter', 0);
	});

	var scroll = function() {
		$containers.each(function() {
			var $container = $(this);
			var counter = $container.data('counter');
			var positions = $container.data('positions');

			$container.animate({scrollLeft: positions[counter]});
			$container.data('counter', (counter + 1)%positions.length);
		});
	};
	setInterval(scroll, 1500);
});










//detail toggle

  $(document).ready(function() {
    var $details = $('.detail');

    $('.box').click(function(event) {
    	console.log(event);
      var id = '#detail_' + $(this).attr('id');
      console.log(id);
      var $detail = $(id);
      $details.filter(':not(' + id + '):visible').slideToggle('slow').promise().done(function() {
        $detail.slideToggle('slow');
      });
    });
  });






/*
$(document).ready(function(){
     $('[name="frame01"]').click(function(){
           $("#black").toggleClass("blue");
       });
 });

*/







/*
              //left right scroll animation
              function slide(){
                $('#slide').css({'background-position':'-=1'});
              }
              setInterval(slide, 20);


              //click tilt -> shift left
              $(document).ready(function(){
                  $(".title").click(function(){
                      $("#slide1").animate({left: '-=50px'});
                  });
              });
*/


//scripts for insides
/*              $(document).ready(function(){
                  $("#left").click(function(){
                      $("#detail_left").slideToggle("slow");
                  });
              });

              $(document).ready(function(){
                  $("#center").click(function(){
                      $("#detail_center").slideToggle("slow");
                  });
              });

              $(document).ready(function(){
                  $("#frame").click(function(){
                      $("#detail_frame").slideToggle("slow");
                  });
              });*/





/*
function slide(){
  $('#slide').css({'background-position':'-=1'});
}
setInterval(slide, 20);




$('[name="frame"]').css({opacity:});



  function css_test(){
    $('#css_test').css({'background-position':'-=1'}); // 배경이미지를 왼쪽으로 1px 씩 계속 움직임
  }
  setInterval(css_test, 10);

  */


  

         

