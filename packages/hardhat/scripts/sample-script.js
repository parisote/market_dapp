const hre = require("hardhat");

async function main() {

  const Market = await hre.ethers.getContractFactory("Market");
  const mkt = await Market.deploy();

  await mkt.deployed();

  console.log("Market deployed to:", mkt.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
