import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { useRouter } from 'next/router'
<<<<<<< HEAD
<<<<<<< HEAD
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ModelViewComp = dynamic(() => import('../components/ModelViewComp'), {
  ssr: false,
})
=======
>>>>>>> d73def8 (initial commit)
=======
import Layout from 'components/Layout'
import { useState } from 'react'
import useCollection from 'hooks/useCollection'
import useCollectionStats from 'hooks/useCollectionStats'
import useTokens from 'hooks/useTokens'
import useCollectionAttributes from 'hooks/useCollectionAttributes'
import { setToast } from 'components/token/setToast'
import { paths, setParams } from '@reservoir0x/reservoir-kit-client'
import Hero from 'components/Hero'
import { formatNumber } from 'lib/numbers'
import Sidebar from 'components/Sidebar'
import AttributesFlex from 'components/AttributesFlex'
import ExploreFlex from 'components/ExploreFlex'
import SortMenuExplore from 'components/SortMenuExplore'
import ViewMenu from 'components/ViewMenu'
import { FiRefreshCcw } from 'react-icons/fi'
import ExploreTokens from 'components/ExploreTokens'
import TokensGrid from 'components/TokensGrid'
import Head from 'next/head'
import FormatEth from 'components/FormatEth'
import useAttributes from 'hooks/useAttributes'
import * as Tabs from '@radix-ui/react-tabs'
import { toggleOnItem } from 'lib/router'
import CollectionActivityTable from 'components/tables/CollectionActivityTable'
import Sweep from 'components/Sweep'
>>>>>>> 94cad7d (homepg)

// Environment variables
// For more information about these variables
// refer to the README.md file on this repository
// Reference: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
// REQUIRED
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID

// OPTIONAL
const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY

const envBannerImage = process.env.NEXT_PUBLIC_BANNER_IMAGE

const RESERVOIR_API_BASE = process.env.NEXT_PUBLIC_RESERVOIR_API_BASE
const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE

const metaTitle = process.env.NEXT_PUBLIC_META_TITLE
const metaDescription = process.env.NEXT_PUBLIC_META_DESCRIPTION
const metaImage = process.env.NEXT_PUBLIC_META_OG_IMAGE

const COLLECTION = process.env.NEXT_PUBLIC_COLLECTION
const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY
const COLLECTION_SET_ID = process.env.NEXT_PUBLIC_COLLECTION_SET_ID
const SOURCE_ID = process.env.NEXT_PUBLIC_SOURCE_ID
const SOURCE_DOMAIN = process.env.NEXT_PUBLIC_SOURCE_DOMAIN

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ fallback, id }) => {
  const router = useRouter()
<<<<<<< HEAD
<<<<<<< HEAD
  const tokenHref = `/collections/0x666E74369eCEC7621dA5b7336E0C5D3e5b720544/`
=======
>>>>>>> d73def8 (initial commit)
=======
  const [localListings, setLocalListings] = useState(false)
  const [refreshLoading, setRefreshLoading] = useState(false)
>>>>>>> 94cad7d (homepg)

  const collection = useCollection(fallback.collection, id)

  const stats = useCollectionStats(router, id)

  const { tokens, ref: refTokens } = useTokens(
    id,
    [fallback.tokens],
    router,
    localListings
  )

  const { collectionAttributes, ref: refCollectionAttributes } =
    useCollectionAttributes(router, id)

  const attributes = useAttributes(id)

  if (!CHAIN_ID) return null

  if (tokens.error) {
    return <div>There was an error</div>
  }

  const tokenCount = stats?.data?.stats?.tokenCount ?? 0

  async function refreshCollection(collectionId: string | undefined) {
    function handleError(message?: string) {
      setToast({
        kind: 'error',
        message: message || 'Request to refresh collection was rejected.',
        title: 'Refresh collection failed',
      })

      setRefreshLoading(false)
    }

    try {
      if (!collectionId) throw new Error('No collection ID')

      const data = {
        collection: collectionId,
      }

      const pathname = `${PROXY_API_BASE}/collections/refresh/v1`

      setRefreshLoading(true)

      const res = await fetch(pathname, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        handleError(json?.message)
        return
      }

      setToast({
        kind: 'success',
        message: 'Request to refresh collection was accepted.',
        title: 'Refresh collection',
      })
    } catch (err) {
      handleError()
      console.error(err)
      return
    }

    setRefreshLoading(false)
  }

  const title = metaTitle ? (
    <title>{metaTitle}</title>
  ) : (
    <title>{collection.data?.collection?.name}</title>
  )
  const description = metaDescription ? (
    <meta name="description" content={metaDescription} />
  ) : (
    <meta
      name="description"
      content={collection.data?.collection?.metadata?.description as string}
    />
  )

  const bannerImage = (envBannerImage ||
    collection?.data?.collection?.metadata?.bannerImageUrl) as string

  const image = metaImage ? (
    <>
      <meta name="twitter:image" content={metaImage} />
      <meta name="og:image" content={metaImage} />
    </>
  ) : (
    <>
      <meta name="twitter:image" content={bannerImage} />
      <meta property="og:image" content={bannerImage} />
    </>
  )

  const tabs = [
    { name: 'Items', id: 'items' },
    { name: 'Activity', id: 'activity' },
  ]

  return (
    <Layout navbar={{}}>
<<<<<<< HEAD
      <Head>
        {title}
        {description}
        {image}
      </Head>
<<<<<<< HEAD

      <header className="col-span-full mb-12 mt-[66px] px-4 md:mt-40 lg:px-0">
        <h1 className="reservoir-h1 text-center dark:text-white">
          LUX URANIUM NFT
        </h1>
        <p className="reservoir-h4 text-center dark:text-white">
          Buy Uranium at over 30% off for a limited time.
        </p>
      </header>

      <div className="col-span-full px-6 md:px-16">
        <div className="min-w-screen flex min-h-screen flex-col items-center justify-center ">
          <div className="mt-2 h-[300px] w-[250px] md:h-[400px] md:w-[400px]">
            <ModelViewComp></ModelViewComp>
          </div>
          <h1 className="p-2 text-xl text-white">Uranium DROP</h1>
          <div className="grid h-[100px] w-[400px] grid-cols-2 gap-4">
            <button className="mt-2 h-[50px] w-full rounded-md bg-black  p-2 text-xl text-white    ">
              Learn More
            </button>
            <Link href={tokenHref}>
              <button className="mt-2 h-[50px] w-full rounded-md bg-black  p-2 text-xl text-white    ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
=======
      <header className="col-span-full mb-12 mt-[66px] px-4 md:mt-40 lg:px-0">
        <h1 className="reservoir-h1 text-center dark:text-white">{tagline}</h1>
      </header>
      <div className="col-span-full px-6 md:px-16">
>>>>>>> d73def8 (initial commit)
        <div className="mb-9 flex w-full items-center justify-between">
          <div className="reservoir-h4 dark:text-white">
            Trending Collections
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d73def8 (initial commit)
=======

<<<<<<< HEAD
          <nft-card
            contractAddress="0xf4910c763ed4e47a585e2d34baa9a4b611ae448c"
            tokenId="51250856759839486109436124612722239585040863806988663268517547152527046213652"
            network="rinkeby"
          ></nft-card>
          <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
>>>>>>> 8c45ba3 (hardhat test netw nfts)
=======
>>>>>>> adabfbe (navb logos)
          {!isSmallDevice && <SortTrendingCollections />}
        </div>
        <TrendingCollectionTable fallback={fallback} />
      </div>
=======
      <>
        <Head>
          {title}
          {description}
          {image}
        </Head>
        <Hero collectionId={id} fallback={fallback} />
        <Tabs.Root
          value={router.query?.tab?.toString() || 'items'}
          className="col-span-full grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 3xl:grid-cols-16 4xl:grid-cols-21"
        >
          <Tabs.List className="col-span-full flex justify-center border-b border-[#D4D4D4] dark:border-[#525252]">
            {tabs.map(({ name, id }) => (
              <Tabs.Trigger
                key={id}
                id={id}
                value={id}
                className={
                  'group reservoir-h6 relative min-w-0 whitespace-nowrap border-b-2 border-transparent py-4 px-8 text-center text-[#525252] hover:text-black focus:z-10 radix-state-active:border-black radix-state-active:text-black dark:text-white dark:radix-state-active:border-white dark:radix-state-active:text-white'
                }
                onClick={() => toggleOnItem(router, 'tab', id)}
              >
                <span>{name}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value="items" asChild>
            <>
              <Sidebar attributes={attributes} setTokensSize={tokens.setSize} />
              <div className="col-span-full mx-6 mt-4 sm:col-end-[-1] md:col-start-4">
                <div className="mb-4 hidden items-center justify-between md:flex">
                  <div className="flex items-center gap-6">
                    {tokenCount > 0 && (
                      <>
                        <div>{formatNumber(tokenCount)} items</div>

                        <div className="h-9 w-px bg-gray-300 dark:bg-neutral-600"></div>
                        <div>
                          <FormatEth
                            amount={stats?.data?.stats?.market?.floorAsk?.price}
                          />{' '}
                          floor price
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex gap-4">
                    {router.query?.attribute_key ||
                    router.query?.attribute_key === '' ? (
                      <>
                        <SortMenuExplore
                          setSize={collectionAttributes.setSize}
                        />
                        <ViewMenu />
                      </>
                    ) : null}
                    <button
                      className="btn-primary-outline dark:border-neutral-600 dark:text-white dark:ring-primary-900 dark:focus:ring-4"
                      title="Refresh collection"
                      disabled={refreshLoading}
                      onClick={() => refreshCollection(id)}
                    >
                      <FiRefreshCcw
                        className={`h-5 w-5 ${
                          refreshLoading ? 'animate-spin-reverse' : ''
                        }`}
                      />
                    </button>
                    <Sweep
                      collection={collection}
                      tokens={tokens}
                      setToast={setToast}
                    />
                  </div>
                </div>
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <AttributesFlex className="flex flex-wrap gap-3" />
                    <ExploreFlex />
                  </div>
                  {(SOURCE_ID || SOURCE_DOMAIN) && (
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        name="localListings"
                        id="localListings"
                        className="scale-125 transform"
                        onChange={(e) => setLocalListings(e.target.checked)}
                      />
                      <label
                        htmlFor="localListings"
                        className="reservoir-body dark:text-white"
                      >
                        Show Only Local Listings
                      </label>
                    </div>
                  )}
                </div>
                {router.query?.attribute_key ||
                router.query?.attribute_key === '' ? (
                  <ExploreTokens
                    attributes={collectionAttributes}
                    viewRef={refCollectionAttributes}
                  />
                ) : (
                  <TokensGrid
                    tokens={tokens}
                    viewRef={refTokens}
                    collectionImage={
                      collection.data?.collection?.metadata?.imageUrl as string
                    }
                  />
                )}
              </div>
            </>
          </Tabs.Content>
          <Tabs.Content
            value="activity"
            className="col-span-full mx-[25px] grid lg:col-start-2 lg:col-end-[-2]"
          >
            <CollectionActivityTable collection={collection.data?.collection} />
          </Tabs.Content>
        </Tabs.Root>
      </>
>>>>>>> 94cad7d (homepg)
    </Layout>
  )
}

export default Home

// export const getStaticPaths: GetStaticPaths = async () => {
//   if (COLLECTION && !COMMUNITY && !COLLECTION_SET_ID) {
//     return {
//       paths: [{ params: { id: COLLECTION } }],
//       fallback: false,
//     }
//   }

//   if (COLLECTION && (COMMUNITY || COLLECTION_SET_ID)) {
//     const url = new URL(`/search/collections/v1`, RESERVOIR_API_BASE)

//     const query: paths['/search/collections/v1']['get']['parameters']['query'] =
//       { limit: 20 }

//     if (COLLECTION_SET_ID) {
//       query.collectionsSetId = COLLECTION_SET_ID
//     } else {
//       if (COMMUNITY) query.community = COMMUNITY
//     }

//     setParams(url, query)

//     const res = await fetch(url.href)

//     const collections =
//       (await res.json()) as paths['/search/collections/v1']['get']['responses']['200']['schema']

//     if (!collections?.collections) {
//       return {
//         paths: [{ params: { id: COLLECTION } }],
//         fallback: false,
//       }
//     }

//     if (collections.collections?.length === 0) {
//       return {
//         paths: [{ params: { id: COLLECTION } }],
//         fallback: false,
//       }
//     }

//     const paths = collections?.collections?.map(
//       ({ contract = '0x7e1039936312F17431faD61A99E22790D3661465' }) => ({
//         params: {
//           id: contract,
//         },
//       })
//     )

//     return {
//       paths,
//       fallback: false,
//     }
//   }

//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

export const getStaticProps: GetStaticProps<{
  collectionId?: string
  fallback: {
    collection: paths['/collection/v3']['get']['responses']['200']['schema']
    tokens: paths['/tokens/v4']['get']['responses']['200']['schema']
  }
  id: string | undefined
}> = async () => {
  const options: RequestInit | undefined = {}

  if (RESERVOIR_API_KEY) {
    options.headers = {
      'x-api-key': RESERVOIR_API_KEY,
    }
  }

  const id = '0x7e1039936312F17431faD61A99E22790D3661465'

  // COLLECTION
  const collectionUrl = new URL('/collection/v3', RESERVOIR_API_BASE)

  let collectionQuery: paths['/collection/v3']['get']['parameters']['query'] = {
    id,
    includeTopBid: true,
  }

  setParams(collectionUrl, collectionQuery)

  const collectionRes = await fetch(collectionUrl.href, options)

  const collection =
    (await collectionRes.json()) as Props['fallback']['collection']

  // TOKENS
  const tokensUrl = new URL('/tokens/v4', RESERVOIR_API_BASE)

  let tokensQuery: paths['/tokens/v4']['get']['parameters']['query'] = {
    collection: id,
    sortBy: 'floorAskPrice',
    includeTopBid: true,
    limit: 20,
  }

  setParams(tokensUrl, tokensQuery)

  const tokensRes = await fetch(tokensUrl.href, options)

  const tokens = (await tokensRes.json()) as Props['fallback']['tokens']

  return {
    props: { fallback: { collection, tokens }, id },
    revalidate: 20,
  }
}
