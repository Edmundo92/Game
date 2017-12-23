
var boxRespostas = document.querySelectorAll("input");
var perguntaBox = document.querySelector(".pergunta");
var qtAcertos = document.querySelector(".qt_acertos");
var qtTotal = document.querySelector(".qt_total");
var Respostas = document.querySelector(".respostas");
var nodes = document.querySelectorAll(".r_res");

var respostas = [];
var perguntas = [];
var vetNone = [];

var cont = 0;
var contRespostas = 1;

console.log(boxRespostas);



//respostas
var res1 = { r1: { id: 1, r: 'Palanca Negra Gigante'}, r2: { id: 2, r: 'Elefante'}, r3: { id: 3, r: 'Coala' }, r4: { id: 4, r: 'Leão'} }
var res2 = { r1: { id: 3, r: '7'}, r2: { id: 2, r: '10'}, r3: { id: 1, r: '5'}, r4: { id: 4, r: '14'} }
var res3 = { r1: { id: 4, r: 'Pedreiro'}, r2: { id: 2, r: 'Empresario'}, r3: { id: 3, r: 'Lutava na rua' },r4: { id: 1, r: 'Raboteiro'} }
var res4 = { r1: { id: 3, r: 'Paulo'}, r2: { id: 2, r: 'Edmundo'}, r3: { id: 1, r: 'Alex'}, r4: { id: 4, r: 'Domingos'} }
var res5 = { r1: { id: 3, r: 'Paulo e Gelson'}, r2: { id: 1, r: 'Paulo'}, r3: { id: 2, r: 'Gelson'},r4: { id: 4, r: 'Alex e Biunda'}}

//perguntas
var pergunta = {
    p1: { id: 1, p: 'Qual desses animais só pode ser encontrado em Angola ?'}
}
var pergunta1 = {
    p1: { id: 1, p: 'Qual é a raiz quadrada de 25 ?'}
}
var pergunta3 = {
    p1: { id: 1, p: 'Qual foi a profisão do Gelson Matias na Samba ?'}
}
var pergunta4 = {
    p1: { id: 1, p: 'Quem é o gajo mais injustiçado da casa 140 em Calomboloca ?'}
}
var pergunta5 = {
    p1: { id: 1, p: 'O Edmundo na playstation tem bolos ou bolo, diz o(s) nome(s) ?'}
}


respostas.push(res1);
respostas.push(res2);
respostas.push(res3);
respostas.push(res4);
respostas.push(res5);

perguntas.push(pergunta);
perguntas.push(pergunta1);
perguntas.push(pergunta3);
perguntas.push(pergunta4);
perguntas.push(pergunta5);


questionario(cont);

function questionario(cont){
    
    
        for(var i=0; i<nodes.length; i++){
            if(i == vetNone[0] || i == vetNone[1]){
                nodes[i].parentElement.parentElement.style.opacity = "1";
                console.log(nodes[i]);
            }
        }
    
    
    var contadorAcertos = cont + 1;
    
    if(contadorAcertos > perguntas.length){ 
        return;
    }
    
    qtAcertos.textContent = contadorAcertos;
    qtTotal.textContent = perguntas.length;
    
    
    perguntaBox.innerHTML = perguntas[cont].p1.p;
    perguntaBox.setAttribute("id", perguntas[cont].p1.id);
    
    
    for(var i=0; i<boxRespostas.length; i++){
    
        var box = boxRespostas[i].parentElement.parentElement.querySelector(".r_res");
        if(i == 0){
            box.innerHTML = respostas[cont].r1.r;
            box.setAttribute("id", respostas[cont].r1.id);
        }else if(i == 1){
            box.innerHTML = respostas[cont].r2.r;
            box.setAttribute("id", respostas[cont].r2.id);
        }else if(i == 2){
            box.innerHTML = respostas[cont].r3.r;
            box.setAttribute("id", respostas[cont].r3.id);
        }else if(i == 3){
            box.innerHTML = respostas[cont].r4.r;
            box.setAttribute("id", respostas[cont].r4.id);
        }

    }
    
    
    
}


Respostas.addEventListener("click", event =>{
    
    var elementPai = event.target.parentElement.parentElement;
    
    var elementTarget = elementPai.querySelector("input");
    var boxRes = elementPai.querySelector(".r_res");
    
    
    if(boxRes.id == perguntaBox.id){
        elementPai.classList.add("green");
        elementTarget.setAttribute("checked", "checked");
        cont ++;
        
        setCont(cont);
        
        setTimeout(function(){ 
            elementPai.classList.toggle("green");
            elementTarget.removeAttribute("checked");
            questionario(cont);
            
        }, 2000);

    }else{
        elementPai.classList.add("red");
        elementTarget.setAttribute("checked", "checked");
        cont = 0;
        setTimeout(function(){
            elementPai.classList.toggle("red");
            elementTarget.removeAttribute("checked");
            questionario(cont);
        }, 2000);
    }
    
    //questionario(cont);
    
});

var a1 = document.querySelector(".a_1");
var r = document.querySelectorAll(".r");
var r_1 = document.querySelector(".r_1");
var r_2 = document.querySelector(".r_2");
var r_3 = document.querySelector(".r_3");
var r_4 = document.querySelector(".r_4");
var ajuda1 = document.querySelector(".ajuda_1");
var ajuda2 = document.querySelector(".ajuda_2");
var fundo = document.querySelector(".fundo");
var close = document.querySelectorAll(".close");
var aBody = document.querySelector(".a_body");
var rPerc = document.querySelectorAll(".r_perc");
var num1, num2, num3, num4;

a1.addEventListener("click", function(){
    fundo.classList.toggle("none");
    setTimeout(function(){ ajuda1.classList.toggle("slide"); }, 1000);
    
    var k = verificar();
        c = 0;
        var contagem = 0;

        r.forEach(el =>{
        var pegarId = el.querySelector(".r_res");
       
        if(pegarId.id == 1){
            contagem = c;
            console.log("id igual a 1"+" cont"+contagem);
           
           colocarPercentTable(contagem, k);
       }
       c++;
    });
    
    a1.setAttribute("disabled","disabled")
    //aBody.textContent = k.v1;
    
});

close.forEach(function(k){
    k.addEventListener("click", function(event){
        var x = event.target;
        if(x.parentElement.id == "close"){
           ajuda2.classList.toggle("slide");
         }else{
             ajuda1.classList.toggle("slide");
         } 
         setTimeout(function(){ fundo.classList.toggle("none"); }, 1500);
    });
});


//gera numeros aleatorios
function getRandom(max) {
    return Math.floor(Math.random() * max + 1);
}

function verificar(){
    var soma = 0;
    var percent_max = 0;
    var valores = {};
    
    while(percent_max !== 100){
        
        num1 = getRandom(100);
        num2 = getRandom(100);
        num3 = getRandom(100);
        num4 = getRandom(100);
        
        soma = num1 + num2 + num3 + num4;
        
        if(soma == 100){
            if(num1 > num2 && num1 > num3 && num1 > num4){
                return valores = {
                    v1: num1,
                    v2: num2,
                    v3: num3,
                    v4: num4
                };
            }
        }
    }
}

function colocarPercentTable(contagem, k){
    
    console.log("Contagem -> "+contagem);
    for(var i=0; i<rPerc.length; i++){
        if(i == contagem){
            rPerc[i].textContent = k.v1+" %";
            rPerc[i].style.width = k.v1+"%"
        }else if(rPerc.childElementCount == 0){
            rPerc[i].textContent = k.v2+" %";
            rPerc[i].style.width = k.v2+"%"
        }else if(rPerc.childElementCount == 0){
            rPerc[i].textContent = k.v3+" %";
            rPerc[i].style.width = k.v3+"%"
        }else if(rPerc.childElementCount == 0){
            rPerc[i].textContent = k.v4+" %";
            rPerc[i].style.width = k.v4+"%"
        }else if(i == 0 && i != contagem){
            
        }
    }
    
    
//    r_2.textContent = k.v2+" %";
//    r_2.style.width = k.v2+"%"
//    
//    r_3.textContent = k.v3+" %";
//    r_3.style.width = k.v3+"%"
//    
//    r_4.textContent = k.v4+" %";
//    r_4.style.width = k.v4+"%";
}


//funcao pular questao
var a_3 = document.querySelector(".a_3");
a_3.addEventListener("click", function(){
    
    var contador = setCont(cont);
    questionario(contador + 1);
    
    a_3.setAttribute("disabled", "disable");
    
});

function  setCont(cont){
    return cont;
}



//funcao 50/50
var a_2 = document.querySelector(".a_2");
a_2.addEventListener("click", function(){
    var vet = [];
    
    for(var i=0; i<nodes.length; i++){
        if(nodes[i].id == 1){
            vet.push(i);
        }
    }
    
    var bool = 0;
    while(bool == 0){
        var k = getRandom(4);
        console.log(k);
        if(k !== vet[0]){
            vet.push(k);
            console.log(vet);
            bool++;
        }else{
            bool = 0;
        }
    }
                     
    console.log(vet);
    for(var i=0; i<nodes.length; i++){
        if(i !== vet[0] && i !== vet[1]){
            nodes[i].parentElement.parentElement.style.opacity = "0";
            vetNone.push(i);
        }
    }
    
    
    a_2.setAttribute("disabled", "disable");
    
});




//funcao chamada
var a_4 = document.querySelector(".a_4");
a_4.addEventListener("click", function(){
    fundo.classList.toggle("none");
    setTimeout(function(){ ajuda2.classList.toggle("slide"); }, 1000);
});  
