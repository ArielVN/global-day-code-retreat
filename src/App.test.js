import { isCellAlive } from './App';

describe('isCellAlive function', () => {
  it('should return false if the cell is alive and has less than 2 neighbours', () => {
    expect(isCellAlive(true, 1)).toBeFalsy();
  });
  it('should return true if the cell is alive and has 2 neighbours', () => {
    expect(isCellAlive(true, 2)).toBeTruthy();
  });
  it('should return true if the cell is alive and has 3 neighbours', () => {
    expect(isCellAlive(true, 3)).toBeTruthy();
  });
  it('should return false if the cell is alive and has more than 3 neighbours', () => {
    expect(isCellAlive(true, 4)).toBeFalsy();
  });
  it('should return true if the cell is dead and has 3 neighbours', () => {
    expect(isCellAlive(false, 3)).toBeTruthy();
  });
})

describe('Name of the group', () => {
   const world =  new Map();
   world.set({x:1, y:1}, true)
});
