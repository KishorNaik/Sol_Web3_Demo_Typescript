import Web3 from 'web3';
import BN from 'bignumber.js';
import { BigNumber } from '../../Shared/BigNumber';

type GetNativeCoinBalanceProxyOption={
    web3:Web3,
    address:string;
}

export const GetNativeCoinBalanceProxyAsync=async(params:GetNativeCoinBalanceProxyOption):Promise<BN>=>{
    return BigNumber(await params?.web3?.eth?.getBalance(params?.address));
}