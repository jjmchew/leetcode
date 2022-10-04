function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    // let subStr: string = '';
    let l = 0;
    let counts: any = {};

    // const printS = (l:number, r:number):string =>{
    //     let newS: Array<string> = [];
    //     for ( let x=l; x<=r; x++ ){
    //         newS.push(s[x]);
    //     }
    //     return(newS.join(''));
    // }

    for ( let r = 0; r<s.length; r++ ) {
        
        if (!counts[s[r]]) counts[s[r]] = 0;

        counts[s[r]]++;

        if ( Object.values(counts).some((el) => el as number > 1) ) {
            counts[s[l]]--;
            l++;
        } 
        // else {
        //     subStr = printS(l,r);
        // }

        longest = Math.max( longest, r-l+1 );
        // console.log(l,r,counts,printS(l,r));
    };
    
    return longest;
};


const test3 = (s:string) => {
    console.log(`${s}  :  ${lengthOfLongestSubstring(s)}`);
};

test3('abcabdcbb');

