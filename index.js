//DOM
window.onload = () => {
    let docs = document.getElementById('entry');
    let strCode;
    let num;
    let anoni;
    let passw;
    let confessionFlag = 0;
    let passwordFlag = 0;
    

    const containment = document.getElementById('containment');

    //Ingreso con botón de alumno 
    document.getElementById('btnStudent').addEventListener('click',(evento) => {
        evento.preventDefault();

        docs.style.display = 'none';
        confessionFlag = 0;
        
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
        let buttonInputOne = document.createTextNode('Volver');
        elementButtonOne.appendChild(buttonInputOne);
        containmentStudent.appendChild(elementButtonOne);
        elementButtonOne.setAttribute('id','returnButton');
        elementButtonOne.classList.add('botones');

        document.getElementById('returnButton').addEventListener('click',(evento) => {
            evento.preventDefault();
            docs.style.display = 'initial';
            containment.removeChild(divStudent);
            if (confessionFlag != 0) { containment.removeChild(divConfession); }
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
           let str = document.getElementById('confessionText').value; 
           num = document.getElementById('offSet').value;
           anoni = document.getElementById('anon');
           
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
                confessionFlag = 1;
                strCode = cipher.encode(str,num);
                containmentConfession.innerHTML = strCode; 
            }
        });
    });

    //ingreso con el botón del profe y tiene que pedir una contraseña
    document.getElementById('btnTeacher').addEventListener('click',(evento) => {
        evento.preventDefault();

        docs.style.display = 'none';

        const containmentPassword = document.createElement('div');
        containment.appendChild(containmentPassword);
        containmentPassword.setAttribute('id','divPassword');

        const elementLabel = document.createElement('label');
        const elementPassword = document.createElement('input');
        let labelText = document.createTextNode('Contraseña: ');
        elementLabel.appendChild(labelText);
        elementLabel.appendChild(elementPassword);
        containmentPassword.appendChild(elementLabel);
        elementPassword.setAttribute('placeholder','Contraseña');
        elementPassword.setAttribute('id','pass');
        elementPassword.setAttribute('type','password');
        elementPassword.classList.add('text');

        const elementJumpNine = document.createElement('br');
        containmentPassword.appendChild(elementJumpNine);
        const elementJumpTen = document.createElement('br');
        containmentPassword.appendChild(elementJumpTen);

        const elementButton = document.createElement('button');
        let buttonAccept = document.createTextNode('Aceptar');
        elementButton.appendChild(buttonAccept);
        containmentPassword.appendChild(elementButton);
        elementButton.setAttribute('id','acceptButton');
        elementButton.classList.add('botones');

        const elementButtonOne = document.createElement('button');
        let buttonInputOne = document.createTextNode('Volver');
        elementButtonOne.appendChild(buttonInputOne);
        containmentPassword.appendChild(elementButtonOne);
        elementButtonOne.setAttribute('id','cancelButton');
        elementButtonOne.classList.add('botones');

        document.getElementById('acceptButton').addEventListener('click',(evento) => {
            evento.preventDefault();
            
            passw = document.getElementById('pass').value;
            if (passw === 'profe'){
                //Mostrar las confesiones de los alumnos
                containment.removeChild(containmentPassword);
                passwordFlag = 0;
                const containmentBoard = document.createElement('div');
                containment.appendChild(containmentBoard);
                containmentBoard.setAttribute('id','divBoard');

                if (strCode === undefined) {
                    console.log(strCode);
                 
                    //crear boton de volver y mostrar que no hay confesiones
                    const elementLabelEmpty = document.createElement('label');
                    let labelTextEmpty = document.createTextNode('No hay confesiones');
                    elementLabelEmpty.appendChild(labelTextEmpty);
                    containmentBoard.appendChild(elementLabelEmpty);
                    elementLabelEmpty.classList.add('text');
                    
                    const elementJumpSeven = document.createElement('br');
                    containmentBoard.appendChild(elementJumpSeven);
                    const elementJumpEigth = document.createElement('br');
                    containmentBoard.appendChild(elementJumpEigth);

                    const elementButtonBack = document.createElement('button');
                    let buttonInputBack = document.createTextNode('Volver');
                    elementButtonBack.appendChild(buttonInputBack);
                    containmentBoard.appendChild(elementButtonBack);
                    elementButtonBack.setAttribute('id','backButton');
                    elementButtonBack.classList.add('botones');

                    document.getElementById('backButton').addEventListener('click',(evento) => {
                        evento.preventDefault();

                        docs.style.display = 'initial';
                        containment.removeChild(containmentBoard);
                    });
                } else {
                    //Muestra las confesiones y sus atributos
                    const elementLabelConf = document.createElement('label');
                    let labelTextConf = document.createTextNode('Confesión: ' + strCode);
                    elementLabelConf.appendChild(labelTextConf);
                    containmentBoard.appendChild(elementLabelConf);
                    elementLabelConf.classList.add('text');

                    let status;
                    if (anoni.checked === false){ status = 'Público'; 
                    }else{ status = 'Anónimo'; }

                    const elementLabelStatus = document.createElement('label');
                    let labelTextStatus = document.createTextNode('Estado: ' + status);
                    elementLabelStatus.appendChild(labelTextStatus);
                    containmentBoard.appendChild(elementLabelStatus);
                    elementLabelStatus.classList.add('text');
                }
            }else{
                //pedir nueva contraseña
                
                if (passwordFlag === 0) {
                const elementWrong = document.createElement('label');
                let labelWrong = document.createTextNode('La contraseña es incorrecta. Ingrese nuevamente');
                elementWrong.appendChild(labelWrong);                
                containmentPassword.insertBefore(elementWrong,document.getElementById('acceptButton'));
                
                console.log('mal'); 
                passwordFlag = 1;
                }
               
            }

        });

        document.getElementById('cancelButton').addEventListener('click',(evento) => {
            evento.preventDefault();
            docs.style.display = 'initial';
            containment.removeChild(divPassword);
        });


       

        //contra = document.createElement('label');
        //let texto_contra = document.createTextNode('Ingrese contraseña');

//        teacherEntry.innerHTML = '<label for="contraseña">Ingrese contraseña </label> ' + 
  //      '<input type="password" id="password" placeholder="Contraseña" required/> '
    });

    

    
}
