
let debug278 = false;

var solution = function(isBadVersion: any) {

    return function(n: number): number {

        let checked: any = {};

        let lastTrue: number = -1;
        let lastFalse: number = -1;

        const checkResults = (): number =>{
            let firstBad: number = -1;
        
            if (lastTrue===1) firstBad =1;
            else if (lastTrue === lastFalse+1) firstBad = lastTrue;
            
            debug278 && console.log('======',firstBad, '  lastTrue',lastTrue);
            return firstBad;
        };

        const runTest = (lo:number, hi:number) : number =>{
            if (lo <= hi){
                let mid:number = Math.floor((hi+lo)/2);
                debug278 && console.log('n',n,' lo',lo,' hi',hi,' mid',mid);
                
                let isBadCheck:boolean | null = null;
                if (checked[mid] === undefined && mid <= hi && mid >= lo)
                    isBadCheck = isBadVersion(mid);
      
                let result = checkResults();
                if (result === -1){
                    if (isBadCheck !== null && isBadCheck===false) {
                        lastFalse = mid;
                        runTest(mid+1,hi)
                    }
                    
                    else if (isBadCheck !== null && isBadCheck===true){    
                        lastTrue = mid;
                        runTest(lo,mid-1)
                    }
                } 
            }
            return checkResults();
        }
        
        return runTest(1,n);
    };
};


// ========

const test278Cycle1=()=>{

    const n=50000;
    for (let bad = 1; bad<=n; bad++){
        const isBadVersion = (num:number): boolean =>{
            debug278 && console.log(`isBadVersion(${num}) ${ num>=bad ? true : false}`);
            if (num >= bad) return true;
            else return false;
        }

        console.log(`bad = ${bad} ; output = ${solution(isBadVersion)(n)}`);
        if (bad !== solution(isBadVersion)(n) ) throw new Error('unexpected solution!');
    }    

}

const test278Cycle2=()=>{
    const n = 2126753390;
    const bad = 1702766719;
    const isBadVersion = (num:number): boolean =>{
        debug278 && console.log(`isBadVersion(${num})`);
        if (num >= bad) return true;
        else return false;
    }

    console.log(`bad = ${bad} ; output = ${solution(isBadVersion)(n)}`);

}

const test278Cycle3=()=>{
    const n = 10;
    const bad = 4;
    const isBadVersion = (num:number): boolean =>{
        debug278 && console.log(`isBadVersion(${num}) ${ num>=bad ? 'true' : 'false'}`);
        if (num >= bad) return true;
        else return false;
    }

    console.log(`bad = ${bad} ; output = ${solution(isBadVersion)(n)}`);

}

// ================= 

test278Cycle2();





// First attempt.  Worked for small numbers of n / bad - did not work for testCycle2 case - ran out of memory

// var solution = function(isBadVersion: any) {

//     return function(n: number): number {

//         let results: Array<boolean | null> = [];
//         for (let x = 0; x<=n; x++ ) {
//             results[x] = null;
//         }

//         const checkResults = (): number =>{
//             let firstBad: number = -1;
        
//             for (let x=1; x<=n; x++) {
//                 // debug && console.log(`results[${x}] : ${results[x]}`);
            
//                 if (results[1]===true) firstBad = 1;
//                 else if (results[x] === true && results[x-1]=== false) {
//                     if (firstBad === -1) firstBad = x;
//                 }
//             }
//             // debug && console.log('======',firstBad);
//             return firstBad;
//         };

//         const runTest = (lo:number, hi:number) : number =>{
//             if (lo <= hi){
//                 let mid:number = Math.floor((hi+lo)/2);
//                 // debug && console.log('n',n,' lo',lo,' hi',hi,' mid',mid);
                
//                 if (results[mid] === null && mid <= hi && mid >= lo)
//                     results[mid] = isBadVersion(mid);
      
//                 let result = checkResults();
//                 // debug && console.log('result',result);
//                 if (result === -1){
//                     if (results[mid]===false)
//                         runTest(mid+1,hi)
                    
//                     else if (results[mid]===true)
//                         runTest(lo,mid-1)
                    
                    
//                 } 
//             }
//             return checkResults();
//         }
        
//         return runTest(1,n);
//     };
// };
