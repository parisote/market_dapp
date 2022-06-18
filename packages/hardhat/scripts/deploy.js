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
  //const dappa = "0x4db8663cF7527d6F2b4a996871DCfEaB47Af15f1";

  const ReservApp = await hre.ethers.getContractFactory("ReservApp");
  const dapp = await ReservApp.deploy();
  await dapp.deployed();  
  console.log("dapp deployed to:", dapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
