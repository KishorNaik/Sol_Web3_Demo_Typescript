import Web3Helpers from "../Helpers/Web3Helper";
import { Web3HostUrl } from "../Shared/Setting";
import BN from 'bignumber.js';
import { BigNumber, BigNumberToString } from "../Shared/BigNumber";

const main=async():Promise<void>=>{

    try
    {
        let web3Helper:Web3Helpers=Web3Helpers.CreateInstance(Web3HostUrl);
        let balance:BN=await web3Helper.Balance.GetNativeCoinBalanceToBigNumberAsync('0x4014c023192ef37a91adcea4ac2fdd90914bd76f');

        let balanceString:string=BigNumberToString(balance);
        console.log(`Wallet Balance => ${balanceString}`); // Wallet Balance in Wei format by default.

        // From Wei To Ether (String)

        let etherBalance:BN=await web3Helper.UnitConverter.FromWeiBigNumberToEtherAsync(balance);
        console.log("Wei => Ether => ",BigNumberToString(etherBalance));
        
        // From Wei to Gwei
        let gweiBalance:BN=await web3Helper?.UnitConverter.FromWeiBigNumberToGweiBigNumberAsync(balance);
        console.log(`Wei => Gwei `, BigNumberToString(gweiBalance));

        // From Gwei To Wei
        let weiBalance:BN=await web3Helper?.UnitConverter.FromGweiBigNumberToWeiBigNumberAsync(gweiBalance);
        console.log(`Gwei => Wei => ${BigNumberToString(weiBalance)}`);

        // From Gwei To Ether
        let etherBalance1:BN=await web3Helper?.UnitConverter.FromGweiBigNumberToEtherBigNumberAsync(gweiBalance);
        console.log(`Gwei => Ether => ${BigNumberToString(etherBalance1)}`);
        
        // From Ether to Wei
        let weiBalance1:BN=await web3Helper?.UnitConverter.FromEtherBigNumberToWeiBigNumber(etherBalance);
        console.log(`Ether => Wei => ${BigNumberToString(weiBalance1)}`);

        // From Ether to Gwei
        let gweiBalance1:BN=await web3Helper?.UnitConverter?.FromEtherBigNumberToGweiBigNumber(etherBalance);
        console.log(`Ether => Gwei => ${BigNumberToString(gweiBalance1)}`);
        

        let fullUnitValue:number=0.00001;
        let fullUnitToSmallUnit:BN=await web3Helper?.UnitConversion.FromFullUnitToSmallUnitAsync(fullUnitValue,18);
        console.log(`Full Unit to Small Unit => ${BigNumberToString(fullUnitToSmallUnit)}`);

        let smallUnitValue:number=10000000000000;
        let smallUnitToFullUnit:BN=await web3Helper?.UnitConversion?.FromSmallUnitToFullUnitAsync(smallUnitValue,18);
        console.log(`Small Unit to Full Unit => ${BigNumberToString(smallUnitToFullUnit)}`);
    }
    catch(ex)
    {
        throw ex;
    }

}

main()
    .then()
    .catch((ex)=> console.log(ex.message));