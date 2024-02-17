function encriptarTexto () {

   console.log(document.getElementById("texto"))
   let textoNormal = document.getElementById("texto").value;
   let mensaje = document.getElementById("mensaje");
   let parrafo = document.getElementById("parrafo");
   let candado = document.getElementById("img-candado");

   let textoCifrado = textoNormal
   .replace(/e/gi, "enter")
   .replace(/i/gi, "imes")
   .replace(/a/gi, "ai")
   .replace(/o/gi, "ober")
   .replace(/u/gi, "ufat");

   if (textoNormal.lenght != 0) {
      document.getElementById("texto").value = textoCifrado;
      mensaje.textContent = "Texto Encriptado con exito";
      parrafo.textContent = "";
      candado.src = "./Imagenes y Videos/Encriptado.png";
   } 
   else {
      candado.src = "./Imagenes y Videos/Candado.png";
      mensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oooops!", "Debes Ingresar algun texto", "warning")
   }

}

function desencriptarTexto () {
   let textoNormal = document.getElementById("texto").value;
   let mensaje = document.getElementById("mensaje");
   let parrafo = document.getElementById("parrafo");
   let candado = document.getElementById("img-candado");

   let textoCifrado = textoNormal
   .replace(/enter/gi, "e")
   .replace(/imes/gi, "i")
   .replace(/ai/gi, "a")
   .replace(/ober/gi, "o")
   .replace(/ufat/gi, "u");

   if (textoNormal.lenght != 0) {
      document.getElementById("texto").value = textoCifrado;
      mensaje.textContent = "Texto Desencriptado con exito";
      parrafo.textContent = "";
      candado.src = "./Imagenes y Videos/Desencriptado.png";
   } 
   else {
      candado.src = "./Imagenes y Videos/Candado.png";
      mensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oooops!", "Debes Ingresar algun texto", "warning")
   }

}