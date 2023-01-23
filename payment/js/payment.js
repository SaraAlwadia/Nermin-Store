$(document).ready(function() {

    // Master Card
    $("#master-img").click(function() {
        $("#visa-img").removeClass("active-card");
        $("#maestro-img").removeClass("active-card");
        $("#credit-card-form").removeClass("active-form");
        $("#maestro-card-form").removeClass("active-form");
        $("#credit-card-form").fadeOut("slow");
        $("#maestro-card-form").fadeOut("slow");
        $("#master-img").addClass("active-card");
        $("#master-card-form").addClass("active-form");
        $("#master-card-form").fadeIn("slow");
    });


    // Maestro Card
    $("#maestro-img").click(function() {
        $("#visa-img").removeClass("active-card");
        $("#master-img").removeClass("active-card");
        $("#credit-card-form").removeClass("active-form");
        $("#master-card-form").removeClass("active-form");
        $("#credit-card-form").fadeOut("slow");
        $("#master-card-form").fadeOut("slow");
        $("#maestro-img").addClass("active-card");
        $("#maestro-card-form").addClass("active-form");
        $("#maestro-card-form").fadeIn("slow");
    });

    // Visa Card 
    $("#visa-img").click(function() {
        $("#master-img").removeClass("active-card");
        $("#maestro-img").removeClass("active-card");
        $("#master-card-form").removeClass("active-form");
        $("#maestro-card-form").removeClass("active-form");
        $("#master-card-form").fadeOut("slow");
        $("#maestro-card-form").fadeOut("slow");
        $("#visa-img").addClass("active-card");
        $("#credit-card-form").addClass("active-form");
        $("#credit-card-form").fadeIn("slow");
    });

});