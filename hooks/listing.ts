import { getPathName } from '@datadog/browser-core'
import { paths } from '@reservoir0x/reservoir-kit-client'
import fetcher from 'lib/fetcher'
import setParams from 'lib/params'
import { NextRouter } from 'next/router'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

const sdk = require('api')('@reservoirprotocol/v1.0#cpy2fla8spifn');

type Attributes =
  paths['/collections/{collection}/attributes/explore/v2']['get']['responses']['200']['schema']

export default function listToken(
  router: NextRouter,
  collectionId: string | undefined
) { 
sdk.auth(process.env.RESERVOIR_API_KEY);
sdk.server('https://api-goerli.reservoir.tools');
sdk.postExecuteListV4({
  params: [
    {
      orderKind: 'seaport',
      orderbook: 'reservoir',
      automatedRoyalties: true,
      fees: [
        '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54:50'
      ],
      currency: '0x883B256EeD86a9A603C0F98eD7CDE252ce497930',
      token: '0x46e663972AfE9D500B0A366CdEb8788e39DF1478:220',
      quantity: 3,
      weiPrice: '2200000000000000000',
      listingTime: '1669164711',
      expirationTime: '1669174850'
    }
  ],
  maker: '0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54',
  source: 'lux.market'
}, {accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));



}