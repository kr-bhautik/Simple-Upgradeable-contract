import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades"
import "hardhat-deploy"
import dotenv from 'dotenv'
dotenv.config()

const localAccount = process.env.LOCAL_KEY || "";
const realAccount = process.env.DEPLOYER_KEY || "";
const etherscanApiKey = process.env.SEPOLIA_ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/716bdb39b2f84516b3cedcfb3c2d2c19',
      chainId: 11155111,
      accounts: [realAccount],
    },
  },
  defaultNetwork: 'sepolia',
  namedAccounts: {
    Deployer: {
      default: 0
    }
  },
  etherscan: {
    apiKey: etherscanApiKey
  }
};

export default config;
