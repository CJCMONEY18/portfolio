$(document).ready(function() {
    $( ".me-auto .nav-item .nav-link" ).bind( "click", function() {
        var clickedItem = $( this );
        $( ".me-auto .nav-item .nav-link" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });

    //Flip card stackoverflow
    $('.flip').click(function(){ //hover  can be used
        $(this).find('.card').toggleClass('flipped');
        console.log("flipped");
    });

}); //end of document.ready