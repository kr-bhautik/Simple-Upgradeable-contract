import { ethers, upgrades } from'hardhat';

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0xD7847afB2CFA25a4c03d09678B5Bd3B96dcD8CB4', BoxV2);
  console.log('Box upgraded');
}

main();