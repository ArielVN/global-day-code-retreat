export class Grid {
  
  constructor() {
    this.flag = true;
  }

  nouvelleIteration () {
    return this;
  }

  faitNaitreUneCellule() {
    this.flag = true;
  }
  
  estVide () {
    return this.flag;
  }
}