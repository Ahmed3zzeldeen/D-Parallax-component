let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountains3 = document.querySelector('#mountains3');
let mountains4 = document.querySelector('#mountains4');
let river = document.querySelector('#river');
let boat = document.querySelector('#boat');
let mountains7 = document.querySelector('#mountains7');
let mainTitle = document.querySelector('.main-title');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*5 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*2 + 'px';
    mainTitle.style.fontSize = value + 'px';
    if (scrollY >= 73){
        mainTitle.style.fontSize = 73 + 'px';
        mainTitle.style.position = 'fixed' ;
        if (scrollY >= 433) {
            mainTitle.style.display = 'none' ;
        } else {
            mainTitle.style.display = 'block' ;
        }
    }
    if (scrollY >= 65) {
        document.querySelector('.main').style.background = 'linear-gradient(#4633b9, #10001f)';
    }
    else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
    }
    if (scrollY >= 634) {
        document.querySelector('header').style.background= 'linear-gradient(var(--mainColor) , #1b0020 )';
    } else {
        document.querySelector('header').style.background= 'none'; 
    }
    
}