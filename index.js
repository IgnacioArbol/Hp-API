// Controlador

function load() {
    var busqueda="http://hp-api.herokuapp.com/api/characters";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var characters=JSON.parse(this.response);
        for(var i=0;i<characters.length;i++){
          controlador(characters[i]);
        }
      }
    };
    xhttp.open("GET", busqueda, true);
    xhttp.send();
}



function buscar(localizar) {
    var casa = null;
    var busqueda="http://hp-api.herokuapp.com/api/characters";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var characters=JSON.parse(this.response);
        var opcion = document.querySelector('#select');
        for(var i=0;i<characters.length;i++){

            if(characters[i].name.toUpperCase().includes(localizar.toUpperCase())){ 

                if(opcion.selectedIndex==0){
                    controlador(characters[i]);
                }else if(opcion.selectedIndex==1){
                    casa="Gryffindor";
                        if(characters[i].house==casa){
                            controlador(characters[i]);
                        }
                }else if(opcion.selectedIndex==2){
                    casa="Slytherin";
                        if(characters[i].house==casa){
                            controlador(characters[i]);
                        }
                }else if(opcion.selectedIndex==3){
                    casa="Hufflepuff";
                        if(characters[i].house==casa){
                            controlador(characters[i]);
                        }
                }else if(opcion.selectedIndex==4){
                    casa="Ravenclaw";
                        if(characters[i].house==casa){
                            controlador(characters[i]);
                        }
                }
            }
        }
      }
    };
    xhttp.open("GET", busqueda, true);
    xhttp.send();
}
// Vista

function vista(character){
     divpadre=document.getElementById("menu");
    divpadre.style.display="flex";
    divpadre.style.flexWrap="wrap";
    divpadre.style.justifyContent="space-around";

    var div=document.createElement("div");
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.justifyContent="space-between";
    div.style.background="rgb(238,174,202)";
    div.style.background="radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    div.style.color="black";
    div.style.padding="0px";
    div.style.paddingTop="10px";
    div.style.paddingLeft="10px";
    div.style.paddingRight="10px";
    div.style.margin="30px";
    div.style.border="3px solid black";
    div.style.borderRadius="10px";
 
    
    var imagen = document.createElement("img");
    imagen.setAttribute("src",character.image);
    imagen.setAttribute("width","300px");
    imagen.setAttribute("height","auto");
    imagen.style.borderRadius="10px";

    var nombre = document.createElement("p");
    nombre.innerText= character.name;
    nombre.style.textAlign="center";
    nombre.style.justifySelf="flex-end";

    div.append(imagen);
    div.append(nombre);
    div.addEventListener("click", function(){datos(character)})
    divpadre.append(div);

    function datos(characters){
        if(document.getElementById("datos"))document.getElementById("datos").remove();
        let div=document.createElement("div");
        div.setAttribute("id","datos");
        div.style.position="relative";
        div.style.marginBottom="20%";

        

        div.addEventListener("focusout", function(){if(document.getElementById("datos")) document.getElementById("datos").remove();})

        let img=document.createElement("img");
        img.setAttribute("src", character.image);
        img.style.width="400px";

        div.append(img);
        divpadre.append(div);
    }

    
}
// Controlador

function busca(){
    divpadre.innerHTML = "";
    var localiza = document.getElementById("busqueda");
    console.log(localiza.value);
    if(localiza.value == null){
        load();
    }else{
        buscar(localiza.value);
    }
    
    
}

function controlador(characters){
    vista(characters);
}
document.addEventListener("keydown",function(event){if (event.key === "Enter") busca();})
var divpadre = " ";
