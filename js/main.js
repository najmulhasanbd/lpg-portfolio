$(document).ready(function () {

    // Initialize Hero Slider (Owl Carousel 1.3.3)
    var heroSlider = $("#main-slider");
    if (heroSlider.length) {
        heroSlider.owlCarousel({
            singleItem: true,
            slideSpeed: 800,
            paginationSpeed: 800,
            navigation: false,
            pagination: true,
            autoPlay: 5000,
            stopOnHover: true,
            afterAction: function (el) {
                if (this.$owlItems) {
                    this.$owlItems.removeClass('active');
                    this.$owlItems.eq(this.currentItem).addClass('active');
                }
            }
        });
    }

    // Initialize Brand Carousel
    var brandSlider = $("#brand-slider");
    if (brandSlider.length) {
        brandSlider.owlCarousel({
            autoPlay: 2500, // Auto play every 2.5 seconds
            items : 5,
            itemsDesktop : [1199, 4],
            itemsDesktopSmall : [979, 3],
            itemsTablet: [768, 2],
            itemsMobile : [479, 1],
            pagination: false, // hide pagination dots
            navigation: false // hide nav arrows
        });
    }

    // Odometer Initialization via Intersection Observer
    const statsSection = document.querySelector('.stats-section');
    let hasAnimated = false;
    
    // Configure default odometer options
    window.odometerOptions = {
        auto: false, // Don't automatically initialize everything with class 'odometer'
        format: '(,ddd)', // Format for thousands separator
        duration: 2000 // 2 seconds animation
    };

    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true; // Ensure it only runs once
                
                // Trigger the Odometer animations
                setTimeout(function() {
                    document.getElementById('odo-1').innerHTML = 4;
                    document.getElementById('odo-2').innerHTML = 120;
                    document.getElementById('odo-3').innerHTML = 8;
                    document.getElementById('odo-4').innerHTML = 4;
                }, 200); // slight delay for smooth visual effect
            }
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
        
        observer.observe(statsSection);
    }

    // Magnific Popup Initialization for Gallery
    if ($('.image-popup').length) {
        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        });
    }

});