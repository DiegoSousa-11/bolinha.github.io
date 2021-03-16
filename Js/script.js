window.addEventListener("load", function(e){
    menu();
    // Atualizar data do rodapé automaticamente
    document.getElementById('copyright').innerHTML = '© ' + new Date().getUTCFullYear() + ' Bolinha | Criado por Diego de Sousa';
})

var slide_index = 1;
/* Inicio Slieders */
function removeactive(){
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn2').classList.remove('active');
    document.getElementById('btn3').classList.remove('active');
    document.getElementById('btn4').classList.remove('active');
}

// Mover para direita
function moveright() {
    if(slide_index == 1)
    {
        document.getElementById('slider').style.marginLeft = "-100%";
        removeactive();
        document.getElementById('btn2').classList.add('active');
        slide_index = 2;
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 2)
    {
        document.getElementById('slider').style.marginLeft = "-200%";
        removeactive();
        document.getElementById('btn3').classList.add('active');
        slide_index = 3;
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 3)
    {
        document.getElementById('slider').style.marginLeft = "-300%";
        removeactive();
        document.getElementById('btn4').classList.add('active');
        slide_index = 4; 
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 4)
    {
        document.getElementById('slider').style.marginLeft = "0%";
        removeactive();
        document.getElementById('btn1').classList.add('active');
        slide_index = 1; 
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
}

// Mover para a esquerda
function moveleft(){
    if(slide_index == 1)
    {
        document.getElementById('slider').style.marginLeft = "-300%";
        removeactive();
        document.getElementById('btn4').classList.add('active');
        slide_index = 4;
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 4)
    {
        document.getElementById('slider').style.marginLeft = "-200%";
        removeactive();
        document.getElementById('btn3').classList.add('active');
        slide_index = 3;
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 3)
    {
        document.getElementById('slider').style.marginLeft = "-100%";
        removeactive();
        document.getElementById('btn2').classList.add('active');
        slide_index = 2; 
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
    else if(slide_index == 2)
    {
        document.getElementById('slider').style.marginLeft = "0%";
        removeactive();
        document.getElementById('btn1').classList.add('active');
        slide_index = 1; 
        clearInterval(intervalo_banner);
        intervalo_banner = setInterval(moveright, 5000);
    }
}

// Configuração dos botões
function btn1(){
    document.getElementById('slider').style.marginLeft = "0%";
    slide_index = 1; 
    removeactive();
    document.getElementById('btn1').classList.add('active');
    clearInterval(intervalo_banner);
    intervalo_banner = setInterval(moveright, 5000);
}

function btn2(){
    document.getElementById('slider').style.marginLeft = "-100%";
    slide_index = 2;  
    removeactive();
    document.getElementById('btn2').classList.add('active');
    clearInterval(intervalo_banner);
    intervalo_banner = setInterval(moveright, 5000);
}

function btn3(){
    document.getElementById('slider').style.marginLeft = "-200%";
    slide_index = 3;
    removeactive();
    document.getElementById('btn3').classList.add('active');
    clearInterval(intervalo_banner);
    intervalo_banner = setInterval(moveright, 5000);
}

function btn4(){
    document.getElementById('slider').style.marginLeft = "-300%";
    slide_index = 4;
    removeactive();
    document.getElementById('btn4').classList.add('active');
    clearInterval(intervalo_banner);
    intervalo_banner = setInterval(moveright, 5000);
}

// Botões off e on quando o mouse esta em em cima ou fora dos sliders
function exitslider(){
    document.getElementById('arrows').style.visibility = "hidden";
}

function moveslider(){
    document.getElementById('arrows').style.visibility = "visible";
}

// Automatização dos slides
var intervalo_banner = setInterval(moveright, 5000);

/* Final do Banner */


/*Configuração menu-cel*/
function menu(){
    if(document.getElementById('menu-cel').style.height == "0px")
    {
        document.getElementById('menu-cel').style.height = "240px";
        document.getElementById('menu-cel').style.visibility = "visible";
        document.getElementById('bars').style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById('menu-cel').style.visibility = "hidden";
        document.getElementById('menu-cel').style.height = "0px";
        document.getElementById('bars').style.transform = "rotate(0deg)";
    }
}

/*Touch*/
document.querySelector('#slider').addEventListener('click', event =>{
    var tela = window.innerWidth;
    if(tela < 1501)
    {
        var x = event.clientX;
        if(x > tela/2)
        {
            moveright();
            document.getElementById('arrows').style.visibility = "hidden";
        }  
        else
        {
            moveleft();
            document.getElementById('arrows').style.visibility = "hidden";
        }
    }
})


function confirma(){
    window.location.href = "contato.html";
}
