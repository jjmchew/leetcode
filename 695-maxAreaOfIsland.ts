function maxAreaOfIsland(grid: number[][]): number {
    const debug = false;
    
    let maxArea: number = 0;
    
    let checked: Array<Array<number>> = [];

    for ( let x:number = 0; x < grid.length; x++ ){
        checked[x] = [];
        for ( let y: number = 0; y < grid[x].length; y++ ) {
            checked[x][y] = 0;
        }
    }

    const getAdj = (coord: number[]): Array<number[]> =>{
        let adj: Array<number[]> = [];
        if ( coord[0] < grid.length - 1 ) 
            if ( grid[coord[0]+1][coord[1]] === 1 ) adj.unshift([coord[0]+1,coord[1]]);
        if ( coord[0] > 0 )
            if ( grid[coord[0]-1][coord[1]] === 1 ) adj.unshift([coord[0]-1,coord[1]]);
        if ( coord[1] < grid[coord[0]].length - 1 )
            if ( grid[coord[0]][coord[1]+1] === 1 ) adj.unshift([coord[0],coord[1]+1]);
        if ( coord[1] > 0 )
            if ( grid[coord[0]][coord[1]-1] === 1 ) adj.unshift([coord[0],coord[1]-1]);

        // debug && console.log('getAdj.adj',adj);

        return adj;
    };

    const processIsland = (startCoord: number[]): number => {
        let stack: Array<number[]> = [startCoord];
        let area: number = 0;
        do {

            let cur: Array<number> | undefined;
            if ( stack.length > 0 ) cur = stack.shift();

            if ( cur ) {
                let tmp: Array<number> = cur;
                if ( checked[tmp[0]][tmp[1]] === 0 ) {
                    checked[tmp[0]][tmp[1]] = 1;
                    // debug && console.log('processStack',tmp,'  grid[tmp]',grid[tmp[0]][tmp[1]], '  stack.length',stack.length);
                    if ( grid[tmp[0]][tmp[1]] === 1 ) {
                        area++;
                        getAdj(tmp).forEach(el => stack.push(el));
                    }
                }
            }

        } while (stack.length > 0);

        return area;
    };

    const getNextUnchecked = (): number[] =>{
        for ( let x = 0; x < grid.length; x++ ) {
            for ( let y = 0; y < grid[x].length; y++ ) {
                if ( checked[x][y] === 0) return [x,y];
            }
        }
        return [-1,-1];
    };
    let next: number[];
    do {
        next = getNextUnchecked();
        if ( next[0] !== -1 ) {
            maxArea = Math.max(maxArea, processIsland(next));
        }

    } while ( next[0] !== -1 );
    
    debug && console.log('checked: ');
    debug && printGrid(checked);

    return maxArea;
};


const printGrid = (grid: number[][]) => {
    let lastChar: number = 0;
    for ( let x=0; x<grid.length; x++ ) {
        let row: Array<string> = [];
        for ( let y=0; y<grid[x].length; y++ ) {
            if ( grid[x][y] === 1 && lastChar !== 1 ) {
                row.push("\x1b[44m"); // blue;
                lastChar = 1;
            }
            else if ( grid[x][y] === 0 && lastChar !== 0 ){
                row.push("\x1b[0m"); // reset;
                lastChar = 0;
            }
            row.push(' '+grid[x][y].toString()+' ');
        }
        row.push("\x1b[0m"); // reset;
        lastChar = 0;
        console.log(row.join(''));
    }
    console.log(" \x1b[0m ");
}
const test695 = (grid: number[][]) => {
    printGrid(grid);
    console.log('area',maxAreaOfIsland(grid));
    console.log('======================================');
};


const testGrid1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
test695(testGrid1);

const testGrid2 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
test695(testGrid2);

const testGrid3 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,0,0,0]];
test695(testGrid3);

const testGrid4 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1]];
test695(testGrid4);

const testGrid5 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
test695(testGrid5);

test695([[1]]);
test695([[0]]);
test695([[0,0],[0,0],[0,0]]);
test695([[0,0],[0,1],[0,0]]);