asyncFn()
.then(syncFn)
.then(asyncFn)

function asyncFn(data){
    return new Promise((resolve, reject) => {
        console.log(`asyncFn get data: ${data}`);
        setTimeout(() => {
            resolve('asyncFn data');
        }, 1000)
    });
}

function syncFn(data){
    console.log(`syncFn get data: ${data}`);
    return 'syncFn data'
}