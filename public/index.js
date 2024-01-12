const iconM = document.querySelector('#iconmenu');
const menu = document.querySelector('#menu');

iconM.addEventListener('click',() => {

    if(menu.classList.contains('hidden')){

        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }



})

