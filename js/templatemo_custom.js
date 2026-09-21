"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .homepage").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

	$( window ).load(function() {
	  $("#menu-container .products").hide();
	});

	$(".main_menu a.templatemo_home").addClass('active');

	$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").click(function(){
		$("#menu-container .homepage").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").click(function(){
		$("#menu-container .service").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").click(function(){
		$("#menu-container .portfolio").addClass("animated fadeInDown").show();
		$(".our-services").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").click(function(){
		$("#menu-container .contact").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		return false;
	});



	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


/*----------------- Previous Next button ---------------------- */
$(window).load(function(){
$(document).ready(function(){				   
    $(".divs div.content").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
	$("#next").click(function(){
        if ($(".divs div.content:visible").next().length != 0)
            $(".divs div.content:visible").next().addClass("animated fadeInDown").show().prev().hide() ;
        else {
            $(".divs div.content:visible").hide();
            $(".divs div.content:first").addClass("animated fadeInDown").show() ;
			
        }
        return false;
    });

	$("#prev").click(function(){
        if ($(".divs div.content:visible").prev().length != 0)
            $(".divs div.content:visible").prev().addClass("animated fadeInDown").show().next().hide();
        else {
            $(".divs div.content:visible").hide();
            $(".divs div.content:last").addClass("animated fadeInDown").show();
			
        }
        return false;
    });
});

});
