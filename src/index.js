import './index.css';

import numeral from 'numeral'; //Lib for formating numbers

const courseVal = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseVal} for this awesome course!`);
