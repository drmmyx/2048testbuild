var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
console.log(x);
console.log(y);
var rowOption =[2,3,4,5];
var row = ko.observable(3);


var boxSize = ko.computed(function(){
    return {width:x/row(), height:y/row()}
});
console.log(boxSize());


function drawbox(){
   
    var data=[];
    console.log(data);
    for(var i = 0 ; i < row() ; i ++){

        for(var j=0; j<row(); j++){
            
            data.push({
                startx: boxSize().width*i,
                starty:boxSize().height*j,
                endx:boxSize().width*(i+1),
                endy:boxSize().height*(j+1),
            });
        }
    }   
    console.log(data);

    data.forEach(element => {
        console.log("set  ------------------");
        console.log(element.startx);
        console.log(element.starty);
        console.log(element.endx);
        console.log(element.endy);
        ctx.fillRect(element.startx+10,element.starty+10,element.endx-10,element.endy-10);
    });
    

}


init();
function init(){

    drawbox();
}
//drawbox();







