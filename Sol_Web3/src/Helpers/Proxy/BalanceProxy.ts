import Web3 from 'web3';
import BN from 'bignumber.js';
import { BigNumber } from '../../Shared/BigNumber';
import Erc20TokenSol from '../../Shared/ERC20Token.json';

type GetNativeCoinBalanceProxyOption={
    web3:Web3,
    address:string;
}

export const GetNativeCoinBalanceProxyAsync=async(params:GetNativeCoinBalanceProxyOption):Promise<BN>=>{
    return BigNumber(await params?.web3?.eth?.getBalance(params?.address));
}

type GetERC20TokenBalanceProxyOption={
    web3:Web3,
    walletAddress:string;
    tokenAddress:string;
}
export const GetERC20TokenBalanceProxyAsync=async(params:GetERC20TokenBalanceProxyOption):Promise<BN>=>{
    const abi:object=Erc20TokenSol.abi;

    const tokenContract=new params.web3.eth.Contract(JSON.parse(JSON.stringify(abi)),params?.tokenAddress);
    
    return BigNumber(await tokenContract.methods.balanceOf(params?.walletAddress).call());
}