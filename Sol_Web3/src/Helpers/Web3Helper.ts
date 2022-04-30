import Web3 from 'web3';
import BN from 'bignumber.js';

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
    public CreateInstance(host:string):Web3Helpers{
        let _:Web3=new Web3(new Web3.providers.HttpProvider(host));

        return new Web3Helpers(_);
    }

    /**
     * Get Web3 Instance
     * @returns it will return the Web3 Instance
     */
    public GetWeb3Instance():Web3{
        return this.web3;
    }


}