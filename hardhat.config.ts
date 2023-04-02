import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';

import * as dotenv from 'dotenv';
import 'hardhat-deploy';
import './tasks';
dotenv.config();
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
      localhost: 0
    }
  },
  // Default network when you don't specify "--network {network_name}"
  defaultNetwork: 'hardhat', //BSCTest
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://localhost:8545'
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/' + process.env.INFURA_KEY,
      chainId: 97,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    BSCTest: {
      url: 'https://bsc-testnet.public.blastapi.io',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey:
      process.env.ETHERSCAN_API_KEY !== undefined
        ? process.env.ETHERSCAN_API_KEY
        : '' // Your Etherscan API key
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
    deploy: './deploy'
  },
  mocha: {
    timeout: 20000
  }
};

export default config;
