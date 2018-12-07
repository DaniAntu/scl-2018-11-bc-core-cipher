//DOM

window.onload = () => {
    let strCode;    
    let num;
    let anoni;
    let passw;
    let nickName;
    let passwordFlag = 0;    

    let docs = document.getElementById('entry');
    const containment = document.getElementById('containment');

    //Ingreso con botón de alumno 
    document.getElementById('btnStudent').addEventListener('click',(evento) => {
        evento.preventDefault();

        docs.style.display = 'none';
        
        const containmentStudent = document.createElement('form');
        containment.appendChild(containmentStudent);
        containmentStudent.setAttribute('id','divStudent');
        containmentStudent.classList.add('espaciosDiv');

        const elementLabelZero = document.createElement('label');
        const elementNick = document.createElement('input');
        let labelZeroText = document.createTextNode('Nombre: ');
        elementLabelZero.appendChild(labelZeroText);
        elementLabelZero.appendChild(elementNick);
        containmentStudent.appendChild(elementLabelZero);
        elementNick.setAttribute('placeholder','Nick Name');
        elementNick.setAttribute('id','nameStudent');
        elementNick.classList.add('text');

        const elementText = document.createElement('input');
        containmentStudent.appendChild(elementText);
        elementText.setAttribute('placeholder','Ingresa confesión');
        elementText.setAttribute('id','confessionText');
        elementText.classList.add('textConfession');

        //Ingresa clave de cifrado
        const elementExplain = document.createElement('label');
        let explainText = document.createTextNode('Ingresa Código de cifrado (sólo números): ');
        elementExplain.appendChild(explainText);
        containmentStudent.appendChild(elementExplain);
        
        //Caja 'key' de cifrado
        const elementKey = document.createElement('input');
        containmentStudent.appendChild(elementKey);
        elementKey.setAttribute('placeholder','Ej: 32');
        elementKey.setAttribute('id','offSet');
        elementKey.classList.add('text')

        const elementLabelFour = document.createElement('label');
        const elementCheck = document.createElement('input');
        let checkText = document.createTextNode('Anon Please');
        elementLabelFour.appendChild(elementCheck);
        elementLabelFour.appendChild(checkText);
        containmentStudent.appendChild(elementLabelFour);
        elementCheck.setAttribute('type','checkbox');
        elementCheck.setAttribute('id','anon'); //nombre - tema
        elementCheck.classList.add('check');

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
            docs.style.display = 'block';
        
            containment.removeChild(containmentStudent);
        });

        document.getElementById('inputButton').addEventListener('click',(evento) => {
            evento.preventDefault();             

           /*   -> Nombre alumno   nameStudent
                -> Texto confesión   confessionText
                -> OffSet o código de cifrado   offSet
                -> Tema      es un radio ---->   topic
                -> Anon (true o false)   checkbox ----> anon
                Luego de guardarlo, vuelve a la pantalla principal 
            */
           let str = document.getElementById('confessionText').value; 
           num = document.getElementById('offSet').value;
           anoni = document.getElementById('anon');
           nickName = document.getElementById('nameStudent').value;
           
           //validar el formulario
            if (str === undefined || num === undefined){
                //texto o código están vacíos, deben ingresarlos
                elementExplain.classList.add('advertir');
                elementText.classList.add('advertir');
            }else{
                strCode = cipher.encode(str,num);
                const elementLabelConfession = document.createElement('label');
                let labelTextConfession = document.createTextNode(strCode);
                elementLabelConfession.appendChild(labelTextConfession);
                containmentStudent.insertBefore(elementLabelConfession,elementButton);
                elementLabelConfession.classList.add('text');
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
        containmentPassword.classList.add('espaciosDiv');

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
                containmentBoard.classList.add('espaciosDiv');

                if (strCode === undefined) {                 
                    //crear boton de volver y mostrar que no hay confesiones
                    const elementLabelEmpty = document.createElement('label');
                    let labelTextEmpty = document.createTextNode('No hay confesiones');
                    elementLabelEmpty.appendChild(labelTextEmpty);
                    containmentBoard.appendChild(elementLabelEmpty);
                    elementLabelEmpty.classList.add('text');

                    const elementButtonBack = document.createElement('button');
                    let buttonInputBack = document.createTextNode('Volver');
                    elementButtonBack.appendChild(buttonInputBack);
                    containmentBoard.appendChild(elementButtonBack);
                    elementButtonBack.setAttribute('id','backButton');
                    elementButtonBack.classList.add('botones');

                    document.getElementById('backButton').addEventListener('click',(evento) => {
                        evento.preventDefault();

                        docs.style.display = 'block';
                        
                        containment.removeChild(containmentBoard);
                        
                    });
                } else {
                    //mostrar las confesiones y sus atributos
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

                    const elementButtonWatch = document.createElement('button');
                    let buttonTextWatch = document.createTextNode('Ver confesión');
                    elementButtonWatch.appendChild(buttonTextWatch);
                    containmentBoard.appendChild(elementButtonWatch);
                    elementButtonWatch.setAttribute('id','watchButton');
                    elementButtonWatch.classList.add('text');

                    document.getElementById('watchButton').addEventListener('click',(evento) => {
                        evento.preventDefault();
                        
                        let strDecode = cipher.decode(strCode,num);
                        const elementLabelWatch = document.createElement('label');
                        let labelTextWatch = document.createTextNode(nickName + ': ' + strDecode);
                        elementLabelWatch.appendChild(labelTextWatch);
                        containmentBoard.appendChild(elementLabelWatch)
                    });
                }
            }else{
                //Pedir nueva contraseña

                if (passwordFlag === 0) {
                const elementWrong = document.createElement('label');
                let labelWrong = document.createTextNode('La contraseña es incorrecta. Ingrese nuevamente');
                elementWrong.appendChild(labelWrong);                
                containmentPassword.insertBefore(elementWrong,document.getElementById('acceptButton'));
                elementWrong.classList.add('advertir');
                passwordFlag = 1;
                }
            }
        });

        document.getElementById('cancelButton').addEventListener('click',(evento) => {
            evento.preventDefault();
            docs.style.display = 'block';
            
            containment.removeChild(containmentPassword);
        });


       

        //contra = document.createElement('label');
        //let texto_contra = document.createTextNode('Ingrese contraseña');

//        teacherEntry.innerHTML = '<label for="contraseña">Ingrese contraseña </label> ' + 
  //      '<input type="password" id="password" placeholder="Contraseña" required/> '
    });

    

    
}
