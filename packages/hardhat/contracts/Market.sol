// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Market is Ownable{
    enum Status { Lock, InSell, End }

    mapping(address => mapping(uint256 => Product)) public _pxowner;
    mapping(address => mapping(uint256 => uint256)) public _bank;

    uint256 _id;

    Product[] private _allProducts;

    struct Product{
        address owner;
        uint256 index;
        string name;
        string description;
        uint price;
        Status status;
        uint256 time;
    }

    event ENewProduct(Product);
    event ELockProduct(Product);
    event EBuyProduct(Product);

    modifier _checkValue(uint256 value){
        require(value == 1 ether, "Value is not 0.00001 ether");
        _;
    }

    function addProduct(string memory name, string memory description, uint price) public payable _checkValue(msg.value) {
        Product memory _product = Product(msg.sender,_id,name,description,price,Status.InSell,block.timestamp);
        _bank[msg.sender][_id] = msg.value;
        _pxowner[msg.sender][_id] = _product;
        _allProducts.push(_product);
        _id++;
        emit ENewProduct(_product);
    }

    function lockProduct(uint256 index) public {
        _allProducts[index].status = Status.Lock;
        _pxowner[_allProducts[index].owner][index].status = Status.Lock;
        address payable t = payable(_allProducts[index].owner);
        t.transfer(_bank[_allProducts[index].owner][index]);
    }

    function getAllProducts() public view returns(Product[] memory){
        return _allProducts;
    }
    
    function testOwner(uint256 id) public view returns(Product memory){
        return _pxowner[msg.sender][id];
    }
}