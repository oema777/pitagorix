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
let fin=false;
let hayNuevos = 0;
let huboNuevos = false;
let extra = 0;
let adicion=0;
let sustraccion=0;
let intervalo;
let veces=0;
let botonListo=true;

let numerosUsados=[];
let numeros= [
{p:708158977, g: 1416317954},
{p:1044682223, g:2089364446},
{p:1381205469, g:2762410938},
{p:1416317954, g:2832635908},
{p:1787953685, g:3575907370},
{p:2089364446, g:4178728892},
{p:2390775207, g:4781550414},
{p:2461000177, g:4922000354},
{p:2531225147, g:5062450294},
{p:2762410938, g:5524821876},

{p:2832635908, g:5665271816},
{p:3134046669, g:6268093338},
{p:3274496609, g:6548993218},
{p:3575907370, g:7151814740},
{p:3877318131, g:7754636262},
{p:4017768071, g:8035536142},
{p:4178728892, g:8357457784},
{p:4480139653, g:8960279306},
{p:4620589593, g:9241179186},
{p:4781550414, g:9563100828},

{p:4922000354, g:9844000708},
{p:5062450294, g:10124900588},
{p:5082961175, g:10165922350},
{p:5223411115, g:10446822230},
{p:5363861055, g:10727722110},
{p:5524821876, g:11049643752},
{p:5665271816, g:11330543632},
{p:5826232637, g:11652465274},
{p:5966682577, g:11933365154},
{p:6247582457, g:12495164914},

{p:6268093338, g:12536186676},
{p:6548993218, g:13097986436},
{p:6569504099, g:13139008198},
{p:6850403979, g:13700807958},
{p:7151814740, g:14303629480},
{p:7453225501, g:14906451002},
{p:7754636262, g:15509272524},
{p:8035536142, g:16071072284},
{p:8056047023, g:16112094046},
{p:8336946903, g:16673893806},

{p:8357457784, g:16714915568},
{p:8658868545, g:17317737090},
{p:8939768425, g:17879536850},
{p:8960279306, g:17920558612},
{p:9241179186, g:18482358372},
{p:9261690067, g:18523380134},
{p:9542589947, g:19085179894},
{p:9563100828, g:19126201656},
{p:9823489827, g:19646979654},
{p:9844000708, g:19688001416},

{p:9864511589, g:19729023178},
{p:10124900588, g:20249801176},
{p:10145411469, g:20290822938},
{p:10165922350, g:20331844700},
{p:10426311349, g:20852622698},
{p:10446822230, g:20893644460},
{p:10727722110, g:21455444220},
{p:10748232991, g:21496465982},
{p:11029132871, g:22058265742},
{p:11049643752, g:22099287504},

{p:11330543632, g:22661087264},
{p:11351054513, g:22702109026},
{p:11631954393, g:23263908786},
{p:11652465274, g:23304930548},
{p:11933365154, g:23866730308},
{p:12193754153, g:24387508306},
{p:12234775915, g:24469551830},
{p:12495164914, g:24990329828},
{p:12536186676, g:25072373352},
{p:12796575675, g:25593151350},

//71-80
{p:12837597437, g:25675194874},
{p:13097986436, g:26195972872},
{p:13139008198, g:26278016396},
{p:13399397197, g:26798794394},
{p:13440418959, g:26880837918},
{p:13700807958, g:27401615916},
{p:14002218719, g:28004437438},
{p:14303629480, g:28607258960},
{p:14605040241, g:29210080482},
{p:14906451002, g:29812902004},

// 81-90
{p:15207861763, g:30415723526},
{p:15509272524, g:31018545048},
{p:15769661523, g:31539323046},
{p:15810683285, g:31621366570},
{p:16071072284, g:32142144568},
{p:16112094046, g:32224188092},
{p:16372483045, g:32744966090},
{p:16413504807, g:32827009614},
{p:16673893806, g:33347787612},
{p:16714915568, g:33429831136},

// 91-100
{p:16975304567, g:33950609134},
{p:17016326329, g:34032652658},
{p:17317737090, g:34635474180},
{p:17619147851, g:35238295702},
{p:17879536850, g:35759073700},
{p:17920558612, g:35841117224},
{p:18180947611, g:36361895222},
{p:18221969373, g:36443938746},
{p:18482358372, g:36964716744},
{p:18523380134, g:37046760268}
];
let numerosNuevos = [];

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
        inyectarSeccion(i,0);
    }
    cantidadSeccionesAlineadas=numerosUsados.length/20; 
    
    menu.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`;

    seccion=document.getElementById( "s" + (cantidadDePares/20) );

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
    
    
    
    aumentar();
    inicio=true;
    revisar();
    console.log("el anterior par es: " + pequenno+ " y " + grande);
    huboBoton=true;
    
    
    
    while(modulo!=0){
        
        revisar(); 

        if(modulo==0){
          
            if(contador==20){
                
                if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){

                    cantidadDivs++;

                    
                    divCuadros=document.getElementById("div-cuadros");
                    divCuadros.innerHTML+=`<div id="div${cantidadDivs}" style="margin-top:30px;"></div>`;
                    div.push(document.getElementById("div" + cantidadDivs));
                    

                    cantidadSeccionesAlineadas=0;
                    console.log("crear div #" + cantidadDivs);
                    
                }
                cantidadSeccionesAlineadas++;

                div[div.length-1]=document.getElementById("div" + cantidadDivs);
                
                cantidadSeccionesNuevas++;
                totalSecciones++;

                const indiceSeccion= ((numerosUsados.length+numerosNuevos.length)/20);
                const indiceDiv=cantidadDivs-1;
                const valorDisplay=`style="display:none;"`;
                const valorBorderSection=`style="border-bottom:2px solid #560bad;"`;

                inyectarSeccion(indiceSeccion, indiceDiv,valorDisplay, valorBorderSection);

                if(!fin){
                    fin=true;
                }else{
                    cantidadDePares+=20;
                }

                seccion=document.getElementById( "s" + (cantidadDePares/20) );
                console.log("crear seccion: s"+(cantidadDePares/20));
                
                for(let i=0; i<20; i++){
                    const indice=numerosUsados.length+numerosNuevos.length;
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
                    const indice =numerosUsados.length+i+ ( Math.floor(numerosNuevos.length/20) )*20 +extra +faltantePorContar;
                    pn[indice-1]=  document.getElementById("pn" + ( indice));
                    pp[indice-1]=  document.getElementById("pp" + ( indice));
                    pg[indice-1]=  document.getElementById("pg" + ( indice));
                }
            }      
          
            if(numerosUsados.length+1+numerosNuevos.length ==cantidadDePares){
                seccion.style.borderBottom="0px";
            }
            

            if(!hayNuevos){//(no había nuevos)
                hayNuevos=1;
                huboNuevos=true;
            }
            
            pn[numerosUsados.length+numerosNuevos.length].innerHTML= numerosUsados.length+numerosNuevos.length+1;
            pn[numerosUsados.length+numerosNuevos.length].style.display="inline";
            pp[numerosUsados.length+numerosNuevos.length].innerHTML= pequenno;
            pp[numerosUsados.length+numerosNuevos.length].style.display="inline";
            pg[numerosUsados.length+numerosNuevos.length].innerHTML= grande;
            pg[numerosUsados.length+numerosNuevos.length].style.display="inline";
            numerosNuevos.push({p:pequenno, g:grande});
            
            contador++;
        }else{
            aumentar();
        }
    }
    
    
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
        pequenno=peq+1;
        grande=gra+2;
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
                console.log("p="+ pequenno+" g="+grande);
            }else{
                aumentar();
            }
        }
        pequenno=peque;
        grande=gran;
    
    }else if(peq || gra){
        console.log("Falta un parámetro");
    }else{
        let aprobados=0;
        let erroneos= [];
        console.log("Ver " + (numerosUsados.length+numerosNuevos.length) + " pares");
        for(let i=0; i<numerosUsados.length; i++){

            pequenno=numerosUsados[i].p;
            grande=numerosUsados[i].g;
            revisar()
            if(modulo==0){
                aprobados++;
            }else{
                erroneos.push({numero: (i+1) ,par: numerosUsados[i]});
            }
        }
        for(let i=0; i<numerosNuevos.length; i++){

            pequenno=numerosNuevos[i].p;
            grande=numerosNuevos[i].g;
            revisar()
            if(modulo==0){
                aprobados++;
            }else{
                erroneos.push({numero: (i+1) ,par: numerosNuevos[i]});
            }
        }
        console.log("Aprobados : " + aprobados);
        console.log("Reprobados:");
        console.log(erroneos);
        pequenno=peque;
        grande=gran;
    }
}

function imprimir(){
    let variable= "{p:"+numerosNuevos[0].p+", g:"+numerosNuevos[0].g+"}";
    console.log(variable);
    for(let i=1; i<numerosNuevos.length; i++){
        variable +=`,
{p:${numerosNuevos[i].p}, g:${numerosNuevos[i].g}}`;
    }
    console.log(variable)
}

function redimensionar(){
    let maxSeccionesAlineadasPasadas;      
    
    if(redimensionado){
        maxSeccionesAlineadasPasadas= maxSeccionesAlineadas;
    }

    if(window.innerWidth<=486){
        maxSeccionesAlineadas=1;
    }else if(window.innerWidth<=735){
        maxSeccionesAlineadas=2;
    }else if(window.innerWidth<=989){
        maxSeccionesAlineadas=3;
    }else if(window.innerWidth<=1200){
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
        cantidadDePares=(numerosUsados.length+20);

        pequenno = numerosUsados[numerosUsados.length-1].p;
        grande = numerosUsados[numerosUsados.length-1].g;
        
        cantidadPosteriorSeccionesAlineadas=numerosUsados.length/20;
        redimensionado=true;
    
    }else if(maxSeccionesAlineadas>maxSeccionesAlineadasPasadas && cantidadDivs==1 && !huboBoton){
        
        let indiceUltimoDiv=(div.length-1);
        const cantidadSeccionesFaltantes = maxSeccionesAlineadas-maxSeccionesAlineadasPasadas;
        for(i=0;i<cantidadSeccionesFaltantes; i++){
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                indiceUltimoDiv++;
                divCuadros.innerHTML+=`<div id="div${(indiceUltimoDiv+1)}"></div>`;
                
            }
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            indexSeccion=totalSecciones+i;
            inyectarSeccion(indexSeccion, indiceUltimoDiv);
                  
            seccion=document.getElementById( "s" + (totalSecciones+1+i) );

            for(let ii=i*20; ii<(i+1)*20; ii++){
                numerosUsados.push(numeros[totalSecciones*20+ii]);

                pn.push( document.getElementById("pn" + (totalSecciones*20+ii+1)) );
                pn[pn.length-1].innerHTML= (totalSecciones*20+ii+1);
                
                pp.push( document.getElementById("pp" + (totalSecciones*20+ii+1)) );
                pp[pp.length-1].innerHTML= numerosUsados[numerosUsados.length-1].p;

                pg.push( document.getElementById("pg" + (totalSecciones*20+ii+1)) );
                pg[pg.length-1].innerHTML= numerosUsados[numerosUsados.length-1].g;
            }   
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
                divCuadros.innerHTML+=`<div id="div${(indiceUltimoDiv+1)}" style="margin-top: 30px;"></div>`;
            }
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            const indexSeccion=totalSecciones-cantidadSeccionesSobrantes+i;
            inyectarSeccion(indexSeccion, indiceUltimoDiv);
            

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
            
            if(i<=cantidadSeccionesSobrantes-cantidadSeccionesNuevas){
            
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
            if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                cantidadDivs++;
                divCuadros.innerHTML+=`<div id="div${cantidadDivs}" style="margin-top: 30px;"></div>`;
                cantidadSeccionesAlineadas=0;
                div.push( document.getElementById("div"+(cantidadDivs)) );
            }

            indexSeccion=totalSecciones+i;
            indiceDiv=cantidadDivs-1;
            valorDisplay=`style="display:none;"`;
            valorBorderSection=`style="border-bottom:2px solid #560bad;"`;

            inyectarSeccion(indexSeccion, indiceDiv, valorDisplay, valorBorderSection);
            for(let ii=0; ii<20; ii++){
                const indice = (totalSecciones+ i)*20 +ii;
                pn[indice]=document.getElementById("pn" + (indice+1));
                pp[indice]=document.getElementById("pp" + (indice+1));
                pg[indice]=document.getElementById("pg" + (indice+1));
            };
        
            cantidadSeccionesAlineadas++;
        }

        
       

        if(cantidadSeccionesSobrantes <= cantidadSeccionesNuevas){
            sustraccion = (cantidadSeccionesNuevas-cantidadSeccionesSobrantes)*20;
        }else{
            sustraccion = 0;
        }


        
        
        let contraresta=numerosNuevos.length%20;

        if(contraresta == 0 && numerosNuevos.length != 0){
            contraresta= 20;
        }
        
        
        for(i=0; i<(cantidadSeccionesNuevas-1)*20+contraresta; i++){
            const indice=numerosUsados.length+(totalSecciones*20-numerosUsados.length)+i;
            
            pn[indice].innerHTML= indice+1;
            pn[indice].style.display="inline";
            pp[indice].innerHTML= numerosNuevos[totalSecciones*20-numerosUsados.length+i].p;
            pp[indice].style.display="inline";
            pg[indice].innerHTML= numerosNuevos[totalSecciones*20-numerosUsados.length+i].g;
            pg[indice].style.display="inline";
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
                divCuadros.innerHTML+=`<div id="div${(indiceUltimoDiv+1)}" style="margin-top: 30px;"></div>`;
            }
            
            div[indiceUltimoDiv]=document.getElementById("div"+(indiceUltimoDiv+1));
            
            indexSeccion=totalSecciones-cantidadSeccionesSobrantes+i;
            inyectarSeccion(indexSeccion, indiceUltimoDiv);
            


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
        
        if(cantidadSeccionesAlineadas==maxSeccionesAlineadas && cantidadSeccionesNuevas){
            indiceUltimoDiv++;
            cantidadDivs++;
            divCuadros.innerHTML+=`<div id="div${(indiceUltimoDiv+1)}" style="margin-top: 30px; height: 422px;"></div>`;
            cantidadSeccionesAlineadas=0;
        }

        for(let i = 0; i<cantidadSeccionesNuevas; i++){
            div[cantidadDivs-1]=document.getElementById("div"+(cantidadDivs));
            
            indexSeccion=totalSecciones+i;
            indiceDiv=cantidadDivs-1;
            valorDisplay=`style="display:none;"`;
            valorBorderSection=`style="border-bottom:2px solid #560bad;"`;
            inyectarSeccion(indexSeccion, indiceDiv, valorDisplay, valorBorderSection);
            
            
            if(i<=cantidadSeccionesSobrantes-cantidadSeccionesNuevas){
            
                for(ii=0; ii<20; ii++){
                    const indice = (totalSecciones+ i)*20 +ii;
                    
                    pn[indice]=document.getElementById("pn" + ( indice+1));
                    pp[indice]=document.getElementById("pp" + ( indice+1));
                    pg[indice]=document.getElementById("pg" + ( indice+1));
                }
            }
            cantidadSeccionesAlineadas++;
        }

        
        if(huboNuevos){
            hayNuevos=0;
            extra=1;
            adicion+=20;
        }


        let contraresta=numerosNuevos.length%20;
        if(contraresta == 0 && numerosNuevos.length != 0){
            contraresta= 20;
        }

        const cantidadDeImpresion = contraresta + (cantidadSeccionesNuevas-1)*20;
        for(i=0; i<cantidadDeImpresion; i++){
            const indice = totalSecciones*20 +i;

            if(cantidadDivs==1){
                pn[indice]=document.getElementById("pn" + indice+1);
                pp[indice]=document.getElementById("pp" + indice+1);
                pg[indice]=document.getElementById("pg" + indice+1);
            }

            parNuevo=numerosUsados.length+numerosNuevos.length-contraresta-(cantidadSeccionesNuevas-1)*20+1+i;

            pn[indice].innerHTML= parNuevo;
            pn[indice].style.display="inline";
            pp[indice].innerHTML= numerosNuevos[numerosNuevos.length-cantidadDeImpresion+i].p;
            pp[indice].style.display="inline";
            pg[indice].innerHTML= numerosNuevos[numerosNuevos.length-cantidadDeImpresion+i].g;
            pg[indice].style.display="inline";
        }

        totalSecciones += cantidadSeccionesNuevas;
        cantidadSeccionesCreadas=cantidadSeccionesNuevas;
        cantidadSeccionesNuevas = 0;
        if(huboBoton){
            huboRedimensionado=true;
        }
        
    }
}

function inyectarSeccion(index, indice, Display = "", borderSection=""){
    div[indice].innerHTML+=`<section id="s${(index+1)}" ${borderSection}>
        <span class="pn">
            <p class="numeral"></p>
            <p id="pn${1+20*index}" ${Display}></p>
            <p id="pn${2+20*index}" ${Display}"></p>
            <p id="pn${3+20*index}" ${Display}"></p>
            <p id="pn${4+20*index}" ${Display}"></p>
            <p id="pn${5+20*index}" ${Display}"></p>
            <p id="pn${6+20*index}" ${Display}"></p>
            <p id="pn${7+20*index}" ${Display}"></p>
            <p id="pn${8+20*index}" ${Display}"></p>
            <p id="pn${9+20*index}" ${Display}"></p>
            <p id="pn${10+20*index}" ${Display}"></p>
            <p id="pn${11+20*index}" ${Display}"></p>
            <p id="pn${12+20*index}" ${Display}"></p>
            <p id="pn${13+20*index}" ${Display}"></p>
            <p id="pn${14+20*index}" ${Display}"></p>
            <p id="pn${15+20*index}" ${Display}"></p>
            <p id="pn${16+20*index}" ${Display}"></p>
            <p id="pn${17+20*index}" ${Display}"></p>
            <p id="pn${18+20*index}" ${Display}"></p>
            <p id="pn${19+20*index}" ${Display}"></p>
            <p id="pn${20+20*index}" ${Display}"></p>
        </span>
        <span id="pp">
            <p class="numero-menor">Cateto</p>
            <p id="pp${1+20*index}" ${Display}"></p>
            <p id="pp${2+20*index}" ${Display}"></p>
            <p id="pp${3+20*index}" ${Display}"></p>
            <p id="pp${4+20*index}" ${Display}"></p>
            <p id="pp${5+20*index}" ${Display}"></p>
            <p id="pp${6+20*index}" ${Display}"></p>
            <p id="pp${7+20*index}" ${Display}"></p>
            <p id="pp${8+20*index}" ${Display}"></p>
            <p id="pp${9+20*index}" ${Display}"></p>
            <p id="pp${10+20*index}" ${Display}"></p>
            <p id="pp${11+20*index}" ${Display}"></p>
            <p id="pp${12+20*index}" ${Display}"></p>
            <p id="pp${13+20*index}" ${Display}"></p>
            <p id="pp${14+20*index}" ${Display}"></p>
            <p id="pp${15+20*index}" ${Display}"></p>
            <p id="pp${16+20*index}" ${Display}"></p>
            <p id="pp${17+20*index}" ${Display}"></p>
            <p id="pp${18+20*index}" ${Display}"></p>
            <p id="pp${19+20*index}" ${Display}"></p>
            <p id="pp${20+20*index}" ${Display}"></p>
        </span>
        <span id="pg">
            <p class="numero-mayor">Hipotenusa</p>
            <p id="pg${1+20*index}" ${Display}"></p>
            <p id="pg${2+20*index}" ${Display}"></p>
            <p id="pg${3+20*index}" ${Display}"></p>
            <p id="pg${4+20*index}" ${Display}"></p>
            <p id="pg${5+20*index}" ${Display}"></p>
            <p id="pg${6+20*index}" ${Display}"></p>
            <p id="pg${7+20*index}" ${Display}"></p>
            <p id="pg${8+20*index}" ${Display}"></p>
            <p id="pg${9+20*index}" ${Display}"></p>
            <p id="pg${10+20*index}" ${Display}"></p>
            <p id="pg${11+20*index}" ${Display}"></p>
            <p id="pg${12+20*index}" ${Display}"></p>
            <p id="pg${13+20*index}" ${Display}"></p>
            <p id="pg${14+20*index}" ${Display}"></p>
            <p id="pg${15+20*index}" ${Display}"></p>
            <p id="pg${16+20*index}" ${Display}"></p>
            <p id="pg${17+20*index}" ${Display}"></p>
            <p id="pg${18+20*index}" ${Display}"></p>
            <p id="pg${19+20*index}" ${Display}"></p>
            <p id="pg${20+20*index}" ${Display}"></p>
        </span>
    </section>`;
}