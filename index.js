const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
const CopyofCat1 = [...cats,"Broom"]
function appendCat(){
    return CopyofCat1
}
const CopyofCat2 = ["Arnold",...cats]
function prependCat(){
    return CopyofCat2
}
const CopyofCat3 = cats.slice(0,2)
function removeLastCat(){
    return CopyofCat3
}
const CopyofCat4 = cats.slice(1)
function removeFirstCat(){
    return CopyofCat4
}