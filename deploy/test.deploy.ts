import { deployments, getNamedAccounts, upgrades } from "hardhat";

export default async function main() {
    
    const {Deployer} = await getNamedAccounts();
    const BoxContract = await deployments.deploy('MyTestProxy', {
        from: Deployer,
        contract: 'TestV2',
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
        },
        log: true
    })
}
// Proxy : 0x052da61145f7d78ca9D23F9e665d1F85D5a697a7