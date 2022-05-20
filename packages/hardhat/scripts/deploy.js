const hre = require("hardhat");

async function main() {

  const ReservApp = await hre.ethers.getContractFactory("ReservApp");
  const dapp = await ReservApp.deploy();

  await dapp.deployed();

  console.log("Market deployed to:", dapp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
