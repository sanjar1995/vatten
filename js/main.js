// Hamburger
$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger-active');
    $('.header .contacts').toggleClass('contacts-active');
    $('.overlay').toggleClass('overlay-active');
});


//Header-fixed

if ($(window).width() <= 575) {

    window.onscroll = function showHeader() {
        var header = document.querySelector('.header');

        if (window.pageYOffset > 100) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    };

}

var dataType = document.querySelector('[data-type]');

var dataTypeDesktop = document.querySelector('[data-type="desktop"]');

var dataTypeFull = document.querySelector('[data-type="full"]');

var dataTypeTrue = document.querySelector('[data-type="true"]');

var dataTypeFalse = document.querySelector('[data-type="false"]');

var dataTypeUltraviolet = document.querySelector('[data-type="ultraviolet"]');

var dataTypeOzone = document.querySelector('[data-type="ozone"]');

var dataTypeWhite = document.querySelector('[data-type="white"]');

var dataTypeGrey = document.querySelector('[data-type="grey"]');

var dataTypeBlack = document.querySelector('[data-type="black"]');

var dataSrc = document.querySelector('[data-src]');

// dataSrc.onclick = function(event){
//     event.preventDefault();
//     if (this === 'desktop') {
//         alert( 'Это desktop' );
//     } else {
//         alert( 'Это full' );
//     }
// };

let links = document.querySelectorAll('.btn-select');
Array.from(links).forEach(i => {
    i.addEventListener('click', function act(e) {
        e.preventDefault()
        var parent = this.closest('.goods-specific__btns'),
            child = parent.children
        childAttr = this.textContent;
        var chek = {};
        for (let j = 0; j < child.length; j++) {
            child[j].classList.remove('active')
        }
        chek.type = `${childAttr}`
        this.classList.add('active');
    })
 
})




let colors = document.querySelectorAll('.btn-color-select');
Array.from(colors).forEach(i => {
    i.addEventListener('click', function act(e) {
        e.preventDefault()
        const parent = this.closest('.goods-specific__btns'),
            child = parent.children,
            attr = this.getAttribute('src'),
            body = document.querySelector('.imegae');
        for (let j = 0; j < child.length; j++) {
            child[j].classList.remove('colors')
        }
        this.classList.add('colors');
        body.setAttribute('src', attr);

    })
})