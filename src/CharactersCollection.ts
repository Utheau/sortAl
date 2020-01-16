import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) { 
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lxIndex: number, rxIndex: number): boolean {
    return (
      this.data[lxIndex].toLowerCase() > this.data[rxIndex].toLowerCase()
    );
  }

  swap(lxIndex: number, rxIndex: number): void {
    const chars = this.data.split('');

    const leftHand = chars[lxIndex];
    chars[lxIndex] = chars[rxIndex];
    chars[rxIndex] = leftHand;

    this.data = chars.join('');
  }
}