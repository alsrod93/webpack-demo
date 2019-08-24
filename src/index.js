var _ = require('lodash'); //require: node에 포함된 스펙이므로 브라우저가 인식 못함 -> webpack사용해야함

//named import 규칙 : 반드시 {} 안에 동일한 이름을 사용
import {area, circumference} from './circle';
// default import 규칙 : {}없이 이름을 바꿀 수 있다.
import all from './cube';

import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' '); //'_' loadash 라이브러리

  return element;
}

console.log('webpack test');
console.log(area(5));
console.log(all(5));
document.body.appendChild(component());