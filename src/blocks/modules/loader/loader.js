import $ from "jquery";
global.$ = global.jQuery = $;

$(window).on("load", function(){
    $(".loader").fadeOut("slow");
});
