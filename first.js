const side=document.querySelector('.side-bar');
const menu=document.querySelector('.tube1');
const main=document.querySelector('.main');
const show =()=>
{
    side.classList.toggle('small-bar');
    main.classList.toggle('another');
}
menu.addEventListener('click',show);
