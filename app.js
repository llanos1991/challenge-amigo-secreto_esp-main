// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //declaramos un vector vacio

function agregarAmigo( ){

    let name = document.querySelector(".input-name").value;

    if (name != ""){
        amigos.push(name);

        let lista = document.getElementById("listaAmigos");
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent= name;
        lista.appendChild(nuevaLista);

        document.querySelector(".input-name").value = "";
    }
    else{
        alert("Por favor, inserte un nombre.");
    }
    
}

function sortearAmigo(){

    if (amigos.length != 0)
    {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ` <p> Amigo elegido </p> ${amigoSeleccionado} `;
    }
    else
    {
        alert(" No se puede sortear");
    }

}