import { paths } from '@reservoir0x/reservoir-kit-client'
import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useListings, useCollections, useReservoirClient } from '@reservoir0x/reservoir-kit-ui'
import axios from 'axios';
import { tokens } from 'wyvern-schemas'

let data: any;
let Tokens: any;

const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY;

export default function FetchCollection(
    collectionId: string | undefined,
    fallbackData: Tokens[],
    router: NextRouter,
    includeTopBid: boolean = true,
    source?: boolean | undefined
) {

    const { ref, inView } = useInView()
    const reservoirClient = useReservoirClient()

    const response = data as paths['/tokens/v5']['get']['responses']['200']['schema']

    const { data: collection } = useCollections({
        id: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
      })
    
    const {
        data: listings,
        fetchNextPage,
        hasNextPage,
      } = useListings({
         contracts: ['0x46e663972AfE9D500B0A366CdEb8788e39DF1478'],
      })

      Object.keys(router.query)
      .filter(
        (key) =>
          key.startsWith('attributes[') &&
          key.endsWith(']') &&
          router.query[key] !== ''
      )
      .forEach((key) => {
        const value = router.query[key]?.toString()
        if (value) {
          //@ts-ignore: Attributes that have dynamic keys don't work very well with openapi types
          query[key] = value
        }
      })

      
    
      return { tokens, ref }

    


//const response = data as paths['/tokens/v5']['get']['responses']['200']['schema']    

    



// return (
//     <div className='Collection'>
//     {data: collection}
 
//     </div>
   
// )




}


