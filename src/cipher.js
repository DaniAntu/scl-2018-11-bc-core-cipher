window.cipher = {
  encode: (str,num) => {
    num = num % 26;
    let = str.toUpperCase();
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let newStr = '';

    for (let i=0 ; i < upperStr.length ; i++)
    {
        let currentLetter = upperStr[i];
        if(currentLetter === ' '){   
            newStr += currentLetter;
        }else {
            let index = abc.indexOf(currentLetter);
            let newIndex = index + num;
            if(newIndex > 25) { newIndex = newIndex - 26;}
            if(newIndex < 0) { newIndex = newIndex + 26; }

            newStr += abc[newIndex];            
        }
    }
    return newStr;
  },
  decode: (str, num) => {
    num = num % 26;
    let upperStr = str.toUpperCase();
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let newStr = '';

    for (let i=0 ; i < upperStr.length ; i++)
    {
        let currentLetter = upperStr[i];
        if(currentLetter === ' '){   
            newStr += currentLetter;
        }else {
            let index = abc.indexOf(currentLetter);
            let newIndex = index - num;
            if(newIndex > 25) {newIndex = newIndex - 26;}
            if(newIndex < 0) { newIndex = newIndex + 26; }

            newStr += abc[newIndex];
        }
    }
    return newStr;
  }
};
