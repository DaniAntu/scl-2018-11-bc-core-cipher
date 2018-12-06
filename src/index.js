//DOM
window.onload = () => {
    let docs = document.getElementById('entry');
    let str;
    let num;
    let anoni;
    /* let contra;
    let confession; */

    const containment = document.getElementById('containment');

    //Ingreso con botón de alumno 
    document.getElementById('btnStudent').addEventListener('click',(evento) => {
        evento.preventDefault();

        docs.style.display = 'none';
        
        const containmentStudent = document.createElement('div');
        containment.appendChild(containmentStudent);
        containmentStudent.setAttribute('id','divStudent');

        const elementLabelZero = document.createElement('label');
        const elementNick = document.createElement('input');
        let labelZeroText = document.createTextNode('Nombre: ');
        elementLabelZero.appendChild(labelZeroText);
        elementLabelZero.appendChild(elementNick);
        containmentStudent.appendChild(elementLabelZero);
        elementNick.setAttribute('placeholder','Nick Name');
        elementNick.setAttribute('id','nameStudent');
        elementNick.classList.add('text');

        const elementJump = document.createElement('br');
        containmentStudent.appendChild(elementJump);
        const elementJumpZero = document.createElement('br');
        containmentStudent.appendChild(elementJumpZero);

        const elementText = document.createElement('input');
        containmentStudent.appendChild(elementText);
        elementText.setAttribute('placeholder','Ingresa confesión');
        elementText.setAttribute('id','confessionText');
        elementText.classList.add('text');

        //Ingresa clave de cifrado
        const elementExplain = document.createElement('p');
        let explainText = document.createTextNode('Ingresa Código de cifrado (sólo números): ');
        elementExplain.appendChild(explainText);
        containmentStudent.appendChild(elementExplain);
        elementExplain.classList.add('parr');
        //Caja 'key' de cifrado
        const elementKey = document.createElement('input');
        containmentStudent.appendChild(elementKey);
        elementKey.setAttribute('placeholder','Ej: 32');
        elementKey.setAttribute('id','offSet');
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
        elementRadioOne.classList.add('radio');
        

        const elementLabelTwo = document.createElement('label');
        const elementRadioTwo = document.createElement('input');
        let radioTextTwo = document.createTextNode('Ayuda');
        elementLabelTwo.appendChild(elementRadioTwo);
        elementLabelTwo.appendChild(radioTextTwo);
        containmentStudent.appendChild(elementLabelTwo);
        elementRadioTwo.setAttribute('type','radio');
        elementRadioTwo.setAttribute('id','topic'); //nombre - tema
        elementRadioTwo.setAttribute('value','help');
        elementRadioTwo.classList.add('radio');

        const elementLabelThree = document.createElement('label');
        const elementRadioThree = document.createElement('input');
        let radioTextThree = document.createTextNode('Abuso');
        elementLabelThree.appendChild(elementRadioThree);
        elementLabelThree.appendChild(radioTextThree);
        containmentStudent.appendChild(elementLabelThree);
        elementRadioThree.setAttribute('type','radio');
        elementRadioThree.setAttribute('id','topic'); //nombre - tema
        elementRadioThree.setAttribute('value','abuse');
        elementRadioThree.classList.add('radio');

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
        elementCheck.classList.add('check');

        const elementJumpFive = document.createElement('br');
        containmentStudent.appendChild(elementJumpFive);
        const elementJumpSix = document.createElement('br');
        containmentStudent.appendChild(elementJumpSix);

        const elementButton = document.createElement('button');
        let buttonInput = document.createTextNode('Ingresar confesión');
        elementButton.appendChild(buttonInput);
        containmentStudent.appendChild(elementButton);
        elementButton.setAttribute('id','inputButton');
        elementButton.classList.add('botones');

        const elementButtonOne = document.createElement('button');
        let buttonInputOne = document.createTextNode('Cancelar');
        elementButtonOne.appendChild(buttonInputOne);
        containmentStudent.appendChild(elementButtonOne);
        elementButtonOne.setAttribute('id','cancelButton');
        elementButtonOne.classList.add('botones');

        document.getElementById('cancelButton').addEventListener('click',(evento) => {
            evento.preventDefault();
            docs.style.display = 'initial';
            containment.removeChild(divStudent);

        });

        document.getElementById('inputButton').addEventListener('click',(evento) => {
            evento.preventDefault();             

           /*  Para guardar confesión... meter un arreglo con los datos en en el objeto 'confessions' 
                -> Nombre alumno   nameStudent
                -> Texto confesión   confessionText
                -> OffSet o código de cifrado   offSet
                -> Tema      es un radio ---->   topic
                -> Anon (true o false)   checkbox ----> anon
                Luego de guardarlo, vuelve a la pantalla principal 
            */
           str = document.getElementById("confessionText").value; 
           num = document.getElementById("offSet").value;
           anoni = document.getElementById("anon").value;
           //document.innerHTML = cipher.encode(str,num);
        //    document.innerHTML = cipher.decode(str,num);
            
            if (str === '' || num === ''){
                console.log('no hay nada');
                //Ingresa texto o ingresa código
                elementText.classList.add('empty');
                offSet.classList.add('empty');
            }else{
                const containmentConfession = document.createElement('div');
                containment.appendChild(containmentConfession);
                containmentConfession.setAttribute('id','divConfession');
                containmentConfession.innerHTML = (cipher.encode(str,num));
            }
        });
    });

    //ingreso con el botón del profe y tiene que pedir una contraseña
    document.getElementById('btnTeacher').addEventListener('click',(evento) => {
        evento.preventDefault();

        const teacherEntry = document.getElementById('entry');
        const passInput = document.createElement('div');
        passInput.classList.add ('textOne');
        teacherEntry.appendChild(passInput);

        //contra = document.createElement('label');
        //let texto_contra = document.createTextNode('Ingrese contraseña');

//        teacherEntry.innerHTML = '<label for="contraseña">Ingrese contraseña </label> ' + 
  //      '<input type="password" id="password" placeholder="Contraseña" required/> '
    });

    

    
}
