import { GetNativeCoinBalanceProxyAsync } from "../Proxy/BalanceProxy";
import Web3Helpers from "../Web3Helper";
import BN from 'bignumber.js';

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
    public GetNativeCoinBalanceToBigNumberAsync(walletAddress:string): Promise<BN>{
        return GetNativeCoinBalanceProxyAsync({
            web3:this.web3Helper.Web3Instance,
            address:walletAddress
        });
    }

}