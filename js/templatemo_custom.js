"use strict";

jQuery(document).ready(function($){

	/************** Fragment-based Page Navigation *********************/
	var pages = {
		home: { selector: ".homepage", link: ".templatemo_home" },
		tools: { selector: ".service", link: ".templatemo_page2" },
		gallery: { selector: ".portfolio", link: ".templatemo_page3" },
		about: { selector: ".contact", link: ".templatemo_page5" }
	};

	function showPage(fragment) {
		var page = pages[fragment] || pages.home;

		$("#menu-container .content").hide();
		$(page.selector).addClass("animated fadeInDown").show();
		$(".main_menu a, .responsive_menu a").removeClass("active");
		$(".main_menu a" + page.link + ", .responsive_menu a" + page.link).addClass("active");
	}

	function showFragmentPage() {
		showPage(window.location.hash.substring(1).toLowerCase());
	}

	$(window).on("hashchange", showFragmentPage);
	showFragmentPage();

	$(".main_menu a[href^='#'], .responsive_menu a[href^='#']").click(function() {
		var fragment = $(this).attr("href").substring(1).toLowerCase();
		if (window.location.hash.substring(1).toLowerCase() !== fragment) {
			window.location.hash = fragment;
		} else {
			showPage(fragment);
		}
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
var pageNames = ["home", "tools", "gallery", "about"];

$(window).load(function(){
$(document).ready(function(){				   
    $(".divs div.content").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
	$("#next").click(function(){
		var current = pageNames.indexOf(window.location.hash.substring(1).toLowerCase());
		if (current < 0) current = 0;
		var next = pageNames[(current + 1) % pageNames.length];
		window.location.hash = next;
        return false;
    });

	$("#prev").click(function(){
		var current = pageNames.indexOf(window.location.hash.substring(1).toLowerCase());
		if (current < 0) current = 0;
		var previous = pageNames[(current - 1 + pageNames.length) % pageNames.length];
		window.location.hash = previous;
        return false;
    });
});

});
