/*global $, alert, console, window*/

$(function () {

    'use strict';
    
    // Adjust header height
    
    $(".header").height($(window).height());
 
    // resize the header height the intro content to be in the center
    
    $(window).resize(function () {
        $(".header").height($(window).height());
    });

    // view the links
    
    $(".header .overlay .navbar .menu ul").hide();
    
    $(".header .overlay .navbar .menu i").click(function(){
        $(".header .overlay .navbar .menu ul").toggle();
    })
    
    // scroll to services
    
    $(".header .overlay .arrow").click(function() {
       $("body,html").animate({
           scrollTop: $("#services").offset().top
       },1000); 
    });
    
    //show the hidden items from work
    
    $(".show-more").click(function() {
        
       $(".our-work .items-box .hidden").fadeIn(1000);
       $(".show-more").css("display","none");
    });

    // check testimonials
    
    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");
        
        
    function check() {
        
        if ($(".client:first").hasClass("active")) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($(".client:last").hasClass("active")) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
        
    }
    
    check();
    
    $(".testim i").click(function() {
        
        if ($(this).hasClass("fa-chevron-right")) {
            
           $(".testim .active").fadeOut(100, function() {
               
               $(this).removeClass("active").next(".client").addClass("active").fadeIn();
               
               check();
               
           });
            
        } else {
            
            $(".testim .active").fadeOut(100, function() {
               
               $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
               
               check();
               
           });
             
        }
        
    });
    
    // hover our team image and bolts

    $(".our-team .team .person").hover(function() {
        var dataVal = $(this).attr("data-val");
        $(".our-team .bolts div").eq(dataVal).toggleClass("active");
        
    });
    
    // hire us
    
    $(".header .hire").click(function() {
       $("body,html").animate({
           scrollTop: $(".our-team").offset().top
       },1000); 
    });

    // trigger nice scroll
    
    $("html").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "10px",
        cursorborder: "#f7600e"
        
    });
    
    // menu list
    
    $(".header .navbar .menu ul li").click(function() {
        
        $(this).addClass("active").siblings().removeClass("active");
        
        $("body,html").animate({
            
            scrollTop : $("#"+ $(this).data("value")).offset().top
            
        }, 1000);
    });
});