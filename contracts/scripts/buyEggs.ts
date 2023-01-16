import { ethers, upgrades } from 'hardhat'

async function main() {
  const [signer] = await ethers.getSigners()

  const lux = await ethers.getContract('LUX')
  const zk = await ethers.getContract('ZooKeeper')

  await zk.buyEggs(1, 3)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
