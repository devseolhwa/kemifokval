$(function () {

    skrollr.init();
    setTimeout(function(){
        svgEffect();
        upEffect();
    }, 1000);
    $(window).scroll(function(){
        svgEffect();
    });

    // pc mobile 환경체크
    let filter = "win16|win32|win64|mac";
    if(navigator.platform){
        if(0 > filter.indexOf(navigator.platform.toLowerCase())){
            //alert("Mobile");
            $("body").addClass("mobileFilter");
            $(".floating").show();
            // 안드로이드 hover 이슈로 인해 touch 추가 
            $(".itemBox").on("touchstart", function (e) {
                e.preventDefault();
                $(this).addClass("active").parents().siblings(".item ").children(".itemBox").removeClass("active");
            });
        }else{
            //alert("PC");
            // floating 스크롤후 나타나기
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $(".floating").fadeIn("slow");
                }else {
                    $(".floating").fadeOut("slow");
                }
            });
        }
    }

    function svgEffect(){
        $(".svgEffect").each(function(){
            let $this = $(this);
            let start_pos = "top bottom";
            let end_pos =  "bottom top";

            ScrollTrigger.create({
                trigger: $this,
                start: start_pos, 
                end: end_pos,
                onEnter: function(){
                    $this.addClass("active");
                },onLeave: function(){
                    $this.removeClass("active");
                },onEnterBack: function(){
                    $this.addClass("active");
                },onLeaveBack: function(){
                    $this.removeClass("active");
                }
            });
        });
    }

    function upEffect(){
        $(".upEffect").each(function(){
            let $this = $(this);
            let start_pos = "top bottom";
            let end_pos =  "bottom top";

            ScrollTrigger.create({
                trigger: $this,
                start: start_pos, 
                end: end_pos,
                onEnter: function(){
                    $this.addClass("active");
                },onLeave: function(){
                    $this.removeClass("active");
                },onEnterBack: function(){
                    $this.addClass("active");
                },onLeaveBack: function(){
                    $this.removeClass("active");
                }
            });
        });
    }

    // 상품전체보기
    $("#btnTable").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");

        let openCheck = $(this).is(".active");
        if (openCheck) {
            $(this).parents().next(".tableData").addClass("active");
            $(this).parents().next(".tableData").slideDown(500);
        }else {
            $(this).parents().next(".tableData").removeClass("active");
            $(this).parents().next(".tableData").slideUp(500);
        }
    });

    // Section 이동
    $(".btnGoSection").click(function(e){         
        e.preventDefault();
        $("html, body").animate({scrollTop:$(this.hash).offset().top}, 1000);
    });

    // 케미폭VAL 카드 보상 slide
    let slideBoxCheck = $(".slideBox");
    if (slideBoxCheck.length) {
        $(".slideBox").slick({
            slidesToShow : 3,
            slidesToScroll: "auto",
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            centerMode: true,
            //centerPadding : "200px", 
            variableWidth: true,
            infinite: true,
            swipeToSlide: true,
            draggable: true,
            arrows: false,
            pauseOnHover: false,
            dots: true,
            appendDots: ".slideBoxCount",
            customPaging: function (slider, i) {
                //console.log(slider);
                let plus = i + 1;
                let num = plus < 10 ? "0" + plus : plus;
                return  num + " // " + slider.slideCount;
            }
        });
    }

    // 아이템 라스트 정렬
    $(".itemName").each(function () {
        let totalIs = $(this).children().is(".total");
        if (totalIs) {
            $(this).addClass("dayEight");
        }
    });
});

function urlCopy() {
    // url 복사
    const inputUrl = document.getElementById("inputUrl");
    window.navigator.clipboard.writeText(inputUrl.value);

    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}