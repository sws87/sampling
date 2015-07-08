$(document).ready(function() {
                $('#content').click(function(evt) {
                    evt.stopPropagation();
                    var $this = $(this);
                    $this.animate({left: 0, top: 0}, 250, function() {
                        $this.zoomTo({duration:1800, targetsize:1.0});
                    });
                });
                $('.label').click(function(evt) {
                    evt.stopPropagation();
                    $(this).zoomTo({duration:1500, targetsize:0.5});
                });

            });


//zoomooz






//scroll zoom
/*
var zoom = 1;
var zoomStep = 0.1;

$(function() {

	var $document = $(document);
	var docW = $document.width();
	var docH = $document.height();
	var $body = $('body');

	var $container = $('#container');
	var containerW = $container.width();
	var containerH = $container.height();

	$container.mousewheel(function(event) {
		var $this = $(this);

		var left = parseInt($this.css('left'));
		var top = parseInt($this.css('top'));
		left = left ? left : 0;
		top = top ? top : 0;

		var x = event.pageX - left;
		var y = event.pageY - top;

		if(event.deltaY <= 0) // scrolling up
			zoom -= zoomStep;
		else
			zoom += zoomStep;
		if(zoom < 1)
			zoom = 1;
		if(zoom > 10.0)
			zoom =10.0;
		$container.css('transform-origin', x/containerW*100 + '% ' + y/containerH*100 + '%');
		$container.css('transform', 'scale(' + zoom + ')');

		return false;
	});
})

*/




//bubble
/*

$(function() {
  
    var groups = {
    ppp09: {
      text: 'aaadfdsjvlsm'
    },
    group2: {
      text: 'bbb'
    },
    group3: {
      text: 'center aligned'
    }
  };

  var $bubble = $('#bubble');
  //var $groups = $(groups.join(',')).css('opacity', 0.5);

  //for(var i = 0; i < groups.length; i++) {
  for(var id in groups) {
    //var id = groups[i];
    console.log(id);
    var group = groups[id];
    var $group = $('#' + id);
    $group.mouseenter(function() {
      console.log('in');
      var $this = $(this);
      var id = $this.attr('id').replace('#', '');
      $this.css('opacity', 1);

      var html = '<p>' + groups[id].text + '</p>';
      $bubble.html(html); // change content of the bubble
      $bubble.toggleClass('show');
    })
    .mouseout(function() {
      console.log('out');
      $(this).css('opacity', 0.5);
      $bubble.toggleClass('show');
      $bubble.html('');
    })
    .mousemove(function() {
      var offset = 10;
      $bubble.css({top: event.pageY, left: event.pageX + offset});
    });
  }
});


*/



//hover
/*
var areaIDs = [
	'ppp09',
	'ttt-002',
];

for(var i = 0; i < areaIDs.length; i++) {
	var $area = $('#' + areaIDs[i]);

	$area.hover(function(event) {
		//console.log(event);
		var box = $area[0].getBoundingClientRect();
		//var x = box.left + box.width/2;
		//var y = box.top + box.height/2;

		x = event.pageX;
		y = event.pageY;

		$('<div class="bubble">').html('Hi!').css({top: event.pageY, left: event.pageX + offset}).appendTo('body');

	}, function() {
		$('.bubble').remove();
	});
}
*/









