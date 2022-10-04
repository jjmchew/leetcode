function reverseWords(s: string): string {
    let chars = [...s];
    let a: number = 0;
    let b: number = 0;

    const reverseWord = (a:number, b:number) => {
        
        let x:number = a; // iterate array index - fwds
        let y:number = b-1; // iterate array index - backwards
    
        while (x<y){
            
            // swap first and last char
            let tempChar = chars[x];
            chars[x] = chars[y];
            chars[y] = tempChar;
    
            // iterate
            x++;
            y--;
        }
    
    }

    
        // find end of first word then reverse
        do {

            if ( chars[b] === ' ' || b === chars.length ) {
                reverseWord(a,b);
                a=b+1;
                b++;
            } else b++;
            
        } while ( a < chars.length && b <= chars.length );

    return chars.join('');
};



const test557 = (s:string) =>{
    console.log(`|${s}|   :   |${reverseWords(s)}|`);
    console.log('====================');
};

test557(' cool ');
test557(`Let's take LeetCode contest`);
test557(`God Ding`);