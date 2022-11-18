import { getClient, Execute } from "@reservoir0x/reservoir-kit-client";
import { ethers } from "ethers";

const sdk = require('api')('@reservoirprotocol/v1.0#cpy2fla8spifn');
let provider: any;

sdk.auth(process.env.RESERVOIR_API_KEY);
sdk.server('https://api-goerli.reservoir.tools');

const address = "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54"
const signer = new ethers.VoidSigner(address, provider)

async function main() {
 getClient()?.actions.listToken({
    listings: [{  
            token: '0:0x46e663972AfE9D500B0A366CdEb8788e39DF1478',  
            weiPrice: '2200000000000000000',  
            orderbook: 'reservoir',  
            orderKind: 'seaport',  
            listingTime: '1669164711',
            expirationTime: '1669174850',
            currency: '0x883B256EeD86a9A603C0F98eD7CDE252ce497930',
            automatedRoyalties: true,
            fees: [
                    '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54:50',
                    '0x2432172E4DA740fd4FD1dF0c3dF2A1E0dfC4932f:50',
                    '0x94B80cCE5F7D6F93119B87d18E3fa8fd3e19350B:50'
                  ]
            
    }],
    signer,
    onProgress: (steps: Execute['steps']) => {
      console.log('current step:')
      console.log(steps)
    }
    // submit the returned object as a transaction/signature payload to your wallet using a library such as ethersjs

   })

}

main()
  .then(()=>console.log('bamb, should have worked'))
  .catch((err)=>console.log('err:', err))

// import { getPathName } from '@datadog/browser-core'
// import { paths } from '@reservoir0x/reservoir-kit-client'
// import fetcher from 'lib/fetcher'
// import setParams from 'lib/params'
// import { NextRouter } from 'next/router'
// import { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
// import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
// import { ethers } from "ethers";
// import { getClient, Execute } from "@reservoir0x/reservoir-kit-client";

// const sdk = require('api')('@reservoirprotocol/v1.0#cpy2fla8spifn');
// const privateKey = process.env.GOERLI_PRIVATE_KEY;
// const wallet = new ethers.Wallet(privateKey);

// let data: any;
// let provider: any;

// const provider = ethers.getDefaultProvider();
// const walletWithProvider = new ethers.Wallet(privateKey, provider);

// //const signer = new ethers.VoidSigner(address, provider);



// async function listCollection() {
// sdk.auth(process.env.RESERVOIR_API_KEY);
// sdk.server('https://api-goerli.reservoir.tools');

// console.log(sdk);
// sdk.postExecuteListV4({
//   params: [
//     {
//       orderKind: 'seaport',
//       orderbook: 'reservoir',
//       automatedRoyalties: true,
//       fees: [
//         '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54:50',
//         '0x2432172E4DA740fd4FD1dF0c3dF2A1E0dfC4932f:50',
//         '0x94B80cCE5F7D6F93119B87d18E3fa8fd3e19350B:50'
//       ],
//       currency: '0x883B256EeD86a9A603C0F98eD7CDE252ce497930',
//       token: '0x46e663972AfE9D500B0A366CdEb8788e39DF1478:220',
//       quantity: 3,
//       weiPrice: '2200000000000000000',
//       listingTime: '1669164711',
//       expirationTime: '1669174850'
//     }
//   ],
//   maker: '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54',
//   source: 'lux.market'
// }, {accept: '*/*'})
//   .then(({ data  }) => console.log(data))
//   .catch((err: any) => console.error(err));

//   // submit the returned object as a transaction/signature payload to your wallet using a library such as ethersjs
  
//   ethers.Wallet.
//   //return data


// }

