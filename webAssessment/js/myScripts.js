/*---------------------------------------------------------------------
                        MOBILE DEVICES MENU SCRIPT
---------------------------------------------------------------------*/

    $("span.navBtn").click(function() {

        $("#mainMenu").slideToggle();
    });


   /* $(window).resize(function() {

        if ( $(window).width() > 768 ) {

            $("#mainMenu").removeAttr("style");
        }
    });*/
$("#mainMenu li").on("click", function(){
        
        if ( $(window).width() < 1024 ) {
        $("span.navBtn").click();
        }
    });


