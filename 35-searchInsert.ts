const debug35 = true;

function searchInsert(nums: number[], target: number): number {

    let lessIdx: number = -1;
    let moreIdx: number = -1;

    const checkIdx = ():number =>{
        let newIdx: number = -1;

        if (moreIdx === lessIdx+1) newIdx = moreIdx;
        else if (lessIdx === nums.length-1) newIdx = lessIdx+1;

        debug35 && console.log(`lessIdx: ${lessIdx}    moreIdx: ${moreIdx}`);
        return newIdx;
    }
    
    const bSearch = (nums: number[], target: number, lo:number, hi: number):number =>{
        if (lo <= hi){
            let mid = Math.floor((lo + hi) / 2);
            debug35 && console.log('low',lo,' mid',mid,' hi',hi);

            if ( nums[mid] < target ){
                lessIdx = mid;
                return bSearch(nums,target,mid+1,hi);
            }
            else if ( nums[mid] >= target ) {
                moreIdx = mid;
                return bSearch(nums, target,lo,mid-1);
            }
        } 
        return checkIdx();
    };

    return bSearch(nums, target, 0, nums.length-1);

};


const test35 = (nums:number[],target:number) =>{
    console.log(`[${nums}] , ${target} : ${searchInsert(nums,target)}`);
    console.log('================================');
}

test35([-1],9);
test35([-200,-154,-10,200,456,457,458,500,1000],457);
test35([-200,-154,-10,200,456,457,458,500,1000],458);
test35([-200,-154,-10,200,456,457,458,500,1000],2000);
test35([-200,-154,-10,200,456,457,458,500,1000],-300);
test35([-200,-154,-10,200,456,457,458,500,1000],-50);