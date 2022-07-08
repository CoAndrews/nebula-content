function hasSubstr(str){
    let letter = 'a'
    let re = new RegExp(letter, 'g');
    console.log(re) // output: /a/g
    return str.match(re)?.length
}

console.log(hasSubstr('thursday'));



function searchStr(str){
    let re2 = new RegExp('jo+n','gim');
console.log(re2);
return str.match(re2);
}

console.log(searchStr('juan chanel jon odalis armani'));