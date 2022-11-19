async function main() {

  console.log('starting main for listing')
  const sdk = require('api')('@reservoirprotocol/v1.0#er3x24lalrfw3q');
  console.log('sdk defined')
  sdk.auth(process.env.RESERVOIR_API_KEY);
  console.log('auth defined')

  const PRICE_PER_POUND = 35;
  const TOKEN_CONTRACT = '0x46e663972AfE9D500B0A366CdEb8788e39DF1478'
  const VERA_COIN = '0x883B256EeD86a9A603C0F98eD7CDE252ce497930'
  const BENEFICIARY = "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54"
  
  let ONE_POUND = 28083000000000000
  let TEN_POUNDS = 280830000000000000
  let HUNDRED_POUNDS = 2808300000000000000
  let TWO_THOUSAND = 56166000000000000000

  const list_nfts = async ( start_id: number, end_id: number, poundage: number, priceWei:number) => {
    
    console.log('starting list_nfts')
    for (let idx = start_id; idx < end_id; idx++) {
      console.log(idx)

      sdk.postExecuteListV4({
        params: [
          {

            token: `${TOKEN_CONTRACT}:${idx}`,
            weiPrice: priceWei.toString(),  
            orderbook: 'reservoir',   
            orderKind: 'seaport',  
            listingTime: Math.floor(Date.now() / 1000).toString(),
            currency: VERA_COIN ,
            automatedRoyalties: true,
            fees: [
                    `${BENEFICIARY}:100`,
                  ]
          }
        ],
        maker: BENEFICIARY
      }, {accept: '*/*'})
        .then(console.log("POSTING SUBMITTED"))
        .catch(console.log("err"));
    }  

  }

  await list_nfts(0, 1, 1, ONE_POUND)
  // console.log("one pound")
  // await list_nfts(1000, 1100, 10, TEN_POUNDS)
  // console.log("ten pounds")
  // await list_nfts(1100, 1110, 100, HUNDRED_POUNDS)
  // console.log("hundred pounds")
  // await list_nfts(1110, 1111, 2000, TWO_THOUSAND) 
  // console.log("two thousand pounds")

  console.log('listing completed')
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
