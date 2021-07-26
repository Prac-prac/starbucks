const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

//input 요소에 focus되면 searchEl에 focused 클래스 추가
searchInputEl.addEventListener('focus', function(){
    //클래스 추가
    searchEl.classList.add('focused');
    //attribute : HTML속성
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//focus 해제 됐을 때
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// lodash.js 라이브러리 _.throttle(함수, 시간)
//0.3초 단위를 부하를 줘서 함수 실행 저하
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY>500){
        //배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션-객체 데이터);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            //css 문자데이터는 ''안에, 숫자는 그대로
            display: 'none'
        }); 
        //to-top버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        //배지 보이기
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, 06, {
            opacity: 1,
            display: 'block'
        });
        //to-top버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
//fadeEls 요소 개수만큼 forEach 실행
fadeEls.forEach(function(fadeEl, index){
    //1초동안 opacity: 0 -> 1로
    gsap.to(fadeEl, 1, {
        //시작하는 시간 순서를 0.7, 1.4, 2.1
        delay: (index + 1) * .7, //0.7, 1.4, 2.1
        opacity: 1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true, //거꾸로
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        /*보여짐 여부를 감시할 요소 지정*/
        triggerElement: spyEl,
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();