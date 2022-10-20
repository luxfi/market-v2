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
<<<<<<< HEAD
import dynamic from 'next/dynamic'
import Link from 'next/link'
import image from 'next/image'

const ModelViewComp = dynamic(() => import('../components/ModelViewComp'), {
  ssr: false,
})
=======
>>>>>>> d73def8 (initial commit)

// Environment variables
// For more information about these variables
// refer to the README.md file on this repository
// Reference: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
// REQUIRED
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
const RESERVOIR_API_BASE = process.env.NEXT_PUBLIC_RESERVOIR_API_BASE

// OPTIONAL
const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY
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
<<<<<<< HEAD
  const tokenHref = `/collections/0x94c23d792d628e38bacb7f6bfa8dd3cc054502e4/`
=======
<<<<<<< HEAD
  const tokenHref = `/collections/0x666E74369eCEC7621dA5b7336E0C5D3e5b720544/`
=======
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)

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
<<<<<<< HEAD




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
<<<<<<< HEAD

=======
=======
      <header className="col-span-full mb-12 mt-[66px] px-4 md:mt-40 lg:px-0">
        <h1 className="reservoir-h1 text-center dark:text-white">{tagline}</h1>
      </header>
      <div className="col-span-full px-6 md:px-16">
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)
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
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<{
  fallback: {
    collections: paths['/collections/v4']['get']['responses']['200']['schema']
  }
}> = async () => {
  const options: RequestInit | undefined = {}

  if (RESERVOIR_API_KEY) {
    options.headers = {
      'x-api-key': RESERVOIR_API_KEY,
    }
  }

  const url = new URL('/collections/v4', RESERVOIR_API_BASE)

  let query: paths['/collections/v4']['get']['parameters']['query'] = {
    limit: 20,
    sortBy: '7DayVolume',
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
