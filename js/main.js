// After document is ready
jQuery(document).ready(function(){
	
  	jQuery('.mainslider').flexslider({
  		animation: "slide"
  	});

  	jQuery('.serviceslider').flexslider({
    	animation: "slide"
  	});

  	jQuery('.teamslider').flexslider({
	    animation: "slide"
    });

    jQuery('.counter').counterUp({
      delay: 10,
      time: 1000
    });

/***************** Meanmenu ******************/
    jQuery(document).ready(function () {
      jQuery('nav').meanmenu();
  });

});


// After Window loaded completely
jQuery(window).load(function (){
	// code...
})