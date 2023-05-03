function consumirAPI(){


    console.log("INICIANDO BUSQUEDA");

    var apikey = "be73fca609554a6b86ea60694f0dbade";
    var ts = "1000";
    var hash = "18411005f1b18437240534a687b93894";
    var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;
    var tablaMarvel = document.getElementById("tablaMarvel");
    fetch(url)
    .then(response => response.json())
    .then(json =>{

        for (item of json.data.results) {

            var fila = tablaMarvel.insertRow();
            var identificadorColumna = fila.insertCell(0);
            var nombreColumna = fila.insertCell(1);
            var descripcionColumna = fila.insertCell(2);
            var imagenColumna = fila.insertCell(3);

            identificadorColumna.innerHTML = item.id;
            nombreColumna.innerHTML = item.name;
            descripcionColumna.innerHTML = item.description;
           
            var urlImage = item.thumbnail.path + "." + item.thumbnail.extension;
            console.log(urlImage);


            imagenColumna.insertAdjacentHTML(
                "beforeend",
                
                `<div style="text-align: center;">

                <img src=${urlImage} alt=${item.name} width="30%">
                </div>
                ` 
            );
           
        }


    });
}