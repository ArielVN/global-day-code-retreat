const { Grid } = require("./App");

describe('', () => {
  it('should return an empty grid when the grid is empty', () => {
    const grid = new Grid();
    expect(grid.nouvelleIteration().estVide()).toBeTruthy();
  });
  it('should return an empty grid when the grid as one cell', () => {
    const grid = new Grid();
    grid.faitNaitreUneCellule();
    expect(grid.nouvelleIteration().estVide()).toBeTruthy();
  });
  it('should return a grid with one cell when the grid as one cell with 2 Neigbours', () => {
    const grid = new Grid();
    grid.faitNaitreUneCellule();
    expect(grid.nouvelleIteration().estVide()).toBeTruthy();
  });
});