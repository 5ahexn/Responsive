$(document).ready(function(){
    // SNS 공유하기
    $(".facebook").click(function(e){
        e.preventDefault();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
    });

    $(".twitter").click(function(e){
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    });

    //http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
    //http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
    //https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
    //https://plus.google.com/share?url={페이지링크}&t={페이지 제목}

    // 접기 & 펼치기
    $(".btn").click(function(e){
        e.preventDefault();
        $(".nav").slideToggle();
        // 클릭하면 클래스 생성
        $(".btn").toggleClass("open");

        if($(".btn").hasClass("open")){
            // open이 있을 때
            $(".btn").find("i").attr("class","fa fa-angle-up");
        } else {
            // open이 없을 때
            $(".btn").find("i").attr("class","fa fa-angle-down");
        };
    });

    // 메뉴가 open 상태에서 모바일 사이즈로 바뀌면 버그가 발생함. 스크립트로 해결하는 법
    $(window).resize(function(){
        let wWidth = $(window).width();
        if(wWidth > 600){
            $(".nav").removeAttr("style");
        };
    });

    // 이미지 슬라이더
    $(".slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true
                }
            }
        ]
    });

    // 라이트 갤러리
    $(".lightbox").lightGallery({
        autoplay: true,
        pause: 3000,
        progressBar: true
    });
})
