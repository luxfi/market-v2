import { ComponentProps, FC } from 'react'
import { DateTime } from 'luxon'
import FormatEth from 'components/FormatEth'
import Link from 'next/link'
import { optimizeImage } from 'lib/optmizeImage'
import CancelOffer from 'components/CancelOffer'
<<<<<<< HEAD
import { useSigner } from 'wagmi'
=======
import { useAccount, useSigner } from 'wagmi'
>>>>>>> d73def8 (initial commit)
import Toast from 'components/Toast'
<<<<<<< HEAD
import FormatCrypto from 'components/FormatCrypto'
import { useBids } from '@reservoir0x/reservoir-kit-ui'
import { useInView } from 'react-intersection-observer'
<<<<<<< HEAD
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'
import LoadingIcon from 'components/LoadingIcon'
import useCoinConversion from 'hooks/useCoinConversion'
import { formatDollar } from 'lib/numbers'
import { useMediaQuery } from '@react-hookz/web'

const API_BASE =
  process.env.NEXT_PUBLIC_RESERVOIR_API_BASE || 'https://api.reservoir.tools'

type Props = {
  collectionIds?: string[]
  modal: {
    isInTheWrongNetwork: boolean | undefined
    setToast: (data: ComponentProps<typeof Toast>['data']) => any
  }
}

const UserOffersTable: FC<Props> = ({ modal, collectionIds }) => {
  const usdConversion = useCoinConversion('usd')
  const { data: signer } = useSigner()
  const router = useRouter()
  const { address } = router.query
  const params: Parameters<typeof useBids>[0] = {
    status: 'active',
    maker: address as string,
    limit: 20,
    includeMetadata: true,
  }

  if (collectionIds) {
    params.contracts = collectionIds
  }

  const data = useBids(params, {
    revalidateOnMount: false,
  })

  useEffect(() => {
    data.mutate()
    return () => {
      data.setSize(1)
    }
  }, [])

  const isMobile = useMediaQuery('only screen and (max-width : 730px)')

=======
=======
import useUserBids from 'hooks/useUserBids'
>>>>>>> 79e0b24 (Update look and feel)

type Props = {
  data: ReturnType<typeof useUserBids>
  isOwner: boolean
  maker: string
  mutate: () => any
  modal: {
    accountData: ReturnType<typeof useAccount>
    collectionId: string | undefined
    isInTheWrongNetwork: boolean | undefined
    setToast: (data: ComponentProps<typeof Toast>['data']) => any
    signer: ReturnType<typeof useSigner>['data']
  }
}

<<<<<<< HEAD
const UserOffersTable: FC<Props> = ({ data, mutate, modal, isOwner }) => {
>>>>>>> d73def8 (initial commit)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView && data.hasNextPage) {
      data.fetchNextPage()
    }
  }, [inView])
  const bids = data.data

<<<<<<< HEAD
  if (data.isFetchingInitialData) {
    return (
      <div className="my-20 flex justify-center">
        <LoadingIcon />
      </div>
    )
  }

=======
>>>>>>> d73def8 (initial commit)
  if (bids.length === 0) {
=======
const UserOffersTable: FC<Props> = ({
  data: { orders, ref },
  maker,
  mutate,
  modal,
  isOwner,
}) => {
  const { data } = orders
  const ordersFlat = data ? data.flatMap(({ orders }) => orders) : []

  if (ordersFlat.length === 0) {
>>>>>>> 79e0b24 (Update look and feel)
    return (
      <div className="reservoir-body mt-14 grid justify-center dark:text-white">
        You have not made any offers.
      </div>
    )
  }

<<<<<<< HEAD
  if (isMobile) {
    return (
      <div className="mb-11 overflow-x-auto">
        {bids?.map((bid, index, arr) => {
          const {
            collectionName,
            contract,
            expiration,
            id,
            key,
            href,
            image,
            tokenName,
            tokenId,
            price,
            value,
            source,
          } = processBid(bid)

          return (
            <div
              key={`${contract}-${index}`}
              className="border-b-[1px] border-solid border-b-neutral-300	py-[16px]"
            >
              <div className="flex items-center justify-between">
                <Link href={href || '#'}>
                  <a className="flex items-center gap-2">
                    <div className="relative h-14 w-14">
                      {image && (
                        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded">
                          <img
                            src={optimizeImage(image, 56)}
                            alt="Bid Image"
                            className="w-[56px] object-contain"
                            width="56"
                            height="56"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="reservoir-h6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap font-headings text-sm dark:text-white">
                        {tokenName ? tokenName : collectionName}
                      </div>
                      {tokenName && (
                        <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-neutral-600 dark:text-neutral-300">
                          {collectionName}
                        </div>
                      )}
                      {key && value && (
                        <div>
                          <span className="text-xs text-neutral-600 dark:text-neutral-300">
                            {key} {value}
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </Link>
                <div className="flex flex-col">
                  <FormatCrypto
                    amount={price?.amount?.decimal}
                    address={price?.currency?.contract}
                    decimals={price?.currency?.decimals}
                    maximumFractionDigits={8}
                  />
                  {usdConversion && (
                    <span className="mt-1 text-right text-xs text-neutral-600 dark:text-neutral-300">
                      {formatDollar(
                        usdConversion * (price?.amount?.decimal || 0)
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <a
                    href={source.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="mb-1 flex items-center gap-1 font-light text-primary-700 dark:text-primary-300"
                  >
                    {source.icon && (
                      <img
                        className="h-6 w-6"
                        alt="Source Icon"
                        src={source.icon}
                      />
                    )}
                    <span className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                      {source.name}
                    </span>
                  </a>
                  <div className="text-xs font-light text-neutral-600 dark:text-neutral-300">{`Expires ${expiration}`}</div>
                </div>
                <CancelOffer
                  data={{
                    id,
                    contract,
                    tokenId,
                  }}
                  signer={signer}
                  show={true}
                  isInTheWrongNetwork={modal.isInTheWrongNetwork}
                  setToast={modal.setToast}
                  mutate={data.mutate}
                  trigger={
                    <Dialog.Trigger className="btn-primary-outline min-w-[120px] bg-white py-[3px] text-sm text-[#FF3B3B] dark:border-neutral-600 dark:bg-black dark:text-[#FF9A9A] dark:ring-primary-900 dark:focus:ring-4">
                      Cancel
                    </Dialog.Trigger>
                  }
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="mb-11 overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            {['Item', 'Offer', 'Expiration', 'Marketplace'].map((item) => (
              <th
                key={item}
                scope="col"
                className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white"
=======
  return (
    <div className="mb-11 overflow-x-auto border-b border-gray-200 shadow dark:border-neutral-600 sm:rounded-lg">
      <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-neutral-600">
        <thead className="bg-gray-50 dark:bg-neutral-900">
          <tr>
            {['Type', 'Item', 'Offer', 'Expiration'].map((item) => (
              <th
                key={item}
                scope="col"
                className="reservoir-label-l px-6 py-3 text-left dark:text-white"
>>>>>>> d73def8 (initial commit)
              >
                {item}
              </th>
            ))}
<<<<<<< HEAD
            <th
              scope="col"
              className="relative px-6 py-3 text-sm font-medium text-neutral-600 dark:text-white"
            >
              <span className="sr-only">Cancel</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bids?.map((bid, index, arr) => {
=======
            {isOwner && (
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Cancel</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {bids?.map((position, index, arr) => {
>>>>>>> d73def8 (initial commit)
=======
          {ordersFlat?.map((position, index, arr) => {
>>>>>>> 79e0b24 (Update look and feel)
            const {
              collectionName,
              contract,
              expiration,
              id,
              key,
              href,
              image,
<<<<<<< HEAD
=======
              kind,
>>>>>>> d73def8 (initial commit)
              tokenName,
              tokenId,
              price,
              value,
<<<<<<< HEAD
              source,
            } = processBid(bid)
=======
            } = processPosition(position)
>>>>>>> d73def8 (initial commit)

            return (
              <tr
                key={`${contract}-${index}`}
                ref={index === arr.length - 5 ? ref : null}
<<<<<<< HEAD
                className="group h-[80px] border-b-[1px] border-solid border-b-neutral-300 bg-white	dark:border-b-neutral-600 dark:bg-black"
              >
                {/* ITEM */}
                <td className="whitespace-nowrap px-6 py-4 ">
                  <Link href={href || '#'}>
                    <a className="flex items-center gap-2">
                      <div className="relative h-16 w-16">
                        {image && (
                          <div className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded">
                            <img
                              src={optimizeImage(image, 64)}
                              alt="Bid Image"
                              className="w-[64px] object-contain"
                              width="64"
                              height="64"
=======
                className="group h-[80px] bg-white even:bg-gray-50 dark:bg-neutral-900 dark:text-white dark:even:bg-neutral-800"
              >
                {/* TYPE */}
                <td className="reservoir-body whitespace-nowrap px-6 py-4 capitalize dark:text-white">
                  {kind}
                </td>

                {/* ITEM */}
                <td className="reservoir-body whitespace-nowrap px-6 py-4 dark:text-white">
                  <Link href={href || '#'}>
                    <a className="flex items-center gap-2">
                      <div className="relative h-10 w-10">
                        {image && (
                          <div className="aspect-w-1 aspect-h-1 relative">
                            <img
                              src={optimizeImage(image, 35)}
                              className="w-[35px] object-contain"
                              width="35"
                              height="35"
>>>>>>> d73def8 (initial commit)
                            />
                          </div>
                        )}
                      </div>
                      <span className="whitespace-nowrap">
<<<<<<< HEAD
                        <div className="reservoir-h6 max-w-[250px] overflow-hidden text-ellipsis font-headings text-base dark:text-white">
                          {tokenName ? tokenName : collectionName}
                        </div>
                        {tokenName && (
                          <div className="text-xs text-neutral-600 dark:text-neutral-300">
                            {collectionName}
                          </div>
                        )}
                        {key && value && (
                          <div>
                            <span className="text-xs text-neutral-600 dark:text-neutral-300">
                              {key} {value}
                            </span>
                          </div>
                        )}
=======
                        <div className="reservoir-body dark:text-white">
                          {collectionName}
                        </div>
                        <div>
                          <span className="reservoir-body dark:text-white">
                            {key} {value}
                          </span>
                        </div>
                        <div className="reservoir-h6 font-headings dark:text-white">
                          {tokenName}
                        </div>
>>>>>>> d73def8 (initial commit)
                      </span>
                    </a>
                  </Link>
                </td>

                {/* OFFER */}
<<<<<<< HEAD
                <td className="whitespace-nowrap px-6 py-4 text-black dark:text-white">
                  <div className="flex flex-col">
                    <FormatCrypto
                      amount={price?.amount?.decimal}
                      address={price?.currency?.contract}
                      decimals={price?.currency?.decimals}
                      maximumFractionDigits={8}
                    />
                    {usdConversion && (
                      <span className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
                        {formatDollar(
                          usdConversion * (price?.amount?.decimal || 0)
                        )}
                      </span>
                    )}
                  </div>
                </td>

                {/* EXPIRATION */}
                <td className="whitespace-nowrap px-6 py-4 font-light text-neutral-600 dark:text-neutral-300">
                  {expiration}
                </td>

                {/* MARKETPLACE */}
                <td className="whitespace-nowrap px-6 py-4">
                  <a
                    href={source.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-1 font-light text-primary-700 dark:text-primary-300"
                  >
                    {source.icon && (
                      <img
                        className="h-6 w-6"
                        alt="Source Icon"
                        src={source.icon}
                      />
                    )}
                    <span className="max-w-[200px] overflow-hidden text-ellipsis">
                      {source.name}
                    </span>
                  </a>
                </td>

                <td className="sticky top-0 right-0 whitespace-nowrap dark:text-white">
                  <div className="flex items-center">
=======
                <td className="reservoir-body whitespace-nowrap px-6 py-4 dark:text-white">
                  <FormatEth amount={price} />
                </td>

                {/* EXPIRATION */}
                <td className="reservoir-body whitespace-nowrap px-6 py-4 dark:text-white">
                  {expiration}
                </td>
                {isOwner && (
                  <td className="reservoir-body flex justify-end whitespace-nowrap px-6 py-4 dark:text-white">
>>>>>>> d73def8 (initial commit)
                    <CancelOffer
                      data={{
                        collectionId: modal?.collectionId,
                        id,
                        contract,
                        tokenId,
                      }}
<<<<<<< HEAD
                      signer={signer}
                      show={true}
                      isInTheWrongNetwork={modal.isInTheWrongNetwork}
                      setToast={modal.setToast}
                      mutate={data.mutate}
                      trigger={
                        <Dialog.Trigger className="btn-primary-outline min-w-[120px] bg-white py-[3px] text-sm text-[#FF3B3B] dark:border-neutral-600 dark:bg-black dark:text-[#FF9A9A] dark:ring-primary-900 dark:focus:ring-4">
                          Cancel
                        </Dialog.Trigger>
                      }
                    />
                  </div>
                </td>
=======
                      signer={modal.signer}
                      show={true}
                      isInTheWrongNetwork={modal.isInTheWrongNetwork}
                      setToast={modal.setToast}
                      mutate={mutate}
                    />
                  </td>
                )}
>>>>>>> d73def8 (initial commit)
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserOffersTable

<<<<<<< HEAD
function processBid(bid: ReturnType<typeof useBids>['data']['0']) {
  const kind = bid?.metadata?.kind
  // @ts-ignore
  const key = bid?.metadata?.data?.attributes?.[0]?.key
  // @ts-ignore
  const value = bid?.metadata?.data?.attributes?.[0]?.value
  let tokenId
  let contract = bid?.tokenSetId?.split(':')[1]
  let href
  const collectionRedirectUrl = `${API_BASE}/redirect/collections/${contract}/image/v1`

  switch (kind) {
    case 'token':
      tokenId = bid?.tokenSetId?.split(':')[2]
=======
function processPosition(
  position:
    | NonNullable<NonNullable<Props['data']['orders']['data']>[0]['orders']>[0]
    | undefined
) {
  const kind = position?.metadata?.kind
  // @ts-ignore
  const key = position?.metadata?.data?.attributes?.[0]?.key
  // @ts-ignore
  const value = position?.metadata?.data?.attributes?.[0]?.value

  let tokenId
  let contract = position?.tokenSetId?.split(':')[1]
  let href

  switch (kind) {
    case 'token':
      tokenId = position?.tokenSetId?.split(':')[2]
>>>>>>> d73def8 (initial commit)
      href = `/${contract}/${tokenId}`
      break
    // @ts-ignore
    case 'attribute':
      tokenId = undefined
      href = `/collections/${contract}?attributes[${key}]=${value}`
      break
    // @ts-ignore
    case 'collection':
      tokenId = undefined
      href = `/collections/${contract}`
      break

    default:
      break
  }

  const data = {
    key,
    value,
    kind,
    contract,
    tokenId,
<<<<<<< HEAD
    image: bid?.metadata?.data?.image || collectionRedirectUrl,
    tokenName: tokenId
      ? bid?.metadata?.data?.tokenName || `#${tokenId}`
      : undefined,
    expiration:
      bid?.expiration === 0
        ? 'Never'
        : DateTime.fromMillis(+`${bid?.expiration}000`).toRelative(),
    id: bid?.id,
    collectionName: bid?.metadata?.data?.collectionName,
    price: bid?.price,
    source: {
      icon: (bid?.source?.icon as string) || null,
      name: (bid?.source?.name as string) || null,
      link:
        bid?.source?.domain && tokenId
          ? `${API_BASE}/redirect/sources/${bid?.source?.domain}/tokens/${contract}:${tokenId}/link/v2`
          : `https://${bid?.source?.domain as string}` || null,
    },
=======
    image: position?.metadata?.data?.image,
    tokenName: position?.metadata?.data?.tokenName,
    expiration:
      position?.expiration === 0
        ? 'Never'
        : DateTime.fromMillis(+`${position?.expiration}000`).toRelative(),
    id: position?.id,
    collectionName: position?.metadata?.data?.collectionName,
<<<<<<< HEAD
    price: position?.price,
>>>>>>> d73def8 (initial commit)
=======
    price: position?.value,
>>>>>>> 79e0b24 (Update look and feel)
  }

  return { ...data, href }
}
