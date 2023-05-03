function consumirAPI(){


    console.log("INICIANDO BUSQUEDA");

    var url = 'https://restcountries.com/v3.1/independent?status=true:';
    var tablaPaises = document.getElementById("tablaPaises");
    fetch(url)
    .then(response => response.json())
    .then(json =>{

        for (item of json) {

            console.log(item.name.common);
            var fila = tablaPaises.insertRow();

            var nombreComun = fila.insertCell(0);
            nombreComun.innerHTML = item.name.common;

            var nombreOficial = fila.insertCell(1);
            nombreOficial.innerHTML = item.name.official;

            var nombreCapital = fila.insertCell(2);
            nombreCapital.innerHTML = item.capital;

            var currency = fila.insertCell(3);
            var ol = document.createElement('ol');

            if (item.currencies != null) {
                let currLength = Object.values(item.currencies).length
                for (let i = 0; i < currLength; i++) {
                    var li = document.createElement('li');
                    li.innerText = Object.values(item.currencies)[i].name;
                    ol.appendChild(li);
                }
                currency.appendChild(ol)

            } else {
                currency.innerText = "undefined"
            }
            
            var languages = fila.insertCell(4);
            var ol = document.createElement('ol');

            if (item.languages != null) {
                let langLength = Object.values(item.languages).length
                for (let i = 0; i < langLength; i++) {
                    var li = document.createElement('li');
                    li.innerText = Object.values(item.languages)[i];
                    ol.appendChild(li);
                }
                languages.appendChild(ol)

            } else {
                languages.innerText = "undefined"
            }
            
            var bandera = fila.insertCell(5);
            var urlImage = item.flag.path + "." + item.flag.extension;
            bandera.insertAdjacentHTML(
                "beforeend",
                
                `<div style="text-align: center;">

                <img src=${urlImage} alt=${item.name} width="30%">
                </div>
                ` 
            );

           /* var fila = tablaMarvel.insertRow();
            var identificadorColumna = fila.insertCell(0);
            var nombreColumna = fila.insertCell(1);
            var descripcionColumna = fila.insertCell(2);
            var imagenColumna = fila.insertCell(3);

            identificadorColumna.innerHTML = item.id;
            nombreColumna.innerHTML = item.name;
            descripcionColumna.innerHTML = item.description;
           
            var urlImage = item.thumbnail.path + "." + item.thumbnail.extension;
            console.log(urlImage); */


            /* imagenColumna.insertAdjacentHTML(
                "beforeend",
                
                `<div style="text-align: center;">

                <img src=${urlImage} alt=${item.name} width="30%">
                </div>
                ` 
            ); */
           
        }


    });
}