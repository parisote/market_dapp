const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

describe("ReservApp", function () {

  before(async function () {
    [this.contract, this.testPersonA, this.testPersonB] = await hre.ethers.getSigners();
    const NFT = await hre.ethers.getContractFactory("ReservaNFT");
    this.nft_token = await NFT.deploy();
    await this.nft_token.deployed()

    const ReservApp = await hre.ethers.getContractFactory("ReservApp");
    this.contract = await ReservApp.deploy(this.nft_token.address);
    await this.contract.deployed();

    this.cTestA = await this.contract.connect(this.testPersonA);
    this.cTestB = await this.contract.connect(this.testPersonB);

    const provider = waffle.provider;
    const balance0ETH = ethers.utils.formatEther(await provider.getBalance(this.contract.address));
    console.log(balance0ETH)
  });

  it("Creo una nueva categoria", async function () {
    let result = false;
    try{
      await this.contract.newCategory("Oficina","Oficina linda","");
      result = true;
    } catch (error){
      result = false;
    }
    expect(result).to.equal(true);
  });

  it("Creo una nueva categoria sin ser owner", async function () {
    let result = false;
    try{
      await this.cTestA.newCategory("Oficina","Oficina linda","");
      result = true;
    } catch (error){
      result = false;
    }
    expect(result).to.equal(false);
  });

  it("Obtengo categorias", async function () {
    const result = await this.cTestA.getCategories();
    expect(result.length).to.equal(1);
  });


  it("Creo un nuevo lugar", async function () {
    let result = false;
    try{
      await this.cTestA.newPlace(0,ethers.utils.parseEther("10") ,10,"Oficina en belgrano","Oficina grande","",{ value: ethers.utils.parseEther("0.0001") })
      result = true;
    } catch (error){
      result = false;
    }
    expect(result).to.equal(true);
  });

  it("Pruebo que el lugar este creado", async function () {
    const result = await this.cTestA.getPlacesByCategory(0);
    expect(result[0].title).to.equal("Oficina en belgrano");
  });

  it("Rento el lugar", async function () {
    let result = false;
    try{
      await this.cTestB.rentPlace(0,0, { value: ethers.utils.parseEther("10") });
      result = true;
    } catch (error){
      result = false;
    }
    expect(result).to.equal(true);
  });

  it("Chequeo el balance", async function () {
    const result = await this.cTestA.getBalance()
    expect(result).to.equal(ethers.utils.parseEther("10"));
  });

  it("Chequeo owner de NFT", async function () {
    const aOwner = await this.nft_token.ownerOf(1);
    expect(aOwner).to.equal(this.testPersonB.address);
  });

  it("Chequeo persona NO TENGA linked", async function () {
    const person = await this.cTestA.getPersonByAddress();
    expect(person.first_name).to.equal("");
  });

  it("Vinculo persona a address", async function () {
    let result = false;
    try{
      await this.cTestA.linkedPerson("Tomas","Climente","detomas@gmail.com");
      result = true;
    } catch (error){
      result = false;
    }
  expect(result).to.equal(true);
  });

  it("Chequeo persona TENGA linked", async function () {
    const person = await this.cTestA.getPersonByAddress();
    expect(person.first_name).to.equal("Tomas");
  });

  it("Hago withdraw", async function () {
    const provider = waffle.provider;
    const balanceBefore = await provider.getBalance(this.testPersonA.address);
    this.cTestA.withdraw();    
    const balanceAfter = await provider.getBalance(this.testPersonA.address);
    const resultA = ethers.utils.formatEther(balanceAfter).split('.')[0]
    const resultB = ethers.utils.formatEther(balanceBefore.add(ethers.utils.parseEther("10"))).split('.')[0]
    expect(resultA).to.equal(resultB);
  });

  it("Destoy contract", async function () {
    const d = await this.contract.destroy();
    expect(d.confirmations).to.equal(1);
  });

});
