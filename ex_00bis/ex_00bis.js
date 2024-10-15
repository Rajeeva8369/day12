async function check_route(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            console.log("all is good");
        } else {
            console.log("shit happens");
        }} catch (error) {
        console.log("shit happens");
    }}
console.log('Testing Coinbase API:');
check_route('https://docs.cdp.coinbase.com/coinbase-app/docs/welcome#data-endpoints');

console.log('\nTesting Dog Images API:');
check_route('https://dog.ceo/dog-api/#google_vignette');

console.log('\nTesting Popular Memes API:');
check_route('https://imgflip.com/api');

console.log('\nTesting Jokes API:');
check_route('https://sv443.net/jokeapi/v2/');
