let lastScrollTop = 0;

$(window).scroll(function() {
    let currentScrollTop = $(this).scrollTop();
    let windowHeight = $(window).height();

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
                squirrels[i].classList.add('fade-in');
            }
        }
    }

    // Check each element with the 'fade-in' class
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = top_of_element + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        // If the element is within the viewport and doesn't already have the 'http_card' class, add it
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            if (!$(this).hasClass('http_card')) {
                $(this).addClass('http_card');
            }
        } else {
            // If the element is out of the viewport, remove the 'http_card' class
            $(this).removeClass('http_card');
        }
    });

    // Update last scroll position
    lastScrollTop = currentScrollTop;
});


/** SIMPLER VERSION FOR REFERENCE */

// $(window).scroll(function() {
//     //set 3 initially viewed squirrels to not fade in
//     //otherwise, add fade-in class
//     let squirrels = document.getElementsByClassName('squirrel');
//     for ( let i = 0; i < squirrels.length; i++ ) {
//         if ((squirrels[i] !== squirrels[0]) && (squirrels[i] !== squirrels[1]) && (squirrels[i] !== squirrels[2])) {
//             squirrels[i].classList.add('fade-in')
//         }
//     }

//     //fade-in class adds another class based on scrolling, http_card, which handles the animation in css
//     $('.fade-in').each(function() {
//         var top_of_element = $(this).offset().top;
//         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//         var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//         var top_of_screen = $(window).scrollTop();

//         if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('http_card')) {
//             $(this).addClass('http_card');
//         }
//     });
// });