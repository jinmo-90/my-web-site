$(document).ready(function(){
    //상단 이동 버튼
    $(window).scroll(function(){
        if($(window).scrollTop() > 90) {
            $(".btn_top").fadeIn();
            $(".header_inner").addClass("scroll");
        } else if($(window).scrollTop() < 90){
            $(".btn_top").fadeOut();
            $(".header_inner").removeClass("scroll");
        }
    });
    
    $(".btn_top").on("click", function(){
        $("body, html").animate({
            scrollTop : 0
        },500);
    });
    // skill
    var box_btn = $(".skill .box_wrap .box > a");
    $(box_btn).on("click",function(){
        var box_idx = $(this).parents(".box").index()+1;
        if($(this).parents(".box").hasClass("active")){
            $(this).parents(".box").removeClass("active");
            $(this).children(".over_wrap").removeClass("active"); 
            $(this).children(".over_wrap").stop().fadeOut(500);
        } else {
            $(this).parents(".box").addClass("active");
            $(this).children(".over_wrap").addClass("active");
            $(this).children(".over_wrap").stop().fadeIn(500);
            // easy-pie-chart
           $('.skill .active .chart1').easyPieChart({
                barColor: '#ff4b00',
                trackColor: '#ccc',
                scaleColor: '#fff',
                lineCap: 'butt',
                lineWidth: 30,
                size: 200,
                animate: 1000,
                onStart: $.noop,
                onStop: $.noop
            });
            $('.skill .active .chart2').easyPieChart({
                barColor: '#2196f3',
                trackColor: '#ccc',
                scaleColor: '#fff',
                lineCap: 'butt',
                lineWidth: 30,
                size: 200,
                animate: 1000,
                onStart: $.noop,
                onStop: $.noop
            });
            $('.skill .active .chart3').easyPieChart({
                barColor: '#fbd93d',
                trackColor: '#ccc',
                scaleColor: '#fff',
                lineCap: 'butt',
                lineWidth: 30,
                size: 200,
                animate: 1000,
                onStart: $.noop,
                onStop: $.noop
            });
            $('.skill .active .chart4').easyPieChart({
                barColor: '#1169ae',
                trackColor: '#ccc',
                scaleColor: '#fff',
                lineCap: 'butt',
                lineWidth: 30,
                size: 200,
                animate: 1000,
                onStart: $.noop,
                onStop: $.noop
            });
            $('.skill .chart' + box_idx).easyPieChart();
        }
        
    });

    // Work
    //스크롤매직
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
    // animate to second
    .to(".work_slide", 1, {z: -180} )
    .to(".work_slide", 1, {x:"-20%"} )
    .to(".work_slide", 1, {z: 0} )
    // animate to third
    .to(".work_slide", 1, {z: -180, delay: 0.6} )
    .to(".work_slide", 1, {x:"-40%"} )
    .to(".work_slide", 1, {z: 0} )
    // animate to forth
    .to(".work_slide", 1, {z: -180, delay: 0.6} )
    .to(".work_slide", 1, {x:"-60%"} )
    .to(".work_slide", 1, {z: 0} )
    // animate to fifth
    .to(".work_slide", 1, {z: -180, delay: 0.6} )
    .to(".work_slide", 1, {x:"-80%"} )
    .to(".work_slide", 1, {z: 0} )

    var scene = new ScrollMagic.Scene({
                triggerElement: ".work",
                triggerHook: "onLeave",
                duration: "600%"
    })
    .setPin(".work")
    .setTween(wipeAnimation)
    //.addIndicators() 
    .addTo(controller);
   
   
});
