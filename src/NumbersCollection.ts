import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lxIndex: number, rxIndex: number): boolean {
    return this.data[lxIndex] > this.data[rxIndex];
  }

  swap(lxIndex: number, rxIndex: number): void {
    const leftHand = this.data[lxIndex];
    this.data[lxIndex] = this.data[rxIndex];
    this.data[rxIndex] = leftHand;
  }


}