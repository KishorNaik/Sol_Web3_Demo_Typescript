import BN from 'bignumber.js';

export const BigNumber=<T extends string|number>(value:T):BN=>{
    return new BN(value);
}

export const BigNumberToString=(value:BN):string=>{
    return value?.toFixed();
}

export const BigNumberToNumber=(value:BN):number=>{
    return value?.toNumber();
}

