import { ethers  } from "hardhat";

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("StandardImplv2");
  const impl = await Box.deploy()
  console.log(impl.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});