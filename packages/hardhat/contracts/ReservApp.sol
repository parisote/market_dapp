// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

    interface IReservaNFT {
        function mintNFT(address owner) external returns(uint256);
    }

contract ReservApp is Ownable{
    uint256 private _id;
    uint256[6][] private test;
    enum Category { Oficina, Garage }
    mapping(Category => Place[]) private _places;
    mapping(address => PlaceRent[]) private _rent;
    mapping(address => uint256[]) private _bankPlace;
    mapping(address => uint256[]) private _bankRent;

    IReservaNFT private nft_address;

    struct Place{
        uint256 id;
        uint256 size;
        uint256 price;
        Category category;
        string title;
        string description;        
        string image;
    }

    struct PlaceRent{
        Category category;
        string title;
        string description;
    }
        
    event NewPlaceEvent();
    event NewRent();

    modifier checkValue(){
        require(msg.value == 0.0001 ether, "Value is not 0.0001 ether");
        _;
    }

    constructor(address _nft){
        nft_address = IReservaNFT(address(_nft));
    }

    function newPlace(Category category, uint256 price, uint256 size, string memory title, string memory description, string memory image) public payable checkValue(){
        _bankPlace[msg.sender].push(msg.value);
        _places[category].push(Place(_id, size, price, category, title, description, image));
        _id++;
        emit NewPlaceEvent();
    }

    function getPlacesByCategory(Category category) public view returns(Place[] memory){
        return _places[category];
    }

    function rentPlace(Category category, uint index) public payable checkValue() returns(uint256){
        Place storage p = _places[category][index];
        require(p.size > 0, "Place complete");

        _bankRent[msg.sender].push(msg.value);
        p.size -= 1;
        _places[category][index] = p;

        _rent[msg.sender].push(PlaceRent(category,p.title,p.description));

        uint256 result = nft_address.mintNFT(msg.sender);
        return result;
    }

    function getMyPlaces() public view returns(PlaceRent[] memory){
        return _rent[msg.sender];
    }

    function getPlacesById(Category category, uint256 index) public view returns(Place memory){
        return _places[category][index];
    }

    fallback() external payable{ }
    
}