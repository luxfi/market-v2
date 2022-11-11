import { paths } from '@reservoir0x/client-sdk/dist/types/api'
import fetcher from 'lib/fetcher'
import setParams from 'lib/params'
import useSWR from 'swr'

const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY;

type Collection = paths['/collection/v2']['get']['responses']['200']['schema']

export default function useCollection(
    fallbackData: Collection | undefined,
    collectionId?: string | undefined
) {
    function getUrl() {
        if (!collectionId) return undefined

        const pathname = `${RESERVOIR_API_KEY}/collection/v2`

        let query: paths['/collection/v2']['get']['parameters']['query'] = {
            id: collectionId,
          }
        
        const href = setParams(pathname, query)

        return href
    }

    const href = getUrl()

    const collection = useSWR<Collection>(href, fetcher, {
        fallbackData,
    })

    return collection
}

