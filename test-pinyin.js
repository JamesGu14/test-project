const pinyin = require('pinyin')
const _ = require('lodash')

let uid = pinyin("乔伊", {
  style: pinyin.STYLE_NORMAL
})

uid = _.flattenDeep(uid).join('')

console.log(uid)