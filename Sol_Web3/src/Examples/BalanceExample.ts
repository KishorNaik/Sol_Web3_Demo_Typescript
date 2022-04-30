import Web3Helpers from "../Helpers/Web3Helper";
import { Web3HostUrl } from "../Shared/Setting";
import BN from 'bignumber.js';
import { BigNumberToString } from "../Shared/BigNumber";

const main=async():Promise<void>=>{

    try
    {
        let web3Helper:Web3Helpers=Web3Helpers.CreateInstance(Web3HostUrl);
        let balance:BN=await web3Helper.Balance.GetNativeCoinBalanceToBigNumberAsync('0x4014c023192ef37a91adcea4ac2fdd90914bd76f');

        console.log(`Wallet Balance => ${BigNumberToString(balance)}`); // Wallet Balance in Wei format by default.


    }
    catch(ex)
    {
        throw ex;
    }

}

main()
    .then()
    .catch((ex)=> console.log(ex.message));