const btnStart = document.getElementById('btnStart');
const textArea = document.getElementById('textArea');
let recognition;
let silenceTimeout;

btnStart.addEventListener('click', () => {
    startRecognition();
});

function startRecognition() {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'es-ES';
    recognition.interimResult = true;

    recognition.onstart = () => {
        console.log('Comenzó la transcripción de voz.');
        clearTimeout(silenceTimeout); // Reiniciar el temporizador de silencio
    };

    recognition.onresult = (event) => {
        clearTimeout(silenceTimeout); // Reiniciar el temporizador de silencio
        const texto = event.results[event.results.length - 1][0].transcript;
        textArea.value = texto;

        // Verificar palabras clave y redirigir a páginas correspondientes
        if (texto.toLowerCase().includes('imagen lateral derecha del vehículo')) {
            window.location.href = 'lateral_derecha.html';
        } else if (texto.toLowerCase().includes('imagen de 2 llantas traseras del vehículo')) {
            window.location.href = 'llantas_traseras.html';
        } else if (texto.toLowerCase().includes('imagen lateral izquierda del vehículo')) {
            window.location.href = 'lateral_izquierda.html';
        } else if (texto.toLowerCase().includes('imagen de llanta refacción')) {
            window.location.href = 'llanta_refaccion.html';
        } else if (texto.toLowerCase().includes('imagen frontal del vehículo')) {
            window.location.href = 'frontal.html';
        } else if (texto.toLowerCase().includes('imagen de la computadora')) {
            window.location.href = 'computadora.html';
        } else if (texto.toLowerCase().includes('imagen posterior del vehículo')) {
            window.location.href = 'posterior.html';
        } else if (texto.toLowerCase().includes('imagen de la identificación de la empresa')) {
            window.location.href = 'identificacion_empresa.html';
        } else if (texto.toLowerCase().includes('imagen del engomado del vehículo')) {
            window.location.href = 'engomado.html';
        } else if (texto.toLowerCase().includes('imagen de la licencia de conducir')) {
            window.location.href = 'licencia_conducir.html';
        } else if (texto.toLowerCase().includes('imagen de las placas del vehículo')) {
            window.location.href = 'placas.html';
        } else if (texto.toLowerCase().includes('imagen del equipo epp del líder y auxiliar')) {
            window.location.href = 'equipo_epp.html';
        } else if (texto.toLowerCase().includes('imagen de la tarjeta de circulación del vehículo')) {
            window.location.href = 'tarjeta_circulacion.html';
        } else if (texto.toLowerCase().includes('imagen del dc3 del líder')) {
            window.location.href = 'dc3_lider.html';
        } else if (texto.toLowerCase().includes('imagen de las herramientas del vehículo')) {
            window.location.href = 'herramientas.html';
        } else if (texto.toLowerCase().includes('imagen del dc3 del auxiliar')) {
            window.location.href = 'dc3_auxiliar.html';
        } else if (texto.toLowerCase().includes('imagen de las herramientas de mano')) {
            window.location.href = 'herramientas_mano.html';
        } else if (texto.toLowerCase().includes('imagen del certificado del líder')) {
            window.location.href = 'certificado_lider.html';
        } else if (texto.toLowerCase().includes('imagen de 2 llantas delanteras del vehículo')) {
            window.location.href = 'llantas_delanteras.html';
        } else if (texto.toLowerCase().includes('imagen del certificado médico del auxiliar')) {
            window.location.href = 'certificado_medico_auxiliar.html';
        } else if (texto.toLowerCase().includes('imagen frontal del generador')) {
            window.location.href = 'frontal_generador.html';
        } else if (texto.toLowerCase().includes('cámara')) {
            abrirCamara();
        }
    };

    recognition.onend = () => {
        console.log('La transcripción de voz se ha detenido.');
    };

    recognition.onerror = (event) => {
        console.error('Error de reconocimiento:', event.error);
    };

    recognition.start();

    // Establecer un temporizador para detener la transcripción si no hay sonido después de 10 segundos
    silenceTimeout = setTimeout(() => {
        console.log('No se detecta ningún sonido. Deteniendo la transcripción.');
        recognition.stop();
    }, 10000); // 10 segundos
}

// Acceder a la cámara del dispositivo
function abrirCamara() {
  const videoCamara = document.getElementById('video');
  const canvas = document.getElementById('canvas');

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
              videoCamara.srcObject = stream; // Asignar el stream de la cámara al elemento <video>
              videoCamara.play(); // Reproducir la transmisión de vídeo
          })
          .catch(error => {
              console.error('Error al acceder a la cámara:', error);
          });
  }
  document.getElementById('miBoton').click();

}
