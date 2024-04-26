

function calculoPanelesEnTecho() {
    //Función para limpiar los inputs

    function limpiarCampos() {
        document.getElementById('altoTecho').value = '';
        document.getElementById('baseTecho').value = '';
        document.getElementById('altoPanel').value = '';
        document.getElementById('basePanel').value = '';
      }

    //Obtener base y altura del techo
    const altoTecho = parseFloat(document.querySelector('input[name="altoTecho"]').value);

    const baseTecho = parseFloat(document.querySelector('input[name="baseTecho"]').value);

    //Obtener base y altura del panel solar
    const altoPanel  = parseFloat(document.querySelector('input[name= "altoPanel"]').value);
    const basePanel = parseFloat(document.querySelector('input[name="basePanel"]').value);
    
    //Calcular área del techo
    const areaTecho = altoTecho*baseTecho;

    //Calcular área del panel solar
    const areaPanel = altoPanel * basePanel;

    //Validación que el área del panel no sea mayor al área del techo
    if (areaPanel > areaTecho){
        document.querySelector('#resultado').textContent = "Los paneles son muy grandes y no caben en tu techo";
        limpiarCampos();
    return
    }


    //Calcular la cantidad de paneles que caben en el techo
    const cantidadDePaneles = Math.floor(areaTecho/areaPanel);

    //Mostrar resultado en HTML
    if (cantidadDePaneles === 1){
        document.querySelector('h3').textContent = `Cabe ${cantidadDePaneles} panel solar en el techo`;
    }else if(cantidadDePaneles===0){
    document.querySelector('h3').textContent = `Esos paneles solares no caben en tu techo:(`;
    }else{
        document.querySelector('h3').textContent = `Caben ${cantidadDePaneles} paneles solares en el techo`;
    };

    limpiarCampos();

};