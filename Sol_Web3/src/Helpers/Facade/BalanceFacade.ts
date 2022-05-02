import { GetERC20TokenBalanceProxyAsync, GetNativeCoinBalanceProxyAsync } from "../Proxy/BalanceProxy";
import Web3Helpers from "../Web3Helper";
import BN from 'bignumber.js';

/**
 * @Type 
 */
interface IGetERC20TokenBalanceToBigNumberOption{
    walletAddress:string;
    tokenContractAddress:string;
}


export class BalanceFacade{

    private readonly web3Helper:Web3Helpers;

    constructor(web3Helper:Web3Helpers){
        this.web3Helper=web3Helper;
    }

    /**
     * Get Native Coin Balance
     * @param walletAddress : Specify the Wallet Address
     * @returns BigNumber
     */
    public async GetNativeCoinBalanceToBigNumberAsync(walletAddress:string): Promise<BN>{
        return await GetNativeCoinBalanceProxyAsync({
            web3:this.web3Helper.Web3Instance,
            address:walletAddress
        });
    }

    /**
     * Get ERC20 Token balance
     * @param param
     * @returns 
     */
    public async GetERC20TokenBalanceToBigNumberAsync(param:IGetERC20TokenBalanceToBigNumberOption):Promise<BN>{
        return await GetERC20TokenBalanceProxyAsync({
            web3:this.web3Helper.Web3Instance,
            walletAddress:param?.walletAddress,
            tokenAddress:param?.tokenContractAddress
        });
    }

}