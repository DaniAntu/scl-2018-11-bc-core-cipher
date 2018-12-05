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
        
        const elementLabelOne = document.createElement('label');
        const elementRadioOne = document.createElement('input');
        let radioTextOne = document.createTextNode('Confesión');
        elementLabelOne.appendChild(elementRadioOne);
        elementLabelOne.appendChild(radioTextOne);
        containmentStudent.appendChild(elementLabelOne);
        elementRadioOne.setAttribute('type','radio');
        elementRadioOne.setAttribute('id','topic'); //nombre - tema
        elementRadioOne.setAttribute('value','conf');
        

        const elementLabelTwo = document.createElement('label');
        const elementRadioTwo = document.createElement('input');
        let radioTextTwo = document.createTextNode('Ayuda');
        elementLabelTwo.appendChild(elementRadioTwo);
        elementLabelTwo.appendChild(radioTextTwo);
        containmentStudent.appendChild(elementLabelTwo);
        elementRadioTwo.setAttribute('type','radio');
        elementRadioTwo.setAttribute('id','topic'); //nombre - tema
        elementRadioTwo.setAttribute('value','help');

        const elementLabelThree = document.createElement('label');
        const elementRadioThree = document.createElement('input');
        let radioTextThree = document.createTextNode('Abuso');
        elementLabelThree.appendChild(elementRadioThree);
        elementLabelThree.appendChild(radioTextThree);
        containmentStudent.appendChild(elementLabelThree);
        elementRadioThree.setAttribute('type','radio');
        elementRadioThree.setAttribute('id','topic'); //nombre - tema
        elementRadioThree.setAttribute('value','abuse');

        const elementJumpThree = document.createElement('br');
        containmentStudent.appendChild(elementJumpThree);
        const elementJumpFour = document.createElement('br');
        containmentStudent.appendChild(elementJumpFour);

        const elementLabelFour = document.createElement('label');
        const elementCheck = document.createElement('input');
        let checkText = document.createTextNode('Anon Please');
        elementLabelFour.appendChild(elementCheck);
        elementLabelFour.appendChild(checkText);
        containmentStudent.appendChild(elementLabelFour);
        elementCheck.setAttribute('type','checkbox');
        elementCheck.setAttribute('id','anon'); //nombre - tema
        elementCheck.setAttribute('value','anon');




        const elementButton = document.createElement('button');
        let buttonInput = document.createTextNode('Ingresar');
        elementButton.appendChild(buttonInput);
        containmentStudent.appendChild(elementButton);
        elementButton.setAttribute('id','buttonAccept');
        elementButton.classList.add('botones');




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

    
}
