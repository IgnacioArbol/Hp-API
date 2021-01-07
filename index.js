// Controlador

function load() {
    var busqueda="https://hp-api.herokuapp.com/api/characters";
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
    var busqueda="https://hp-api.herokuapp.com/api/characters";
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

    function datos(character){
        if(document.getElementById("datos"))document.getElementById("datos").remove();
        let div=document.createElement("div");
        div.setAttribute("id","datos");
        div.style.position="sticky";
        div.style.bottom="0";
        div.style.display="flex";
        div.style.flexDirection="column";
        div.style.background="white";
        div.style.height="600px";
        div.style.width="600px";
        div.style.margin="auto";
        div.style.border="2px solid black";
        

        

        div.addEventListener("focusout", function(){if(document.getElementById("datos")) document.getElementById("datos").remove();})

        let img=document.createElement("img");
        img.setAttribute("src", character.image);
        img.style.width="200px";
        img.style.padding="10px";

        

        let divarriba=document.createElement("div");
        divarriba.setAttribute("id","arriba");
        divarriba.style.display="flex";
        divarriba.style.justifyContent="space-between";
        

        let datosarriba=document.createElement("div");
        datosarriba.style.marginRight="80px";
        datosarriba.style.marginTop="50px";

        let nombre = document.createElement("p");
        let especie = document.createElement("p");
        let genero = document.createElement("p");
        let casa= document.createElement("p");
        let fecha= document.createElement("p");
        let antepasados= document.createElement("p");


        nombre.innerText="Name= "+character.name;
        especie.innerText="species= "+character.species;
        genero.innerText="gender= "+character.gender;
        casa.innerText="House= "+character.house;
        fecha.innerText="Date= "+character.dateOfBirth;
        antepasados.innerText="Ancestry= "+character.ancestry;

        datosarriba.appendChild(nombre);
        datosarriba.appendChild(especie);
        datosarriba.appendChild(genero);
        datosarriba.appendChild(casa);
        datosarriba.appendChild(fecha);
        datosarriba.appendChild(antepasados);

        divarriba.appendChild(img);
        divarriba.appendChild(datosarriba);
        div.append(divarriba);
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
