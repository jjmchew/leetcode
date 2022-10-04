function runningSum(nums:number[]):number[]{
    let output: Array<number> = [];
    for (let x=1; x<nums.length+1; x++)
        output.push(rd(nums,x));
    return output;
}

const rd = (nums:number[],idx:number):number =>{
    let newNums = [...nums];
    newNums.splice(idx,newNums.length-idx);
    let tot = newNums.map(x=>x).reduce(sumReducer,0);
    return tot;
}

const sumReducer=(sum:number, val: number)=>{
    return sum + val;
}

const testSum = (nums:number[]) =>{
    console.log(`[${nums}] : [${runningSum(nums)}]`);
}

testSum([4,55,1,3,4,6]);
testSum([1,1,1,1,1,1,1,1,1,1,2]);
testSum([0,1,0,0,0,0,0,0,0,0,0]);
testSum([0,0,0,0,0,0,0,0,0,0]);

