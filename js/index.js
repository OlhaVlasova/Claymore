document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("burger").addEventListener("click", function() {
        
        document.getElementById("header").classList.toggle("open");
        document.querySelector("body").classList.toggle("noScroll");
       
    });

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;
    var yDown = null;
     
    function getTouches(evt) {
        return evt.touches
    }
     
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };
     
    function handleTouchMove(evt) {
        // if(!document.getElementById("header").classList.contains("open")) return;
        if ( ! xDown || ! yDown ) {
            return;
        }
     
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
     
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
     
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                document.getElementById("header").classList.remove("open");
                document.querySelector("body").classList.remove("noScroll");
            }  else {
                document.getElementById("header").classList.add("open");
                document.querySelector("body").classList.add("noScroll");
            }         
        }
        xDown = null;
        yDown = null;
    }
    
});
