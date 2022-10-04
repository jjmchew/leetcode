/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    let x:number = 0; // iterate array index - fwds
    let y:number = s.length-1; // iterate array index - backwards

    while (x<y){
        console.log(`x: ${x}  s[x]: ${s[x]}    y: ${y}  s[y]: ${s[y]}`);
        // swap first and last char
        let tempChar =s[x];
        s[x] = s[y];
        s[y] = tempChar;

        // iterate
        x++;
        y--;
    }
    console.log(`[${s}]`);
};

const test344 = (s:string) =>{
    let as:string[] = [...s];
    console.log(`[${as}]`);
    reverseString(as);
    console.log('====================');
};

test344('James');
test344('Hello');
test344('Hannah');