const pr = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

pr.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Request failed');
    }
}).catch((err) => {
    console.log(err.message + "CUSTOM DEV NOTE: This is caused due to a network error at the API's end or there is an error in the code of the above then")
}).then((btc_price) => {
    console.table(btc_price);
    console.log("$BTC price at time: " + btc_price.time.updated + "is: " + btc_price.bpi.USD.rate);
}).catch((err) => {
    console.log(err.message);
})