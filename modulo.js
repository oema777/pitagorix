let seccion;
let menu;
let divCuadros;
let div = [];
let pnum ;
let boton;

let pn=[];

let pp= [];

let pg=[];


let inicio=false;
let redimensionado=false;
let huboBoton=false;
let huboRedimensionado=false;
let buscarSiguiente= false;
let hayNuevos = 0;
let huboNuevos = false;
let extra = 0;
let adicion=0;
let intervalo;
let botonListo=true;

let numerosUsados=[];
let numerosNuevos = [];
const cantidadDeParesExtra=numeros.length-100;
let contadorNumerosExtra=0;

let cantidadDePares;
let cantidadSeccionesAlineadas;
let cantidadPosteriorSeccionesAlineadas;
let maxSeccionesAlineadas;
let cantidadDivs= 1;
let totalSecciones;

let cantidadSeccionesNuevas=0;
let cantidadSeccionesCreadas=0;

let pequenno;
let grande;

let contador=20;

let operacion = grande * grande - pequenno * pequenno;

let resultado = Math.sqrt(operacion);

let modulo = operacion % resultado;

iniciar()



function iniciar(){
    menu=document.getElementById("menu");
    divCuadros=document.getElementById("div-cuadros");
    div[0]=document.getElementById("div1");
    
    redimensionar();

    totalSecciones=maxSeccionesAlineadas;

    for(let i=0; i<numerosUsados.length/20; i++){
        crearSeccion(i,0);
    }
    cantidadSeccionesAlineadas=numerosUsados.length/20; 
    
    menu.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`;

    
    for(let i=0; i<numerosUsados.length; i++){
        pn.push(document.getElementById("pn" + (i+1)));
    }

    for(let i=0; i<numerosUsados.length; i++){
        pp.push(document.getElementById("pp" + (i+1)));
    }

    for(let i=0; i<numerosUsados.length; i++){
        pg.push(document.getElementById("pg" + (i+1)));
    }
    
    for(let i=0; i<numerosUsados.length; i++){
        if(i+1<10){
            pn[i].innerHTML= "0"+(i+1);
        }else{
            pn[i].innerHTML= i+1;
        }
        pp[i].innerHTML= numerosUsados[i].p;
        pg[i].innerHTML= numerosUsados[i].g;
    }

    boton=document.getElementById("btn");
    boton.addEventListener("click",accionBoton);

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
                
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){

                cantidadDivs++;

                
                divCuadros=document.getElementById("div-cuadros");
                crearDiv(cantidadDivs);
                

                cantidadSeccionesAlineadas=0;
                console.log("crear div #" + cantidadDivs);
                
            }
            cantidadSeccionesAlineadas++;

            div[div.length-1]=document.getElementById("div" + cantidadDivs);
            
            cantidadSeccionesNuevas++;
            totalSecciones++;

            const indiceSeccion= ((numerosUsados.length+contadorNumerosExtra)/20);
            const indiceDiv=cantidadDivs-1;
            const valorDisplay="none";
            const valorBorderSection="2px solid #560bad";

            crearSeccion(indiceSeccion, indiceDiv,valorDisplay, valorBorderSection);

            
            cantidadDePares+=20;
            
            seccion=document.getElementById( "s" + (cantidadDePares/20) );
            console.log("crear seccion: s"+(cantidadDePares/20));
            
            for(let i=0; i<20; i++){
                const indice=numerosUsados.length+contadorNumerosExtra;
                pn[indice+i]=document.getElementById("pn" + (indice+i+1));
                pp[indice+i]=document.getElementById("pp" + (indice+i+1));
                pg[indice+i]=document.getElementById("pg" + (indice+i+1));
            }
            contador=0;
            pnum=document.querySelectorAll(".numeral");
        
            
        }else{
            let faltantePorContar=0;
            if(!huboRedimensionado){
                faltantePorContar=1;
            }
            for(let i=0; i<20; i++){
                const indice =numerosUsados.length+i+ ( Math.floor(contadorNumerosExtra/20) )*20 +extra +faltantePorContar;
                pn[indice-1]=  document.getElementById("pn" + ( indice));
                pp[indice-1]=  document.getElementById("pp" + ( indice));
                pg[indice-1]=  document.getElementById("pg" + ( indice));
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
            pn[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosUsados.length+contadorNumerosExtra+1;
            pn[numerosUsados.length+contadorNumerosExtra].style.display="inline";
            pp[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosNuevos[contadorNumerosExtra].p;
            pp[numerosUsados.length+contadorNumerosExtra].style.display="inline";
            pg[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosNuevos[contadorNumerosExtra].g;
            pg[numerosUsados.length+contadorNumerosExtra].style.display="inline";
        }else{        

            aumentar();
            revisar();

            while(modulo!=0){
                
                revisar(); 

                if(modulo==0){
                
                    pn[numerosUsados.length+contadorNumerosExtra].innerHTML= numerosUsados.length+contadorNumerosExtra+1;
                    pn[numerosUsados.length+contadorNumerosExtra].style.display="inline";
                    pp[numerosUsados.length+contadorNumerosExtra].innerHTML= pequenno;
                    pp[numerosUsados.length+contadorNumerosExtra].style.display="inline";
                    pg[numerosUsados.length+contadorNumerosExtra].innerHTML= grande;
                    pg[numerosUsados.length+contadorNumerosExtra].style.display="inline";
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
        
        
    
    
    
    
    
    
    
    
    botonListo=true;
    
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

            if(pp[i].innerHTML==numeros[i].p && pg[i].innerHTML==numeros[i].g){
                bienCopiados++;
            }else{
                malCopiados.push({par: (i+1)});
            }
            
            if(pp[i].innerHTML!=numeros[i].p){
                malCopiados[malCopiados.length-1].cateto = numeros[i].p;
            } 
            
            if(pg[i].innerHTML!=numeros[i].g){
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
                variable+=`,\n\n{p:${numerosNuevos[maximo+i].p}, g:${numerosNuevos[maximo+i].g}}`;
            }else{
                variable +=`,\n{p:${numerosNuevos[maximo+i].p}, g:${numerosNuevos[maximo+i].g}}`;
            }
            console.log(i)
        }
        console.log("numeros en el html que no están en los datos precargados:")
        console.log(variable)
    }else{
        console.log("solo se imprimen los numeros que no están en los datos precargados, y para eso hay que sobrepasar la cantidad de pares precargados, que son: " + numeros.length);
    }

}

function redimensionar(){
    let maxSeccionesAlineadasPasadas;      
    
    if(redimensionado){
        maxSeccionesAlineadasPasadas= maxSeccionesAlineadas;
    }

    if(window.innerWidth<=500){
        maxSeccionesAlineadas=1;
    }else if(window.innerWidth<=770){
        maxSeccionesAlineadas=2;
    }else if(window.innerWidth<=1000){
        maxSeccionesAlineadas=3;
    }else if(window.innerWidth<=1270){
        maxSeccionesAlineadas=4;
    }else{
        maxSeccionesAlineadas=5;
    }

    if(maxSeccionesAlineadas>totalSecciones && huboBoton){
        if(totalSecciones<=5){
            maxSeccionesAlineadas=totalSecciones;
        }else{
            maxSeccionesAlineadas=5;
        }
    }

    if(!redimensionado){
        for(let i=0; i<maxSeccionesAlineadas*20; i++){
            numerosUsados.push(numeros[i]);
        }
        cantidadDePares=(numerosUsados.length);

        pequenno = numerosUsados[numerosUsados.length-1].p;
        grande = numerosUsados[numerosUsados.length-1].g;

        cantidadPosteriorSeccionesAlineadas=numerosUsados.length/20;
        redimensionado=true;
    
    }else if(maxSeccionesAlineadas>maxSeccionesAlineadasPasadas && cantidadDivs==1 && !huboBoton){
        
        let indiceUltimoDiv=(div.length-1);
        const cantidadSeccionesFaltantes = maxSeccionesAlineadas-maxSeccionesAlineadasPasadas;
        for(i=0;i<cantidadSeccionesFaltantes; i++){
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            const indexSeccion=totalSecciones+i;
            crearSeccion(indexSeccion, indiceUltimoDiv);
                  
            
            for(let ii=i*20; ii<(i+1)*20; ii++){
                numerosUsados.push(numeros[totalSecciones*20+ii]);

                pn.push( document.getElementById("pn" + (totalSecciones*20+ii+1)) );
                pn[pn.length-1].innerHTML= (totalSecciones*20+ii+1);
                
                pp.push( document.getElementById("pp" + (totalSecciones*20+ii+1)) );
                pp[pp.length-1].innerHTML= numerosUsados[numerosUsados.length-1].p;

                pg.push( document.getElementById("pg" + (totalSecciones*20+ii+1)) );
                pg[pg.length-1].innerHTML= numerosUsados[numerosUsados.length-1].g;
            }   
            cantidadDePares+=20;
        }

        pequenno = numerosUsados[numerosUsados.length-1].p;
        grande = numerosUsados[numerosUsados.length-1].g;
        
        totalSecciones+=cantidadSeccionesFaltantes;
        cantidadSeccionesAlineadas += cantidadSeccionesFaltantes;
        
        cantidadPosteriorSeccionesAlineadas=maxSeccionesAlineadas;
        
    }else if(maxSeccionesAlineadas<maxSeccionesAlineadasPasadas && cantidadSeccionesAlineadas > maxSeccionesAlineadas || cantidadPosteriorSeccionesAlineadas > maxSeccionesAlineadas){
        let indiceUltimoDiv=(div.length-1);
        let cantidadSeccionesSobrantes = maxSeccionesAlineadasPasadas-maxSeccionesAlineadas;
        
        if(cantidadSeccionesCreadas>0){
            cantidadSeccionesNuevas=cantidadSeccionesCreadas;
        }

        if(cantidadDivs>1){
            cantidadSeccionesSobrantes = totalSecciones - (maxSeccionesAlineadasPasadas - (maxSeccionesAlineadasPasadas- maxSeccionesAlineadas) );
        }
        
        divCuadros=document.getElementById("div-cuadros");
        for(let i = 0; i<cantidadSeccionesSobrantes; i++){
            
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas && cantidadDivs==1){
                indiceUltimoDiv--;
            }

            div[indiceUltimoDiv]= document.getElementById( "div"+(indiceUltimoDiv+1) );
            div[indiceUltimoDiv].removeChild(div[indiceUltimoDiv].lastChild);
            cantidadSeccionesAlineadas--;

            if(cantidadSeccionesAlineadas==0){
                cantidadSeccionesAlineadas=cantidadPosteriorSeccionesAlineadas;
                divCuadros.removeChild(divCuadros.lastChild);
                cantidadDivs--;
                indiceUltimoDiv--;
            }
        }

        cantidadSeccionesSobrantes -= cantidadSeccionesNuevas; 
        totalSecciones -= cantidadSeccionesNuevas;
        let contador = cantidadSeccionesAlineadas;
        
        for(let i = 0, iContada = 0; i<cantidadSeccionesSobrantes; i++){
            
            if(contador < maxSeccionesAlineadas){
                contador++;
            }else{
                contador=1;
                cantidadSeccionesAlineadas=0;
                indiceUltimoDiv++;
                cantidadDivs++;
                crearDiv(cantidadDivs);
            }
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            const indexSeccion=totalSecciones-cantidadSeccionesSobrantes+i;
            crearSeccion(indexSeccion, indiceUltimoDiv);
            

            let impresion;

            let par;

            if(totalSecciones-cantidadSeccionesSobrantes<numerosUsados.length/20 -i ){
                impresion=numerosUsados;
                par=(totalSecciones-cantidadSeccionesSobrantes+i)*20;
            }else{
                impresion=numerosNuevos;
                par=iContada*20;
                iContada++;
            }
            if(i<=cantidadSeccionesSobrantes){
            
                for(ii=0; ii<20; ii++){
                    const indice=(totalSecciones-cantidadSeccionesSobrantes+i)*20 +ii;
                    
                    pn[indice]= document.getElementById( "pn" + (indice+1) ) ;
                    pn[indice].innerHTML= (maxSeccionesAlineadas*20+ii+ 20*i+1);
                    
                    pp[indice]= document.getElementById( "pp" + ( indice+1) ) ;
                    pp[indice].innerHTML= impresion[par +ii].p;

                    pg[indice]= document.getElementById( "pg" + (indice+1) ) ;
                    pg[indice].innerHTML= impresion[par +ii].g;
                }
            }

            cantidadSeccionesAlineadas++;
            
        }

        cantidadPosteriorSeccionesAlineadas=maxSeccionesAlineadas;


        for(let i = 0; i<cantidadSeccionesNuevas; i++){
            if(totalSecciones+cantidadSeccionesNuevas-maxSeccionesAlineadas<cantidadSeccionesNuevas && i==0){
                i+=maxSeccionesAlineadasPasadas -maxSeccionesAlineadas;
            }
            
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                cantidadDivs++;
                crearDiv(cantidadDivs);
                cantidadSeccionesAlineadas=0;
            }

            const indexSeccion=totalSecciones+i;
            const indiceDiv=cantidadDivs-1;
            const valorDisplay="none";
            const valorBorderSection="2px solid #560bad";
            
            crearSeccion(indexSeccion, indiceDiv, valorDisplay, valorBorderSection);
        
            cantidadSeccionesAlineadas++;
        }

        let contraresta=contadorNumerosExtra%20;

        if(contraresta == 0 && contadorNumerosExtra != 0){
            contraresta= 20;
        }
        
        
        for(i=0; i<(cantidadSeccionesNuevas-1)*20+contraresta; i++){
            const indice=totalSecciones*20+i;
            
            pn[indice]=document.getElementById("pn" + (indice+1));
            pp[indice]=document.getElementById("pp" + (indice+1));
            pg[indice]=document.getElementById("pg" + (indice+1));

            pn[indice].innerHTML= indice+1;
            pn[indice].style.display="inline";
            pp[indice].innerHTML= numerosNuevos[totalSecciones*20-numerosUsados.length+i].p;
            pp[indice].style.display="inline";
            pg[indice].innerHTML= numerosNuevos[totalSecciones*20-numerosUsados.length+i].g;
            pg[indice].style.display="inline";

            if((i+1)%20==0){
                seccion=document.getElementById( "s" + (totalSecciones+(i+1)/20) );
                seccion.style.borderBottom="0px";
            }
        }

        totalSecciones += cantidadSeccionesNuevas;
        cantidadSeccionesCreadas=cantidadSeccionesNuevas;
        cantidadSeccionesNuevas = 0;
        if(huboBoton){
            huboRedimensionado=true;
        }
        
        if(huboNuevos){
            hayNuevos=0;
            extra=1;
            adicion++;
        }
        
        boton.blur();
        boton.focus();
        

    
    }else if(maxSeccionesAlineadas>maxSeccionesAlineadasPasadas){/* cuando hay mas de un div */
        
        let indiceUltimoDiv=(div.length-1);
        let cantidadSeccionesSobrantes = totalSecciones-maxSeccionesAlineadasPasadas;
        divCuadros=document.getElementById("div-cuadros");
        
        if(cantidadSeccionesCreadas>0){
            cantidadSeccionesNuevas=cantidadSeccionesCreadas;
        }


        for(let i = 0; i<cantidadSeccionesSobrantes; i++){
            
            if(cantidadSeccionesAlineadas==0){
                indiceUltimoDiv--;
                cantidadSeccionesAlineadas=maxSeccionesAlineadasPasadas;
                divCuadros.removeChild(divCuadros.lastChild);
                div.pop();
                cantidadDivs--;
            }
            
            div[indiceUltimoDiv]= document.getElementById( "div"+(indiceUltimoDiv+1) );
            div[indiceUltimoDiv].removeChild(div[indiceUltimoDiv].lastChild);
            cantidadSeccionesAlineadas--; 
        }
        
        indiceUltimoDiv--;
        divCuadros.removeChild(divCuadros.lastChild);
        div.pop();
        cantidadDivs--;
        cantidadSeccionesSobrantes -= cantidadSeccionesNuevas;
        totalSecciones -= cantidadSeccionesNuevas;
        

        cantidadSeccionesAlineadas = maxSeccionesAlineadasPasadas;
        cantidadPosteriorSeccionesAlineadas=maxSeccionesAlineadas;
        

        let contador = maxSeccionesAlineadasPasadas;
        for(let i = 0, iContada = 0; i<cantidadSeccionesSobrantes; i++){
            if(contador < maxSeccionesAlineadas){
                contador++;
            }else{
                contador=1;
                cantidadSeccionesAlineadas=0;
                indiceUltimoDiv++;
                cantidadDivs++;
                crearDiv(cantidadDivs);
            }
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            const indexSeccion=totalSecciones-cantidadSeccionesSobrantes+i;
            crearSeccion(indexSeccion, indiceUltimoDiv);
            


            let cantidadNumerosViejos;

            if(totalSecciones-cantidadSeccionesSobrantes==numerosUsados.length/20-cantidadSeccionesSobrantes){
                cantidadNumerosViejos=numerosUsados.length-cantidadSeccionesSobrantes*20;
            }else{
                cantidadNumerosViejos=totalSecciones*20-cantidadSeccionesSobrantes*20;
            }

            let impresion;

            let par;

            if(totalSecciones-cantidadSeccionesSobrantes<numerosUsados.length/20 -i ){
                impresion=numerosUsados;
                par=cantidadNumerosViejos + 20*i;
            }else{
                impresion=numerosNuevos;
                par=iContada*20;
                iContada++;
            }

            for(let ii=0; ii<20; ii++){
                const indice= (totalSecciones-cantidadSeccionesSobrantes+i)*20 +ii;

                pn[indice]= document.getElementById("pn" + (indice+1) );
                pn[indice].innerHTML= indice+1;
                
                pp[indice]= document.getElementById("pp" + (indice+1) );
                pp[indice].innerHTML= impresion[par +ii].p;

                pg[indice]= document.getElementById("pg" + (indice+1) );
                pg[indice].innerHTML= impresion[par +ii].g;
                
            }
            cantidadSeccionesAlineadas++;
        }

        for(let i = 0; i<cantidadSeccionesNuevas; i++){
            if(totalSecciones+cantidadSeccionesNuevas-maxSeccionesAlineadasPasadas<cantidadSeccionesNuevas && i==0){
                i+=cantidadSeccionesNuevas-(totalSecciones+cantidadSeccionesNuevas -maxSeccionesAlineadasPasadas);
            }
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                indiceUltimoDiv++;
                cantidadDivs++;
                crearDiv(cantidadDivs);
                cantidadSeccionesAlineadas=0;
            }
            div[cantidadDivs-1]=document.getElementById("div"+(cantidadDivs));
            
            const indexSeccion=totalSecciones+i;
            const indiceDiv=cantidadDivs-1;
            const valorDisplay="none";
            const valorBorderSection="2px solid #560bad";
            
            crearSeccion(indexSeccion, indiceDiv, valorDisplay, valorBorderSection);
            
            cantidadSeccionesAlineadas++;
        }

       
        if(huboNuevos){
            hayNuevos=0;
            extra=1;
            adicion+=20;
        }

        
        let contraresta=contadorNumerosExtra%20;
        if(contraresta == 0 && contadorNumerosExtra != 0){
            contraresta= 20;
        }

        const cantidadDeImpresion = contraresta + (cantidadSeccionesNuevas-1)*20;
        for(i=0; i<cantidadDeImpresion; i++){
            const indice = totalSecciones*20 +i;
            
            pn[indice]=document.getElementById("pn" + (indice+1));
            pp[indice]=document.getElementById("pp" + (indice+1));
            pg[indice]=document.getElementById("pg" + (indice+1));
            
            parNuevo=numerosUsados.length+contadorNumerosExtra-contraresta-(cantidadSeccionesNuevas-1)*20+1+i;

            pn[indice].innerHTML= parNuevo;
            pn[indice].style.display="inline";
            pp[indice].innerHTML= numerosNuevos[contadorNumerosExtra-cantidadDeImpresion+i].p;
            pp[indice].style.display="inline";
            pg[indice].innerHTML= numerosNuevos[contadorNumerosExtra-cantidadDeImpresion+i].g;
            pg[indice].style.display="inline";
            if((i+1)%20==0){
                seccion=document.getElementById( "s" + (totalSecciones+(i+1)/20) );
                seccion.style.borderBottom="0px";
            }
        }

        totalSecciones += cantidadSeccionesNuevas;
        cantidadSeccionesCreadas=cantidadSeccionesNuevas;
        cantidadSeccionesNuevas = 0;
        if(huboBoton){
            huboRedimensionado=true;
        }
        
    }
}

function crearDiv(numeroDiv){
    div[numeroDiv-1]=document.createElement("div");
    div[numeroDiv-1].id="div"+numeroDiv;
    divCuadros.appendChild(div[numeroDiv-1]);
    div[numeroDiv-1].style.marginTop="30px";
}
function crearSeccion(index, indice, display = "", borderSection=""){
    //desde aqui
    seccion=document.createElement("section");
    seccion.id="s"+(index+1);
    let pnT=[];let ppT=[];let pgT=[];
    
    const spanPN=document.createElement("span");
    const spanPP=document.createElement("span");
    const spanPG=document.createElement("span");
    spanPN.className="pn";
    spanPP.id="pp";
    spanPG.id="pg";
    
    div[indice].appendChild(seccion);
    seccion.appendChild(spanPN);
    seccion.appendChild(spanPP);
    seccion.appendChild(spanPG);

    const pNumeral=document.createElement("p");
    const pMenor=document.createElement("p");
    const pMayor=document.createElement("p");
    pNumeral.className="numeral";
    pMenor.className="numero-menor";
    pMayor.className="numero-mayor";
    spanPN.appendChild(pNumeral);
    spanPP.appendChild(pMenor);
    spanPG.appendChild(pMayor);
    pMenor.innerHTML="Cateto";
    pMayor.innerHTML="Hipotenusa";

    for(let ii=0;ii<20;ii++){
        pnT.push(document.createElement("p"));
        ppT.push(document.createElement("p"));
        pgT.push(document.createElement("p"));
        pnT[pnT.length-1].id="pn"+(1+ii+20*index);
        ppT[ppT.length-1].id="pp"+(1+ii+20*index);
        pgT[pgT.length-1].id="pg"+(1+ii+20*index);
        
        spanPN.appendChild(pnT[pnT.length-1]);
        spanPP.appendChild(ppT[ppT.length-1]);
        spanPG.appendChild(pgT[pgT.length-1]);

        pnT[pnT.length-1].style.display=display;
        ppT[ppT.length-1].style.display=display;
        pgT[pgT.length-1].style.display=display;
    }
    
    seccion.style.borderBottom=borderSection;
    //hasta aqui
}