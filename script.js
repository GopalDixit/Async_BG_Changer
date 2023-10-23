const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let colorCode = "#"
    for(let i=0;i<6;i++){
        colorCode += hex[Math.floor(Math.random()*16)]
    }
    return colorCode
}
let changeId;
const startChangingColor = function(){
    changeId=setInterval(changeBgColor,1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
    clearInterval(changeId)
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
