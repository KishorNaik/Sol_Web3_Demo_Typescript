import BN from 'bignumber.js';
import { BigNumber } from "../../Shared/BigNumber";

type ConversionOptions={
    amount:BN;
}

export const FromWeiBNToEtherBNProxyAsync=(params:ConversionOptions):Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.dividedBy(BigNumber(10).pow(18)));
        }
        catch(ex){
            reject(ex);
        }
    })
    
}


export const FromWeiBNToGweiBNProxyAsync=(params:ConversionOptions):Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.dividedBy(BigNumber(10).pow(9)));
        }
        catch(ex){
            reject(ex);
        }
    })
    
}

export const FromGweiBNToWeiBNProxyAsync=(params:ConversionOptions) : Promise<BN>=>{

    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.multipliedBy(BigNumber(10).pow(9)));
        }
        catch(ex){
            reject(ex);
        }
    })
}

export const FromGweiBNToEtherBNProxyAsync=(params:ConversionOptions) : Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.dividedBy(BigNumber(10).pow(9)));
        }
        catch(ex)
        {
            reject(ex);
        }
    })
}

export const FromEtherBNToWeiBNProxyAsync=(params:ConversionOptions) : Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.multipliedBy(BigNumber(10).pow(18)));
        }
        catch(ex)
        {
            reject(ex);
        }
    })
}

export const FromEtherBNToGWeiBNProxyAsync=(params:ConversionOptions) : Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.amount?.multipliedBy(BigNumber(10).pow(9)));
        }
        catch(ex)
        {
            reject(ex);
        }
    });
}

type UnitConversionOptions={
    amount:number;
    decimalPlace:number;
}

export const FromFullUnitToSmallUnitProxyAsync=(params:UnitConversionOptions): Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(BigNumber(params?.amount)?.multipliedBy(BigNumber(10).pow(params?.decimalPlace)));
        }
        catch(ex){
            reject(ex);
        }
    });
}

export const FromSmallUnitToFullUnitProxyAsync=(params:UnitConversionOptions): Promise<BN>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(BigNumber(params?.amount)?.dividedBy(BigNumber(10).pow(params?.decimalPlace)));
        }
        catch(ex){
            reject(ex);
        }
    });
}

