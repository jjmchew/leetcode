function search(nums: number[], target: number): number {
    return binarySearch(nums, target,0,nums.length-1);
};

const binarySearch = (nums: number[], target: number, low:number, hi: number):number =>{
    if (low <= hi){
        let mid = Math.floor((low + hi) / 2);
        console.log('low',low,' mid',mid,' hi',hi);
        if (nums[mid] === target) return mid;
        else if ( nums[mid] < target ) return binarySearch(nums,target,mid+1,hi);
        else if ( nums[mid] > target ) return binarySearch(nums, target,low,mid-1);
    } 
    return -1;
};

const test704 = (nums:number[],target:number) =>{
    console.log(`[${nums}] , ${target} : ${search(nums,target)}`);
}

test704([-1],9);
test704([-1,0,3,5,9],2);
test704([-1,0,3,5,9,12],0);
test704([-1,0,3,5,9,12,20,50,53,61,70],61);
// test704([-1,0,3,5,9,12],2);
