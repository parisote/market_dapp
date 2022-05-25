// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract ReservApp is Ownable{
    enum Category { Oficina, Garage }
    mapping(Category => Place[]) private _places;
    mapping(address => PlaceRent[]) private _rent;
    mapping(address => uint256[]) private _bankPlace;
    mapping(address => uint256[]) private _bankRent;

    struct Place{
        uint256 id;
        uint256 size;
        uint256 price;
        Category category;
        string title;
        string zone;
        
    }

    struct PlaceRent{
        Category category;
        string title;
        string zone;
    }

    uint256 _id;
    event NewPlaceEvent();
    event NewRent();

    modifier checkValue(){
        require(msg.value == 0.0001 ether, "Value is not 0.0001 ether");
        _;
    }

    function newPlace(Category category, string memory title, string memory zone, uint256 price, uint256 size) public payable checkValue(){
        _bankPlace[msg.sender].push(msg.value);
        _places[category].push(Place(_id, size, price, category, title, zone));
        _id++;
        emit NewPlaceEvent();
    }

    function getPlacesByCategory(Category category) public view returns(Place[] memory){
        return _places[category];
    }

    function rentPlace(Category category, uint index) public payable checkValue(){
        Place storage p = _places[category][index];
        require(p.size > 0, "Place complete");

        _bankRent[msg.sender].push(msg.value);
        p.size -= 1;
        _places[category][index] = p;

        _rent[msg.sender].push(PlaceRent(category,p.title,p.zone));
        emit NewRent();
    }

    function getMyPlaces() public view returns(PlaceRent[] memory){
        return _rent[msg.sender];
    }
}