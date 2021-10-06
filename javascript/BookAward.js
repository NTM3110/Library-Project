setImg(2020);
function setImg(year){
    let categories = document.querySelectorAll('.category');
    for(var i=0;i<categories.length;i++){
        if(i==0){
            var cate = categories[0];
            var container = cate.childNodes[3].childNodes[1].childNodes;
            for(var j=0; j<container.length;j++){
                if(container[j].localName == 'img'){
                     // naming the picture by odd number because between the pictures have text
                    container[j].src = "../BookImg/"+year +"/Fiction/"+j+ ".jpg";
                } 
            }
        }
        if(i==1){
            var cate = categories[1];
            var container = cate.childNodes[3].childNodes[1].childNodes;
            for(var j=0; j<container.length;j++){
                if(container[j].localName == 'img'){
                    // naming the picture by odd number because between the pictures have text
                    container[j].src = "../BookImg/" +year+"/Non-Fiction/"+j+ ".jpg"; 
                } 
            }
        }
        if(i==2){
            var cate = categories[2];
            var container = cate.childNodes[3].childNodes[1].childNodes;
            for(var j=0; j<container.length;j++){
                if(container[j].localName == 'img'){
                     // naming the picture by odd number because between the pictures have text
                    container[j].src = "../BookImg/" +year+"/Poetry/"+j+ ".jpg";
                } 
            }
        }
        if(i==3){
            var cate = categories[3];
            var container = cate.childNodes[3].childNodes[1].childNodes;
            for(var j=0; j<container.length;j++){
                if(container[j].localName == 'img'){
                     // naming the picture by odd number because between the pictures have text
                    container[j].src = "../BookImg/" +year+"/Young People's Literature/"+j+ ".jpg";
                } 
            }
        }
    }
  
}

let year = document.querySelectorAll(".menu-bar ul li");
year.forEach((item)=>{
    item.addEventListener('click',function(){
        setImg(item.innerText)
})
});
