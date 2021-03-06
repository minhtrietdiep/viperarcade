/*
	Sticky menubar
*/
window.onscroll = function OnScroll() {
	var offset = 100; //height of header
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if ( scrollTop >= offset) {
		document.querySelector('nav').classList.add('stickToTop');
		document.querySelector('.show-menu').classList.add('stickToTop');
		document.querySelector('#content').classList.add('addMarginTop');

	} else {
		document.querySelector('nav').classList.remove('stickToTop');
		document.querySelector('.show-menu').classList.remove('stickToTop');
		document.querySelector('#content').classList.remove('addMarginTop');

	}
}

/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");
    
    // You could easily calculate this dynamically if you prefer
    var fromTop = 40;
    
    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0) {
		document.getElementById("show-menu").checked = false;
        var $target = $(href);
        
        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);