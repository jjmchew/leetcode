function twoSum(numbers: number[], target: number): number[] {
    let i1:number = 0;
    let i2:number = numbers.length-1;

    while (i1 < i2) {
        
        let sum = numbers[i1] + numbers[i2];

        if (sum === target) return [i1+1, i2+1]; 
        else if (sum > target) i2--;
        else if (sum < target) i1++;
    }
        
    return [i1+1,i2+1];
};


const test167 = (numbers: number[], target: number) => {
    console.log(`[${numbers}] , ${target}  :  [${twoSum(numbers,target)}]`);
};

test167([2, 7, 11, 15], 9);
test167([2, 3,4], 6);
test167([-1, 0], -1);

