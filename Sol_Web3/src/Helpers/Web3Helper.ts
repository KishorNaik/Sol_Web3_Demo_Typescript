import Web3 from 'web3';
import BN from 'bignumber.js';
import { GetNativeCoinBalanceProxyAsync } from './Proxy/BalanceProxy';
import {FromEtherBNToGWeiBNProxyAsync, FromEtherBNToWeiBNProxyAsync, FromFullUnitToSmallUnitProxyAsync, FromGweiBNToEtherBNProxyAsync, FromGweiBNToWeiBNProxyAsync, FromSmallUnitToFullUnitProxyAsync, FromWeiBNToEtherBNProxyAsync, FromWeiBNToGweiBNProxyAsync } from './Proxy/UnitConvertProxy';

export default class Web3Helpers{

    private readonly web3:Web3;

    private constructor(web3:Web3){
        this.web3=web3;
    }

    /**
     * Create an instance of Web3Helpers Class
     * @param host:Host Url  
     * @returns it will return the Web3Helpers
     */
    public static CreateInstance(hostUrl:string):Web3Helpers{
        let _:Web3=new Web3(new Web3.providers.HttpProvider(hostUrl));

        return new Web3Helpers(_);
    }

    /**
     * Get Web3 Instance
     * @returns it will return the Web3 Instance
     */
    public GetWeb3Instance():Web3{
        return this.web3;
    }


    public Balance=new class{

        constructor(private self:Web3Helpers){
        }

        /**
         * Get Native Coin Balance
         * @param walletAddress : Specify the Wallet Address
         * @returns BigNumber
         */
        public GetNativeCoinBalanceToBigNumberAsync(walletAddress:string): Promise<BN>{
            return GetNativeCoinBalanceProxyAsync({
                web3:this.self.web3,
                address:walletAddress
            });
        }

    }(this);

    public UnitConverter=new class {

        constructor(private self:Web3Helpers){  
        }

        /**
         * Convert from Wei big number to Ether Big Number
         * @param amount : Specify the Amount
         * @returns BigNumber
         */
        public FromWeiBigNumberToEtherAsync(amount:BN):Promise<BN>{

            return FromWeiBNToEtherBNProxyAsync({
                amount:amount
            });        
        }

        /**
         * From Wei Big Number to Gwei Big Number
         * @param amount : Specify the Amount
         * @returns BigNumber
         */
        public FromWeiBigNumberToGweiBigNumberAsync(amount:BN): Promise<BN>{
            return FromWeiBNToGweiBNProxyAsync({
                amount:amount
            });
        }


        /**
         * From Gwei Big Number to Wei Big Number
         * @param amount : Specify the amount
         * @returns BigNumber 
         */
        public FromGweiBigNumberToWeiBigNumberAsync(amount:BN): Promise<BN>{
        return FromGweiBNToWeiBNProxyAsync({
            amount:amount
        });
        }

        /**
         * From Gwei Big number to Ether Big Number
         * @param amount specify the Amount
         * @returns BigNumber 
         */
        public FromGweiBigNumberToEtherBigNumberAsync(amount:BN) : Promise<BN>{
            return FromGweiBNToEtherBNProxyAsync({
                amount:amount
            });
        }

        /**
         *  From Ether Big Number to Wei Big Number
         * @param amount Specify the Amount
         * @returns BigNumber
         */
        public FromEtherBigNumberToWeiBigNumber(amount:BN) : Promise<BN>{
            return FromEtherBNToWeiBNProxyAsync({
                amount:amount
            });
        }

        public FromEtherBigNumberToGweiBigNumber(amount:BN) : Promise<BN>{
            return FromEtherBNToGWeiBNProxyAsync({
                amount:amount
            });
        }

    }(this);

    public UnitConversion=new class {

        constructor(private self:Web3Helpers){

        }

        public FromFullUnitToSmallUnitAsync(value:number,decimalPlace:number):Promise<BN>{
            return FromFullUnitToSmallUnitProxyAsync({
                amount:value,
                decimalPlace:decimalPlace
            });
        }

        public FromSmallUnitToFullUnitAsync(value:number,decimalPlace:number):Promise<BN>{
            return FromSmallUnitToFullUnitProxyAsync({
                amount:value,
                decimalPlace:decimalPlace
            });
        }
    }(this)
}