var header = document.querySelector('header');

window.addEventListener('scroll', function(){

    if(window.scrollY > 100 /*condiçao*/){
        header.classList.add('header-scroll');
    }else{
        header.classList.remove('header-scroll')
    }

});