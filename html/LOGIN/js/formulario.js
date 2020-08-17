
    function validar(){

    var exCorreo = document.querySelector("#correo").value;
    var exContraseña = document.querySelector("#password").value;
    
    var Correo1 = "gato@correo.com";
    var Contraseña1 = "A1234";

    var Correo2 = "perro@correo.com";
    var Contraseña2 = "B1234";

    var Correo3 = "tomate@correo.com";
    var Contraseña3 = "C1234";

    //Dice que si lo que se escribe en el imput es lo mismo que correo 1 entonces saldrá un mensaje que diga WELCOME1
    if (exCorreo===Correo1 && exContraseña===Contraseña1) {
      confirm("WELCOME1");
      //Dice que si lo que se escribe en el imput es lo mismo que correo 2 entonces saldrá un mensaje que diga WELCOME2
    }else if (exCorreo===Correo2 && exContraseña===Contraseña2) {
      confirm("WELCOME2");
        //Dice que si lo que se escribe en el imput es lo mismo que correo 3 entonces saldrá un mensaje que diga SISI
    }else if (exCorreo===Correo3 && exContraseña===Contraseña3) {
      confirm("SISI");

      //Si ninguna de las acciones anteriores coincide saldrá un mensaje que diga usuario o contraseña inválida
    }else {
      alert("Usuario o contraseña inválida");

    }
 }
document.querySelector("#iniciar").addEventListener("click", validar);
