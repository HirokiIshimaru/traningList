'use strict';

{
    window.onload = () =>{
        const preBtn = document.querySelector('#preBtn');
        const nextBtn = document.querySelector('#nextBtn');
        const scrollImg = document.querySelectorAll('.image');
        let count = 0;
        let moveCount = 0;
        console.log(scrollImg);

        scrollImg[0].style.transform = 'translateX(-100%)';
        scrollImg[1].style.transform = 'translateX(-100%)';
        scrollImg[2].style.transform = 'translateX(-100%)';

        nextBtn.onclick = () =>{  
            count ++;
            moveCount +=100;

            console.log(count);

            for (let i = 0; i < scrollImg.length; i++) {
                const element = scrollImg[i];
                
                if (count == 1) {
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '10';
                    scrollImg[1].style.zIndex = '10';
                    scrollImg[2].style.zIndex = '1';
                    scrollImg[1].style.transform = `translateX(-100%)`;
                    scrollImg[0].style.transform = `translateX(-100%)`;
                    scrollImg[2].style.transform = `translateX(-100%)`;
                }
    
                if(count == 2){
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '1';
                    scrollImg[1].style.zIndex = '10';
                    scrollImg[2].style.zIndex = '10';
                    scrollImg[2].style.transform = `translateX(-200%)`; 
                    scrollImg[1].style.transform = `translateX(-200%)`;
                    scrollImg[0].style.transform = `translateX(100%)`;
                }
                if(count == 3){
                    count = 0;
                    moveCount = 0;
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '10';
                    scrollImg[1].style.zIndex = '1';
                    scrollImg[2].style.zIndex = '10';
                    scrollImg[0].style.transform = `translateX(0%)`;
                    scrollImg[2].style.transform = 'translateX(-300%)';
                    scrollImg[1].style.transform = 'translateX(0%)';
                }
            }
        }
        preBtn.onclick = () =>{
            count ++;
            moveCount +=100;

            console.log(count);

            for (let i = 0; i < scrollImg.length; i++) {
                const element = scrollImg[i];
                
                if (count == 1) {
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '10';
                    scrollImg[1].style.zIndex = '10';
                    scrollImg[2].style.zIndex = '1';
                    scrollImg[0].style.transform = `translateX(0%)`;
                    scrollImg[1].style.transform = `translateX(0%)`;
                    scrollImg[2].style.transform = `translateX(-300%)`;
                }
    
                if(count == 2){
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '10';
                    scrollImg[1].style.zIndex = '1';
                    scrollImg[2].style.zIndex = '10';
                    scrollImg[0].style.transform = `translateX(100%)`; 
                    scrollImg[1].style.transform = `translateX(-200%)`;
                    scrollImg[2].style.transform = `translateX(-200%)`;
                }
                if(count == 3){
                    count = 0;
                    moveCount = 0;
                    element.style.transition = 'ease 0.3s';
                    scrollImg[0].style.zIndex = '1';
                    scrollImg[1].style.zIndex = '10';
                    scrollImg[2].style.zIndex = '10';
                    scrollImg[0].style.transform = 'translateX(-100%)';
                    scrollImg[1].style.transform = 'translateX(-100%)';
                    scrollImg[2].style.transform = 'translateX(-100%)';
                }
            }
        }
    }
}