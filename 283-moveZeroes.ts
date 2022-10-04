/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let len:number = nums.length;
    let pt = 0; // track next non-zero element
    let x = 0; // track current array element
    
    while ( x < len ) {
        console.log(` === x: ${x}  pt: ${pt}    len: ${len}`);

        // find next non-zero element
        while ( pt < len && nums[pt] === 0 ) {
            if ( nums[pt] === 0 ) pt++;
        }
        
        if ( nums[pt] && pt >= x ){
            console.log('assign: ',nums[pt],' (x',x,')  (pt:',pt,') to nums[',x,']');
            // assign a non-zero element to current zero array element
            nums[x] = nums[pt];
            pt++; // search for next non-zero element
        } else {
            console.log('assign 0');
            nums[x] = 0;
        }
        
        // next array element to assign
        x++;
    }
    
    console.log(`[${nums}] `);
};

const test283 = (nums:number[]) =>{
    console.log(`[${nums}] `);
    moveZeroes(nums);
    console.log('==================');
};

test283([0,0,0,0]);
test283([1,3,11,12,0,0,12,17]);
test283([1,3,11,12,0,0,0,0]);
test283([0]);
test283([0,1,0]);




// This solution doesn't use pointers, but is functional
// -----------
// function moveZeroes(nums: number[]): void {
//     let numZeroes = 0;
//     nums.forEach((el:number, idx:number)=>{
//         if (el === 0) {
//             nums.splice(idx,1);
//             numZeroes++
//         }
//     });
//     for (let x = 0; x<numZeroes; x++){
//         nums.push(0);
//     }
//     console.log(`[${nums}] `);
// };