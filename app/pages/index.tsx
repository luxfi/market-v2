import Layout from 'components/Layout'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { paths } from '@reservoir0x/reservoir-kit-client'
import setParams from 'lib/params'
import Head from 'next/head'
import TrendingCollectionTable from 'components/TrendingCollectionTable'
import SortTrendingCollections from 'components/SortTrendingCollections'

import { useMediaQuery } from '@react-hookz/web'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import image from 'next/image'

const ModelViewComp = dynamic(() => import('../components/ModelViewComp'), {
  ssr: false,
})

// Environment variables
// For more information about these variables
// refer to the README.md file on this repository
// Reference: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
// REQUIRED
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
const RESERVOIR_API_BASE = process.env.NEXT_PUBLIC_RESERVOIR_API_BASE

// OPTIONAL
const RESERVOIR_API_KEY = process.env.NEXT_PUBLIC_RESERVOIR_API_KEY
const REDIRECT_HOMEPAGE = process.env.NEXT_PUBLIC_REDIRECT_HOMEPAGE
const META_TITLE = process.env.NEXT_PUBLIC_META_TITLE
const META_DESCRIPTION = process.env.NEXT_PUBLIC_META_DESCRIPTION
const META_IMAGE = process.env.NEXT_PUBLIC_META_OG_IMAGE
const TAGLINE = process.env.NEXT_PUBLIC_TAGLINE
const COLLECTION = process.env.NEXT_PUBLIC_COLLECTION
const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY
const COLLECTION_SET_ID = process.env.NEXT_PUBLIC_COLLECTION_SET_ID

type Props = InferGetStaticPropsType<typeof getStaticProps>

const metadata = {
  title: (title: string) => <title>{title}</title>,
  description: (description: string) => (
    <meta name="description" content={description} />
  ),
  tagline: (tagline: string | undefined) => (
    <>{tagline || 'Discover, buy and sell NFTs'}</>
  ),
  image: (image?: string) => {
    if (image) {
      return (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="og:image" content={image} />
        </>
      )
    }
    return null
  },
}

const Home: NextPage<Props> = ({ fallback }) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

  const router = useRouter()
  const tokenHref = `/collections/0x31e0F919C67ceDd2Bc3E294340Dc900735810311`

  const title = META_TITLE && metadata.title(META_TITLE)
  const description = META_DESCRIPTION && metadata.description(META_DESCRIPTION)
  const image = metadata.image(META_IMAGE)
  const tagline = metadata.tagline(TAGLINE)

  useEffect(() => {
    if (REDIRECT_HOMEPAGE && COLLECTION) {
      router.push(`/collections/${COLLECTION}`)
    }
  }, [COLLECTION, REDIRECT_HOMEPAGE])

  // Return error page if the API base url or the environment's
  // chain ID are missing
  if (!CHAIN_ID) {
    console.debug({ CHAIN_ID })
    return <div>There was an error</div>
  }

  if (REDIRECT_HOMEPAGE && COLLECTION) return null

  return (
    <Layout navbar={{}}>
      <Head>
        {title}
        {description}
        {image}
      </Head>




      <div className="col-span-full px-6 md:px-16">
        <div className="min-w-screen flex flex-col items-center justify-center bg-black rounded-3xl pt-10 mt-10 mb-10">
          {/* <header className="col-span-full mb-12 mt-[66px] px-4 md:mt-40 lg:px-0 "> */}
          <p className="reservoir-h4 text-center text-[#00ff9f]">ALL-NEW ASSET-BACKEND NFTS</p>
          <h1 className="reservoir-h1 text-center text-white">
            LUX URANIUM NFT
          </h1>
          {/* </header> */}
          <div className="mt-2 h-[300px] w-[250px] md:h-[400px] md:w-[400px]">
            {/* <ModelViewComp></ModelViewComp> */}
            <video loop muted autoPlay style={{ padding: 32, marginTop: -32 }}>

              <source
                src="./luxfinal1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="grid h-[100px] w-[380px] grid-cols-2 gap-4">
            <Link href="https://lux.market/uranium">
              <button className="mt-2 h-[50px] w-full rounded-lg bg-white  p-2 text-md text-black overflow-hidden">
                Learn More
              </button>
            </Link>
            <Link href={tokenHref}>
              <button className="mt-2 h-[50px] w-full rounded-lg  p-2 text-md text-black bg-[#00ff9f]  overflow-hidden ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-9 flex w-full items-center justify-between">
          <div className="reservoir-h4 dark:text-white">
            Trending Collections
          </div>

          {!isSmallDevice && <SortTrendingCollections />}
        </div>
        <TrendingCollectionTable fallback={fallback} />
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<{
  fallback: {
    collections: paths['/collections/v5']['get']['responses']['200']['schema']
  }
}> = async () => {
  const options: RequestInit | undefined = {}

  if (RESERVOIR_API_KEY) {
    options.headers = {
      'x-api-key': RESERVOIR_API_KEY,
    }
  }

  const url = new URL('/collections/v5', RESERVOIR_API_BASE)

  let query: paths['/collections/v5']['get']['parameters']['query'] = {
    limit: 20,
    sortBy: '1DayVolume',
  }

  if (COLLECTION && !COMMUNITY) query.contract = [COLLECTION]
  if (COMMUNITY) query.community = COMMUNITY
  if (COLLECTION_SET_ID) query.collectionsSetId = COLLECTION_SET_ID

  const href = setParams(url, query)
  const res = await fetch(href, options)

  const collections = (await res.json()) as Props['fallback']['collections']

  return {
    props: {
      fallback: {
        collections,
      },
    },
  }
}
