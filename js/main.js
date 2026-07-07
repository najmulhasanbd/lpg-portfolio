$(document).ready(function () {

    // Initialize Hero Slider (Owl Carousel 1.3.3)
    var heroSlider = $("#main-slider");

    heroSlider.owlCarousel({
        singleItem: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        navigation: false,
        pagination: true,
        autoPlay: 5000,
        stopOnHover: true,
        afterAction: function (el) {
            this.$owlItems.removeClass('active');
            this.$owlItems.eq(this.currentItem).addClass('active');
        }
    });

});