$( ".topmenu ul" ).addClass('utama');
$( ".topmenu ul > li" ).addClass('prime');
$( ".topmenu ul > li > ul" ).addClass('sub');
$( ".topmenu ul > li > ul" ).removeClass('utama');

$( ".utama" ).appendTo( ".menu__wrap" );

var b = document.querySelector(".utama"); 
b.setAttribute("class", "menu__level");
b.setAttribute("aria-label", "All");
b.setAttribute("data-menu", "main");
b.setAttribute("role", "menu");
b.setAttribute("tabindex", "-1");

$('.parent a').each( function( index ) {
    
   $(this).addClass('dodol');
});

$("li .prime a").removeClass();

$('.sub').attr('aria-label', function() {
    return $(this).prev('.dodol').text();
});




$(".sub").each( function( index ) {
    $(this).attr("data-menu", "submenu-" + index);
	$(this).attr("id", "submenu-" + index);
	$(this).attr("class", "menu__level");
});
