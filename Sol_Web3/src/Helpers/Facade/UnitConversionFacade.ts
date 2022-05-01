import { FromFullUnitToSmallUnitProxyAsync, FromSmallUnitToFullUnitProxyAsync } from "../Proxy/UnitConvertProxy";
import BN from 'bignumber.js';

export class UnitConversionFacade{

    constructor(){

    }

    /**
     * Convert full unit value into small unit by passing decimal place
     * @param value : Specify the amount
     * @param decimalPlace Specify the decimal place
     * @returns Big Number
     */
    public async FromFullUnitToSmallUnitAsync(value:number,decimalPlace:number):Promise<BN>{
        return await FromFullUnitToSmallUnitProxyAsync({
            amount:value,
            decimalPlace:decimalPlace
        });
    }

    /**
     * Convert small unit value into full unit by passing decimal place
     * @param value : Specify the amount
     * @param decimalPlace Specify the decimal place
     * @returns Big Number
     */
    public async FromSmallUnitToFullUnitAsync(value:number,decimalPlace:number):Promise<BN>{
        return await FromSmallUnitToFullUnitProxyAsync({
            amount:value,
            decimalPlace:decimalPlace
        });
    }
}