// Asincronica
async function cargarDatos() {

    await new Promise(resolve => setTimeout(resolve, 2000));
  
    const datos = [
      { usuario: "Yuverly Verdezoto", mensaje: "Estoy Haciendo Fanarts" },
      { usuario: "Luis Guaygua", mensaje: "Miren la publicacion de este nuevo juego" },
      { usuario: "Eduardo Caza", mensaje: "Jaja Miren este nuevo Meme" }
    ];
  
    return datos;
  }

function buscarMensaje() {
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    cargarDatos().then(datos => {
        const usuarioEncontrado = datos.find(usuario => usuario.usuario === nombreUsuario);
        if (usuarioEncontrado) {
            alert(`${usuarioEncontrado.usuario}: ${usuarioEncontrado.mensaje}`);
        } else {
            alert("Usuario no encontrado");
        }
    }).catch(error => {
        console.error("Error al cargar los datos:", error);
    });
}

cargarDatos().then(datos => {
    document.getElementById("usuario1").innerText = `${datos[0].usuario}: ${datos[0].mensaje}`;
    document.getElementById("usuario2").innerText = `${datos[1].usuario}: ${datos[1].mensaje}`;
    document.getElementById("usuario3").innerText = `${datos[2].usuario}: ${datos[2].mensaje}`;
}).catch(error => {
    console.error("Error al cargar los datos:", error);
});