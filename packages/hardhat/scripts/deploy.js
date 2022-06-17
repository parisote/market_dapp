const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  //const NFT = await hre.ethers.getContractFactory("ReservaNFT");
  //const nft = await NFT.deploy();

  //await nft.deployed();

  //console.log("NFT deployed to:", nft.address);

  const nft = "0xff7998D7a9aa733819601920f6cf603dB11D667B";
  //const dappa = "0x43484005E6a39C941e2e8aEC2EDCDe6aE89d3306";

  const ReservApp = await hre.ethers.getContractFactory("ReservApp");
  const dapp = await ReservApp.deploy(nft);
  await dapp.deployed();  
  console.log("dapp deployed to:", dapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
