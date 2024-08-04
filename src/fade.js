let lastScrollTop = 0;
let fadedSquirrels = new Set(); // Track faded squirrels
let isScrolling; // Track scrolling state

$(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop();
    let windowHeight = $(window).height();

    // Clear any previous timeout
    clearTimeout(isScrolling);

    // Only proceed if scrolling down
    if (currentScrollTop > lastScrollTop) {
        // Get all elements with the class 'squirrel'
        let squirrels = document.getElementsByClassName('squirrel');

        // Loop through each squirrel
        for (let i = 0; i < squirrels.length; i++) {
            // Skip the first three squirrels
            if (i > 2) {
                // Check if the element is near the bottom of the viewport
                let top_of_element = $(squirrels[i]).offset().top;
                let bottom_of_element = top_of_element + $(squirrels[i]).outerHeight();
                let bottom_of_screen = currentScrollTop + windowHeight;

                // Only add the fade-in effect if the element is near the bottom of the screen
                if (bottom_of_screen > top_of_element && currentScrollTop < bottom_of_element) {
                    // Only fade in if it hasn't already faded
                    if (!fadedSquirrels.has(squirrels[i])) {
                        squirrels[i].classList.add('fade-in');
                        fadedSquirrels.add(squirrels[i]); // Mark as faded
                    }
                }
            }
        }

        // Check each element with the 'fade-in' class to add the 'http_card' class
        $('.fade-in').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = top_of_element + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            // If the element is within the viewport and doesn't already have the 'http_card' class, add it
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                if (!$(this).hasClass('http_card')) {
                    $(this).addClass('http_card'); // Only add when scrolling down
                }
            } else {
                // If the element is out of the viewport, remove the 'http_card' class
                $(this).removeClass('http_card');
            }
        });
    }

    // Update last scroll position
    lastScrollTop = currentScrollTop;
});