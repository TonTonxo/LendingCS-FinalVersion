const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "wss://data-seed-prebsc-1-s3.binance.org:8545"
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    // matic: {
    //   provider: () => new HDWalletProvider(mnemonic, 'wss://rpc-mumbai.maticvigil.com/ws/v1/b7ca7c35da354c5b857a3976b94e2c35599bdc3e'),
    //   network_id: 80001,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
  },

  mocha: {},

  compilers: {
    solc: {},
  },
};
