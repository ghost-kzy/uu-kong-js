let o={
    name:'uu—kong'
}
let o2=o
o=123
o2=null
//原理是统计所有对象的引用计数，只要没有人引用对象，就会被回收掉