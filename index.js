$(document).ready(function() {
	var executed = false;
	var waypoint = new Waypoint({
	  element: document.getElementById('count'),
	  handler: function() {
	  	if (!executed) {
	  		executed = true;
		    $('.count').each(function () {
			  var $this = $(this);
			  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			    duration: 1000,
			    easing: 'swing',
			    step: function () {
			      $this.text(Math.ceil(this.Counter));
			    }
			  });
			});
	  	}
	  },
	  offset: '50%'
	})
});