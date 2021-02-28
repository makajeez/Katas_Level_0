const getCommonChars = (wrd1, wrd2) => {
    let commons = '';
    let splitWrd1 = wrd1.split('');
    let splitWrd2 = wrd2.split('')
    for(let i = 0; i < splitWrd1.length ; i++) {
     if(splitWrd2.includes(splitWrd1[i])){
        commons += splitWrd1[i];
     }
    }
    console.log(`Common letters: ${commons.split('')}`);
}