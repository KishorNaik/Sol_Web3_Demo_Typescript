import Web3 from "web3"

type CheckSumAddressOption={
    web3:Web3;
    address:string;
}

export const ToCheckSumAddressProxyAsync=(params:CheckSumAddressOption):Promise<string>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.web3?.utils.toChecksumAddress(params?.address));
        }
        catch(ex)
        {
            reject(ex);
        }
    });
    
}

export const IsCheckSumAddressProxyAsync=(params:CheckSumAddressOption):Promise<boolean>=>{
    return new Promise((resolve,reject)=>{
        try
        {
            resolve(params?.web3?.utils?.checkAddressChecksum(params?.address));
        }
        catch(ex)
        {
            reject(ex);
        }
    })
}