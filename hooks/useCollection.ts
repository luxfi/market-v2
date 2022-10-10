<<<<<<< HEAD
import { paths } from '@reservoir0x/reservoir-kit-client'
=======
<<<<<<< HEAD
import { paths } from '@reservoir0x/client-sdk/dist/types/api'
>>>>>>> 96757b6 (Update look and feel)
import fetcher from 'lib/fetcher'
import setParams from 'lib/params'
import { NextRouter } from 'next/router'
import useSWR from 'swr'

const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE

export default function useCollectionStats(
  router: NextRouter,
  collectionId: string | undefined
) {
  function getUrl() {
    if (!collectionId) return undefined

    const pathname = `${PROXY_API_BASE}/stats/v2`

    const query: paths['/stats/v2']['get']['parameters']['query'] = {
      collection: collectionId,
      normalizeRoyalties: true
    }

    // Extract all queries of attribute type
    const attributes = Object.keys(router.query).filter(
      (key) =>
        key.startsWith('attributes[') &&
        key.endsWith(']') &&
        router.query[key] !== ''
    )

    const query2: { [key: string]: any } = {}

    // Add all selected attributes to the query
    if (attributes.length > 0) {
      attributes.forEach((key) => {
        const value = router.query[key]?.toString()
        if (value) {
          query2[key] = value
        }
      })
    }

    const href = setParams(pathname, { ...query, ...query2 })

    return href
  }

  const href = getUrl()

  const stats = useSWR<paths['/stats/v2']['get']['responses']['200']['schema']>(
    href,
    fetcher
  )

  return stats
}
<<<<<<< HEAD
=======

=======
import { paths } from '@reservoir0x/reservoir-kit-client'
import fetcher from 'lib/fetcher'
import setParams from 'lib/params'
import useSWR from 'swr'

const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE

type Collection = paths['/collection/v3']['get']['responses']['200']['schema']

export default function useCollection(
  fallbackData: Collection | undefined,
  collectionId?: string | undefined
) {
  function getUrl() {
    if (!collectionId) return undefined

    const pathname = `${PROXY_API_BASE}/collection/v3`

    let query: paths['/collection/v3']['get']['parameters']['query'] = {
      id: collectionId,
      includeTopBid: true
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
>>>>>>> 79e0b24 (Update look and feel)
>>>>>>> 96757b6 (Update look and feel)
