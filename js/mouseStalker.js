'use strict';
{
    window.onload = () =>{
        const stalker = document.querySelector('#stalker');
        
        window.addEventListener('mousemove',(e)=>{
            console.log(e);
            stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.layerY + 'px)';
        });
    }
}