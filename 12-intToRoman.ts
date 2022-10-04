function intToRoman(num:number): string {

    const char = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const cvt = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    let roman:Array<string> = [];
    let tally = num;
    let idx = 0;
    do {
        let n = Math.floor(tally / cvt[idx]);
        let rem = tally % cvt[idx];
        roman.push(addRoman(n,char[idx]));
        console.log(idx, char[idx], cvt[idx],'rem', rem);
        
        tally = rem;
        idx++;
    } while ( tally > 0 );

    return roman.join('');
}

const addRoman = (num: number, char: string): string =>{
    let str: Array<string> = [];
    for (let x=0; x<num; x++){
        str.push(char);
    }
    return str.join('');
}

const testInt = (num: number) => {
  console.log(`${num}: ${intToRoman(num)}`);
  console.log('====================');
};

testInt(58);
testInt(49);
testInt(970);
testInt(999);
testInt(3999);
testInt(2022);
testInt(8);
testInt(3);
testInt(58);
testInt(1994);


