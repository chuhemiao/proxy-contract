import { ethers } from 'hardhat';

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory('StandardImplV2');
  const impl = await Box.deploy();
  console.log(impl.address);
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
