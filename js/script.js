let p = document.getElementById('textToChangeBt');
let p2 = document.getElementById('text2');
let writeToDoctor = document.getElementById('writeToDoctor');
let Wname = document.getElementById('Wname');
let Wnumber = document.getElementById('Wnumber');
let Wdate = document.getElementById('Wdate');
let Wtime = document.getElementById('Wtime');
let Wwy = document.getElementById('Wwy');
let SendMA = document.getElementById('SendMA');

let input = document.getElementById('checkbox');
var i = 0;
function locale (){
    if(i == 1){
        input.onclick = function () {p.innerHTML="Чтобы записаться на приём к врачу заполните эту простую форму." +
            " Укажите удобные для вас дату и время посещения." +
            " После получения заявки мы перезвоним вам для уточнения," +
            " возможен ли приём в это время и если нет," +
            " согласуем другую подходящую дату.", p2.innerHTML="Поля со звёздочкой обязательны для заполнения..",
            writeToDoctor.innerHTML="записаться на приём",
            Wname.innerHTML="Ваше имя<span class=\"red_star\">*</span>",
            Wnumber.innerHTML="Номер телефона<span class=\"red_star\">*</span>",
            Wdate.innerHTML="Дата посещения<span class=\"red_star\">*</span>",
            SendMA.innerHTML="Отправить заявку",
            Wtime.innerHTML="Время посещения<span class=\"red_star\">*</span>",
            Wwy.innerHTML="Здесь можно указать причину обращения или ваши пожелания, если таковые имеются..."}
        i = 0;
    }
    else{
        input.onclick = function () {p.innerHTML="To make an appointment with a doctor fill out this simple form. Indicate the date and time " +
            "of visit convenient for you. After receiving the application, " +
            "we will call you back to clarify whether reception is possible at this time and if not, " +
            "we will coordinate another suitable date.", p2.innerHTML="Fields with an asterisk are required.",
            writeToDoctor.innerHTML="Make an appointment",
            Wname.innerHTML="Your name<span class=\"red_star\">*</span>",
            Wnumber.innerHTML="Your number<span class=\"red_star\">*</span>",
            Wdate.innerHTML="Date of visit<span class=\"red_star\">*</span>",
            SendMA.innerHTML="Send request",
            Wtime.innerHTML="Time of visit<span class=\"red_star\">*</span>",
            Wwy.innerHTML="Here you can indicate the reason for the appeal or your wishes, if any ..."
        };
            i = 1;
    }
}
let j = 0;
function test(){
    let element = document.getElementById("bgChangeBox");
    let textColor = document.getElementById("bgChangeText");
    let textColor2 = document.getElementById("bgChangeText2");
    let textColor3 = document.getElementById("bgChangeText3");
    let textColor4 = document.getElementById("bgChangeText4");
    let textColor5 = document.getElementById("bgChangeText5");
    let textColor6 = document.getElementById("bgChangeText6");
    let textColor7 = document.getElementById("bgChangeText7");

    if(j==0){
        element.style.background='#C0C0C0';
        textColor.style.color='white';
        textColor2.style.color='white';
        textColor3.style.color='white';
        textColor4.style.color='white';
        textColor5.style.color='white';
        textColor6.style.color='white';
        textColor7.style.color='white';
        j=1;
    }
    else{
        element.style.background='white';
        textColor.style.color='#848484';
        textColor2.style.color='#848484';
        textColor3.style.color='#848484';
        textColor4.style.color='#848484';
        textColor5.style.color='#848484';
        textColor6.style.color='#848484';
        textColor7.style.color='#848484';
        j=0;
    }

}
/*Next normal code with change img*/


let localizationObjRU = {

    src: 'images/viziograf.png'
}


let localizationObjEng = {
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMO2s7pEsH7TMT67LE3I3so91dpeJoncyES8IGdVhrwjn0Xc-2&usqp=CAU'
}

let chbox = document.getElementById('checkbox3');
let img =  document.getElementById('imgVizio');



document.body.onload = fun1;


function fun1() {

    if (chbox.checked == true) {
        localization(localizationObjEng)
    }
    else {
        localization(localizationObjRU)
    }
}
function localization(obj){

    img.src = obj.src;

}





