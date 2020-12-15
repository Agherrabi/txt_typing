const typedTxtspan = document.querySelector(".text-typing")

const arrayTxt = ["Simple","Beautifull","Good","Hard","One ."]
const typingDelay = 200;
const erasingDelay = 100;
const newtXTDelay = 2000;
let txtarrayindex = 0;
let charindex = 0;

function type(){
    
if(charindex < arrayTxt[txtarrayindex].length){
    typedTxtspan.textContent += arrayTxt[txtarrayindex].charAt(charindex);
    charindex++;
    setTimeout(type,typingDelay);
    
}else{
    setTimeout(erasi,newtXTDelay)

}

}
function erasi() {
    if(charindex > 0){
        typedTxtspan.textContent = arrayTxt[txtarrayindex].substring(0,charindex-1);
        charindex--;
        setTimeout(erasi,erasingDelay);
        
    }
    else{
        txtarrayindex++;
        if(txtarrayindex >= arrayTxt.length) txtarrayindex=0;
        setTimeout(type,typingDelay+1100)
    }
}


type();