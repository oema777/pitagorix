let seccion;
let menu;
let divCuadros;
let divnum;
let boton;

let divn=[];

let divp= [];

let divg=[];


let inicio=false;
let completado=false;
let redimensionado=false;
let huboBoton=false;
let huboRedimensionado=false;
let buscarSiguiente= false;
let hayNuevos = 0;
let huboNuevos = false;
let extra = 0;
let adicion=0;
let intervalo;

let brechaDeInterlineado=0;

let numerosUsados=[];
let numerosNuevos = [];
const cantidadDeParesExtra=numeros.length-100;
let contadorNumerosExtra=0;

let cantidadDePares;
let maxSeccionesAlineadas;
let cantidadDivs= 1;
let totalSecciones;

let cantidadSeccionesCreadas=0;

let pequenno;
let grande;

let contador=20;

let operacion = grande * grande - pequenno * pequenno;

let resultado = Math.sqrt(operacion);

let modulo = operacion % resultado;

let pNumeroMenor;
let heightPrimerDiv;

iniciar();



function iniciar(){
    menu=document.getElementById("menu");
    divCuadros=document.getElementById("div-cuadros");
    
    redimensionar();

    totalSecciones=maxSeccionesAlineadas;

    for(let i=0; i<numerosUsados.length/20; i++){
        crearSeccion(i);
    }
    
    menu.innerHTML+=`<div id="div-boton"><button id="btn">siguiente</button></div>`;

    
    for(let i=0; i<numerosUsados.length; i++){
        divn.push(document.getElementById("divn" + (i+1)));
    }

    for(let i=0; i<numerosUsados.length; i++){
        divp.push(document.getElementById("divp" + (i+1)));
    }

    for(let i=0; i<numerosUsados.length; i++){
        divg.push(document.getElementById("divg" + (i+1)));
    }
    
    for(let i=0; i<numerosUsados.length; i++){
        if(i+1<10){
            divn[i].innerHTML= "0"+(i+1);
        }else{
            divn[i].innerHTML= i+1;
        }
        divp[i].innerHTML= numerosUsados[i].p;
        divg[i].innerHTML= numerosUsados[i].g;
    }

    boton=document.getElementById("btn");
    boton.addEventListener("click",accionBoton);

    if(maxSeccionesAlineadas==5){
        completado=true;
    }

    window.addEventListener("resize", ()=>{
        redimensionar();
    })
}

function* crearContadorAsincrono() {
  yield 1; // Primera llamada permitida
  while (true) {
    yield 0; // Todas las llamadas asíncronas siguientes devolverán 0
  }
}
let despachador = crearContadorAsincrono();

function accionBoton(){
    
    if (despachador.next().value === 0) {
        return; // Si el contador del motor ya pasó de 1, la función se bloquea
    }
    boton.style.backgroundColor="#2fdac62f";
    boton.style.color="#03055e50";
    
    intervalo = setInterval(espera, 50);
    
}

function espera(){
    clearInterval(intervalo);
    
    buscarSiguiente=true;
    aumentar();
    inicio=false;
    buscar();
}

function buscar(){
    
    
    
    
    inicio=true;
    
    console.log("el anterior par es: " + pequenno+ " y " + grande);
    
    if(!huboBoton){
        const cantidadSeccionesBuscables1=100-cantidadDePares;//100 es la maxima cantidad de pares al iniciar 
        const cantidadSeccionesBuscables2=cantidadDeParesExtra;

        for(let i=0; i<cantidadSeccionesBuscables1; i++){
            numerosNuevos.push(numeros[totalSecciones*20+i]);
        }
        for(let i=0; i<cantidadSeccionesBuscables2; i++){
            numerosNuevos.push(numeros[totalSecciones*20+cantidadSeccionesBuscables1+i]);
        }

        
    }
    
    huboBoton=true;
    
        if(contador==20){
                
            
            totalSecciones++;

            const indiceSeccion= ((numerosUsados.length+contadorNumerosExtra)/20);
            const valorBorderTr="0px";

            crearSeccion(indiceSeccion,valorBorderTr);

            
            cantidadDePares+=20;
            
            seccion=document.getElementById( "s" + (cantidadDePares/20) );
            console.log("crear seccion: s"+(cantidadDePares/20));
            
            for(let i=0; i<20; i++){
                const indice=numerosUsados.length+contadorNumerosExtra;
                divn[indice+i]=document.getElementById("divn" + (indice+i+1));
                divp[indice+i]=document.getElementById("divp" + (indice+i+1));
                divg[indice+i]=document.getElementById("divg" + (indice+i+1));
            }
            contador=0;
            divnum=document.querySelectorAll(".numeral");
        

        }else{
            let faltantePorContar=0;
            if(!huboRedimensionado){
                faltantePorContar=1;
            }
            for(let i=0; i<20; i++){
                const indice =numerosUsados.length+i+ ( Math.floor(contadorNumerosExtra/20) )*20 +extra +faltantePorContar;
                divn[indice-1]=  document.getElementById("divn" + ( indice));
                divp[indice-1]=  document.getElementById("divp" + ( indice));
                divg[indice-1]=  document.getElementById("divg" + ( indice));
            }
        }      
        
        if(numerosUsados.length+1+contadorNumerosExtra ==cantidadDePares){
            seccion=document.getElementById( "s" + (cantidadDePares/20) );
            seccion.style.borderBottom="0px";
        }
        

        if(!hayNuevos){//(no había nuevos)
            hayNuevos=1;
            huboNuevos=true;
        }
        
        if(cantidadDePares<=numeros.length){
            divn[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosUsados.length+contadorNumerosExtra+1;
            divn[numerosUsados.length+contadorNumerosExtra].style.borderBottom="2px solid #560bad";
            divp[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosNuevos[contadorNumerosExtra].p;
            divp[numerosUsados.length+contadorNumerosExtra].style.borderBottom="2px solid #560bad";
            divg[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosNuevos[contadorNumerosExtra].g;
            divg[numerosUsados.length+contadorNumerosExtra].style.borderBottom="2px solid #560bad";
        }else{        

            aumentar();
            revisar();

            while(modulo!=0){
                
                revisar(); 

                if(modulo==0){
                
                    divn[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosUsados.length+contadorNumerosExtra+1;
                    divn[numerosUsados.length+contadorNumerosExtra].style.display="inline";
                    divp[numerosUsados.length+contadorNumerosExtra].innerHTML= pequenno;
                    divp[numerosUsados.length+contadorNumerosExtra].style.display="inline";
                    divg[numerosUsados.length+contadorNumerosExtra].innerHTML= grande;
                    divg[numerosUsados.length+contadorNumerosExtra].style.display="inline";
                    numerosNuevos.push({p:pequenno, g:grande});
                    
                }else{
                    aumentar();
                }
            }
        }
        pequenno = numerosNuevos[contadorNumerosExtra].p;
        grande = numerosNuevos[contadorNumerosExtra].g;
        contador++;
        contadorNumerosExtra++;
        
    
    intervalo = setInterval(espera2, 50);
    console.log("el nuevo par es: " + pequenno+ " y " + grande);

    
}

function espera2(){
    clearInterval(intervalo);
    boton.style.backgroundColor="#2fdac6";
    boton.style.color="#03045e";
    despachador = crearContadorAsincrono();
    boton.blur();
    boton.focus();
}
function aumentar(){
    grande+=2; 
    pequenno++;
}

function revisar() {
    operacion = grande * grande - pequenno * pequenno;
    resultado = Math.sqrt(operacion);
    modulo = operacion % resultado;   
}

function mensaje(peq=null,gra=null){
    const peque=pequenno;
    const gran=grande;
    
    if(peq && gra){
        pequenno=peq;
        grande=gra;
        modulo=1;

        revisar();
        if(modulo==0){
            console.log("numeros recibidos: aprobados");
        }else{
            console.log("numeros recibidos: reprobados");
        }

        while(modulo!=0){
            revisar();
            if(modulo==0){
                console.log("el siguiente par es:", "p="+ pequenno+" g="+grande);
            }else{
                aumentar();
            }
        }
        pequenno=peque;
        grande=gran;
    
    }else if(peq || gra){
        console.log("puede recibir ambos numeros o ninguno, no uno solo");
    }else{
        let aprobados=0;
        let erroneos= [];
        let numeroErroneos= "";
        
        console.log("Datos precargados: " + (numeros.length) + " pares");
        for(let i=0; i<numeros.length; i++){

            pequenno=numeros[i].p;
            grande=numeros[i].g;
            revisar()
            if(modulo==0){
                aprobados++;
            }else{
                erroneos.push({par: (i+1) ,numeros: numeros[i]});
            }
        }
        
        console.log("Aprobados : " + aprobados);
        
        if(erroneos.length==0){
            numeroErroneos= "(" + erroneos.length + ")";
        }
        console.log("Reprobados: " + numeroErroneos,erroneos);

        let bienCopiados = 0;
        let malCopiados = [];
        let numerosMalCopiados = "";

        for(let i=0; i<numerosUsados.length+contadorNumerosExtra; i++){

            if(divp[i].innerHTML==numeros[i].p && divg[i].innerHTML==numeros[i].g){
                bienCopiados++;
            }else{
                malCopiados.push({par: (i+1)});
            }
            
            if(divp[i].innerHTML!=numeros[i].p){
                malCopiados[malCopiados.length-1].cateto = numeros[i].p;
            } 
            
            if(divg[i].innerHTML!=numeros[i].g){
                malCopiados[malCopiados.length-1].hipotenusa = numeros[i].g;
            }
        }
    
        console.log("Bien copiados: " + bienCopiados);
        
        if(malCopiados.length==0){
            numerosMalCopiados="(" + malCopiados.length + ") ";
        }
        console.log("Mal copiados: " + numerosMalCopiados,malCopiados);

        pequenno=peque;
        grande=gran;
    }
}

function imprimir(){
    const maximo=numeros.length-numerosUsados.length;
    
    if(numerosNuevos.length>maximo){
        let variable= "{p:"+numerosNuevos[maximo].p+", g:"+numerosNuevos[maximo].g+"}";
        
        for(let i=1; i<contadorNumerosExtra-maximo; i++){
            if(i%10==0){
                variable+=",\n\n{p:"+numerosNuevos[maximo+i].p+", g:"+numerosNuevos[maximo+i].g+"}";
            }else{
                variable +=",\n{p:"+numerosNuevos[maximo+i].p+", g:"+numerosNuevos[maximo+i].g+"}";
            }
        }
        console.log("numeros en el html que no están en los datos precargados:");
        console.log(variable);
    }else{
        console.log("solo se imprimen los numeros que no están en los datos precargados, y para eso hay que sobrepasar la cantidad de pares precargados, que son: " + numeros.length);
    }

}

function redimensionar(){
    let maxSeccionesAlineadasPasadas;      
    
    if(redimensionado){
        maxSeccionesAlineadasPasadas= maxSeccionesAlineadas;
    }

    if(window.innerWidth<=413){
        maxSeccionesAlineadas=1;
    }else if(window.innerWidth<=647){
        maxSeccionesAlineadas=2;
    }else if(window.innerWidth<=888){
        maxSeccionesAlineadas=3;
    }else if(window.innerWidth<=1125){
        maxSeccionesAlineadas=4;
    }else{
        maxSeccionesAlineadas=5;
    }

    if(!redimensionado){
        for(let i=0; i<maxSeccionesAlineadas*20; i++){
            numerosUsados.push(numeros[i]);
        }
        cantidadDePares=(numerosUsados.length);

        pequenno = numerosUsados[numerosUsados.length-1].p;
        grande = numerosUsados[numerosUsados.length-1].g;

        redimensionado=true;
    
    }else if(maxSeccionesAlineadas>maxSeccionesAlineadasPasadas && !completado && !huboBoton){
        
        const cantidadSeccionesFaltantes = maxSeccionesAlineadas-maxSeccionesAlineadasPasadas;
        for(i=0;i<cantidadSeccionesFaltantes; i++){
            
            alert("que")
            const indexSeccion=totalSecciones+i;
            crearSeccion(indexSeccion);
                  
            
            for(let ii=i*20; ii<(i+1)*20; ii++){
                numerosUsados.push(numeros[totalSecciones*20+ii]);

                divn.push( document.getElementById("divn" + (totalSecciones*20+ii+1)) );
                divn[divn.length-1].innerHTML= (totalSecciones*20+ii+1);
                
                divp.push( document.getElementById("divp" + (totalSecciones*20+ii+1)) );
                divp[divp.length-1].innerHTML= numerosUsados[numerosUsados.length-1].p;

                divg.push( document.getElementById("divg" + (totalSecciones*20+ii+1)) );
                divg[divg.length-1].innerHTML= numerosUsados[numerosUsados.length-1].g;
            }   
            cantidadDePares+=20;
        }

        pequenno = numerosUsados[numerosUsados.length-1].p;
        grande = numerosUsados[numerosUsados.length-1].g;
        
        totalSecciones+=cantidadSeccionesFaltantes;
        
        if(maxSeccionesAlineadas==5){
            completado=true;
        }

    }

}


function crearSeccion(index, borderTr = "2px solid #560bad"){
    
    seccion=document.createElement("div");
    seccion.id="s"+(index+1);
    seccion.className="tablita";
    divCuadros=document.getElementById("div-cuadros");
    divCuadros.appendChild(seccion);

    const numeral = document.createElement("div");
    numeral.className="celda th izquierda";
    seccion.appendChild(numeral);

    const tituloCateto = document.createElement("div");
    tituloCateto.className="celda th";
    tituloCateto.innerHTML="Cateto";
    seccion.appendChild(tituloCateto);

    const tituloHipotenusa = document.createElement("div");
    tituloHipotenusa.className="celda th";
    tituloHipotenusa.innerHTML="Hipotenusa";
    seccion.appendChild(tituloHipotenusa);

    for(let i=0;i<20;i++){
        
        const numero=document.createElement("div");
        numero.id="divn"+(1+i+20*index);
        numero.className="celda izquierda";
        seccion.appendChild(numero);
        
        const cateto=document.createElement("div");
        cateto.id="divp"+(1+i+20*index);
        cateto.className="celda numero-menor";
        seccion.appendChild(cateto);

        const hipotenusa=document.createElement("div");
        hipotenusa.id="divg"+(1+i+20*index);
        hipotenusa.className="celda numero-mayor";
        seccion.appendChild(hipotenusa);

        if(i<19){
            numero.style.borderBottom=borderTr;
            cateto.style.borderBottom=borderTr;
            hipotenusa.style.borderBottom=borderTr;
        }
        
    }
}

