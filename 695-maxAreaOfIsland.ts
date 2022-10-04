function maxAreaOfIsland(grid: number[][]): number {

    return 0;
};

const testGrid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

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
        console.log(row.join(''));
    }
    console.log("\x1b[0m");
}
const test695 = (grid: number[][]) => {
    printGrid(grid);
};

test695(testGrid);