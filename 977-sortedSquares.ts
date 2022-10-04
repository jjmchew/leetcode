function sortedSquares(nums: number[]): number[] {

    let i:number = 0;
    let j:number = nums.length-1;

    let newNums: number[] = [];

    while( i <= j){
        const isq=nums[i]*nums[i];
        const jsq=nums[j]*nums[j];
        if (isq >= jsq) {
            newNums.push(isq);
            i++;
        }
        else {
            newNums.push(jsq);
            j--;
        }
    }
    return reverseArray(newNums);;
};

const reverseArray = (nums:number[]): number[] => {
    let newNums: number[] = [];
    for (let x = nums.length-1; x>=0; x--){
        newNums.push(nums[x]);
    }
    return newNums;
};

const test977= ( nums: number[] )=>{
    console.log(`[${nums}] : [${sortedSquares(nums)}]`);
}

test977([-4,-1,0,3,10]);




// function sortedSquares(nums: number[]): number[] {

//     let i:number = 0;
//     let j:number = nums.length-1;

//     let newNums: number[] = [];

//     while( i <= j){
//         const isq=nums[i]*nums[i];
//         const jsq=nums[j]*nums[j];
//         if (isq >= jsq) {
//             newNums.push(isq);
//             i++;
//         }
//         else {
//             newNums.push(jsq);
//             j--;
//         }
//     }
//     return newNums.reverse();
// };