// import { ethers  } from "hardhat";
// import {upgrades} from "hardhat"
// const proxyAddress = '0x978516C6F1022eD24cc3699B1402F3E87F4dc121'

// async function main() {
//   console.log(proxyAddress," original proxy address")
//   const BoxV2 = await ethers.getContractFactory("StandardImplv2")
//   console.log("upgrade to V2...")
//   const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2)
//   console.log(boxV2.address," BoxV2 address(should be the same)")

//   console.log(await upgrades.erc1967.getImplementationAddress(boxV2.address)," getImplementationAddress")
//   console.log(await upgrades.erc1967.getAdminAddress(boxV2.address), " getAdminAddress")    
// }

// main().catch((error) => {
//   console.error(error)
//   process.exitCode = 1
// })