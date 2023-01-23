
$(document).ready(function() {

    // Delete item from cart
    $('.delete-btn').on('click', function() {
        $(this).parent().parent().parent().remove();
    });

});