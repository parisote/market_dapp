const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReservApp", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ReservApp = await hre.ethers.getContractFactory("ReservApp");
    const dapp = await ReservApp.deploy();
  
    await dapp.deployed();

  });
});
