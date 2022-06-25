require('dotenv').config()
const { BncClient, crypto } = require("@binance-chain/javascript-sdk")
const axios = require('axios').default;

const api = 'https://dex.binance.org'; /// api string

const client = new BncClient(api);
client.chooseNetwork("mainnet");

(async () => {
    await client.recoverAccountFromPrivateKey(process.env.PRIVATE)
    await client.setPrivateKey(process.env.PRIVATE);
    await client.initChain();
    console.log(process.env.PRIVATE);

    const address = await client.getClientKeyAddress();
    // console.log(address);

    // const accountInfo =  await client.getAccount(address);
    // console.log(accountInfo.result);

    // console.log(new Date("2022-06-23T00:00:00").getTime() / 1000);
    // console.log(Date.now());
    const transactions = await axios.get('https://api-binance-mainnet.cosmostation.io/v1/account/txs/bnb17w4qnszku99ef5zp8uwueayefrqa0sw8d4axgv');
    
    console.log(transactions.data);
})();

// {
//     privateKey: '64228f421b69e070d8793f0c053596fd2217ab3c649ebe2883cfc5956eb7b5b0',
//         address: 'bnb17w4qnszku99ef5zp8uwueayefrqa0sw8d4axgv'
// }