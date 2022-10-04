function romanToInt(s: string): number {
    let numerals: Array<string> = [];
    let arry = [...s];
    let dual = false;
    // process numerals into sets to process
    arry.forEach((char:string,idx:number) => {
       
            if (dual) {
                // add previous character and current
                numerals.push( arry[idx-1]+char );
                dual = false;
            }
            else if (  idx < arry.length-1 && num(char) >= num( arry[idx+1] ) ) numerals.push(char); // regular case
            else if ( idx < arry.length-1 && num(char) < num( arry[idx+1] ) ) dual = true; // dual - process pair
            else if ( idx === arry.length-1 ) numerals.push(char); // last char

    });
    numerals.forEach(el => console.log('el',el));

    let tot = numerals.reduce((tot, char)=>tot+=num(char),0)
    return tot;
}

const num = (s:string):number =>{
    switch (s) {
        case 'I': return 1;
        case 'IV': return 4;
        case 'V': return 5;
        case 'IX': return 9;
        case 'X': return 10;
        case 'XL': return 40;
        case 'L': return 50;
        case 'XC': return 90;
        case 'C': return 100;
        case 'CD': return 400;
        case 'D': return 500;
        case 'CM': return 900;
        case 'M': return 1000;
        default: return 0;
    }
}


const testCase = (s: string) => {
  console.log(`${s}: ${romanToInt(s)}`);
  console.log('====================');
};

testCase('I');
testCase('VII');
testCase('IV');
testCase('IX');
testCase('XX');
testCase('X');
testCase('XL');
testCase('MCM');
testCase('MMXXII');
testCase('MCMXCIX');
testCase('MMMCMXCIX');
testCase('XXIX');
testCase('CDXLIX');
testCase('MCDLXXVI');
