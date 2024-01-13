import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCol = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCol);
sorter.sort();
console.log(numbersCol.data);
