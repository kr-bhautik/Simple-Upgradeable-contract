import { deployments, getNamedAccounts, upgrades } from "hardhat";

export default async function main() {
    
    const {Deployer} = await getNamedAccounts();
    const BoxContract = await deployments.deploy('Box', {
        from: Deployer,
        contract: 'BoxV3',
        proxy: {
            execute: {
                init: {
                    methodName: 'initialize',
                    args: [13]
                }
            },
            proxyContract: "OpenZeppelinTransparentProxy",
        },
        log: true
    })
}

// 0x274b475bc04db51Eb4bD60BFB8486aD096865ac9