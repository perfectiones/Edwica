// Подключение функционала "Чертогов Фрилансера"


import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// АДРЕСА СТРАНИЦ И ИХ КОНПКИ
const   p1 = document.querySelector(".stage-1"),
p1ButtonNext = document.querySelectorAll("#stage-1_next"),
p1_2 = document.querySelector(".stage-1_2"),
p1_2ButtonNext = document.querySelectorAll("#stage-1_2_next"),
p1_2ButtonBack = document.querySelectorAll("#stage-1_2_back"),
p2 = document.querySelector(".stage-2"),
p2ButtonBack = document.querySelectorAll("#stage-2_back"),
p2ButtonNext = document.querySelectorAll("#stage-2_next"),
p2_1 = document.querySelector(".stage-2_1"),
p2_1ButtonNext = document.querySelectorAll("#stage-2_1_next"),
p2_1ButtonBack = document.querySelectorAll("#stage-2_1_back"),
p2_2 = document.querySelector(".stage-2_2"),
p2_2ButtonBack = document.querySelectorAll("#stage-2_2_back"),
p2_2ButtonNext = document.querySelectorAll("#stage-2_2_next"),
p3 = document.querySelector(".stage-3"),
p3ButtonBack = document.querySelectorAll("#stage-3_back"),
p3ButtonNext = document.querySelectorAll("#stage-3_next"),
p4 = document.querySelector(".stage-4"),
p4ButtonBack = document.querySelectorAll("#stage-4_back"),
p4ButtonNext = document.querySelectorAll("#stage-4_next"),
p5 = document.querySelector(".stage-5"),
p5ButtonBack = document.querySelectorAll("#stage-5_back"),
p5ButtonNext= document.querySelectorAll("#stage-5_next"),
p5_1ButtonBack = document.querySelectorAll("#stage-5_1_back"),
p5_1ButtonNext = document.querySelectorAll("#stage-5_1_next");

const WayStep = document.querySelectorAll(".step");
const WayCircle = document.querySelectorAll("#circle");
const WayText = document.querySelectorAll("#step-text");

const checkYes = document.querySelector("#flexRadioDefault1"),
checkNo = document.querySelector("#flexRadioDefault2"),
education = document.querySelectorAll(".education");

const pages = document.querySelectorAll(".form__wrapper");

const hideFiltr = document.querySelector("#hideFiltr");

// ССЫЛКИ НА СТРАНИЦЫ ЧЕРЕЗ WAYSTEPS

$(document).ready(function(){


    //Переход с 1 страницы на 2
    $(p1ButtonNext).click(function () {
        $(".stage-1").addClass("hide");
        $(".stage-1_2").removeClass("hide");
    })

    //Переход на 2 этап регистрации
    $(p1_2ButtonNext).click(function block2() {
        $(".stage-1_2").addClass("hide");
        $(".stage-2").removeClass("hide");
    })
    //Возвращение на 1 этап регистрации
    $(p1_2ButtonBack).click(function () {
        $(".stage-1_2").addClass("hide");
        $(".stage-1").removeClass("hide");
    })

    //Переход на 3 этап регистрации
    $(p2ButtonNext).click(function () {
        $(p2).addClass("hide");
        $(p2_1).removeClass("hide");
    })
    //Возвращение на 2 этап регистрации
    $(p2ButtonBack).click(function () {
        $(p2).addClass("hide");
        $(p1_2).removeClass("hide");
    })

    //Переход на этап 4 регистрации
    $(p2_1ButtonNext).click(function () {
        $(p2_1).addClass("hide");
        $(p2_2).removeClass("hide");
    })
    //Возвращение на этап 3
    $(p2_1ButtonBack).click(function () {
        $(p2_1).addClass("hide");
        $(p2).removeClass("hide");
    })

    //Переход на 5 этап 
    $(p2_2ButtonNext).click(function () {
        $(p2_2).addClass("hide");
        $(p3).removeClass("hide");
    })

    //Возвращение на 4 этап
    $(p2_2ButtonBack).click(function () {
        $(p2_2).addClass("hide");
        $(p2_1).removeClass("hide");
    })

    //Переход на 6 этап
    $(p3ButtonNext).click(function () {
        $(p3).addClass("hide");
        $(p4).removeClass("hide");
    })

    //Возвращение на этап 5
    $(p3ButtonBack).click(function () {
        $(p3).addClass("hide");
        $(p2_2).removeClass("hide");
    })

    //Переход на этап 7
    $(p4ButtonNext).click(function () {
        $(p4).addClass("hide");
        $(p5).removeClass("hide");
    })

    //Возвращение на этап 6
    $(p4ButtonBack).click(function () {
        $(p4).addClass("hide");
        $(p3).removeClass("hide");
    })

    $(p5ButtonBack).click(function () {
        $(p5).addClass("hide");
        $(p4).removeClass("hide");
    })

    $(".file-upload input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".file-upload__name").text(filename);
        
   });

   $(".file-upload-1 input[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $(".file-upload__name").text(filename);
    
    });

    //ЛОГО С НАЗВАНИЕМ
   $(".ulpoad-2 input[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#logo_name").text(filename);
   });

    $(".ulpoad-1 input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#logo-named").text(filename);
    });

    $(".download__cover input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#upload-cover").text(filename);
    });

    $(".logo_2 input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#logo-2_name").text(filename);
    });

    $(".cover_2 input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#cover-2_name").text(filename);
    });   
    
    $(".upload-3 input[type=file]").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".file-upload__name-1").text(filename);
    });



    for (let i = 0; i < WayStep.length; i++) {
        
        WayStep[i].addEventListener("click", function (e) {


            WayCircle.forEach((e)=> {
                e.classList.remove("active-circle");
            })
            WayText.forEach((e) => {
                e.classList.remove("active-text");
            })
            WayCircle[i].classList.add("active-circle");
            WayText[i].classList.add("active-text");
            const numb = i;
                WayCircle.forEach( (e)=> {
                    let num = Number(e.innerHTML)
                    
                    
                    if (numb >= num) {
                        e.classList.add("visited-circle");
                        
                    }else{
                        e.classList.remove("visited-circle");
                    }
                
                    if (e.classList.contains("visited-circle")) {
                       
                       
                    }
                });

               
            

        })
        
    }
    

    WayStep[0].addEventListener("click", function () {
        $(".stage-1").removeClass("hide");
        $(".stage-1_2").addClass("hide");
        $(".stage-2").addClass("hide");
        $(".stage-2_1").addClass("hide");
        $(".stage-2_2").addClass("hide");
        $(".stage-4").addClass("hide");
        $(".stage-5").addClass("hide"); 
        $(".stage-3").addClass("hide");
    })

    WayStep[1].addEventListener("click", function () {
        $(".stage-1").addClass("hide");
        $(".stage-1_2").addClass("hide");

        $(".stage-2").removeClass("hide");
        $(".stage-2_1").addClass("hide");
        $(".stage-2_2").addClass("hide");
        $(".stage-4").addClass("hide");
        $(".stage-5").addClass("hide"); 
        $(".stage-3").addClass("hide");
    })
    WayStep[2].addEventListener("click", function () {
        $(".stage-1").addClass("hide");
        $(".stage-1_2").addClass("hide");
        $(".stage-2").addClass("hide");
        $(".stage-2_1").addClass("hide");
        $(".stage-2_2").addClass("hide");
        $(".stage-4").addClass("hide");
        $(".stage-5").addClass("hide"); 

        $(".stage-3").removeClass("hide");
    })
    WayStep[3].addEventListener("click", function () {
        $(".stage-1").addClass("hide");
        $(".stage-1_2").addClass("hide");
        $(".stage-2").addClass("hide");
        $(".stage-2_1").addClass("hide");
        $(".stage-2_2").addClass("hide");
        $(".stage-3").addClass("hide");
        $(".stage-4").removeClass("hide");
        $(".stage-5").addClass("hide");
    })
    WayStep[4].addEventListener("click", function () {
        $(".stage-1").addClass("hide");
        $(".stage-1_2").addClass("hide");
        $(".stage-2").addClass("hide");
        $(".stage-2_1").addClass("hide");
        $(".stage-2_2").addClass("hide");
        $(".stage-3").addClass("hide");
        $(".stage-4").addClass("hide");

        $(".stage-5").removeClass("hide");
    })

    
  });


