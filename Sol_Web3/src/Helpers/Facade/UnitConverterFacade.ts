import { FromEtherBNToGWeiBNProxyAsync, FromEtherBNToWeiBNProxyAsync, FromGweiBNToEtherBNProxyAsync, FromGweiBNToWeiBNProxyAsync, FromWeiBNToEtherBNProxyAsync, FromWeiBNToGweiBNProxyAsync } from "../Proxy/UnitConvertProxy";
import Web3Helpers from "../Web3Helper";
import BN from 'bignumber.js';

export class UnitConverterFacade{

    constructor(){
    }

        /**
     * Convert from Wei big number to Ether Big Number
     * @param amount : Specify the Amount
     * @returns BigNumber
     */
    public async FromWeiBigNumberToEtherAsync(amount:BN):Promise<BN>{

        return await FromWeiBNToEtherBNProxyAsync({
            amount:amount
        });        
    }

    /**
     * From Wei Big Number to Gwei Big Number
     * @param amount : Specify the Amount
     * @returns BigNumber
     */
    public async FromWeiBigNumberToGweiBigNumberAsync(amount:BN): Promise<BN>{
        return await FromWeiBNToGweiBNProxyAsync({
            amount:amount
        });
    }


    /**
     * From Gwei Big Number to Wei Big Number
     * @param amount : Specify the amount
     * @returns BigNumber 
     */
    public async FromGweiBigNumberToWeiBigNumberAsync(amount:BN): Promise<BN>{
        return await FromGweiBNToWeiBNProxyAsync({
            amount:amount
        });
    }

    /**
     * From Gwei Big number to Ether Big Number
     * @param amount specify the Amount
     * @returns BigNumber 
     */
    public async FromGweiBigNumberToEtherBigNumberAsync(amount:BN) : Promise<BN>{
        return await FromGweiBNToEtherBNProxyAsync({
            amount:amount
        });
    }

    /**
     *  From Ether Big Number to Wei Big Number
     * @param amount Specify the Amount
     * @returns BigNumber
     */
    public async FromEtherBigNumberToWeiBigNumber(amount:BN) : Promise<BN>{
        return await FromEtherBNToWeiBNProxyAsync({
            amount:amount
        });
    }

    /**
     * From Ether Big Number to Gwei Big Number
     * @param amount Specify the Amount
     * @returns BigNumber
     */
    public async FromEtherBigNumberToGweiBigNumber(amount:BN) : Promise<BN>{
        return await FromEtherBNToGWeiBNProxyAsync({
            amount:amount
        });
    }
    
}