/**
 * Neo v1.0.0 by yokCreative
 * Copyright 2013  
 * 
 */



$(function() {
// Sidebar menu toggle
    //  Get height of all dds before hide() occurs.  Store height in heightArray, indexed based on the dd's position.

    $('.sidebar-nav li a').click(function(event) {
        $(this).next().stop().slideToggle(400);
        $('.sidebar-nav').find('a').not(this).next().slideUp(300);
    });
    
//Fix no. 3

    $('.close-panel').click(function()
    {
        $(this).parent().parent().parent().hide();
    });
    
    $('a#all_open').click(function()    
    {
	$('div.col-md-3:hidden').show();
	$('a#all_open:visible').hide();
	$('a#all_close:hidden').show();
	return false;
    });

    $('a#all_close').click(function()
    {
	$('div.col-md-3:visible').hide();
	$('a#all_close:visible').hide();
	$('a#all_open:hidden').show();
	return false;
    });
                
    $('a#all_invert').click(function()
    {
	$('div.col-md-3').children().children().next().toggle("slow");
	return false;
    });
    
    $('a#all_expand').click(function()
    {
	$('div.col-md-3').children().children().next().show("slow");
	return false;
    });
    $('a#all_collapse').click(function()
    {
	$('div.col-md-3').children().children().next().hide();
	return false;
    });
    
    $('#menu-toggle').click(function(event) {
        if($('.navbar-collapse').is(":visible")){
            $('.navbar-collapse').hide();
        }
    });
    
    $('#user-menu').click(function(event) {
        if($('.navbar-collapse').is(":hidden")){
            $('.navbar-collapse').show();
        }else if($('.navbar-collapse').is(":visible")){
            $('.navbar-collapse').hide();
        } 
    });

// Stretch Columns to Full Height
    $(".stretch-full-height").height($(document).height());
    $(".sidebar-nav").height($("#page-content-wrapper").height());
    window.onresize = function() {
        $(".stretch-full-height").height($(document).height());
        $(".sidebar-nav").height($("#page-content-wrapper").height());
    }
	
// Preloader
    $('.preloader-wrapper').fadeOut();
         	
// Rotate accordion icon
    $('.accord-collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".icon-chevron-right").removeClass("icon-chevron-right").addClass("icon-chevron-down");
    }).on('hidden.bs.collapse',
            function() {
                $(this).parent().find(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-right");
            });
// Close panels
    $('.icon-chevron-down').click(function() {
        $(this).parent().parent().parent().next().stop().slideToggle(500);
 

    });
// Show first tab
    $(function() {
        $('.nav-tabs a:first').tab('show')
    })


// Show first pill
    $(function() {
        $('.nav-pills .active a').tab('show')
    })

});


/* Initializing some of the plugins  */

// Easy Pie Charts
var initPieChart = function() {
    $('.percentage').easyPieChart({
        animate: 1000
    });
    $('.percentage-light').easyPieChart({
        trackColor: '#a64077',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: 15,
        animate: 1000
    });

    $('.updateEasyPieChart').on('click', function(e) {
        e.preventDefault();
        $('.percentage, .percentage-light').each(function() {
            var newValue = Math.round(100 * Math.random());
            $(this).data('easyPieChart').update(newValue);
            $('span', this).text(newValue);
        });
    });
};


// Counters
$({countNum: $('#new-users').text()}).animate({countNum: 1184}, {
    duration: 3000,
    easing: 'linear',
    step: function() {
        $('#new-users').text(Math.floor(this.countNum));
    },
});
$({countNum: $('#new-comments').text()}).animate({countNum: 581}, {
    duration: 3500,
    easing: 'linear',
    step: function() {
        $('#new-comments').text(Math.floor(this.countNum));
    },
});
$({countNum: $('#new-subscribers').text()}).animate({countNum: 392}, {
    duration: 4000,
    easing: 'linear',
    step: function() {
        $('#new-subscribers').text(Math.floor(this.countNum));
    },
});
$({countNum: $('#new-orders').text()}).animate({countNum: 124}, {
    duration: 4500,
    easing: 'linear',
    step: function() {
        $('#new-orders').text(Math.floor(this.countNum));
    },
});



 