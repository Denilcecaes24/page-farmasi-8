 // Función para mostrar el contenido correspondiente
 function showContentt(tabIndex) {
    // Ocultar todos los contenidos
    const contents1 = document.querySelectorAll('.tab-contentt');
    contents1.forEach(content => content.classList.remove('active-contentt'));

    // Eliminar la clase activa de las pestañas
    const tabs1 = document.querySelectorAll('.tabb1');
    tabs1.forEach(tab => tab.classList.remove('active-tabb1'));

    // Mostrar el contenido correspondiente
    document.getElementById('contentt' + tabIndex).classList.add('active-contentt');

    // Agregar la clase activa a la pestaña seleccionada
    tabs1[tabIndex - 1].classList.add('active-tabb1');
  }