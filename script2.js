document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const botonTomarFoto = document.getElementById('boton-tomar-foto');
  
    // Acceder a la cámara del dispositivo
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          video.srcObject = stream;
          video.play();
        })
        .catch(error => {
          console.error('Error al acceder a la cámara:', error);
        });
    }
  
    // Función para capturar y mostrar la foto
    function capturarFoto() {
      // Esperar un breve momento para asegurarnos de que el video esté listo
      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Mostrar la imagen capturada en un elemento <img>
        const imgCapturada = document.getElementById('imagen-capturada');
        imgCapturada.src = canvas.toDataURL('image/png');
      }, 100);
    }
  
    // Evento click del botón para capturar la foto
    botonTomarFoto.addEventListener('click', capturarFoto);
  });