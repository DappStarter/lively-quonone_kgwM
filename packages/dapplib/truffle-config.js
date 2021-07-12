require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name reward stick universe hunt industry equal genuine'; 
let testAccounts = [
"0x94a7276caed6979a553346f75a341e4323943cbe27916a8cac8d3ec319799de4",
"0x18dd8cd2112f63d6ebc5c5612cda66df0851b3a5bf39c2c114c08439c818bc84",
"0x5f0430c912ee1f74cded84d12fccfd34a2f857470746ede7e049427d93438e17",
"0xea4e300b30420ce34f409c81d81a79098ae25b9d08f36205a8fd2ace62fe2ddb",
"0xa88b305e282a2739987bb620dad8467d425fa6833b6a2f42f527f238b9c33113",
"0xe002370479aa0fabfd755deb51dc5d70f266407185335d54d7239cd44c825186",
"0xa666a7eb5bfb5ad52639482b2ddd329caaf8059fc7908656c3dd230054b90ad9",
"0x9a7ccaaf5e54ea5949ea6f9fc54d89a9d3fb75b6df65fe4b712b1b61c7afe880",
"0xf121747050d27ad9ca94ae78f9899ff52677af2cf321a118550b8b7a6a7c1e91",
"0x2261355ea2bebd29d237e7cee3a4b67f6046abad45a18bd21506621b1e81767f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

