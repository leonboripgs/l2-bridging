require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     
      port: 8545,            
      network_id: "*",       
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          process.env.MNEMONIC,
          //url to ethereum node
          process.env.ROPSTEN_WEB3_PROVIDER_ADDRESS
        )
      },
      network_id: 3,
      gas: 4000000,
      gasPrice: 20000000000,
      confirmations: 2,
      websockets: true
    }
  },

  //optimizer is important, otherwise nano contract is not deployable 
  compilers: {
    solc: {
      version: "0.8.7", 
      settings: {         
        optimizer: {
          enabled: true,
          runs: 1500
        },
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API
  }
}