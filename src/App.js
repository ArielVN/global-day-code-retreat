
const isDeadAndHas3Neighbours = (isAlive, numberOfNeighbours) => !isAlive && numberOfNeighbours === 3;
const isAliveAndHas2Or3Neighbours = (isAlive, numberOfNeighbours) => isAlive && (numberOfNeighbours === 2 || numberOfNeighbours === 3);

export const isCellAlive = (isAlive, numberOfNeighbours) => isAliveAndHas2Or3Neighbours(isAlive, numberOfNeighbours) || isDeadAndHas3Neighbours(isAlive, numberOfNeighbours);

export const getNumberOfAlivedNeighbours = (map, x, y) => 0;