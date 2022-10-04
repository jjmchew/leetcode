function numberToWords(num:number):string {
    let output:Array<string> = [];

    const word1 =['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
    const wordTeens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const wordTens = ['','Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
    const wordOthers:any = {
        '100': 'Hundred',
        '1000': 'Thousand',
        '1000000':'Million',
        '1000000000': 'Billion'
    }
    const cycle = [1000000000,1000000,1000,100];

    const convertTens = (tally:number) =>{ 
        let tens = Math.floor(tally / 10);
        if (tens === 1) { 
            output.push(`${wordTeens[tally-10]}`);
        } else {
            if (tens > 0) output.push(`${wordTens[tens]}`);
            tally = tally % 10;
            if (tally < 10 && tally > 0){
                output.push(`${word1[tally]}`);
            } else if (tally === 0 && output.length === 0) output.push(`${word1[tally]}`);
        }
    }

    const convertCycle = (idx:number, tally:number): number =>{
        let calc = Math.floor(tally/cycle[idx]);
        if (calc >= 100){
            let temp = convertCycle(3,calc);
            convertTens(temp);
            output.push(`${wordOthers[cycle[idx].toString()]}`);
        }
        if (calc > 0 && calc < 100) {
            convertTens(calc);
            output.push(`${wordOthers[cycle[idx].toString()]}`);
        }
        return tally % cycle[idx];
    }

    let tally = num;
    
    for (let x = 0; x<cycle.length; x++){
        tally=convertCycle(x,tally);
    }
    convertTens(tally);

    return output.join(' ');
}


const testWords = (num:number) =>{
    console.log(`${num.toLocaleString('en-US')}: ${numberToWords(num)}`);
    console.log('====================');
};

testWords(0);
testWords(10);
testWords(20);
testWords(50);
testWords(100);
testWords(3000);
testWords(210000);
testWords(20000000000);
testWords(10188000);
testWords(5010000013);
testWords(200919418);
testWords(4503210511);
console.log(Math.pow(2,31)-1);

