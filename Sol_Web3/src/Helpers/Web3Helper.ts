//Test
import Web3 from 'web3';
import { BalanceFacade } from './Facade/BalanceFacade';
import { UnitConversionFacade } from './Facade/UnitConversionFacade';
import { UnitConverterFacade } from './Facade/UnitConverterFacade';
import { UtilityFacade } from './Facade/UtilityFacade';
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
    public get Web3Instance():Web3{
        return this.web3;
    }


    public Balance=new BalanceFacade(this);

    public UnitConverter=new UnitConverterFacade();

    public UnitConversion=new UnitConversionFacade();

    public Utility=new UtilityFacade(this);
}