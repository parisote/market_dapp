// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error NewPlaceError();
error RentError();

contract ReservApp{
    uint256 private _id;
    uint8 private _id_category;
    bool private _lock = false;
    Category[] private _category;
    address private _owner;
    mapping(uint8 => Place[]) private _places;
    mapping(address => PlaceRent[]) private _rent;
    mapping(address => uint256) private _bank;
    mapping(address => Person) private _persons;

    struct Category{
        uint8 index;
        string name;
        string description;
        string image;
    }

    struct Place{
        uint256 id;
        uint256 index;
        address owner;
        uint256 size;
        uint256 price;
        uint8 category;
        string title;
        string description;        
        string image;
    }

    struct PlaceRent{
        uint8 category;
        string title;
        string description;
    }

    struct Person{
        string first_name;
        string last_name;
        string email;
        string image;
    }
        
    event NewPlaceEvent(
        uint256 indexed id, 
        uint256 indexed index,
        uint256 size, 
        uint256 price, 
        uint8 category, 
        string title, 
        string description, 
        string image
        );
        
    event NewRentEvent(
        address indexed user, 
        uint8 category, 
        uint256 indexed index, 
        string name, 
        string description
        );

    event NewPersonEvent(
        address indexed direction,
        string last_name,
        string first_name,
        string email,
        string image
    );

    event NewCategoryEvent(
        uint8 indexed index, 
        string name,
        string description, 
        string image
    );

    event NewWithdrawEvent(
        address indexed from,
        uint256 balance
    );

    modifier checkValue(){
        require(msg.value == 0.0001 ether, "Value is not 0.0001 ether");
        _;
    }

    modifier onlyOwner(){
        require(_owner == msg.sender, 'You arent owner');
        _;
    }

    modifier checkLock(){
        require(!_lock);
        _lock = true;
        _;
        _lock = false;
    }

    constructor(){
        _owner = msg.sender;       
    }

    function isOwner() public view returns(bool){
        return _owner == msg.sender;
    }

    function getCategories() public view returns(Category[] memory){
        return _category;
    }

    function getPlacesByCategory(uint8 category) public view returns(Place[] memory){
        return _places[category];
    }

    function getMyPlaces() public view returns(PlaceRent[] memory){
        return _rent[msg.sender];
    }

    function getPlaceById(uint8 category, uint256 index) public view returns(Place memory){
        return _places[category][index];
    }

    function linkedPerson(string memory first_name, string memory last_name, string memory email, string memory image) public{
        _persons[msg.sender] = Person(first_name, last_name, email, image);
        emit NewPersonEvent(msg.sender, first_name, last_name, email, image);
    }

    function newPlace(uint8 category, uint256 price, uint256 size, string memory title, string memory description, string memory image) public payable checkValue(){
        uint256 index = _places[category].length;
        _places[category].push(Place(_id, index, msg.sender, size, price, category, title, description, image));
        _id++;
        emit NewPlaceEvent(_id, index, size, price, category, title, description, image);
    }

    function rentPlace(uint8 category, uint index) public payable {
        Place storage p = _places[category][index];
        require(p.size > 0, "Place complete");
        require(p.price == msg.value, "Price is distinct");

        p.size -= 1;
        _places[category][index] = p;

        address payable to = payable(p.owner);
        _rent[msg.sender].push(PlaceRent(category,p.title,p.description));

        _bank[to] += msg.value;
        
        emit NewRentEvent(msg.sender, category, index, p.title, p.description);
    }

    function getPersonByAddress() public view returns(Person memory){
        return _persons[msg.sender];
    }

    function newCategory(string memory category, string memory description, string memory image) public onlyOwner{
        _category.push(Category(_id_category, category, description, image));
        _id_category++;
        emit NewCategoryEvent(_id_category, category, description, image);
    }

    function withdraw() external payable checkLock{
        require(_bank[msg.sender] > 0, "Balance is 0");
        uint256 balance = _bank[msg.sender];
        _bank[msg.sender] = 0;
        (bool result,) = payable(msg.sender).call{value:balance}("");
        require(result, "Transfer is not completed");
        emit NewWithdrawEvent(msg.sender, balance);
    }

    function getBalance() public view returns(uint256){
        return _bank[msg.sender];
    }

    function destroy() public onlyOwner{
        selfdestruct(payable(_owner));
    }

    fallback() external payable{ }
    receive() external payable { }
}