    const slider = document.querySelector(".row");
    const sliderMain = document.querySelector(".inner-row");
    const nextBtn = document.querySelector(".switch-right");
    const preBtn = document.querySelector(".switch-left");
    const sliderItem = document.querySelectorAll(".author");  
    const sliderWidth = slider.offsetWidth;
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;
    var time = 2000;
    let positionX = 0;

    // btn left; right
    nextBtn.addEventListener("click", function(){
        changeSlide(1);
    });
    
    preBtn.addEventListener("click", function(){
        changeSlide(-1);
    });

    function changeSlide(direction){
        if(direction == 1){
            if(positionX < -(sliderWidth)){
                positionX = 0;
            }else
                positionX = positionX - sliderItemWidth * 2;
                sliderMain.style = `transform: translateX(${positionX}px)`;
        }else if (direction == -1){
            if(positionX > -sliderItemWidth){
                return;
            }else
                positionX = positionX + sliderItemWidth * 2;
                sliderMain.style = `transform: translateX(${positionX}px)`
        }
    }