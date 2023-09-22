let img = document.querySelector('.doorimage')



var audio1 = document.getElementById("myAudio");
audio1.autoplay


var arraySubmit = [0,0,0,0,0,0];

var position = 1;

function changImage(image1 , number1){
    
    if (position == 6){
        img.src = image1
    }
    //change the big door
    
    switch (number1) {
        case 1:
            if(arraySubmit[0] == 1){
                return;
            }
            document.querySelector('.left-door-image').src = "image/L1.jpg";
            document.querySelector('.right-door-image').src = "image/R1.jpg";
            document.getElementsByClassName('Qustion')[0].innerHTML = "متى توحدت المملكة العربية السعودية؟";
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg1.jpg)";
            document.getElementById('mainBackground').style.backgroundImage = "url(image/bg1.jpg)";
            document.getElementById('button1').innerHTML = "1351 هـ";
            document.getElementById('button2').innerHTML = "1352 هـ";
            document.getElementById('button3').innerHTML = "1353 هـ";
            img.src = 'image/image1.jpg'
            position = 1;
          break; 
        case 2:
            if(arraySubmit[0] == 1){
                return;
            }
            if(arraySubmit[number1-1] == 0){
                alert("يجب حل السؤال السابق أولا")
                break;
            }
            document.querySelector('.left-door-image').src = "image/L2.jpg";
            document.querySelector('.right-door-image').src = "image/R2.jpg";
            document.getElementsByClassName('Qustion')[0].innerHTML = "كم سنة استمر الملك عبد العزيز رافعاً راية الجهاد لتوحيد البلاد؟";
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg2.jpg)";
            document.getElementById('mainBackground').style.backgroundImage = "url(image/bg2.jpg)";
            document.getElementById('button1').innerHTML = "30";
            document.getElementById('button2').innerHTML = "31";
            document.getElementById('button3').innerHTML = "32";
            img.src = 'image/image2.jpg'
            position = 2;
            break;
        case 3:
            if(arraySubmit[0] == 1){
                return;
            }
            if(arraySubmit[number1-1] == 0){
                alert("يجب حل السؤال السابق أولا")
                break;
            }
            document.querySelector('.left-door-image').src = "image/L3.jpg";
            document.querySelector('.right-door-image').src = "image/R3.jpg";
            document.getElementsByClassName('Qustion')[0].innerHTML = "متى توفي الملك عبد العزيز؟";
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg3.jpg)";
            document.getElementById('mainBackground').style.backgroundImage = "url(image/bg3.jpg)";
            document.getElementById('button1').innerHTML = "1371 هـ";
            document.getElementById('button2').innerHTML = "1372 هـ";
            document.getElementById('button3').innerHTML = "1373 هـ";
            img.src = 'image/image3.jpg'
            position = 3;
            break;
        case 4:
            if(arraySubmit[0] == 1){
                return;
            }
            if(arraySubmit[number1-1] == 0){
                alert("يجب حل السؤال السابق أولا")
                break;
            }
            document.querySelector('.left-door-image').src = "image/L4.jpg";
            document.querySelector('.right-door-image').src = "image/R4.jpg";
            document.getElementsByClassName('Qustion')[0].innerHTML = "كم عدد ملوك المملكة العربية السعودية؟";          
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg4.jpg)";
            document.getElementById('mainBackground').style.backgroundImage = "url(image/bg4.jpg)";
            document.getElementById('button1').innerHTML = "6";
            document.getElementById('button2').innerHTML = "7";
            document.getElementById('button3').innerHTML = "8";
            img.src = 'image/image4.jpg'
            position = 4;
            break;
        case 5:
            if(arraySubmit[0] == 1){
                return;
            }
            if(arraySubmit[number1-1] == 0){
                alert("يجب حل السؤال السابق أولا")
                break;
            }
            document.querySelector('.left-door-image').src = "image/L5.jpg";
            document.querySelector('.right-door-image').src = "image/R5.jpg";
            document.getElementsByClassName('Qustion')[0].innerHTML = "متى تولى الملك سلمان الحكم؟";          
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg5.jpg)";
            document.getElementById('mainBackground').style.backgroundImage = "url(image/bg5.jpg)";
            document.getElementById('button1').innerHTML = "1435 هـ";
            document.getElementById('button2').innerHTML = "1436 هـ";
            document.getElementById('button3').innerHTML = "1437 هـ";
            img.src = 'image/image5.jpg'
            position = 5;
            break;
        case 6:
            document.querySelector('.left-door-image').src = "image/clear.png";
            document.querySelector('.right-door-image').src = "image/clear.png";
            if(arraySubmit[0]==1){
                document.getElementsByClassName('Qustion')[0].innerHTML = " ";
                document.getElementById('button1').style.display = 'none';
                document.getElementById('button2').style.display = 'none';
                document.getElementById('button3').style.display = 'none';
                document.getElementById('inputDate').style.display = 'none';
                document.getElementById('mainBackground').style.backgroundImage = "url(image/open box.png)";
            }
            else{
                document.getElementsByClassName('Qustion')[0].innerHTML = "يرجى الاجابة على الأسئلة بالبداية لفتح الصندوق";
            }
            position = 6;
            break;
        default:
            console.log("nothing");
        }
}



document.getElementById('button1').addEventListener('click',function(){
    let result = document.getElementById("button1").innerHTML;
    console.log(result)
    switch (position) {
        case 1:
            if(result == "1351 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door1').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
          break; 
        case 2:
            if(result == "31"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door2').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 3:
            if(result == "1373 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door3').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 4:
            if(result == "7"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door4').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 5:
            if(result == "1436 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door5').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 6:
            document.querySelector('.left-door-image').src = "image/clear.png";
            break;
        default:
            console.log("nothing");
        }

        if(arraySubmit[1]==1&arraySubmit[2]==1&arraySubmit[3]==1&arraySubmit[4]==1&arraySubmit[5]==1){
            document.getElementById('door6').style.borderColor= "#05bb14"
            document.getElementById("door6").src = "image/open box.png"
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg6.jpg)";

            if(arraySubmit[0]==0){
                var audio2 = new Audio('image/sound1.mp3');
                audio2.play();
                arraySubmit[0]=1;
                changImage("image/open box.png" , 6)
            }
        }

        changImage("image/open box.png",position)
})

document.getElementById('button2').addEventListener('click',function(){
    let result = document.getElementById("button2").innerHTML;
    console.log(result)
    switch (position) {
        case 1:
            if(result == "1351 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door1').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
          break; 
        case 2:
            if(result == "31"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door2').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 3:
            if(result == "1373 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door3').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 4:
            if(result == "7"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door4').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 5:
            if(result == "1436 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door5').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 6:
            document.querySelector('.left-door-image').src = "image/clear.png";
            break;
        default:
            console.log("nothing");
        }

        if(arraySubmit[1]==1&arraySubmit[2]==1&arraySubmit[3]==1&arraySubmit[4]==1&arraySubmit[5]==1){
            document.getElementById('door6').style.borderColor= "#05bb14"
            document.getElementById("door6").src = "image/open box.png"
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg6.jpg)";

            if(arraySubmit[0]==0){
                var audio2 = new Audio('image/sound1.mp3');
                audio2.play();
                arraySubmit[0]=1;
                changImage("image/open box.png" , 6)
            }
        }

        changImage("image/open box.png",position)
})

document.getElementById('button3').addEventListener('click',function(){
    let result = document.getElementById("button3").innerHTML;
    console.log(result)
    switch (position) {
        case 1:
            if(result == "1351 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door1').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
          break; 
        case 2:
            if(result == "31"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door2').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 3:
            if(result == "1373 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door3').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 4:
            if(result == "7"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door4').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 5:
            if(result == "1436 هـ"){
                alert("***تم حل السؤال بنجاح***")
                document.getElementById('door5').style.borderColor= "#05bb14"
                arraySubmit[position] = 1
                position += 1
            }
            else{
                alert("الاجابة خاطئة حاول مرة اخرى")
            }
            break;
        case 6:
            document.querySelector('.left-door-image').src = "image/clear.png";
            break;
        default:
            console.log("nothing");
        }

        if(arraySubmit[1]==1&arraySubmit[2]==1&arraySubmit[3]==1&arraySubmit[4]==1&arraySubmit[5]==1){
            document.getElementById('door6').style.borderColor= "#05bb14"
            document.getElementById("door6").src = "image/open box.png"
            document.getElementsByClassName('container')[0].style.backgroundImage = "url(image/bg6.jpg)";

            if(arraySubmit[0]==0){
                var audio2 = new Audio('image/sound1.mp3');
                audio2.play();
                arraySubmit[0]=1;
                changImage("image/open box.png" , 6)
            }
        }

        changImage("image/open box.png",position)
})
// document.getElementById('button1').addEventListener('click',function(){
//     let result = document.getElementById("inputDate").value;
    
// })