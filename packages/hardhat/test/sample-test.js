const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Market", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Market = await hre.ethers.getContractFactory("Market");
    const mkt = await Market.deploy();
  
    await mkt.deployed();

  });
});
