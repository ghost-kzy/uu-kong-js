let array = [1, 2, 3, 4, 5]
let time = '2025-8-20 13:40:35'
let nowDate = new Date(time);
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1;
let day = nowDate.getDate();
let hour = nowDate.getHours();
console.log(year, month, day, hour);

let supplyZero = (value) => {
    value += ''
    return value.length < 2 ? '0' + value : value
}
console.log(`${supplyZero(year)}年${supplyZero(month)}月${supplyZero(day)}日`)
// let addZero=val=>val.length<2?'0'+val:val
// let ary=time.split(/[ \-:]/g)
// console.log(ary)
// time=ary[0]+'年'+addZero(ary[1])+'月'+addZero(ary[2])+'日'
// console.log(time)

// let url='http://127.0.0.1:8080/index.html?hxy=love&name=kzy&gender=man#box'
// let askIndex=url.lastIndexOf('?')
// let wellIndex=url.indexOf('#')
// let askText=url.substring(askIndex+1,wellIndex)
// let wellText=url.substring(wellIndex+1)
// console.log(wellText)
// console.log(askText)
//
// let askAry=askText.split('&')
// let reslut={}
// askAry.forEach(item=>{
//     let n = item.split('=')
//     let key=n[0]
//     console.log(key)
//     reslut[key]=n[1]
// })
// reslut['HASH']=wellText
// console.log(reslut)
/*
* queryURLParams:获取URL的地址中问号传参的信息和哈希值
* @params
*   url[string]要解析的URL字符串
* @return
* [object]包含参数和哈希值信息的对象
* by uu_kong
* */
// let url='http://127.0.0.1:8080/index.html?hxy=love&name=kzy&gender=man#box'
// function queryURLParams(url){
//     // 获取？和#后面的信息
//     let askIn=url.indexOf('?'),
//         wellIn=url.indexOf('#'),
//         askTest='',
//         wellTest='';
// }
// let date=time.substring(0,time.lastIndexOf(' '));
// let last=time.substring(time.lastIndexOf(' '));
// console.log(date.split('-'));
// console.log(last.split(':'));
let obj = {
    name: 'John',
    age: 4,
}
// let{
//     0:x  //对于数字属性名我们重新命名一个新的变量
// }=obj


let data = [
    10001,
    {
        name: 'John',
        age: 4,
        score: [100, 999, 55]
    }
]
let [id, {name, age, score: [, math]}] = data

console.log(`编号${id}姓名${name}年龄${age}数学成绩${math}`)
