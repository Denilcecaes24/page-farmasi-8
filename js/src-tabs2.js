let currentTab = 0; // Pestaña activa por defecto
let videos = {
    0: document.getElementById('video1'),
    1: document.getElementById('video2')
};

// Función para activar una pestaña y su contenido correspondiente
function openTab(tabIndex) {
    // Cambiar pestaña activa
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content-section');
    
    // Desactivar la pestaña y su contenido anterior
    tabs[currentTab].classList.remove('active-tab');
    // Dependiendo de la pestaña, se activan los contenidos correctos
    if (currentTab === 0) {
        document.getElementById('tab1').classList.remove('active');
        document.getElementById('tab3').classList.remove('active');
    } else if (currentTab === 1) {
        document.getElementById('tab2').classList.remove('active');
        document.getElementById('tab4').classList.remove('active');
    }

    // Detener el video de la pestaña anterior (por reiniciar el src)
    let previousIframe = videos[currentTab];
    if (previousIframe) {
        previousIframe.src = previousIframe.src; // Reinicia el src para detenerlo
    }

    // Activar la nueva pestaña
    tabs[tabIndex].classList.add('active-tab');
    
    // Activar los contenidos correspondientes según la pestaña seleccionada
    if (tabIndex === 0) {
        document.getElementById('tab1').classList.add('active');
        document.getElementById('tab3').classList.add('active');
    } else if (tabIndex === 1) {
        document.getElementById('tab2').classList.add('active');
        document.getElementById('tab4').classList.add('active');
    }

    // Reproducir el video de la nueva pestaña
    let currentIframe = videos[tabIndex];
    if (currentIframe) {
        currentIframe.src = currentIframe.src; // Reinicia el src para iniciar el video
    }

    // Actualizar la pestaña activa
    currentTab = tabIndex;
}

// Iniciar con la Pestaña 1 activada
openTab(0);