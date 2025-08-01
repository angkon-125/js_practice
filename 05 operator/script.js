// operator 
// 1. operator (+, -, *, /, %, **)
// 2. operator precedence (PEMDAS)
// 3. operator associativity (left to right, right to left)
// 4. operator precedence and associativity

// for example 
// 1 + 2 * 3 - 4 / 5 ** 6
// 1 + 2 * 3 - 4 / 15625
// 1 + 6 - 0.000256
// 1 + 6 - 0.000256

// more precendence

let a = 1 + 2 * 3 - 4 / 5 ** 6
console.log(a) // 1 + 2 * 3 - 4 / 5 ** 6 = 6.999744

// string  '1' + '1' = string 
let b = '1' + '1'
console.log(b) // 11
// string  '1' + 1 = string
let c = '1' + 1
console.log(c) // 11
// string  1 + '1' = string
let d = 1 + '1'
console.log(d) // 11
// string  1 + 1 = number
let e = 1 + 1
console.log(e) // 2
// string  '1' - '1' = number
let f = '1' - '1'
console.log(f) // 0
// string  '1' - 1 = number
let g = '1' - 1
console.log(g) // 0
// string  1 - '1' = number
let h = 1 - '1'
console.log(h) // 0
// string  '1' * '1' = number
let i = '1' * '1'
console.log(i) // 1
// string  '1' * 1 = number
let j = '1' * 1
console.log(j) // 1
// string  1 * '1' = number
let k = 1 * '1'
console.log(k) // 1
// string  '1' / '1' = number
let l = '1' / '1'
console.log(l) // 1
// string  '1' / 1 = number
let m = '1' / 1
console.log(m) // 1
// string  1 / '1' = number
let n = 1 / '1'
console.log(n) // 1
// string  '1' % '1' = number
let o = '1' % '1'
console.log(o) // 0
// string  '1' % 1 = number
let p = '1' % 1
console.log(p) // 0
// string  1 % '1' = number
let q = 1 % '1'
console.log(q) // 0
// string  '1' ** '1' = number
let r = '1' ** '1'
console.log(r) // 1
// string  '1' ** 1 = number
let s = '1' ** 1
console.log(s) // 1
// string  1 ** '1' = number
let t = 1 ** '1'
console.log(t) // 1
