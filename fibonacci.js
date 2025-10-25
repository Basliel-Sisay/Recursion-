function fibo(n){
    if(n===1){
        return [0];
    }
    else if(n===2){
        return [0,1];
    }
    const before = fibo(n-1);
    const next = before[before.length -1] + before [ before.length -2];
    return [...before, next];
} 