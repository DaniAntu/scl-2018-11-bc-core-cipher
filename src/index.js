//DOM
window.onload = () => {
    let docs = document.getElementById('entry');
    let contra;
    let confession;

    const containment = document.getElementById('containment');

    //Ingreso con botón de alumno y guarda confesión
    document.getElementById('btnStudent').addEventListener('click',(evento) => {
        evento.preventDefault();

        docs.style.display = 'none';
        
        const containmentStudent = document.createElement('div');
        containment.appendChild(containmentStudent);
        containmentStudent.setAttribute('id','divStudent');

        const elementText = document.createElement('input');
        //let textoInput = document.createTextNode('');
        //elementText.appendChild(textoInput);
        containmentStudent.appendChild(elementText);
        elementText.setAttribute('placeholder','Ingresa confesión');
        elementText.classList.add('text');

        //Ingresa clave de cifrado
        const elementExplain = document.createElement('p');
        let explainText = document.createTextNode('Ingresa Código de cifrado (sólo números): ');
        elementExplain.appendChild(explainText);
        containmentStudent.appendChild(elementExplain);
        elementExplain.classList.add('parr');

        //Caja 'clave' de cifrado
        const elementKey = document.createElement('input');
        containmentStudent.appendChild(elementKey);
        elementKey.setAttribute('placeholder','Ej: 32');
        elementKey.classList.add('text');

        const elementJumpOne = document.createElement('br');
        containmentStudent.appendChild(elementJumpOne);
        const elementJumpTwo = document.createElement('br');
        containmentStudent.appendChild(elementJumpTwo);

        const elementButton = document.createElement('button');
        let buttonInput = document.createTextNode('Ingresar');
        elementButton.appendChild(buttonInput);
        containmentStudent.appendChild(elementButton);
        elementButton.setAttribute('id','buttonAccept');
        elementButton.classList.add('botones');



        

/*     <label>
    <input type="radio" name="gender" value="female"> Mujer
    </label>
    <label>
    <input type="radio" name="gender" value="male"> Hombre
    </label>
    <label>
    <input type="radio" name="gender" value="no-gender"> No deseo brindar información
    </label> */






    });



    //ingreso con el botón del profe y tiene que pedir una contraseña
    document.getElementById('btnTeacher').addEventListener('click',(evento) => {
        evento.preventDefault();

        const teacherEntry = document.getElementById('entry');
        const passInput = document.createElement('div');
        passInput.classList.add ('textOne');
        teacherEntry.appendChild(passInput);

        contra = document.createElement('label');
        let texto_contra = document.createTextNode('Ingrese contraseña');

//        teacherEntry.innerHTML = '<label for="contraseña">Ingrese contraseña </label> ' + 
  //      '<input type="password" id="password" placeholder="Contraseña" required/> '
    });

    //toma el botón ingresar y ejecuta el cipher
    //document.getElementById('btnIngresar').addEventListener('click',(evento) => {
    //let str = document.getElementById("generalText").value; 
    //let num = document.getElementById("val").value;
    //root.innerHTML = cipher.encode(str,num);
    //root.innerHTML = cipher.decode(str,num); }); 

    let toggled = false;
    function toggle(docs){
        if(!toggled){
            toggled = true;
            document.getElementById('docs').style.display = 'none';
            return;
        } else{
            toggled = false;
            document.getElementById('docs').style.display = 'block';
        }
    }
}
