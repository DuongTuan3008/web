let newPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(`Tuan`);
    }, 3000);
});

newPromise.then(function (data) {
    console.log(data)
})

async function getResult() {
    let result = await newPromise;
    return result;
}

let total = getResult();
total.then(function (data) {
    console.log(data);
})