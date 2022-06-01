const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("ReservaNFT");
  const nft = await NFT.deploy();
  await nft.deployed();

  const ReservApp = await hre.ethers.getContractFactory("ReservApp");
  const dapp = await ReservApp.deploy(nft.address);
  await dapp.deployed();

  console.log("NFT deployed to:", nft.address);
  console.log("Market deployed to:", dapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
