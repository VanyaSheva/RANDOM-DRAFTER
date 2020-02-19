document.body.onload = function () {
    const preloader = document.querySelector('.preloader');
    setTimeout(function () {
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1500);
    setTimeout(function () {
        preloader.remove();
    },5500)
};