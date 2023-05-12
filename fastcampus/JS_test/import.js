import _ from 'lodash'
import checkType from './getType'
//import {random,user as heropy} from './getRandom'
import * as R from './getRandom' // 모두 가져오기

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
//console.log(random(),random())
console.log(R)