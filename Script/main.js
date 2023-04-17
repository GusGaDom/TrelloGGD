//tareas con nombre

const numColumnas = 3
const grilla = document.querySelector(".grilla");
let categorias = ["Tareas","Compras","Ocio"];
let prioridades = ["Muy Importante","Importante","Hacerlo cuando pueda"];

function clasificacion(){
    for (i=0; i<=numColumnas-1;i++) {
       
        const columna = document.createElement("div");
        const nombreCol = document.createElement("h1");
        nombreCol.innerText = categorias[i];
        columna.id = nombreCol.innerText

        grilla.appendChild(columna);
        columna.appendChild(nombreCol);

        categorias.push (nombreCol.textContent)        
    }   
}


clasificacion();

//select de cada tarea con nombre columna

function clasificador(){
   const elegir= document.createElement("select");
   const clasifica = document.createElement("option")
   clasifica.innerText = "Dónde va?"
   elegir.appendChild(clasifica);

   for (i=0; i<numColumnas;i++) {
    const opcion = document.createElement("option")
    opcion.innerText = categorias[i]
    opcion.value = categorias[i]
    elegir.appendChild(opcion);
   }

   elegir.addEventListener("change", (e) => {
    const mover = e.target.parentElement;
    const acaVa = e.target.value;
    const donde = document.getElementById(acaVa)
    donde.appendChild(mover)
    
   });

   return elegir; 
}

//select de Prioridades

/*function priorizar(){
  const elegirP= document.createElement("select");
  const clasificaP = document.createElement("option")
  clasificaP.innerText = "Prioridad?"
  elegirP.appendChild(clasificaP);

  for (i=0; i<numColumnas;i++) {
   const opcion = document.createElement("option")
   opcion.innerText = prioridades[i]
   opcion.value = prioridades[i]
   elegirP.appendChild(opcion);
  }

  elegirP.addEventListener("change", (e) => {
   const moverP = e.target.parentElement;
   const acaVaP = e.target.value;
   const dondeP = document.getElementById(acaVaP)
   dondeP.appendChild(moverP)
   
  });

  return elegirP; 
}*/

//crear tarea

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const text = input.value;

    if(text !== ""){
  
        const li = document.createElement("li");  
        li.style.backgroundColor= "#ffffff";
        li.style.borderColor= "#cecece";

        const p = document.createElement("p");
        p.textContent = text;
         
        
//        let paleta = document.createElement("input");
//        paleta.type= "color";
//        paleta.value="#cecece";
//        paleta.addEventListener("input", event => {
//            li.style.borderColor=paleta.value ;
//            li.style.backgroundColor=paleta.value +"50";
            
//        });
        const elegirP= document.createElement("select");
        const clasificaP = document.createElement("option")
        clasificaP.innerText = "Prioridad?"
        elegirP.appendChild(clasificaP);
        for (i=0; i<numColumnas;i++) {
          const opcion = document.createElement("option")
          opcion.innerText = prioridades[i]
          opcion.value = prioridades[i]
          elegirP.appendChild(opcion);
          }

         elegirP.addEventListener("change", (e) => {
          if (e.target.value == "Muy Importante") {
            li.style.borderColor="rgb(155, 0, 0)";
            li.style.backgroundColor="rgb(255, 0, 0)";

          } else if (e.target.value == "Importante") {
            li.style.borderColor="rgb(155, 155, 0)";
            li.style.backgroundColor="rgb(255, 255, 0)";
          } else
            {li.style.borderColor="rgb(0, 155, 0)";
            li.style.backgroundColor="rgb(0, 255, 0)";
          }

          });        
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
//        li.appendChild(paleta);
        li.appendChild(elegirP);
        li.appendChild(clasificador());
        ul.appendChild(li);
        
       
        input.value = "";
        empty.style.display = "none";
      
    }
     
});


function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";    

    deleteBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        
        const li = e.target.parentElement.remove();

        var hayItem = document.querySelector("li");

        if (hayItem){
            empty.style.display = "none";
        }
        else{
            empty.style.display = "inline";
        }
        
    })
    return deleteBtn 

}