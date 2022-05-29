// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ReservaNFT is ERC721{
    string private constant TOKEN_URI = "https://gateway.pinata.cloud/ipfs/QmUyjMYTAZgcCiYu3kZMnR71ZjNyiL9XXBxeEaAQUYwJMv";
    uint256 private _cant;

    constructor() ERC721("ReservaNFT","RNFT"){
        _cant = 0;
    }

    function mintNFT(address owner) public returns(uint256){
        _cant++;
        _safeMint(owner,_cant);        
        return _cant;
    }

    function tokenURI(uint256 tokenId) public pure override returns(string memory){
        require(tokenId == 0);
        return TOKEN_URI;
    }

    function getCant() public view returns(uint256){
        return _cant;
    }
}