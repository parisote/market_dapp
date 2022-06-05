const Moralis = require("moralis/node")
require("dotenv").config()
const contractAddresses = require("./contract/networkMapping.json")

let chainId = process.env.chainId || "31337"
let moralisChainId = chainId == "31337" ? "1337" : chainId
console.log(moralisChainId)

/* Moralis init code */
const serverUrl = process.env.VITE_MORALIS_SERVER_URL
const appId = process.env.VITE_MORALIS_APPLICATION_ID
const masterKey = process.env.masterKey

async function main() {
    await Moralis.start({ serverUrl, appId, masterKey })
    const contractAddress = contractAddresses[chainId]["ReservApp"][0]
    console.log(contractAddress)

    console.log(`Working with contract address: ${contractAddress}`)

    let newPlace = {
        chainId: moralisChainId,
        address: contractAddress,
        topic: "NewPlaceEvent(uint8,uint256)",
        abi: {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "enum ReservApp.Category",
                name: "category",
                type: "uint8"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
              }
            ],
            name: "NewPlaceEvent",
            type: "event"
          },
        tableName: "NewPlaceEvent",
        sync_historical: true,
    }

    let newRent = {
        chainId: moralisChainId,
        address: contractAddress,
        topic: "NewRent(address,uint8,uint256)",
        abi: {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address"
              },
              {
                indexed: false,
                internalType: "enum ReservApp.Category",
                name: "category",
                type: "uint8"
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
              }
            ],
            name: "NewRent",
            type: "event"
          },
        tableName: "NewRent",
        sync_historical: true,
    }

    const newPlaceResponse = await Moralis.Cloud.run("watchContractEvent", newPlace, {
        useMasterKey: true,
    })
    const newRentResponse = await Moralis.Cloud.run("watchContractEvent", newRent, {
        useMasterKey: true,
    })

    if (newPlaceResponse.success && newRentResponse.success) {
        console.log(
            "Updated! You should now be able to see these tables in your database. \n Note: You won't be able to see the events on the `sync` tab of the UI though."
        )
    } else {
        console.log(
            "Something went wrong uploading events... Try manually importing for a better error code. "
        )
    }
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })