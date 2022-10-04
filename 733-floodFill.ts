const testGraph1 = [[1,1,1],[1,1,0],[1,0,1]];
const testGraph2 = [[2,2,2],[2,2,0],[2,0,1]];

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let debug = false;
    let changed: Array<number[]> = [];
    let stack: Array<number[]> = [[sr,sc]];
    let tColour = image[sr][sc];
    
    let newImage: number[][] = [];
    for ( let x = 0; x < image.length; x++ ) {
        newImage[x] = [...image[x]];
    };

    const getAdj = (sr: number, sc:number, tColour: number): Array<number[]> =>{
        let adj: Array<number[]> = [];
        if ( sr < image.length - 1 ) 
            if ( image[sr+1][sc] === tColour ) adj.unshift([sr+1,sc]);
        if ( sr > 0 )
            if ( image[sr-1][sc] === tColour ) adj.unshift([sr-1,sc]);
        if ( sc < image[sr].length - 1 )
            if ( image[sr][sc+1] === tColour ) adj.unshift([sr,sc+1]);
        if ( sc > 0 )
            if ( image[sr][sc-1] === tColour ) adj.unshift([sr,sc-1]);

        debug && console.log('getAdj.adj',adj);

        return adj;
    }

    const processStack = () => {
        let cur: Array<number> | undefined;
        if ( stack.length > 0 ) cur = stack.shift();
        
        if ( cur ) {
        
            let tmp: Array<number> = cur;
            if ( changed.findIndex(el => el[0] === tmp[0] && el[1] === tmp[1]) === -1 ) {
                changed.push(cur);
                debug && console.log('processStack',cur, '  stack.length',stack.length);
                newImage[cur[0]][cur[1]] = color;
                getAdj(cur[0],cur[1],tColour).forEach(el => stack.push(el));
            }
        }
    };

    do {
        processStack();
    } while (stack.length > 0);

    return newImage;
};



const showOutput = (image1: number[][], image2: number[][]) =>{
    for ( let x = 0; x<image1.length;  x++ ) {
        console.log(image1[x] ,' > ', image2[x]);
    }
}
const test733 = (image: number[][], sr: number, sc: number, color: number) =>{
    let graph1 = image;
    let graph2 = floodFill(image, sr, sc, color);
    console.log('(sr,sc) (',sr,',',sc,')  color',color);
    showOutput(graph1, graph2);
    console.log('===================');
};

test733(testGraph1,1,1,2);
test733(testGraph1,2,2,5);
test733(testGraph1,2,1,5);
test733([[1,1,0],[1,0,1],[1,1,1]],2,1,5);
test733([[1,1,0],[1,0,0],[1,1,1]],2,1,5);
test733([[1,1,0],[1,0,0],[1,1,1]],1,2,3);

