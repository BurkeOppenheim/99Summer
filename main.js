 // nav Effect
 $(window).on("scroll", function() {
     if ($(window).scrollTop()) {
         $('nav').addClass('black');
     } else {
         $('nav').removeClass('black');
     }
 });
 // Logo Fade
 $(window).scroll(function() {
     $(".logo").css("opacity", 1 - $(window).scrollTop() / 250);
 });
 // Smooth Scrolling

 $('.scroll-link').on('click', e => {
     e.preventDefault();

     const id = $(e.target).attr('href');
     $('html, body').animate({
         scrollTop: $(id).offset().top - 100
     }, 'slow')
 });
 // scoll top button
 jQuery(document).ready(function() {

     var btn = $('#button');

     $(window).scroll(function() {
         if ($(window).scrollTop() > 100) {
             btn.addClass('show');
         } else {
             btn.removeClass('show');
         }
     });

     btn.on('click', function(e) {
         e.preventDefault();
         $('html, body').animate({
             scrollTop: 0
         }, '100');
     });

 });
 // stack
 AmCharts.makeChart("chartdiv", {
     "hideCredits": true,
     "type": "serial",
     "categoryField": "category",
     "columnSpacing": 0,
     "columnWidth": 0.72,
     "rotate": true,
     "angle": 30,
     "autoMargins": false,
     "depth3D": 30,
     "colors": [
         "#284476",
         "#de7e28",
         "#F0FFFF",
         "#0D8ECF",
         "#2A0CD0",
         "#CD0D74",
         "#CC0000",
         "#00CC00",
         "#0000CC",
         "#DDDDDD",
         "#999999",
         "#333333",
         "#990000"
     ],
     "startDuration": 1,
     "prefixesOfBigNumbers": [],
     "prefixesOfSmallNumbers": [],
     "categoryAxis": {
         "dateFormats": [],
         "gridPosition": "hidden",
         "axisThickness": 0,
         "fontSize": 0,
         "gridCount": 0,
         "gridThickness": 0,
         "tickLength": 0,
         "titleBold": false,
         "labelsEnabled": false,

     },
     "trendLines": [],
     "graphs": [{
             "balloonText": "[[title]] | [[category]]",
             "fillAlphas": 1,
             "id": "AmGraph-1",
             "title": "LEASED",
             "type": "column",
             "valueField": "LEASED"
         },
         {
             "balloonText": "[[title]] | [[category]]",
             "fillAlphas": 1,
             "id": "AmGraph-2",
             "title": "AVAILABLE",
             "type": "column",
             "valueField": "AVAILABLE"

         }
     ],

     "valueAxes": [{
         "axisFrequency": 0,
         "axisTitleOffset": 0,
         "position": "top",
         "stackType": "regular",

     }],
     "allLabels": [],
     "balloon": {
         "fixedPosition": false
     },
     "legend": {
         "enabled": true,
         "align": "center",
         "bottom": 0,

         "rollOverGraphAlpha": 0,
         "switchable": false,
         "tabIndex": 0,
         "textClickEnabled": false,
         "useGraphSettings": false,
         "valueAlign": "left"
     },
     "titles": [],
     "dataProvider": [{
             "category": "FLOOR 20",
             "AVAILABLE": "0",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 19",
             "AVAILABLE": "0",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 18",
             "AVAILABLE": "0",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 17",
             "AVAILABLE": "2",
             "LEASED": "3"
         },
         {
             "category": "FLOOR 16",
             "AVAILABLE": "4",
             "LEASED": "1"
         },
         {
             "category": "FLOOR 15",
             "AVAILABLE": "5",
             "LEASED": "0"
         },
         {
             "category": "FLOOR 14",
             "AVAILABLE": "0",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 13",
             "AVAILABLE": "0",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 12",
             "AVAILABLE": "0",
             "LEASED": "6"
         },
         {
             "category": "FLOOR 11",
             "AVAILABLE": "0",
             "LEASED": "6"
         },
         {
             "category": "FLOOR 10",
             "AVAILABLE": "0",
             "LEASED": "6"
         },
         {
             "category": "FLOOR 9",
             "AVAILABLE": "0",
             "LEASED": "6"
         },
         {
             "category": "FLOOR 8",
             "AVAILABLE": "1",
             "LEASED": "5"
         },
         {
             "category": "FLOOR 7",
             "AVAILABLE": "6",
             "LEASED": "0"
         },
         {
             "category": "FLOOR 6",
             "AVAILABLE": "0",
             "LEASED": "6"
         },
         {
             "category": "FLOOR 5",
             "AVAILABLE": "0",
             "LEASED": "7"
         },
         {
             "category": "FLOOR 4",
             "AVAILABLE": "0",
             "LEASED": "7"
         },
         {
             "category": "FLOOR 3",
             "AVAILABLE": "0",
             "LEASED": "7"
         },
         {
             "category": "FLOOR 2",
             "AVAILABLE": "0",
             "LEASED": "7"
         },
         {
             "category": "FLOOR 1",
             "AVAILABLE": "1",
             "LEASED": "6"
         }
     ]
 });

