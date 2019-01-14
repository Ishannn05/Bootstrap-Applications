 /*$(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });*/
$(document).ready(function(){
        $('#reserveTable').click(function(){
            $('#rModal').modal('show');
        });

        $('#signin').click(function(){
            $('#signinmodal').modal('show');
        });
    $('#myCarousel').carousel({ interval:2000 });
    $('#carouselButton').click(function(){
        if ($('#carouselButtonIcon').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButtonIcon').removeClass("fa-pause").addClass("fa-play");
        }
        else {
            $('#myCarousel').carousel('cycle');
            $('#carouselButtonIcon').removeClass("fa-play").addClass("fa-pause");
        }
    });
});   