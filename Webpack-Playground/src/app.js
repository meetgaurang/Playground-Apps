'use strict';
import {generateRandom, sum} from './utility.js';

let a = generateRandom();
let b = generateRandom();
document.write(a + " + " + b + " = " + (sum(a, b)));