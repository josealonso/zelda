

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.METAMASK_PRIVATE_KEY]
    },
    mainnet: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.METAMASK_PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
