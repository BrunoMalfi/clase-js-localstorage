console.log('----------start ejercicio Local Sotrage ---------')
let userId = 0 ; 
const submitbtn1 = document.getElementById('submit1')
const resetbtn1 = document.getElementById('reset1')
const inputName = document.getElementById('nombre')
const inputCorreo = document.getElementById('correo')
const inputMensaje = document.getElementById('mensaje')
const localStorageParagraphOutput = document.getElementById('localStorageParagraphOutput')
const localStorageDivSection = document.getElementById('localStorageDivSection')
//console.log(' checking submit Name : ',inputName)

function printLocalStorage (){
    for (i = 0; i < localStorage.length; i++) {
        if ( localStorage.key(i).substring(0,4) == "user" ){
            //console.log('testing Local Storage ', localStorage.key(i))
            const nombrefor = getObjectFromSotrage(localStorage.key(i)).Nombre
            const correofor = getObjectFromSotrage(localStorage.key(i)).Correo
            const mensajefor = getObjectFromSotrage(localStorage.key(i)).Mensaje
            
            const para = document.createElement("p");
            const node = document.createTextNode("Nombre : " + nombrefor + " | Correo : "+ correofor + " |  Mensaje : "+mensajefor );
            para.appendChild(node);
            localStorageDivSection.appendChild(para)
    
        }
    }
}

function cleanParagraphs(){
    //console.log(' test : ',localStorageDivSection.childNodes) 
    localStorageDivSection.innerHTML="";
}

function onSubmit(event) {
    event.preventDefault()
    console.log('onSubmit : ',inputName.name +": "+inputName.value+" | "+inputCorreo.name +": "+inputCorreo.value+" |"+inputMensaje.name+" : "+inputMensaje.value)
    const userObject = {
        "Nombre" : inputName.value,
        "Correo" : inputCorreo.value,
        "Mensaje" : inputMensaje.value,
    }
    console.log('onSubmit usserObject : ',userObject)
    localStorage.setItem("user" + userId, JSON.stringify(userObject));
    userId++; 
    cleanParagraphs();
    printLocalStorage (); 
}

function getObjectFromSotrage(id){
    return JSON.parse(localStorage.getItem(id))
}


    
submitbtn1.addEventListener('click',onSubmit)
resetbtn1.addEventListener('click', function(){
    localStorage.clear()
    cleanParagraphs();
    userId= 0;
})
//console.log (' error : ',getObjectFromSotrage("user0") )
if(getObjectFromSotrage("user0") != null){
    const nombre= getObjectFromSotrage("user0").Nombre
    const correo = getObjectFromSotrage("user0").Correo
    const mensaje = getObjectFromSotrage("user0").Mensaje
    localStorageParagraphOutput.textContent = "Parrafo fijo | Nombre : " + nombre + " | Correo : "+ correo + " |  Mensaje : "+mensaje ;
    printLocalStorage (); 
}
 




