
$(function(){

    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 600)
    })

    gsap.ticker.lagSmoothing(0)




    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {

        const horiScroll = gsap.to('.sticky-inner',{
            scrollTrigger:{
                trigger:"#main",//기준지점
                start:'0% 0%', //[트리거시작점 ][윈도우 시작 지점]
                end:"100% 100%",//[트리거끝지점 ][윈도우 끝 지점]
                // markers:true,
                scrub:0,
                invalidateOnRefresh:true, //window.innerWidth; 갱신됨
            },
            xPercent:-100,
            x:function(){
                return window.innerWidth;
            },
            ease:'linear'
        })

        design = gsap.timeline({
            scrollTrigger: {
                containerAnimation: horiScroll,
                trigger: ".sc-design", // 기준지점
                start: '0% 80%', // [트리거시작점 ][윈도우 시작 지점]
                end: "100% 60%", // [트리거끝지점 ][윈도우 끝 지점]
                // markers: true,
                scrub: 1,
            }
        });
        design.to('.sc-design .group-slide', {
            xPercent: -15,
            ease: 'linear'
        },'start');
        design.from('.sc-design .char', {
            yPercent: 50,
            stagger:0.1,
        },'start');
        design.from('.sc-design .group-text .subtitle .underline',{
            width: "0%"
        },'start')

        technology = gsap.timeline({
            scrollTrigger: {
                containerAnimation: horiScroll,
                trigger: ".sc-technology", // 기준지점
                start: '0% 80%', // [트리거시작점 ][윈도우 시작 지점]
                end: "0% 20%", // [트리거끝지점 ][윈도우 끝 지점]
                markers: true,
                scrub: 1,
            }
        });
    
        technology.from('.sc-technology .top .char', {
            yPercent: 50,
            stagger:0.1,
        });

        technology.from('.sc-technology .bottom .char', {
            yPercent: 90,
            stagger:0.1,
        });


        value = gsap.timeline({
            scrollTrigger: {
                containerAnimation: horiScroll,
                trigger: ".sc-value", // 기준지점
                start: '0% 80%', // [트리거시작점 ][윈도우 시작 지점]
                end: "100% 90%", // [트리거끝지점 ][윈도우 끝 지점]
                // markers: true,
                scrub: 1,
            }
        });
    
        value.from('.sc-value .char', {
            yPercent: 50,
            stagger:0.1,
        });

       

        contact = gsap.timeline({
            scrollTrigger: {
                containerAnimation: horiScroll,
                trigger: ".sc-contact", // 기준지점
                start: '0% 80%', // [트리거시작점 ][윈도우 시작 지점]
                end: "100% 90%", // [트리거끝지점 ][윈도우 끝 지점]
                // markers: true,
                scrub: 1,
            }
        });
    
        contact.from('.sc-contact .char', {
            yPercent: 50,
            stagger:0.1,
        });

     
      
    });


    
    


    const mainSlide = new Swiper('.sc-intro .main-slide',{
        direction:"vertical",
        parallax:true,
        speed:1000,
        navigation: {
            nextEl: '.sc-intro .group-control .btn.next',
            prevEl: '.sc-intro .group-control .btn.prev',
        },

     

        pagination: {
            el: '.sc-intro .pagination .fraction',
            type:"custom",
            renderCustom: function (swiper, current, total) {
                const currentFormatted = String(current).padStart(2, '0');
                const totalFormatted = String(total).padStart(2, '0');

              return `  <span class="fraction current">${currentFormatted}</span>
                        <span class="fraction dot">.</span>
                        <span class="fraction total">${totalFormatted}</span>`;
            },
          }
    
    })
    const thumbSlide = new Swiper('.sc-intro .thumb-slide',{
        direction:"vertical",
        slidesPerView:3,
        centeredSlides:true,
        parallax:true,
        speed:1000,
    })

    mainSlide.controller.control = thumbSlide;
    thumbSlide.controller.control = mainSlide;



    value = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-value", // 기준지점
            start: '50% 20%', // [트리거시작점 ][윈도우 시작 지점]
            end: "100% 60%", // [트리거끝지점 ][윈도우 끝 지점]
            // markers: true,
            scrub: 1,
        }
    });
    

    $(document).mousemove(function(e){
        xVal = e.clientX
        yVal = e.clientY

        gsap.to('.mouse-hover',{
            x:xVal,
            y:yVal
        })
    })
    
    //이미지 돋보기

    $('.img-lense').hover(function() {
        $('.mouse-hover').addClass('show'); 
    }, function() {
        $('.mouse-hover').removeClass('show'); 
    });

    //
 

    //메뉴 버튼 클릭 이벤트
    // $('#header .menu a').click(function(e){
    //     e.preventDefault()
    //     $('.menu-wrap').toggleClass('on');
    //     $('body').addClass('on');

    //     if ('.menu-wrap'.has) {
            
    //     } else {
            
    //     }
    //  })

     $('#header .menu a').click(function(e) {
        e.preventDefault(); // 기본 링크 동작 방지
        
        $('.menu-wrap').toggleClass('on');
        
        $('body').toggleClass('on', $('.menu-wrap').hasClass('on'));
        
        // 메뉴가 열려있는지 확인
        if ($('.menu-wrap').hasClass('on')) {
            $('body').css('overflow', 'hidden'); // 스크롤 제거
            $('.menu .btn-menu-text').text('Close');

        } else {
            $('body').css('overflow', ''); // 스크롤 복원
            $('.menu .btn-menu-text').text('Menu');

        }
    });





})



    

