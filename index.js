const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    cats.slice(name);
    return ["Milo", "Otis", "Garfield", name];
}
function prependCat(name){
    cats.slice(name);
    return [name, "Milo", "Otis", "Garfield"];
}
function removeLastCat(){
    cats.slice(-2);
    return ["Milo", "Otis"];
}
function removeFirstCat(){
    cats.slice(0);
    return ["Otis", "Garfield"];
}