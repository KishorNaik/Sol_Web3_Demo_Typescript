import Web3Helpers from "../Helpers/Web3Helper";
import { Web3HostUrl } from "../Shared/Setting";
import BN from 'bignumber.js';
import { BigNumberToNumber, BigNumberToString } from "../Shared/BigNumber";

const main=async():Promise<void>=>{

    try
    {
        let web3Helper:Web3Helpers=Web3Helpers.CreateInstance(Web3HostUrl);
        //0x4014c023192ef37a91adcea4ac2fdd90914bd76f
        //0x4014C023192ef37A91ADCEA4aC2fdD90914Bd76F
        
        // Is Check Sum Address
        let flag:boolean=await web3Helper.Utility.IsCheckSumAddressAsync('0x4014C023192ef37A91ADCEA4aC2fdD90914Bd76F');
        console.log(`Is Check Sum => ${flag}`);

        // To Check Sum Address 
        let toCheckSumAddress:string=await web3Helper.Utility.ToCheckSumAddressAsync('0x4014C023192ef37A91ADCEA4aC2fdD90914Bd76F');
        console.log(`To Check Sum Address => ${toCheckSumAddress}`);


    }
    catch(ex)
    {
        throw ex;
    }

}

main()
    .then()
    .catch((ex)=> console.log(ex.message));