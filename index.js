function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction(){
    return function steve(){}
}

function returnsAnAnonymousFunction(){
    return function(){};
}