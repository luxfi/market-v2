import Layout from 'components/Layout'
<<<<<<< HEAD
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
=======
import { NextPage } from 'next'
>>>>>>> d73def8 (initial commit)
import { useRouter } from 'next/router'
import { useAccount, useNetwork, useEnsName, useEnsAvatar } from 'wagmi'
import * as Tabs from '@radix-ui/react-tabs'
import { toggleOnItem } from 'lib/router'
import UserOffersTable from 'components/tables/UserOffersTable'
<<<<<<< HEAD
import UserOffersReceivedTable from 'components/tables/UserOffersReceivedTable'
=======
>>>>>>> d73def8 (initial commit)
import UserListingsTable from 'components/tables/UserListingsTable'
import UserTokensGrid from 'components/UserTokensGrid'
import Avatar from 'components/Avatar'
import { ComponentProps } from 'react'
import Toast from 'components/Toast'
import toast from 'react-hot-toast'
import Head from 'next/head'
<<<<<<< HEAD
import useSearchCommunity from 'hooks/useSearchCommunity'
import { truncateAddress } from 'lib/truncateText'
import { paths, setParams } from '@reservoir0x/reservoir-kit-client'
import UserActivityTab from 'components/tables/UserActivityTab'
<<<<<<< HEAD
import useMounted from 'hooks/useMounted'
=======
=======
import useUserAsks from 'hooks/useUserAsks'
import { useUserTokens, useBids } from '@reservoir0x/reservoir-kit-ui'
import useSearchCommunity from 'hooks/useSearchCommunity'
import { truncateAddress } from 'lib/truncateText'
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
const COLLECTION = process.env.NEXT_PUBLIC_COLLECTION
const COMMUNITY = process.env.NEXT_PUBLIC_COMMUNITY
const COLLECTION_SET_ID = process.env.NEXT_PUBLIC_COLLECTION_SET_ID
<<<<<<< HEAD
const RESERVOIR_API_KEY = process.env.RESERVOIR_API_KEY
const RESERVOIR_API_BASE = process.env.NEXT_PUBLIC_RESERVOIR_API_BASE

type Props = InferGetStaticPropsType<typeof getStaticProps>
=======
>>>>>>> d73def8 (initial commit)

const metadata = {
  title: (title: string) => <title>{title}</title>,
}

<<<<<<< HEAD
const Address: NextPage<Props> = ({ address, fallback }) => {
  const isMounted = useMounted()
  const router = useRouter()
  const accountData = useAccount()
=======
const Address: NextPage = () => {
  const router = useRouter()
  const accountData = useAccount()
  const address = router.query.address as string
>>>>>>> d73def8 (initial commit)

  if (!address) {
    throw 'No address set'
  }

  const { data: ensAvatar } = useEnsAvatar({
    addressOrName: address,
  })

  const { data: ensName } = useEnsName({
    address,
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
    onError(error) {
      console.log('Error', error)
    },
  })
  const { chain: activeChain } = useNetwork()
<<<<<<< HEAD
  const collections = useSearchCommunity()
  let collectionIds: undefined | string[] = undefined

  if (COLLECTION && !COMMUNITY && !COLLECTION_SET_ID) {
    collectionIds = [COLLECTION]
  }

  if (COMMUNITY || COLLECTION_SET_ID) {
    collectionIds =
      (collections?.data?.collections
        ?.map(({ contract }) => contract)
        .filter((contract) => !!contract) as string[]) || []
  }
=======
  const { data: signer } = useSigner()
  const userTokensParams: Parameters<typeof useUserTokens>['1'] = {
    limit: 20,
    includeTopBid: true,
  }
  if (COLLECTION_SET_ID) {
    userTokensParams.collectionsSetId = COLLECTION_SET_ID
  } else {
    if (COMMUNITY) userTokensParams.community = COMMUNITY
  }

  if (COLLECTION && (!COMMUNITY || !COLLECTION_SET_ID)) {
    userTokensParams.collection = COLLECTION
  }
  const userTokens = useUserTokens(address, userTokensParams)
  const collections = useSearchCommunity()
  const listings = useUserAsks(address, collections)
  const params: Parameters<typeof useBids>[0] = {
    status: 'active',
    maker: address,
    limit: 20,
    includeMetadata: true,
  }
  if (COLLECTION && !COMMUNITY && !COLLECTION_SET_ID) {
    params.contracts = [COLLECTION]
  }

  if (COMMUNITY || COLLECTION_SET_ID) {
    collections?.data?.collections
      ?.map(({ contract }) => contract)
      .filter((contract) => !!contract)
      .forEach(
        // @ts-ignore
        (contract, index) => (params[`contracts[${index}]`] = contract)
      )
  }
  const bidsResponse = useBids(params)
>>>>>>> d73def8 (initial commit)

  if (!CHAIN_ID) {
    console.debug({ CHAIN_ID })
    return <div>There was an error</div>
  }

  if (!isMounted) {
    return null
  }

  const setToast: (data: ComponentProps<typeof Toast>['data']) => any = (
    data
  ) => toast.custom((t) => <Toast t={t} toast={toast} data={data} />)

  const isInTheWrongNetwork = activeChain?.id !== +CHAIN_ID
  const isOwner = address?.toLowerCase() === accountData?.address?.toLowerCase()
  const formattedAddress = truncateAddress(address as string)

<<<<<<< HEAD
  let tabs = [
    { name: 'Tokens', id: 'portfolio' },
    { name: 'Listings', id: 'listings' },
  ]
=======
<<<<<<< HEAD
  let tabs = [{ name: 'Tokens', id: 'portfolio' }]
=======
  let tabs = [{ name: 'Portfolio', id: 'portfolio' }]
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)

  if (isOwner) {
    tabs = [
      { name: 'Tokens', id: 'portfolio' },
<<<<<<< HEAD
      { name: 'Offers Received', id: 'received' },
      { name: 'Offers Made', id: 'buying' },
<<<<<<< HEAD
      { name: 'Active Listings', id: 'listings' },
      { name: 'Inactive Listings', id: 'listings_inactive' },
=======
=======
      { name: 'Offers', id: 'buying' },
>>>>>>> d73def8 (initial commit)
      { name: 'Listings', id: 'selling' },
>>>>>>> 183137d (initial commit)
    ]
  }

<<<<<<< HEAD
  tabs.push({ name: 'Activity', id: 'activity' })

=======
>>>>>>> d73def8 (initial commit)
  return (
    <Layout navbar={{}}>
      <Head>{metadata.title(`${address} Profile`)}</Head>
      <div className="col-span-full">
        <div className="mt-4 mb-4 w-full px-4 md:px-16">
          <div className="flex">
            {address && (
              <Avatar address={address} avatar={ensAvatar} size={80} />
            )}
            <div className="ml-4 flex flex-col justify-center">
              <p className="reservoir-h6 text-xl font-semibold dark:text-white">
                {ensName || formattedAddress}
              </p>
              {ensName && (
                <p className="reservoir-label text-md font-semibold opacity-60">
                  {formattedAddress}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-16">
          <Tabs.Root value={router.query?.tab?.toString() || 'portfolio'}>
<<<<<<< HEAD
            <Tabs.List className="no-scrollbar mb-4 ml-[-15px] flex w-[calc(100%_+_30px)] overflow-y-scroll border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.2)] md:ml-0 md:w-full">
=======
            <Tabs.List className="mb-4 flex w-full overflow-hidden border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.2)]">
>>>>>>> d73def8 (initial commit)
              {tabs.map(({ name, id }) => (
                <Tabs.Trigger
                  key={id}
                  id={id}
                  value={id}
                  className={
<<<<<<< HEAD
                    'group reservoir-label-l relative min-w-0 shrink-0 whitespace-nowrap border-b-2 border-transparent  py-4 px-8 text-center hover:text-gray-700 focus:z-10 radix-state-active:border-black radix-state-active:text-gray-900 dark:text-white dark:radix-state-active:border-primary-900'
=======
                    'group reservoir-label-l relative min-w-0 whitespace-nowrap border-b-2 border-transparent py-4  px-8 text-center hover:text-gray-700 focus:z-10 radix-state-active:border-black radix-state-active:text-gray-900 dark:text-white dark:radix-state-active:border-primary-900'
>>>>>>> d73def8 (initial commit)
                  }
                  onClick={() => toggleOnItem(router, 'tab', id)}
                >
                  <span>{name}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="portfolio">
              <div className="mt-6">
<<<<<<< HEAD
                <UserTokensGrid fallback={fallback} owner={address || ''} />
=======
                <UserTokensGrid
                  userTokens={userTokens}
                  mutate={() => {
                    userTokens.mutate()
                    bidsResponse.mutate()
                    listings.mutate()
                  }}
                  isOwner={isOwner}
                  modal={{
                    accountData,
                    isInTheWrongNetwork,
                    collectionId: undefined,
                    setToast,
                    signer,
                  }}
                />
>>>>>>> d73def8 (initial commit)
              </div>
            </Tabs.Content>
            {isOwner && (
              <>
                <Tabs.Content value="buying">
                  <UserOffersTable
<<<<<<< HEAD
                    collectionIds={collectionIds}
                    modal={{
                      isInTheWrongNetwork,
                      setToast,
                    }}
                  />
                </Tabs.Content>
                <Tabs.Content value="received">
                  <UserOffersReceivedTable
                    isOwner={isOwner}
                    collectionIds={collectionIds}
                    modal={{
                      isInTheWrongNetwork,
                      setToast,
=======
                    data={bidsResponse}
                    mutate={() => {
                      userTokens.mutate()
                      bidsResponse.mutate()
                    }}
                    isOwner={isOwner}
                    modal={{
                      accountData,
                      isInTheWrongNetwork,
                      collectionId: undefined,
                      setToast,
                      signer,
>>>>>>> d73def8 (initial commit)
                    }}
                  />
                </Tabs.Content>
<<<<<<< HEAD
              </>
            )}
            <Tabs.Content value="listings" className="col-span-full">
              <UserListingsTable
                isOwner={isOwner}
                collectionIds={collectionIds}
                modal={{
                  isInTheWrongNetwork,
                  setToast,
                }}
                showActive
              />
            </Tabs.Content>
            {isOwner && (
              <Tabs.Content value="listings_inactive" className="col-span-full">
                <UserListingsTable
                  isOwner={isOwner}
                  collectionIds={collectionIds}
                  modal={{
                    isInTheWrongNetwork,
                    setToast,
                  }}
                />
              </Tabs.Content>
            )}
=======
                <Tabs.Content value="selling" className="col-span-full">
                  <UserListingsTable
<<<<<<< HEAD
                    collectionIds={collectionIds}
                    modal={{
                      isInTheWrongNetwork,
                      setToast,
=======
                    data={listings}
                    mutate={() => {
                      userTokens.mutate()
                      listings.mutate()
                    }}
                    isOwner={isOwner}
                    modal={{
                      accountData,
                      isInTheWrongNetwork,
                      collectionId: undefined,
                      setToast,
                      signer,
>>>>>>> d73def8 (initial commit)
                    }}
                  />
                </Tabs.Content>
              </>
            )}
<<<<<<< HEAD
>>>>>>> 183137d (initial commit)
            <Tabs.Content value="activity" className="col-span-full">
              <UserActivityTab user={address} />
            </Tabs.Content>
=======
>>>>>>> d73def8 (initial commit)
          </Tabs.Root>
        </div>
      </div>
    </Layout>
  )
}

export default Address
<<<<<<< HEAD

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  address: string | undefined
  fallback: {
    tokens: paths['/users/{user}/tokens/v5']['get']['responses']['200']['schema']
  }
}> = async ({ params }) => {
  const options: RequestInit | undefined = {}

  const address = params?.address?.toString()

  if (RESERVOIR_API_KEY) {
    options.headers = {
      'x-api-key': RESERVOIR_API_KEY,
    }
  }

  const url = new URL(`${RESERVOIR_API_BASE}/users/${address}/tokens/v5`)

  let query: paths['/users/{user}/tokens/v5']['get']['parameters']['query'] = {
    limit: 20,
    offset: 0,
  }

  if (COLLECTION_SET_ID) {
    query.collectionsSetId = COLLECTION_SET_ID
  } else {
    if (COMMUNITY) query.community = COMMUNITY
  }

  setParams(url, query)

  const res = await fetch(url.href, options)

  const tokens = (await res.json()) as Props['fallback']['tokens']

  return {
    props: {
      address,
      fallback: {
        tokens,
      },
    },
  }
}
=======
>>>>>>> d73def8 (initial commit)
