import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';



export default async function nftRequest(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { apiResponse: any; }): void; new(): any; }; }; }) {
    await Moralis.start({
        apiKey: "3J8PY4hsoT7LCFj9RwzTUxPni4Fdn7walSxWMXwqjkzCAFOQOMfoOQmlfFtLvFXQ"
    });
    // get the url
    const apiResponse = await Moralis.EvmApi.nft.getContractNFTs({
        address: "0x46e663972AfE9D500B0A366CdEb8788e39DF1478",
        chain: EvmChain.GOERLI,
    });

    res.status(200).json({ apiResponse });
}

// display url on the UI