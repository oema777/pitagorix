import { SpeedInsights } from "@vercel/speed-insights/next"

let seccion;
let divCuadros;
let div = [];
let pnum ;
let boton;

let pn=[]


let pp= []

let pg=[]


let inicio=false;
let fin=false;
let intervalo;
let veces=0;

let numeros= [
{p:"0708158977", g: 1416317954},
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

//81-90
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

//91-100
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


let cantidadDePares=(numeros.length+20);
let cantidadSeccionesAlineadas=numeros.length/20;
let cantidadDivs= 1;

let pequenno = numeros[numeros.length-1].p;
let grande = numeros[numeros.length-1].g;

let contador=20;

let operacion = grande * grande - pequenno * pequenno;

let resultado = Math.sqrt(operacion);

let modulo = operacion % resultado;

iniciar()



function iniciar(){
    divCuadros=document.getElementById("div-cuadros")
    div[0]=document.getElementById("div1")
    
    for(i=0; i<numeros.length/20; i++){
        div[0].innerHTML+=`
        
        <section id="s${(i+1)}">
            <span id="pn">
                <p class="numeral"></p>
                <p id="pn${1+20*i}"></p>
                <p id="pn${2+20*i}"></p>
                <p id="pn${3+20*i}"></p>
                <p id="pn${4+20*i}"></p>
                <p id="pn${5+20*i}"></p>
                <p id="pn${6+20*i}"></p>
                <p id="pn${7+20*i}"></p>
                <p id="pn${8+20*i}"></p>
                <p id="pn${9+20*i}"></p>
                <p id="pn${10+20*i}"></p>
                <p id="pn${11+20*i}"></p>
                <p id="pn${12+20*i}"></p>
                <p id="pn${13+20*i}"></p>
                <p id="pn${14+20*i}"></p>
                <p id="pn${15+20*i}"></p>
                <p id="pn${16+20*i}"></p>
                <p id="pn${17+20*i}"></p>
                <p id="pn${18+20*i}"></p>
                <p id="pn${19+20*i}"></p>
                <p id="pn${20+20*i}"></p>
            </span>
            <span id="pp">
                <p class="numero-menor">Numero menor</p>
                <p id="pp${1+20*i}"></p>
                <p id="pp${2+20*i}"></p>
                <p id="pp${3+20*i}"></p>
                <p id="pp${4+20*i}"></p>
                <p id="pp${5+20*i}"></p>
                <p id="pp${6+20*i}"></p>
                <p id="pp${7+20*i}"></p>
                <p id="pp${8+20*i}"></p>
                <p id="pp${9+20*i}"></p>
                <p id="pp${10+20*i}"></p>
                <p id="pp${11+20*i}"></p>
                <p id="pp${12+20*i}"></p>
                <p id="pp${13+20*i}"></p>
                <p id="pp${14+20*i}"></p>
                <p id="pp${15+20*i}"></p>
                <p id="pp${16+20*i}"></p>
                <p id="pp${17+20*i}"></p>
                <p id="pp${18+20*i}"></p>
                <p id="pp${19+20*i}"></p>
                <p id="pp${20+20*i}"></p>
            </span>
            <span id="pg">
                <p class="numero-mayor">Numero Mayor</p>
                <p id="pg${1+20*i}"></p>
                <p id="pg${2+20*i}"></p>
                <p id="pg${3+20*i}"></p>
                <p id="pg${4+20*i}"></p>
                <p id="pg${5+20*i}"></p>
                <p id="pg${6+20*i}"></p>
                <p id="pg${7+20*i}"></p>
                <p id="pg${8+20*i}"></p>
                <p id="pg${9+20*i}"></p>
                <p id="pg${10+20*i}"></p>
                <p id="pg${11+20*i}"></p>
                <p id="pg${12+20*i}"></p>
                <p id="pg${13+20*i}"></p>
                <p id="pg${14+20*i}"></p>
                <p id="pg${15+20*i}"></p>
                <p id="pg${16+20*i}"></p>
                <p id="pg${17+20*i}"></p>
                <p id="pg${18+20*i}"></p>
                <p id="pg${19+20*i}"></p>
                <p id="pg${20+20*i}"></p>
            </span>
        </section>
        
        `
    }

    console.log("comienza con " + numeros.length + " pares")

    // if(cantidadSeccionesAlineadas==5){

    //     cantidadDivs++
    //     divCuadros.innerHTML+=`
        
    //     <div id="div${cantidadDivs}"></div>
    //     `
    //     div.push(document.getElementById("div" + cantidadDivs))
        
    //     cantidadSeccionesAlineadas=0
    //     console.log("crear div #" + cantidadDivs)
    // }
    // cantidadSeccionesAlineadas++

    // div[1].innerHTML+=`
        
    // <section id="s${(cantidadDePares/20)}" class="ultimo-predetermidado">
    //     <span id="pn" class="span-ultimo">
    //         <p class="numeral"></p>
    //         <p id="pn${numeros.length+1}" class="ultimo"></p>
    //         <p id="pn${numeros.length+2}" class="ultimo"></p>
    //         <p id="pn${numeros.length+3}" class="ultimo"></p>
    //         <p id="pn${numeros.length+4}" class="ultimo"></p>
    //         <p id="pn${numeros.length+5}" class="ultimo"></p>
    //         <p id="pn${numeros.length+6}" class="ultimo"></p>
    //         <p id="pn${numeros.length+7}" class="ultimo"></p>
    //         <p id="pn${numeros.length+8}" class="ultimo"></p>
    //         <p id="pn${numeros.length+9}" class="ultimo"></p>
    //         <p id="pn${numeros.length+10}" class="ultimo"></p>
    //         <p id="pn${numeros.length+11}" class="ultimo"></p>
    //         <p id="pn${numeros.length+12}" class="ultimo"></p>
    //         <p id="pn${numeros.length+13}" class="ultimo"></p>
    //         <p id="pn${numeros.length+14}" class="ultimo"></p>
    //         <p id="pn${numeros.length+15}" class="ultimo"></p>
    //         <p id="pn${numeros.length+16}" class="ultimo"></p>
    //         <p id="pn${numeros.length+17}" class="ultimo"></p>
    //         <p id="pn${numeros.length+18}" class="ultimo"></p>
    //         <p id="pn${numeros.length+19}" class="ultimo"></p>
    //         <p id="pn${numeros.length+20}" class="ultimo"></p>
    //     </span>
    //     <span id="pp"  class="span-ultimo">
    //         <p class="numero-menor">Numero menor</p>
    //         <p id="pp${numeros.length+1}" class="ultimo"></p>
    //         <p id="pp${numeros.length+2}" class="ultimo"></p>
    //         <p id="pp${numeros.length+3}" class="ultimo"></p>
    //         <p id="pp${numeros.length+4}" class="ultimo"></p>
    //         <p id="pp${numeros.length+5}" class="ultimo"></p>
    //         <p id="pp${numeros.length+6}" class="ultimo"></p>
    //         <p id="pp${numeros.length+7}" class="ultimo"></p>
    //         <p id="pp${numeros.length+8}" class="ultimo"></p>
    //         <p id="pp${numeros.length+9}" class="ultimo"></p>
    //         <p id="pp${numeros.length+10}" class="ultimo"></p>
    //         <p id="pp${numeros.length+11}" class="ultimo"></p>
    //         <p id="pp${numeros.length+12}" class="ultimo"></p>
    //         <p id="pp${numeros.length+13}" class="ultimo"></p>
    //         <p id="pp${numeros.length+14}" class="ultimo"></p>
    //         <p id="pp${numeros.length+15}" class="ultimo"></p>
    //         <p id="pp${numeros.length+16}" class="ultimo"></p>
    //         <p id="pp${numeros.length+17}" class="ultimo"></p>
    //         <p id="pp${numeros.length+18}" class="ultimo"></p>
    //         <p id="pp${numeros.length+19}" class="ultimo"></p>
    //         <p id="pp${numeros.length+20}" class="ultimo"></p>
    //     </span>
    //     <span id="pg" class="span-ultimo">
            
    //         <p class="numero-mayor">Numero Mayor</p>
    //         <p id="pg${numeros.length+1}" class="ultimo"></p>
    //         <p id="pg${numeros.length+2}" class="ultimo"></p>
    //         <p id="pg${numeros.length+3}" class="ultimo"></p>
    //         <p id="pg${numeros.length+4}" class="ultimo"></p>
    //         <p id="pg${numeros.length+5}" class="ultimo"></p>
    //         <p id="pg${numeros.length+6}" class="ultimo"></p>
    //         <p id="pg${numeros.length+7}" class="ultimo"></p>
    //         <p id="pg${numeros.length+8}" class="ultimo"></p>
    //         <p id="pg${numeros.length+9}" class="ultimo"></p>
    //         <p id="pg${numeros.length+10}" class="ultimo"></p>
    //         <p id="pg${numeros.length+11}" class="ultimo"></p>
    //         <p id="pg${numeros.length+12}" class="ultimo"></p>
    //         <p id="pg${numeros.length+13}" class="ultimo"></p>
    //         <p id="pg${numeros.length+14}" class="ultimo"></p>
    //         <p id="pg${numeros.length+15}" class="ultimo"></p>
    //         <p id="pg${numeros.length+16}" class="ultimo"></p>
    //         <p id="pg${numeros.length+17}" class="ultimo"></p>
    //         <p id="pg${numeros.length+18}" class="ultimo"></p>
    //         <p id="pg${numeros.length+19}" class="ultimo"></p>
    //         <p id="pg${numeros.length+20}" class="ultimo"></p>
    //     </span>
    // </section>
    
    // `;
    // aver=24
    // pnum=document.querySelectorAll(".numeral")



    // window.addEventListener("resize", ()=>{
    //     redimensionar()
    // })

    
    
    // redimensionar()
    
    
       

    
        
        
    
    
    window.addEventListener("load", ()=>{
        divCuadros.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`

        seccion=document.getElementById( "s" + (cantidadDePares/20) )
   
        for(let i=0; i<numeros.length; i++){
            pn.push(document.getElementById("pn" + (i+1)))
        }

        for(let i=0; i<numeros.length; i++){
            pp.push(document.getElementById("pp" + (i+1)))
        }

        for(let i=0; i<numeros.length; i++){
            pg.push(document.getElementById("pg" + (i+1)))
        }
        
        for(let i=0; i<numeros.length; i++){
            if(i+1<10){
                pn[i].innerHTML= "0"+(i+1);
            }else{
                pn[i].innerHTML= i+1;
            }
            pp[i].innerHTML= numeros[i].p;
            pg[i].innerHTML= numeros[i].g;
        }

        boton=document.getElementById("btn")
        boton.addEventListener("click", ()=>{

            aumentar();
            
            buscar();
        })
    })
}



function buscar(){
    
    if(!inicio){
        aumentar()
        inicio=true;
        revisar();
        console.log("el anterior numero es: " + pequenno+ " y " + grande)
        
        
    }
    
    
    
    
    
    while(modulo!=0){
        
        revisar(); 

        if(modulo==0){
          
            if(contador==20){
                    
                if(cantidadSeccionesAlineadas==5){

                    cantidadDivs++;

                    divCuadros.removeChild(divCuadros.lastChild);

                    divCuadros.innerHTML+=`
                    
                    <div id="div${cantidadDivs}"></div>
                    `;
                    div.push(document.getElementById("div" + cantidadDivs));
                    
                    divCuadros.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`;
                    boton=document.getElementById("btn");

                    boton.addEventListener("click", ()=>{

                        aumentar();
                        
                        buscar();
                    });

                    cantidadSeccionesAlineadas=0;
                    console.log("crear div #" + cantidadDivs);
                    
                }
                cantidadSeccionesAlineadas++;

                div[div.length-1]=document.getElementById("div" + cantidadDivs);
                console.log(div[1]);

                div[cantidadDivs-1].innerHTML+=`
                
                <section id="s${(numeros.length/20+1)}" style="border-bottom:1px solid black;">
                    <span id="pn">
                        <p class="numeral"></p>
                        <p id="pn${1+numeros.length}" style="display:none;"></p>
                        <p id="pn${2+numeros.length}" style="display:none;"></p>
                        <p id="pn${3+numeros.length}" style="display:none;"></p>
                        <p id="pn${4+numeros.length}" style="display:none;"></p>
                        <p id="pn${5+numeros.length}" style="display:none;"></p>
                        <p id="pn${6+numeros.length}" style="display:none;"></p>
                        <p id="pn${7+numeros.length}" style="display:none;"></p>
                        <p id="pn${8+numeros.length}" style="display:none;"></p>
                        <p id="pn${9+numeros.length}" style="display:none;"></p>
                        <p id="pn${10+numeros.length}" style="display:none;"></p>
                        <p id="pn${11+numeros.length}" style="display:none;"></p>
                        <p id="pn${12+numeros.length}" style="display:none;"></p>
                        <p id="pn${13+numeros.length}" style="display:none;"></p>
                        <p id="pn${14+numeros.length}" style="display:none;"></p>
                        <p id="pn${15+numeros.length}" style="display:none;"></p>
                        <p id="pn${16+numeros.length}" style="display:none;"></p>
                        <p id="pn${17+numeros.length}" style="display:none;"></p>
                        <p id="pn${18+numeros.length}" style="display:none;"></p>
                        <p id="pn${19+numeros.length}" style="display:none;"></p>
                        <p id="pn${20+numeros.length}" style="display:none;"></p>
                    </span>
                    <span id="pp">
                        <p class="numero-menor">Numero menor</p>
                        <p id="pp${1+numeros.length}" style="display:none;"></p>
                        <p id="pp${2+numeros.length}" style="display:none;"></p>
                        <p id="pp${3+numeros.length}" style="display:none;"></p>
                        <p id="pp${4+numeros.length}" style="display:none;"></p>
                        <p id="pp${5+numeros.length}" style="display:none;"></p>
                        <p id="pp${6+numeros.length}" style="display:none;"></p>
                        <p id="pp${7+numeros.length}" style="display:none;"></p>
                        <p id="pp${8+numeros.length}" style="display:none;"></p>
                        <p id="pp${9+numeros.length}" style="display:none;"></p>
                        <p id="pp${10+numeros.length}" style="display:none;"></p>
                        <p id="pp${11+numeros.length}" style="display:none;"></p>
                        <p id="pp${12+numeros.length}" style="display:none;"></p>
                        <p id="pp${13+numeros.length}" style="display:none;"></p>
                        <p id="pp${14+numeros.length}" style="display:none;"></p>
                        <p id="pp${15+numeros.length}" style="display:none;"></p>
                        <p id="pp${16+numeros.length}" style="display:none;"></p>
                        <p id="pp${17+numeros.length}" style="display:none;"></p>
                        <p id="pp${18+numeros.length}" style="display:none;"></p>
                        <p id="pp${19+numeros.length}" style="display:none;"></p>
                        <p id="pp${20+numeros.length}" style="display:none;"></p>
                    </span>
                    <span id="pg">
                        <p class="numero-mayor">Numero Mayor</p>
                        <p id="pg${1+numeros.length}" style="display:none;"></p>
                        <p id="pg${2+numeros.length}" style="display:none;"></p>
                        <p id="pg${3+numeros.length}" style="display:none;"></p>
                        <p id="pg${4+numeros.length}" style="display:none;"></p>
                        <p id="pg${5+numeros.length}" style="display:none;"></p>
                        <p id="pg${6+numeros.length}" style="display:none;"></p>
                        <p id="pg${7+numeros.length}" style="display:none;"></p>
                        <p id="pg${8+numeros.length}" style="display:none;"></p>
                        <p id="pg${9+numeros.length}" style="display:none;"></p>
                        <p id="pg${10+numeros.length}" style="display:none;"></p>
                        <p id="pg${11+numeros.length}" style="display:none;"></p>
                        <p id="pg${12+numeros.length}" style="display:none;"></p>
                        <p id="pg${13+numeros.length}" style="display:none;"></p>
                        <p id="pg${14+numeros.length}" style="display:none;"></p>
                        <p id="pg${15+numeros.length}" style="display:none;"></p>
                        <p id="pg${16+numeros.length}" style="display:none;"></p>
                        <p id="pg${17+numeros.length}" style="display:none;"></p>
                        <p id="pg${18+numeros.length}" style="display:none;"></p>
                        <p id="pg${19+numeros.length}" style="display:none;"></p>
                        <p id="pg${20+numeros.length}" style="display:none;"></p>
                    </span>
                </section>
                
                `;
                if(!fin){
                    fin=true
                }else{
                    cantidadDePares=cantidadDePares+20;seccion=undefined;
                }

                seccion=document.getElementById( "s" + (cantidadDePares/20) );
                console.log("crear seccion: s"+(cantidadDePares/20));

                for(let i=1; i<=20; i++){
                    pn.push(document.getElementById("pn" + (numeros.length+i)))
                    pp.push(document.getElementById("pp" + (numeros.length+i)))
                    pg.push(document.getElementById("pg" + (numeros.length+i)))
                }

                contador=0;
                pnum=document.querySelectorAll(".numeral");
            
                //redimensionar()
            }      
          
            if(numeros.length+1 ==cantidadDePares-(20-1)){
                seccion.style.display="flex";
            }else if(numeros.length+1 ==cantidadDePares){
                seccion.style.borderBottom="0px";
                console.log(pn[numeros.length])
            }
            console.log((numeros.length+1) +" "+ (cantidadDePares))
            pn[numeros.length].innerHTML= numeros.length+1;
            pn[numeros.length].style.display="inline";
            pp[numeros.length].innerHTML= pequenno;
            pp[numeros.length].style.display="inline";
            pg[numeros.length].innerHTML= grande;
            pg[numeros.length].style.display="inline";
            numeros.push({p:pequenno, g:grande});
            
            contador++;
            console.log("los numeros son: " + pequenno + " y " + grande);
        }else{
            aumentar();
        }
    }
    inicio=false;
    boton.focus()

    
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
    let peque=pequenno
    let gran=grande
    
    if(peq && gra){
        pequenno=peq+1
        grande=gra+2
        modulo=1
        while(modulo!=0){
            revisar()
            if(modulo==0){
            
                console.log("p="+ pequenno+" g="+grande)
            }else{
                aumentar()
            }
        }
        pequenno=peque
        grande=gran
    
    }else if(peq || gra){
        console.log("Falta un parámetro")
    }else{
        let aprobados=0;
        let erroneos= [];
        console.log("Ver " + numeros.length + " pares")
        for(let i=0; i<numeros.length; i++){

            pequenno=numeros[i].p;
            grande=numeros[i].g;
            revisar()
            if(modulo==0){
                aprobados++;
            }else{
                erroneos.push({numero: (i+1) ,par: numeros[i]});
            }
        }
        console.log("Aprobados : " + aprobados)
        console.log("Reprobados:")
        console.log(erroneos)
        pequenno=peque
        grande=gran
    }
}


function redimensionar(){
            if(window.innerWidth<=1001){
                pnum.forEach(titulo => {
                    titulo.innerHTML="#<br>#"
                });
            }else{
                pnum.forEach(titulo => {
                    titulo.innerHTML="#"
                });
            }
}