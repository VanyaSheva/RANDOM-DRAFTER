document.body.onload = function () {
    const preloader = document.querySelector('.preloader');
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.opacity = '0';
    setTimeout(function () {
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
            wrapper.style.opacity = '1';
        }
    }, 1500);
    setTimeout(function () {
        preloader.remove();
    },5500)
};