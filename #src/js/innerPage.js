const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const regionSelect = document.querySelector('.header-info__adres-location');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownsChild = document.querySelectorAll('.dropdown-child');
const dropdownImages = document.querySelectorAll('.dropdown-img');
const sliderBlocks = document.querySelectorAll('.slider-block');
const sliderFooterTags = document.querySelector('.slider-footer__tags');
const sliderFooterLink = document.querySelector('.slider-footer__link');
const calculatorBlocks = document.querySelectorAll('.calculator-block');

calculatorBlocks.forEach(item => {
  item.addEventListener('click', event => {
    const target = event.target;
    const calculatorBtn = item.querySelector('button');
    const calculatorBody = item.querySelector('.calculator-block__body');
    const calculatorTotal = item.querySelector('.calculator-block__total');

    if (target === calculatorBtn && calculatorBtn.classList.contains('calculator-block__head-btn-active')) {
      calculatorHide(calculatorBody, calculatorBtn, calculatorTotal);
    } else {
      calculatorShow(calculatorBody, calculatorBtn, calculatorTotal);
    }
  })
})

const calculatorHide = (block, btn, elipses) => {
  block.classList.remove('calculator-block__body-active');
  btn.classList.remove('calculator-block__head-btn-active');
  elipses.classList.remove('calculator-block__total-active');
}
const calculatorShow = (block, btn, elipses) => {
  block.classList.add('calculator-block__body-active');
  btn.classList.add('calculator-block__head-btn-active');
  elipses.classList.add('calculator-block__total-active');
}

sliderFooterLink.addEventListener('click', (event) => {
  event.preventDefault();
  sliderFooterLink.innerHTML =
    (sliderFooterLink.innerHTML === 'Показать больше') ? sliderFooterLink.innerHTML = 'Скрыть' : sliderFooterLink.innerHTML = 'Показать больше';

  sliderFooterLink.classList.toggle('slider-footer__link-active');
  sliderFooterTags.classList.toggle('slider-footer__tags-active');

})

sliderBlocks.forEach(sliderBlock => {
  sliderBlock.addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  const tabs = sliderBlock.querySelectorAll('.slider-tabs__btn');
  const sliders = sliderBlock.querySelectorAll('.tabs-block');
  if(target.matches('.slider-tabs__btn')) {
    const tabAttribute = target.getAttribute('data-tab');
    const thisSlider = sliderBlock.querySelector('div[data-block='+tabAttribute+']')
    tabs.forEach(tab => {
      tab.classList.remove('slider-tabs__btn-active');
      sliders.forEach(slider => {
        slider.classList.remove('tabs-block-active');
      })
    })
    target.classList.add('slider-tabs__btn-active');
    thisSlider.classList.add('tabs-block-active');
  }
  if(target.matches('.slider-tabs__btn-more')) {
    target.classList.toggle('slider-tabs__btn-more-active');
    sliderBlock.querySelector('.slider-tabs__more').classList.toggle('slider-tabs__more-active');
  }
  });
})

regionSelect.addEventListener('click', event => {
  const target = event.target;

  if(target.matches('.header-info__adres-location-link')) {
    regionSelect.querySelector('.header-location').style.display = 'flex';
  }
  if(target.matches('.header-location__close') || target.matches('.header-location__link')) {
    regionSelect.querySelector('.header-location').style.display = 'none';
  }
});

const burgerOpen = item => {
  item.querySelector('.burger-img__open').style.display = 'none';
  item.querySelector('.burger-img__close').style.display = 'block';
  item.classList.add('burger-open');
  mobileNav.classList.add('mobile-nav__open');
  document.body.style.overflow = 'hidden';
}

const burgerClose = item => {
  item.classList.remove('burger-open');
  item.querySelector('.burger-img__close').style.display = 'none';
  item.querySelector('.burger-img__open').style.display = 'block';
  mobileNav.classList.remove('mobile-nav__open');
  document.body.style.overflow = '';
  dropdowns.forEach(item => {
    if(item.classList.contains('dropdown-open') && item != parent) {
      item.classList.remove('dropdown-open');
      dropdownsChild.forEach(elem => {
        elem.classList.remove('dropdown-child-open');
        dropdownImages.forEach(img => {
          img.classList.remove('dropdown-img-active');
        })
      })
    }
  })
  dropdownsChild.forEach(item => {
    if(item.classList.contains('dropdown-child-open') && item != parentChild) {
      item.classList.remove('dropdown-child-open');
      dropdownImages.forEach(img => {
        img.classList.remove('dropdown-img-active');
      })
    }
  })
}

burger.addEventListener('click', () => {
  if(!burger.matches('.burger-open')) {
    burgerOpen(burger);
  } else if(burger.matches('.burger-open')) {
    burgerClose(burger);
  }
});

const accordionMobile = () => {
  console.log('fdsafds');
  mobileNav.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    if(target.matches('.dropdown-btn')) {
      console.log(target);
      const parent = target.closest('.dropdown');
      const img = parent.querySelector('.dropdown-img');
      dropdowns.forEach(item => {
        if(item.classList.contains('dropdown-open') && item != parent) {
          item.classList.remove('dropdown-open');
          dropdownsChild.forEach(elem => {
            elem.classList.remove('dropdown-child-open');
            dropdownImages.forEach(img => {
              img.classList.remove('dropdown-img-active');
            })
          })
        }
      })
      parent.classList.toggle('dropdown-open');
      img.classList.toggle('dropdown-img-active');
    }

    if(target.matches('.dropdown-btn-child')) {
      const parentChild = target.closest('.dropdown-child');
      console.log(parentChild);
      const img = parentChild.querySelector('.dropdown-img');
      dropdownsChild.forEach(item => {
        if(item.classList.contains('dropdown-child-open') && item != parentChild) {
          item.classList.remove('dropdown-child-open');
          dropdownImages.forEach(img => {
            img.classList.remove('dropdown-img-active');
          })
        }
      })
      parentChild.classList.toggle('dropdown-child-open')
      img.classList.toggle('dropdown-img-active');
    }
  })
}
const goTopBtn = document.querySelector('.btn-up__wrapp');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
  }
}

$('.new-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: `<button type="button" class="slick-prev slick-slider-prev">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next slick-slider-next">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
  responsive: [
    {
      breakpoint: 480,
      arrows: false,
    }
  ]
  // autoplay: true,
  // autoplaySpeed: 2000,
});
$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        centerMode: false,
      }
    },
  ]
});

$('.manufacturers-slider').slick({
    infinite: true,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev slick-slider-prev">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next slick-slider-next">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
});
$('.constructions-slider').slick({
    infinite: true,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev slick-slider-prev">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next slick-slider-next">
      <svg class="icon" width="16" height="18">
        <use href="./img/icons/icons.svg#slider-arrow"></use>
      </svg>
    </button>`,
});

accordionMobile();