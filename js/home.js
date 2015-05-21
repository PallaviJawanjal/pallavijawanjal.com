
        
        $(document).ready(function () {  
	
	//check safari 7
	 var browser=get_browser_info();
	 if(browser.name=="Safari" && browser.version==7){
	    $("#svgLayer_1").addClass('svgPJheight');
	    $("#svgLayer_2").addClass('svgheaderheight');
	    $("#svgLayer_3").addClass('svgheaderheight');
	 }
	 
	    $("#svgLayer_1").css('opacity','1');
	    $("#svgLayer_2").css('opacity','1');
	    $("#svgLayer_3").css('opacity','1');
	    
            AnimatePath('.st1', "0s", 164.466796875, "0.93s");
            AnimatePath('.st2', "0.5s", 220.38201904296875, "0.98s");
            AnimatePath('.st3', "1.6s", 440.2571716308594, "1s");
            AnimatePath('.st4', "2.6s", 742.9185180664062, "1s");
	    AnimatePath('.st5',"3.6s",150,"1s");
	    AnimatePath('.st6',"3.6s", 150, "1s");
	    $("#work").delay(4500).fadeIn("fast" , function() {
							$("#bodycontentWrapper").animate({opacity: 1},300,"easeInSine");
							$('#realflowModal .modal-body').append($('<iframe />', {
									frameborder:"0",
									allowfulscreen:"",
									src: 'https://www.youtube.com/embed/F41v3ckxQgM?feature=oembed',
									class: 'youtube'
								    }));
							});
	    $("#aboutMe").delay(4500).fadeIn("slow");
	    $("#contact").delay(4500).fadeIn("slow"); 
	     $("#aboutMe").addClass('bcgme').delay(8000);
	     
	     // Run our swapImages() function every 5secs
	    setInterval('swapImagesRenal("#renal")', 5000);
	    setInterval('swapImagesRenal("#sentibuzz")', 4500);
	    setInterval('swapImagesRenal("#realflow")', 4500);
	    
	    //for page scroll
	    $('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
		    scrollTop: $($anchor.attr('href')).offset().top 
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	    });
	    
	    //Click event to scroll to top
	    $('.scrollToTop').click(function(){
		    $('body, html').animate({scrollTop : 0},800);
		    return false;
	    });
	    //Add the youtube video
	     
	     
        });
	
	$('.prjEntry').each(function(){
		showSlide($(this));
		});

        function AnimatePath(selector, delay, defaultPathLength, duration) {
            var path = document.querySelector(selector);
	     if (skipAnimation(path))
		return;
	    
	    var length= undefined;
	    try {
		 length = path.getTotalLength();
	        } catch(e) {}
           
	    if (isNaN(length)) {
                length = defaultPathLength;
            }
            // Clear any previous transition
            path.style.transition = path.style.WebkitTransition = 'none';

            // Set up the starting positions
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;

            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + duration + ' linear';
            path.style.transitionDelay = path.style.WebkittransitionDelay = delay;

            // Go!
            path.style.strokeDashoffset = '0';
        }
	
	function AnimateLine(selector) {
	    var path = document.querySelector(selector);
            var length = path.getTotalLength();
        }
	
	function skipAnimation(path) {
	    var rectType = path.getBoundingClientRect();
	    var isChrome = !!window.chrome;
	    var isOpera = window.opera;
	    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            return (rectType == "[object ClientRect]") && !(isChrome || isOpera || isSafari) ;
	}
	
	//slide down
	function showSlide(prjEntry){
	    var title = $('.prjtitle', prjEntry);
	    title.hide();
	    
	    prjEntry.hoverIntent(function(){
		title.slideDown(1000, "easeOutBounce");
	      },function(){
		title.slideUp(700, "easeOutSine");
	      });  
	}
	//check safari 7
	function get_browser_info(){
	    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
	    if(/trident/i.test(M[1])){
		tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
		return {name:'IE ',version:(tem[1]||'')};
		}   
	    if(M[1]==='Chrome'){
		tem=ua.match(/\bOPR\/(\d+)/)
		if(tem!=null)   {return {name:'Opera', version:tem[1]};}
		}   
	    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
	    return {
	      name: M[0],
	      version: M[1]
	    };
	 }

function swapImagesRenal(id){
  var active = $(id + ' .active');
  var next = (active.next().length > 0) ? active.next() : $(id + ' img:first');
  active.fadeOut("slow", function(){
    active.removeClass('active');
    next.fadeIn().addClass('active');
  });
}
