// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

interface IReservaNFT {
    function mintNFT(address owner) external returns(uint256);
}

error NewPlaceError();
error RentError();

contract ReservApp is Ownable{
    uint256 private _id;
    uint256[6][] private test;
    enum Category { Oficina, Garage }
    mapping(Category => Place[]) private _places;
    mapping(address => PlaceRent[]) private _rent;
    mapping(address => uint256[]) private _bankPlace;
    mapping(address => Person) private _persons;

    IReservaNFT private nft_address;

    struct Place{
        uint256 id;
        uint256 index;
        address owner;
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

    struct Person{
        string first_name;
        string last_name;
        string email;
    }
        
    event NewPlaceEvent(
        uint256 indexed id, 
        uint256 indexed index,
        uint256 size, 
        uint256 price, 
        Category category, 
        string title, 
        string description, 
        string image
        );
        
    event NewRentEvent(
        address indexed user, 
        Category category, 
        uint256 indexed index, 
        string name, 
        string description
        );

    event NewPersonEvent(
        address indexed direction,
        string last_name,
        string first_name,
        string email
    );

    modifier checkValue(){
        require(msg.value == 0.0001 ether, "Value is not 0.0001 ether");
        _;
    }

    constructor(address _nft){
        nft_address = IReservaNFT(address(_nft));
    }

    function getPlacesByCategory(Category category) public view returns(Place[] memory){
        return _places[category];
    }

    function getMyPlaces() public view returns(PlaceRent[] memory){
        return _rent[msg.sender];
    }

    function linkedPerson(string memory first_name, string memory last_name, string memory email) public{
        _persons[msg.sender] = Person(first_name, last_name, email);
        emit NewPersonEvent(msg.sender, first_name, last_name, email);
    }

    function newPlace(Category category, uint256 price, uint256 size, string memory title, string memory description, string memory image) public payable checkValue(){
        _bankPlace[msg.sender].push(msg.value);
        uint256 index = _places[category].length;
        _places[category].push(Place(_id, index, msg.sender, size, price, category, title, description, image));
        _id++;
        emit NewPlaceEvent(_id, index, size, price, category, title, description, image);
    }

    function rentPlace(Category category, uint index) public payable {
        Place storage p = _places[category][index];
        require(p.size > 0, "Place complete");
        require(p.price == msg.value, "Price is distinct");

        p.size -= 1;
        _places[category][index] = p;

        address payable to = payable(p.owner);
        _rent[msg.sender].push(PlaceRent(category,p.title,p.description));
        nft_address.mintNFT(msg.sender);

        to.transfer(msg.value);
        
        emit NewRentEvent(msg.sender, category, index, p.title, p.description);
    }

    function getPersonByAddress() public view returns(Person memory){
        return _persons[msg.sender];
    }

    fallback() external payable{ }    
}