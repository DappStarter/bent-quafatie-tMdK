require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot blanket radar office company harvest civil army giant'; 
let testAccounts = [
"0xff5817711bf37d4597be5c4f96c9c495bf55af375a18c4f4bb73af7c319bc12d",
"0x9b99f765bf2703e3f9dae5226eea28a32aaf23dec251214485e43c8da0c9a51b",
"0x5d6acd48be5f93efe7c033d2a98040839efd53fb7fd650d4cf15b553ab595e52",
"0xba82a43ad0b1f3b0da285cbdf9cd826abdddbaeadc23c11eb729ff8b73189a2d",
"0xdb11689ec370683ce50a96b30d5266d57a12b600efa49d502e0e5a497800cbf6",
"0x6e2910b9fb2ff86e563475fe230ce3312733246411df36e32f5b14fce3609a4f",
"0xfc88416b88f5b96246ae19a5bbd14b5fc16bd378a1d5e15d9e6d6650c8638cd9",
"0x7feba63fc829791761b1d8ebdf7ec713d46d631d40f09eef015adb71aff3a092",
"0x6f075ec0cc4094e997f1e70930c42afa770a25abffc675b37a182c9725daa998",
"0xd44a5e7fc57a85a025e935e22f008637120dc5e04ec710a25dd799a61e9928b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

