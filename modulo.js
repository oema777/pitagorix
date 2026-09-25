let seccion;
let menu;
let divCuadros;
let div = [];
let pnum ;
let boton;

let pn=[]   //pn definitivo
let pnT=[]  //pn temporal

let pp= []  //pn definitivo
let ppT= []  //pn temporal

let pg=[]   //pn definitivo
let pgT=[]   //pn temporal


let inicio=false;
let redimensionado=false
let buscarSiguiente= false;
let fin=false;
let intervalo;
let veces=0;

let numerosUsados=[];
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


let cantidadDePares=(numerosUsados.length+20);
let cantidadSeccionesAlineadas=numerosUsados.length/20;
let maxSeccionesAlineadas=numerosUsados.length/20;
let cantidadDivs= 1;
let totalSecciones

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

    for(i=0; i<numerosUsados.length/20; i++){
        div[0].innerHTML+=`<section id="s${(i+1)}">
            <span class="pn">
                <p class="numeral">#</p>
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
        </section>`
    }
    cantidadSeccionesAlineadas=numerosUsados.length/20;

    console.log("comienza con " + numerosUsados.length + " pares")

    
    
    // `;
    // aver=24
    // pnum=document.querySelectorAll(".numeral")



    

    
    
    
    
       

    
        
        
    
    
    window.addEventListener("load", ()=>{
        menu.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`

        seccion=document.getElementById( "s" + (cantidadDePares/20) )
   
        for(let i=0; i<numerosUsados.length; i++){
            pn.push(document.getElementById("pn" + (i+1)))
            pnT.push(document.getElementById("pn" + (i+1)))
        }

        for(let i=0; i<numerosUsados.length; i++){
            pp.push(document.getElementById("pp" + (i+1)))
            ppT.push(document.getElementById("pp" + (i+1)))
        }

        for(let i=0; i<numerosUsados.length; i++){
            pg.push(document.getElementById("pg" + (i+1)))
            pgT.push(document.getElementById("pg" + (i+1)))
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

        boton=document.getElementById("btn")
        boton.addEventListener("click", ()=>{

            buscarSiguiente=true;
            aumentar();
            buscar();
        })

        window.addEventListener("resize", ()=>{
            redimensionar()
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
                
                if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){

                    cantidadDivs++;

                    menu.removeChild(menu.lastChild);

                    divCuadros=document.getElementById("div-cuadros");
                    divCuadros.innerHTML+=`<div id="div${cantidadDivs}"></div>`;
                    div.push(document.getElementById("div" + cantidadDivs));
                    
                    menu.innerHTML+=`<div id="div-boton"><button id="btn" for="aa">siguiente</button></div>`;
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


                totalSecciones++;

                div[cantidadDivs-1].innerHTML+=`<section id="s${(numerosUsados.length/20+1)}" style="border-bottom:2px solid #560bad; margin-top:30px;" >
                    <span class="pn">
                        <p class="numeral">#</p>
                        <p id="pn${1+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${2+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${3+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${4+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${5+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${6+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${7+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${8+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${9+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${10+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${11+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${12+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${13+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${14+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${15+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${16+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${17+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${18+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${19+numerosUsados.length}" style="display:none;"></p>
                        <p id="pn${20+numerosUsados.length}" style="display:none;"></p>
                    </span>
                    <span id="pp">
                        <p class="numero-menor">Numero menor</p>
                        <p id="pp${1+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${2+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${3+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${4+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${5+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${6+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${7+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${8+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${9+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${10+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${11+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${12+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${13+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${14+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${15+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${16+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${17+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${18+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${19+numerosUsados.length}" style="display:none;"></p>
                        <p id="pp${20+numerosUsados.length}" style="display:none;"></p>
                    </span>
                    <span id="pg">
                        <p class="numero-mayor">Numero Mayor</p>
                        <p id="pg${1+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${2+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${3+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${4+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${5+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${6+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${7+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${8+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${9+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${10+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${11+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${12+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${13+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${14+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${15+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${16+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${17+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${18+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${19+numerosUsados.length}" style="display:none;"></p>
                        <p id="pg${20+numerosUsados.length}" style="display:none;"></p>
                    </span>
                </section>`;
                if(!fin){
                    fin=true
                }else{
                    cantidadDePares=cantidadDePares+20;seccion=undefined;
                }

                seccion=document.getElementById( "s" + (cantidadDePares/20) );
                console.log("crear seccion: s"+(cantidadDePares/20));

                for(let i=1; i<=20; i++){
                    pn.push(document.getElementById("pn" + (numerosUsados.length+i)))
                    pp.push(document.getElementById("pp" + (numerosUsados.length+i)))
                    pg.push(document.getElementById("pg" + (numerosUsados.length+i)))
                }

                contador=0;
                pnum=document.querySelectorAll(".numeral");
            
                //redimensionar()
            }      
          
            if(numerosUsados.length+1 ==cantidadDePares-(20-1)){
                seccion.style.display="flex";
            }else if(numerosUsados.length+1 ==cantidadDePares){
                seccion.style.borderBottom="0px";
                console.log(pn[numerosUsados.length]);
            }
            console.log((numerosUsados.length+1) +" "+ (cantidadDePares));
            
            
            pn[numerosUsados.length].innerHTML= numerosUsados.length+1;
            pn[numerosUsados.length].style.display="inline";
            pp[numerosUsados.length].innerHTML= pequenno;
            pp[numerosUsados.length].style.display="inline";
            pg[numerosUsados.length].innerHTML= grande;
            pg[numerosUsados.length].style.display="inline";
            numerosUsados.push({p:pequenno, g:grande});
            
            contador++;
            console.log("los numerosUsados son: " + pequenno + " y " + grande);
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

        revisar()
        if(modulo==0){
            console.log("numeros recibidos: aprobados");
        }else{
            console.log("numeros recibidos: reprobados");
        }

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
        console.log("Ver " + numerosUsados.length + " pares")
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
        console.log("Aprobados : " + aprobados)
        console.log("Reprobados:")
        console.log(erroneos)
        pequenno=peque
        grande=gran
    }
}


function redimensionar(){
    let maxSeccionesAlineadasPasadas        

            if(!buscarSiguiente && redimensionado){
                maxSeccionesAlineadasPasadas= maxSeccionesAlineadas;
            }

            if(window.innerWidth<=486){
                maxSeccionesAlineadas=1;
            }else if(window.innerWidth<=735){
                maxSeccionesAlineadas=2;
            }else if(window.innerWidth<=989){
                maxSeccionesAlineadas=3;
            }else if(window.innerWidth<=1243){
                maxSeccionesAlineadas=4;
            }else{
                maxSeccionesAlineadas=5;
            }
            if(!redimensionado){
                for(let i=0; i<maxSeccionesAlineadas*20; i++){
                    numerosUsados.push(numeros[i])
                }
                pequenno = numerosUsados[numerosUsados.length-1].p;
                grande = numerosUsados[numerosUsados.length-1].g;
                redimensionado=true;
            
            }else if(maxSeccionesAlineadas>maxSeccionesAlineadasPasadas){

                

                if(!buscarSiguiente){
                    
                    
                    
                    let indiceUltimoDiv=(div.length-1);
                    let cantidadSeccionesFaltantes = maxSeccionesAlineadas-maxSeccionesAlineadasPasadas;
                    let indice=indiceUltimoDiv;
                    for(i=0;i<cantidadSeccionesFaltantes; i++){
                        if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                            indice++;
                            divCuadros.innerHTML+=`<div id="div${(indice+1)}"></div>`;
                            
                        }
                        alert("for");
                        div[indice]=document.getElementById("div"+(indice+1));
                            div[indice].innerHTML+=`<section id="s${(totalSecciones+i+1)}">
                                <span class="pn">
                                    <p class="numeral">#</p>
                                    <p id="pn${1+20*(i+totalSecciones)}"></p>
                                    <p id="pn${2+20*(i+totalSecciones)}"></p>
                                    <p id="pn${3+20*(i+totalSecciones)}"></p>
                                    <p id="pn${4+20*(i+totalSecciones)}"></p>
                                    <p id="pn${5+20*(i+totalSecciones)}"></p>
                                    <p id="pn${6+20*(i+totalSecciones)}"></p>
                                    <p id="pn${7+20*(i+totalSecciones)}"></p>
                                    <p id="pn${8+20*(i+totalSecciones)}"></p>
                                    <p id="pn${9+20*(i+totalSecciones)}"></p>
                                    <p id="pn${10+20*(i+totalSecciones)}"></p>
                                    <p id="pn${11+20*(i+totalSecciones)}"></p>
                                    <p id="pn${12+20*(i+totalSecciones)}"></p>
                                    <p id="pn${13+20*(i+totalSecciones)}"></p>
                                    <p id="pn${14+20*(i+totalSecciones)}"></p>
                                    <p id="pn${15+20*(i+totalSecciones)}"></p>
                                    <p id="pn${16+20*(i+totalSecciones)}"></p>
                                    <p id="pn${17+20*(i+totalSecciones)}"></p>
                                    <p id="pn${18+20*(i+totalSecciones)}"></p>
                                    <p id="pn${19+20*(i+totalSecciones)}"></p>
                                    <p id="pn${20+20*(i+totalSecciones)}"></p>
                                </span>
                                <span id="pp">
                                    <p class="numero-menor">Numero menor</p>
                                    <p id="pp${1+20*(i+totalSecciones)}"></p>
                                    <p id="pp${2+20*(i+totalSecciones)}"></p>
                                    <p id="pp${3+20*(i+totalSecciones)}"></p>
                                    <p id="pp${4+20*(i+totalSecciones)}"></p>
                                    <p id="pp${5+20*(i+totalSecciones)}"></p>
                                    <p id="pp${6+20*(i+totalSecciones)}"></p>
                                    <p id="pp${7+20*(i+totalSecciones)}"></p>
                                    <p id="pp${8+20*(i+totalSecciones)}"></p>
                                    <p id="pp${9+20*(i+totalSecciones)}"></p>
                                    <p id="pp${10+20*(i+totalSecciones)}"></p>
                                    <p id="pp${11+20*(i+totalSecciones)}"></p>
                                    <p id="pp${12+20*(i+totalSecciones)}"></p>
                                    <p id="pp${13+20*(i+totalSecciones)}"></p>
                                    <p id="pp${14+20*(i+totalSecciones)}"></p>
                                    <p id="pp${15+20*(i+totalSecciones)}"></p>
                                    <p id="pp${16+20*(i+totalSecciones)}"></p>
                                    <p id="pp${17+20*(i+totalSecciones)}"></p>
                                    <p id="pp${18+20*(i+totalSecciones)}"></p>
                                    <p id="pp${19+20*(i+totalSecciones)}"></p>
                                    <p id="pp${20+20*(i+totalSecciones)}"></p>
                                </span>
                                <span id="pg">
                                    <p class="numero-mayor">Numero Mayor</p>
                                    <p id="pg${1+20*(i+totalSecciones)}"></p>
                                    <p id="pg${2+20*(i+totalSecciones)}"></p>
                                    <p id="pg${3+20*(i+totalSecciones)}"></p>
                                    <p id="pg${4+20*(i+totalSecciones)}"></p>
                                    <p id="pg${5+20*(i+totalSecciones)}"></p>
                                    <p id="pg${6+20*(i+totalSecciones)}"></p>
                                    <p id="pg${7+20*(i+totalSecciones)}"></p>
                                    <p id="pg${8+20*(i+totalSecciones)}"></p>
                                    <p id="pg${9+20*(i+totalSecciones)}"></p>
                                    <p id="pg${10+20*(i+totalSecciones)}"></p>
                                    <p id="pg${11+20*(i+totalSecciones)}"></p>
                                    <p id="pg${12+20*(i+totalSecciones)}"></p>
                                    <p id="pg${13+20*(i+totalSecciones)}"></p>
                                    <p id="pg${14+20*(i+totalSecciones)}"></p>
                                    <p id="pg${15+20*(i+totalSecciones)}"></p>
                                    <p id="pg${16+20*(i+totalSecciones)}"></p>
                                    <p id="pg${17+20*(i+totalSecciones)}"></p>
                                    <p id="pg${18+20*(i+totalSecciones)}"></p>
                                    <p id="pg${19+20*(i+totalSecciones)}"></p>
                                    <p id="pg${20+20*(i+totalSecciones)}"></p>
                                </span>
                            </section>`;
                            
                        
                        
                        seccion=document.getElementById( "s" + (totalSecciones+1+i) )
   


                        for(let ii=i*20; ii<(i+1)*20; ii++){
                            numerosUsados.push(numeros[totalSecciones*20+ii]);

                            pn.push( document.getElementById("pn" + (totalSecciones*20+ii+1)) );
                            pnT.push( document.getElementById("pn" + (totalSecciones*20+ii+1)) );
                            pnT[pnT.length-1].innerHTML= (totalSecciones*20+ii+1);
                            
                            pp.push( document.getElementById("pp" + (totalSecciones*20+ii+1)) );
                            ppT.push( document.getElementById("pp" + (totalSecciones*20+ii+1)) );
                            ppT[ppT.length-1].innerHTML= numerosUsados[numerosUsados.length-1].p;

                            pg.push( document.getElementById("pg" + (totalSecciones*20+ii+1)) );
                            pgT.push( document.getElementById("pg" + (totalSecciones*20+ii+1)) );
                            pgT[pgT.length-1].innerHTML= numerosUsados[numerosUsados.length-1].g;
                        }

                        
                        
                        

                    }
                    totalSecciones+=cantidadSeccionesFaltantes;
                    cantidadSeccionesAlineadas += cantidadSeccionesFaltantes;
                }
            }else if(maxSeccionesAlineadas<maxSeccionesAlineadasPasadas){
                
                let indiceUltimoDiv=(div.length-1);
                let cantidadSeccionesSobrantes = maxSeccionesAlineadasPasadas-maxSeccionesAlineadas;
                let indice=indiceUltimoDiv;
                divCuadros=document.getElementById("div-cuadros");
                console.log("f" + cantidadSeccionesSobrantes)
                
                for(let i = 0; i<cantidadSeccionesSobrantes; i++){
                    
                    if(cantidadSeccionesAlineadas==maxSeccionesAlineadas){
                        indice--;
                    }
                    
                    div[indice]= document.getElementById( "div"+(indice+1) )
                    console.log(div[indice])
                    div[indice].removeChild(div[indice].lastChild);
                    cantidadSeccionesAlineadas--;
                }

                
                let contador = cantidadSeccionesAlineadas;

                for(let i = 0; i<cantidadSeccionesSobrantes; i++){
                    
                    if(contador < maxSeccionesAlineadas){
                        contador++
                        console.log("vuelta")
                    }else{
                        contador=1
                        cantidadSeccionesAlineadas=1
                        indice++
                        cantidadDivs++
                        divCuadros.innerHTML+=`<div id="div${(indice+1)}" style="margin-top: 30px; height: 422px;"></div>`;
                    }
                    
                    div[indice]=document.getElementById("div"+(indice+1));
                    div[indice].innerHTML+=`<section id="s${(totalSecciones-cantidadSeccionesSobrantes+i+1)}">
                            <span class="pn">
                                <p class="numeral">#</p>
                                <p id="pn${1+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${2+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${3+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${4+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${5+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${6+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${7+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${8+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${9+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${10+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${11+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${12+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${13+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${14+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${15+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${16+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${17+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${18+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${19+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pn${20+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                            </span>
                            <span id="pp">
                                <p class="numero-menor">Numero menor</p>
                                <p id="pp${1+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${2+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${3+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${4+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${5+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${6+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${7+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${8+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${9+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${10+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${11+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${12+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${13+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${14+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${15+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${16+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${17+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${18+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${19+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pp${20+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                            </span>
                            <span id="pg">
                                <p class="numero-mayor">Numero Mayor</p>
                                <p id="pg${1+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${2+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${3+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${4+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${5+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${6+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${7+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${8+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${9+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${10+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${11+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${12+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${13+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${14+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${15+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${16+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${17+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${18+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${19+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                                <p id="pg${20+20*(i+totalSecciones-cantidadSeccionesSobrantes)}"></p>
                            </span>
                        </section>`;


                    let ii=0;
                    let iimantetinda=0;

                    for(ii=i*20*maxSeccionesAlineadas; ii<(i*20*maxSeccionesAlineadas)+20; ii++){
                        // numerosUsados.push(numeros[totalSecciones*20+ii]);
                        


                        console.log(i)
                        console.log(maxSeccionesAlineadas*20+ii+1);
                        pnT.push( document.getElementById("pn" + (maxSeccionesAlineadas*20+ii+1)) );
                        pnT[pnT.length-1].innerHTML= (maxSeccionesAlineadas*20+ii+1);
                        
                        ppT.push( document.getElementById("pp" + (maxSeccionesAlineadas*20+ii+1)) );
                        ppT[ppT.length-1].innerHTML= numerosUsados[numerosUsados.length-cantidadSeccionesSobrantes*20+iimantetinda+20*i].p;

                        pgT.push( document.getElementById("pg" + (maxSeccionesAlineadas*20+ii+1)) );
                        pgT[pgT.length-1].innerHTML= numerosUsados[numerosUsados.length-cantidadSeccionesSobrantes*20+iimantetinda+20*i].g;
                        
                        //console.log(iimantetinda)
                        iimantetinda++;
                    }
                }
            }
    
            
}