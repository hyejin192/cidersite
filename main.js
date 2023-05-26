let hCont = $('.history_slide');
let hBtn = $('.history_btn li');
let hIndex;

hCont.slick({});

// 버튼을 클릭하면 해당 index를 찾아서 가기
hBtn.click(function (e) {
    e.preventDefault();
    let target = $(this); //클릭한 그것
    let index = target.index(); //클릭한 그것의 index번호
    //console.log(index)

    if (index == 0) {
        hIndex = 0
    } else if (index == 1) {
        hIndex = 4
    } else if (index == 2) {
        hIndex = 8
    } else if (index == 3) {
        hIndex = 12
    } else if (index == 4) {
        hIndex = 16
    }
    console.log(hIndex)
    hCont.slick('slickGoTo', hIndex);

    hBtn.removeClass('active')
    target.addClass('active')
})

hCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
    if (nextSlide >= 0 && nextSlide <= 3) {
        hBtn.removeClass('active')
        hBtn.eq(0).addClass('active')
    } else if (nextSlide >= 4 && nextSlide <= 7) {
        hBtn.removeClass('active')
        hBtn.eq(1).addClass('active')
    } else if (nextSlide >= 8 && nextSlide <= 11) {
        hBtn.removeClass('active')
        hBtn.eq(2).addClass('active')
    } else if (nextSlide >= 12 && nextSlide <= 15) {
        hBtn.removeClass('active')
        hBtn.eq(3).addClass('active')
    } else if (nextSlide >= 16 && nextSlide <= 19) {
        hBtn.removeClass('active')
        hBtn.eq(4).addClass('active')
    }

    $('.history_page em').text(nextSlide + 1)
});

//   history_poster
let posterBtn = $('.poster_btn ul li');
let posterCont = $('.poster_cont .poster');

//posterCont를 모두 안보이게 첫번째는 보이기
posterCont.hide().eq(0).show();

posterBtn.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    //console.log(index)
    posterCont.hide().eq(index).fadeIn();
    posterCont.find('figure').removeClass('move')
    posterCont.eq(index).find('figure').addClass('move')

    posterBtn.removeClass('active')
    target.addClass('active')
})

// history_cider
$('.cider_bottle').slick({
    dots: true,
    centerMode: true,
    centerPadding: "420px"
});

//memory-slide
let mCont = $('.memory-slider')
let mBtn = $('.memory_btn li')
let mBg = $('.history-slider-bg')
let mIndex;

mCont.slick({
    fade: true, // 자연스럽게 넘어감
    autoplay: true,
    autoplaySpeed: 2000,

});
mBtn.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index(); // 클릭한 그것의 index번호 추출
    // console.log(index)
    if (index == 0) {
        mIndex = 0; // mIndex에게 0을 집어넣어라 = 1950 img 중 첫번째 (총 img 중 0번째 )
    } else if (index == 1) {
        mIndex = 4; // mIndexd에게 4를 집어넣어라 = 1960 img 중 첫번째 (총 img 중 4번째)
    } else if (index == 2) {
        mIndex = 8; // mIndexd에게 8를 집어넣어라 = 1970 img 중 첫번째 (총 img 중 8번째)
    } else if (index == 3) {
        mIndex = 12; // mIndexd에게 12를 집어넣어라 = 1980 img 중 첫번째 (총 img 중 12번째)
    } else if (index == 4) {
        mIndex = 16; // mIndexd에게 16를 집어넣어라 = 1990 img 중 첫번째 (총 img 중 16번째)
    }

    //  slick method
    mCont.slick('slickGoTo', mIndex); // mCont에 $('.memory-slider')을 넣었기 때문에 형식을 동일하게 함
});

// On before slide change
mCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
    if(nextSlide >=0 && nextSlide <= 3) {
        // 같이 있는 클래스명 history-slider-bg은 지워지면 안됨
        mBg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-01")
    }else if (nextSlide >=4 && nextSlide <= 7) {
        mBg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-02")
    }else if (nextSlide >= 8 && nextSlide <= 11) {
        mBg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-03")
    }else if (nextSlide >= 12 && nextSlide <= 15) {
        mBg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-04")
    }else if (nextSlide >= 16 && nextSlide <= 20) {
        mBg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-05")
    }

    $('.memory_page_btn em').text(nextSlide + 1) // 0부터 나오지 않게 하기 위해서
    // autoplay 오작동 해결
    mCont.slick('slickPlay');
});

