function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction() {
    return function named(name){
        console.log(name);
    }

}
function returnsAnAnonymousFunction() {
    return function (name) {
        console.log(name);
    }
}