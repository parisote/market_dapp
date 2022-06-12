require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const GOERLI_PRIVATE_KEY = "4dc8d11b9023de456fabe7c98289b1328d40cc173721b944c775d540da034f3b";

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/6I8_ORnqsNDUIyf0BHZKjhHsfeM4Wa5T",
      accounts: ["4dc8d11b9023de456fabe7c98289b1328d40cc173721b944c775d540da034f3b"],
      gasPrice: 8000000000
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/6YR8gYUXJwyfdtNjTEzkQl8iiblI7kZA",//"https://rpc-mumbai.maticvigil.com",
      accounts: ["4dc8d11b9023de456fabe7c98289b1328d40cc173721b944c775d540da034f3b"]
    },
    maticDapp: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/R5RrRZmPWPH6ujD4lJFRxWvS7K1jiopY",//"https://rpc-mumbai.maticvigil.com",
      accounts: ["4dc8d11b9023de456fabe7c98289b1328d40cc173721b944c775d540da034f3b"]
    }
  },
};
