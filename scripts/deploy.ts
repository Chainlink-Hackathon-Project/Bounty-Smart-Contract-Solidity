import { ethers } from "hardhat";

async function main() {

  const BountyPlatform = await ethers.getContractFactory("BountyPlatform");
  const bountyPlatform = await BountyPlatform.deploy();

  await bountyPlatform.deployed();

  console.log(
    `BountyPlatform deployed to ${bountyPlatform.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
