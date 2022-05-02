import Web3Helpers from "../Helpers/Web3Helper";
import { Web3HostUrl } from "../Shared/Setting";
import BN from 'bignumber.js';
import { BigNumberToNumber, BigNumberToString } from "../Shared/BigNumber";

const main=async():Promise<void>=>{

    try
    {
        let web3Helper:Web3Helpers=Web3Helpers.CreateInstance(Web3HostUrl);
        
        // Get Native Coin Balance
        let balance:BN=await web3Helper.Balance.GetNativeCoinBalanceToBigNumberAsync('0x4014c023192ef37a91adcea4ac2fdd90914bd76f');
        console.log(`Wallet Balance => ${BigNumberToString(balance)}`); // Wallet Balance in Wei format by default.
        console.log(`Convert into Full Unit => Wallet => ${BigNumberToString(await web3Helper?.UnitConversion.FromSmallUnitToFullUnitAsync(BigNumberToNumber(balance),18))}`);

        // Get ERC20 Token Balance
        let tokenBalance:BN=await web3Helper.Balance.GetERC20TokenBalanceToBigNumberAsync({
            walletAddress:"0x4014c023192ef37a91adcea4ac2fdd90914bd76f",
            tokenContractAddress:"0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99"
        });
        console.log(`Token Balance => ${BigNumberToString(tokenBalance)}`); //Token Balance in Wei format by default.
        console.log(`Convert into Full Unit => Token => ${BigNumberToString(await web3Helper?.UnitConversion.FromSmallUnitToFullUnitAsync(BigNumberToNumber(tokenBalance),18))}`);


    }
    catch(ex)
    {
        throw ex;
    }

}

main()
    .then()
    .catch((ex)=> console.log(ex.message));