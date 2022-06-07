const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReservApp", function () {

  before(async function () {
    [this.contract, this.testPerson] = await hre.ethers.getSigners();
    const NFT = await hre.ethers.getContractFactory("ReservaNFT");
    this.nft_token = await NFT.deploy();
    await this.nft_token.deployed()

    const ReservApp = await hre.ethers.getContractFactory("ReservApp");
    this.contract = await ReservApp.deploy(this.nft_token.address);
    await this.contract.deployed();

    this.cTest = await this.contract.connect(this.testPerson);
  });

  it("Creo un nuevo lugar", async function () {
    await this.contract.newPlace(0,ethers.utils.parseEther("0.1"),10,"Oficina","Oficina","image",{ value: ethers.utils.parseEther("0.0001") })
    expect(1).to.equal(1);
  });

  it("Pruebo que el lugar este creado", async function () {
    const a = await this.contract.getPlacesByCategory(0);
    expect(a.length).to.equal(1);
  });

  it("Reservo lugar", async function () {
    const a = await this.cTest.rentPlace(0,0, { value: ethers.utils.parseEther("0.1") });
    expect(1).to.equal(1);
  });

  it("Chequeo mis reservas", async function () {
    const a = await this.cTest.getMyPlaces();
    expect(a[0][1]).to.equal('Oficina');
  });

  it("Chequeo owner de NFT", async function () {
    const aOwner = await this.nft_token.ownerOf(1);
    expect(aOwner).to.equal(this.testPerson.address);
  });
});
