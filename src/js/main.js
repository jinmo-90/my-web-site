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
    //인트로
    //호버
    $(".intro .section_list > li").each(function (i) {
        var section_idx = $(".main").find(".section").eq(i);
        // 호버
        $(this).hover(function () {
          if (!$(".intro").hasClass("open")) {
            TweenMax.to($(".intro .section_list > li").find(".deem"), 0.7, {
              opacity: 0.6,
              ease: Power3.easeOut
            });
            TweenMax.to($(".intro .section_list > li").eq(i).find(".deem"), 0.7, {
              opacity: 0,
              ease: Power3.easeOut
            });
          }
        });
         //클릭 이벤트
        $(this).on("click",function(e){
            e.preventDefault();
            $(".intro .section_list > li").removeClass("active");
            TweenMax.to($(".intro .section_list > li"), 1.5, {
                width: "20%",
                ease: Power3.easeOut
            });
            $(".main").children(".section").removeClass("open");
            $(this).addClass("active");
            TweenMax.to($(this), 1.5, {
                width: "60%",
                ease: Power3.easeOut
            });
            $(section_idx).addClass("open");
            $("body, html").animate({
                scrollTop: $(".intro").height()
            },1000);
        });
        if($(window).innerWidth() < 751) {
            $(this).on("click",function(e){
                e.preventDefault();
                $(".intro .section_list > li").removeClass("active");
                TweenMax.to($(".intro .section_list > li"), 1.5, {
                    width: "100%",
                    ease: Power3.easeOut
                });
                $(".main").children(".section").removeClass("open");
                $(this).addClass("active");
                TweenMax.to($(this), 1.5, {
                    width: "100%",
                    ease: Power3.easeOut
                });
                $(section_idx).addClass("open");
            });
        }
        $(window).on("resize", function(){    
            if($(window).innerWidth() > 751) {
                $(".intro .section_list > li").removeClass("active");             
                $(".intro .section_list > li").width("33.33%");
                $(".intro .section_list > li").on("click",function(e){
                    e.preventDefault();
                    $(".intro .section_list > li").removeClass("active");
                    TweenMax.to($(".intro .section_list > li"), 1.5, {
                        width: "20%",
                        ease: Power3.easeOut
                    });
                    $(this).addClass("active");
                    TweenMax.to($(this), 1.5, {
                        width: "60%",
                        ease: Power3.easeOut
                    });
                });
               
            } else  if($(window).innerWidth() < 751){
                $(".intro .section_list > li").removeClass("active");
                $(".intro .section_list > li").width("100%");
                $(".intro .section_list > li").on("click",function(e){
                    e.preventDefault();
                    $(".intro .section_list > li").removeClass("active");
                    TweenMax.to($(".intro .section_list > li"), 1.5, {
                        width: "100%",
                        ease: Power3.easeOut
                    });
                    $(this).addClass("active");
                    TweenMax.to($(this), 1.5, {
                        width: "100%",
                        ease: Power3.easeOut
                    });                   
                });
                
            }
        });
    });
    
    // profile
    const pTag1 = document.querySelector(".pro_tit_01")
    const pTag2 = document.querySelector(".pro_tit_02")
    const pTag3 = document.querySelector(".pro_tit_03")
    const pTag4 = document.querySelector(".pro_tit_04")

    const textArr1 = "Who am i? Who am i? Who am i? Who am i?".split(" ")
    const textArr2 = "My Career My Career My Career".split(" ")
    const textArr3 = "Web Accessibility Web Accessibility".split(" ")
    const textArr4 = "Objective Objective Objective Objective".split(" ")

    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0

    initTexts(pTag1, textArr1)
    initTexts(pTag2, textArr2)
    initTexts(pTag3, textArr3)
    initTexts(pTag4, textArr4)

    function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
    }

    function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`
        count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`

    return count
    }

    function animate() {
    count1++
    count2++
    count3++
    count4++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)
    count3 = marqueeText(count3, pTag3, -1)
    count4 = marqueeText(count4, pTag4, 1)

    window.requestAnimationFrame(animate)
    }

    function scrollHandler() {
    count1 += 5
    count2 += 5
    count3 += 5
    count4 += 5
    }

    window.addEventListener("scroll", scrollHandler)
    animate()

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
    var swiper = new Swiper(".work_slide_wrap", {
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        observer: true,
        observeParents: true,
        loop: true,
      });
   
});
