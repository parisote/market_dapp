const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  //const NFT = await hre.ethers.getContractFactory("ReservaNFT");
  //const nft = await NFT.deploy();

  //const nft = "0x9CcD4a1Cc462b0188377EA24d084D2ECff298969";
  //const dappa = "0x7322F7655D19dc6f3355CE0CfE6780962597cE45";

  const ReservApp = await hre.ethers.getContractFactory("ReservApp");
  const dapp = await ReservApp.deploy(nft);
  //await dapp.deployed();

  console.log("dapp deployed to:", dapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
