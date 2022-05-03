import { IsCheckSumAddressProxyAsync, ToCheckSumAddressProxyAsync } from "../Proxy/CheckSumAddress";
import Web3Helpers from "../Web3Helper";

export class UtilityFacade{
    private readonly web3Helper;
    constructor(web3Helper:Web3Helpers){
        this.web3Helper=web3Helper;
    }

    public async IsCheckSumAddressAsync(address:string):Promise<boolean>{
        return await IsCheckSumAddressProxyAsync({
            web3:this.web3Helper.Web3Instance,
            address:address
        });
    }

    public async ToCheckSumAddressAsync(address:string):Promise<string>{
        return await ToCheckSumAddressProxyAsync({
            web3:this.web3Helper.Web3Instance,
            address:address
        });
    }
}