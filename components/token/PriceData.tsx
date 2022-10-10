import AcceptOffer from 'components/AcceptOffer'
import BuyNow from 'components/BuyNow'
import CancelListing from 'components/CancelListing'
import CancelOffer from 'components/CancelOffer'
import { recoilTokensMap } from 'components/CartMenu'
import FormatEth from 'components/FormatEth'
import FormatWEth from 'components/FormatWEth'
import { ListModal, useReservoirClient } from '@reservoir0x/reservoir-kit-ui'
import TokenOfferModal from 'components/TokenOfferModal'
import { recoilCartTokens } from 'components/TokensGrid'
import useCollection from 'hooks/useCollection'
import useDetails from 'hooks/useDetails'
import React, { FC, ReactNode } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useAccount, useNetwork, useSigner } from 'wagmi'
import { setToast } from './setToast'
<<<<<<< HEAD
import recoilCartTokens, { getCartCurrency, getTokensMap } from 'recoil/cart'
import FormatCrypto from 'components/FormatCrypto'
import { Collection } from 'types/reservoir'
import { formatDollar } from 'lib/numbers'
import useCoinConversion from 'hooks/useCoinConversion'
import SwapCartModal from 'components/SwapCartModal'
<<<<<<< HEAD
import { FaShoppingCart } from 'react-icons/fa'
import ConnectWalletButton from 'components/ConnectWalletButton'
<<<<<<< HEAD
import useMounted from 'hooks/useMounted'
import { useRouter } from 'next/router'
=======
=======
import ConnectWalletModal from 'components/ConnectWalletModal'
>>>>>>> d73def8 (initial commit)
<<<<<<< HEAD
>>>>>>> 183137d (initial commit)
=======
=======
>>>>>>> 79e0b24 (Update look and feel)
>>>>>>> 96757b6 (Update look and feel)

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
const SOURCE_ID = process.env.NEXT_PUBLIC_SOURCE_ID
const SOURCE_ICON = process.env.NEXT_PUBLIC_SOURCE_ICON
const API_BASE =
  process.env.NEXT_PUBLIC_RESERVOIR_API_BASE || 'https://api.reservoir.tools'

type Props = {
<<<<<<< HEAD
  details: ReturnType<typeof useTokens>
  collection?: Collection
  isOwner: boolean
}

type ListingCurrencies = ComponentPropsWithoutRef<
  typeof ListModal
>['currencies']
let listingCurrencies: ListingCurrencies = undefined

if (CURRENCIES) {
  listingCurrencies = JSON.parse(CURRENCIES)
=======
  details: ReturnType<typeof useDetails>
  collection: ReturnType<typeof useCollection>
>>>>>>> 96757b6 (Update look and feel)
}

const PriceData: FC<Props> = ({ details, collection, isOwner }) => {
  const router = useRouter()
  const isMounted = useMounted()
  const [cartTokens, setCartTokens] = useRecoilState(recoilCartTokens)
  const tokensMap = useRecoilValue(recoilTokensMap)
  const accountData = useAccount()
  const { data: signer } = useSigner()
  const { chain: activeChain } = useNetwork()
  const reservoirClient = useReservoirClient()
<<<<<<< HEAD
  const [clearCartOpen, setClearCartOpen] = useState(false)
  const [cartToSwap, setCartToSwap] = useState<undefined | typeof cartTokens>()
  const account = useAccount()
  const bidOpenState = useState(true)

  const queryBidId = router.query.bidId as string
  const deeplinkToAcceptBid = router.query.acceptBid === 'true'
=======
>>>>>>> 96757b6 (Update look and feel)

<<<<<<< HEAD
  const token = details.data ? details.data[0] : undefined

  const topBidUsdConversion = useCoinConversion(
    token?.market?.topBid?.price?.currency?.symbol ? 'usd' : undefined,
    token?.market?.topBid?.price?.currency?.symbol
  )

  // Disabling the rules of hooks here due to erroneous error message,
  //  the linter is likely confused due to two custom hook calls of the same name
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const floorAskUsdConversion = useCoinConversion(
    token?.market?.floorAsk?.price?.currency?.symbol ? 'usd' : undefined,
    token?.market?.floorAsk?.price?.currency?.symbol
  )

<<<<<<< HEAD
  if (!isMounted) {
    return null
  }

=======
<<<<<<< HEAD
>>>>>>> 183137d (initial commit)
  const topBidUsdPrice =
    topBidUsdConversion && token?.market?.topBid?.price?.amount?.decimal
      ? topBidUsdConversion * token?.market?.topBid?.price?.amount?.decimal
      : null

  const floorAskUsdPrice =
    floorAskUsdConversion && token?.market?.floorAsk?.price?.amount?.decimal
      ? floorAskUsdConversion * token?.market?.floorAsk?.price?.amount?.decimal
      : null
=======
  const topBidUsdPrice = token?.market?.topBid?.price?.amount?.decimal
    ? topBidUsdConversion * token?.market?.topBid?.price?.amount?.decimal
    : null

  const floorAskUsdPrice = token?.market?.floorAsk?.price?.amount?.decimal
    ? floorAskUsdConversion * token?.market?.floorAsk?.price?.amount?.decimal
    : null
>>>>>>> d73def8 (initial commit)
=======
  const token = details.data?.tokens?.[0]
>>>>>>> 79e0b24 (Update look and feel)

  const sourceName = token?.market?.floorAsk?.source?.name as string | undefined
  const sourceDomain = token?.market?.floorAsk?.source?.domain as
    | string
    | undefined

  let isLocalListed = false

  if (
    reservoirClient?.source &&
    sourceDomain &&
    reservoirClient.source === sourceDomain
  ) {
    isLocalListed = true
  } else if (SOURCE_ID && sourceName && SOURCE_ID === sourceName) {
    isLocalListed = true
  }

  const sourceLogo =
    isLocalListed && SOURCE_ICON
      ? SOURCE_ICON
      : `${API_BASE}/redirect/sources/${sourceDomain || sourceName}/logo/v2`

  const sourceRedirect = `${API_BASE}/redirect/sources/${
    sourceDomain || sourceName
  }/tokens/${token?.token?.contract}:${token?.token?.tokenId}/link/v2`

  if (!CHAIN_ID) return null

  const isTopBidder =
    accountData.isConnected &&
    token?.market?.topBid?.maker?.toLowerCase() ===
      accountData?.address?.toLowerCase()
  const isListed = token
    ? token?.market?.floorAsk?.price !== null &&
      token?.token?.kind !== 'erc1155'
    : false
  const isInTheWrongNetwork = Boolean(signer && activeChain?.id !== +CHAIN_ID)

  const tokenId = token?.token?.tokenId
  const contract = token?.token?.contract

  const isInCart = Boolean(tokensMap[`${contract}:${tokenId}`])

  const showAcceptOffer =
    token?.market?.topBid?.id !== null &&
    token?.market?.topBid?.id !== undefined &&
    isOwner
      ? true
      : false

  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      <article className="col-span-full rounded-2xl border border-gray-300 bg-white p-6 dark:border-neutral-600 dark:bg-black">
        <div className="grid grid-cols-2 gap-6">
          <Price
            title="List Price"
            source={
              sourceName && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={sourceRedirect}
                  className="reservoir-body flex items-center gap-2 dark:text-white"
                >
                  on {sourceName}
                  <img className="h-6 w-6" src={sourceLogo} alt="Source Logo" />
                </a>
              )
            }
            price={
<<<<<<< HEAD
              <FormatCrypto
                amount={token?.market?.floorAsk?.price?.amount?.decimal}
                address={token?.market?.floorAsk?.price?.currency?.contract}
                decimals={token?.market?.floorAsk?.price?.currency?.decimals}
                logoWidth={30}
<<<<<<< HEAD
                maximumFractionDigits={8}
=======
>>>>>>> d73def8 (initial commit)
=======
              <FormatEth
                amount={token?.market?.floorAsk?.price}
                logoWidth={16}
>>>>>>> 79e0b24 (Update look and feel)
              />
            }
          />
          <Price
            title="Top Offer"
            price={
<<<<<<< HEAD
              <FormatCrypto
                amount={token?.market?.topBid?.price?.amount?.decimal}
                address={token?.market?.topBid?.price?.currency?.contract}
                decimals={token?.market?.topBid?.price?.currency?.decimals}
                logoWidth={30}
<<<<<<< HEAD
                maximumFractionDigits={8}
=======
>>>>>>> d73def8 (initial commit)
=======
              <FormatWEth
                amount={token?.market?.topBid?.value}
                logoWidth={16}
>>>>>>> 79e0b24 (Update look and feel)
              />
            }
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
<<<<<<< HEAD
          {account.isDisconnected ? (
<<<<<<< HEAD
            <ConnectWalletButton className="w-full">
              <span>Connect Wallet</span>
            </ConnectWalletButton>
=======
<<<<<<< HEAD
            <ConnectWalletButton className="w-full" />
=======
            <ConnectWalletModal />
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)
          ) : (
            <>
              {isOwner && (
                <ListModal
                  trigger={
<<<<<<< HEAD
                    <button className="btn-primary-fill w-full dark:ring-primary-900 dark:focus:ring-4">
                      {token?.market?.floorAsk?.price?.amount?.decimal
                        ? 'Create New Listing'
                        : 'List for Sale'}
                    </button>
=======
                    token?.market?.floorAsk?.price?.amount?.decimal ? (
                      <p className="btn-primary-fill w-full dark:ring-primary-900 dark:focus:ring-4">
                        Edit Listing
                      </p>
                    ) : (
                      <div className="btn-primary-fill w-full dark:ring-primary-900 dark:focus:ring-4">
                        {token?.market?.floorAsk?.price?.amount?.decimal
                          ? 'Edit Listing'
                          : 'List for Sale'}
                      </div>
                    )
>>>>>>> d73def8 (initial commit)
                  }
                  collectionId={contract}
                  tokenId={tokenId}
                  currencies={listingCurrencies}
                  onListingComplete={() => {
                    details && details.mutate()
                  }}
                  onListingError={(err: any) => {
                    if (err?.code === 4001) {
                      setToast({
                        kind: 'error',
                        message: 'You have canceled the transaction.',
                        title: 'User canceled transaction',
                      })
                      return
                    }
                    setToast({
                      kind: 'error',
                      message: 'The transaction was not completed.',
                      title: 'Could not list token',
                    })
                  }}
                />
              )}
              {!isOwner && (
                <BuyNow
                  buttonClassName="btn-primary-fill col-span-1"
                  data={{
                    details: details,
                  }}
                  signer={signer}
                  isInTheWrongNetwork={isInTheWrongNetwork}
                  mutate={details.mutate}
                />
              )}
<<<<<<< HEAD
=======
              {isInCart && !isOwner && (
                <button
                  onClick={() => {
                    const newCartTokens = [...cartTokens]
                    const index = newCartTokens.findIndex(
                      (cartToken) =>
                        cartToken?.token?.contract === contract &&
                        cartToken?.token?.tokenId === tokenId
                    )
                    newCartTokens.splice(index, 1)
                    setCartTokens(newCartTokens)
                  }}
                  className="outline-none"
                >
                  <div className="btn-primary-outline w-full text-[#FF3B3B] disabled:cursor-not-allowed dark:border-neutral-600  dark:text-red-300 dark:ring-primary-900 dark:focus:ring-4">
                    Remove
                  </div>
                </button>
              )}
              {!isInCart && !isOwner && isListed && (
                <button
                  disabled={!token?.market?.floorAsk?.price}
                  onClick={() => {
                    if (token?.token && token.market) {
                      if (
                        !cartCurrency ||
                        token.market.floorAsk?.price?.currency?.contract ===
                          cartCurrency?.contract
                      ) {
                        setCartTokens([
                          ...cartTokens,
                          {
                            token: token.token,
                            market: token.market,
                          },
                        ])
                      } else {
                        setCartToSwap([
                          {
                            token: token.token,
                            market: token.market,
                          },
                        ])
                        setClearCartOpen(true)
                      }
                    }
                  }}
                  className="outline-none"
                >
                  <div className="btn-primary-outline w-full px-[10px] dark:border-neutral-600 dark:text-white dark:ring-primary-900  dark:focus:ring-4">
                    Add to Cart
                  </div>
                </button>
              )}

>>>>>>> d73def8 (initial commit)
              <AcceptBidModal
                trigger={
                  showAcceptOffer ? (
                    <button
                      disabled={isInTheWrongNetwork}
                      className="btn-primary-outline w-full dark:text-white"
                    >
                      Accept Offer
                    </button>
                  ) : null
                }
                openState={
                  isOwner && (queryBidId || deeplinkToAcceptBid)
                    ? bidOpenState
                    : undefined
                }
                bidId={queryBidId}
                collectionId={collection?.id}
                tokenId={token?.token?.tokenId}
                onClose={() => details && details.mutate()}
                onBidAcceptError={(error: any) => {
                  if (error?.type === 'price mismatch') {
                    setToast({
                      kind: 'error',
                      message: 'Offer was lower than expected.',
                      title: 'Could not accept offer',
                    })
                    return
                  }
                  // Handle user rejection
                  if (error?.code === 4001) {
                    setToast({
                      kind: 'error',
                      message: 'You have canceled the transaction.',
                      title: 'User canceled transaction',
                    })
                    return
                  }
=======
          {isOwner && (
            <ListModal
              trigger={
                token?.market?.floorAsk?.price ? (
                  <p className="btn-primary-fill w-full dark:ring-primary-900 dark:focus:ring-4">
                    Edit Listing
                  </p>
                ) : (
                  <div className="btn-primary-fill w-full dark:ring-primary-900 dark:focus:ring-4">
                    {token?.market?.floorAsk?.price
                      ? 'Edit Listing'
                      : 'List for Sale'}
                  </div>
                )
              }
              collectionId={contract}
              tokenId={tokenId}
              onListingComplete={() => {
                details && details.mutate()
              }}
              onListingError={(err: any) => {
                if (err?.code === 4001) {
>>>>>>> 79e0b24 (Update look and feel)
                  setToast({
                    kind: 'error',
                    message: 'You have canceled the transaction.',
                    title: 'User canceled transaction',
                  })
                  return
                }
                setToast({
                  kind: 'error',
                  message: 'The transaction was not completed.',
                  title: 'Could not list token',
                })
              }}
            />
          )}
          {!isOwner && (
            <BuyNow
              buttonClassName="btn-primary-fill col-span-1"
              data={{
                collection: collection.data,
                details,
              }}
              signer={signer}
              isInTheWrongNetwork={isInTheWrongNetwork}
              mutate={details.mutate}
            />
          )}
          {isInCart && !isOwner && (
            <button
              onClick={() => {
                const newCartTokens = [...cartTokens]
                const index = newCartTokens.findIndex(
                  (cartToken) =>
                    cartToken.contract === contract &&
                    cartToken.tokenId === tokenId
                )
                newCartTokens.splice(index, 1)
                setCartTokens(newCartTokens)
              }}
              className="outline-none"
            >
              <div className="btn-primary-outline w-full text-[#FF3B3B] disabled:cursor-not-allowed dark:border-neutral-600  dark:text-red-300 dark:ring-primary-900 dark:focus:ring-4">
                Remove
              </div>
            </button>
          )}
          {!isInCart && !isOwner && isListed && (
            <button
              disabled={!token?.market?.floorAsk?.price}
              onClick={() => {
                if (tokenId && contract) {
                  setCartTokens([
                    ...cartTokens,
                    {
                      tokenId,
                      contract,
                      collection: { name: token.token?.collection?.name },
                      image: token.token?.image,
                      floorAskPrice: token.market?.floorAsk?.price,
                      name: token.token?.name,
                    },
                  ])
                }
              }}
              className="outline-none"
            >
              <div className="btn-primary-outline w-full px-[10px] dark:border-neutral-600 dark:text-white dark:ring-primary-900  dark:focus:ring-4">
                Add to Cart
              </div>
            </button>
          )}
          <AcceptOffer
            data={{
              collection: collection.data,
              details,
            }}
            isInTheWrongNetwork={isInTheWrongNetwork}
            setToast={setToast}
            show={showAcceptOffer}
            signer={signer}
          />
          {!isOwner && (
            <TokenOfferModal
              signer={signer}
              data={{
                collection: collection.data,
                details,
              }}
              royalties={{
                bps: collection.data?.collection?.royalties?.bps,
                recipient: collection.data?.collection?.royalties?.recipient,
              }}
              env={{
                chainId: +CHAIN_ID as ChainId,
              }}
              setToast={setToast}
            />
          )}

          <CancelOffer
            data={{
              collection: collection.data,
              details,
            }}
            signer={signer}
            show={isTopBidder}
            isInTheWrongNetwork={isInTheWrongNetwork}
            setToast={setToast}
          />
          <CancelListing
            data={{
              collection: collection.data,
              details,
            }}
            signer={signer}
            show={isOwner && isListed}
            isInTheWrongNetwork={isInTheWrongNetwork}
            setToast={setToast}
          />
        </div>
<<<<<<< HEAD
        {isInCart && !isOwner && (
          <button
            onClick={() => {
              const newCartTokens = [...cartTokens]
              const index = newCartTokens.findIndex(
                (cartToken) =>
                  cartToken?.token?.contract === contract &&
                  cartToken?.token?.tokenId === tokenId
              )
              newCartTokens.splice(index, 1)
              setCartTokens(newCartTokens)
            }}
            className="mt-4 w-fit text-left outline-none disabled:cursor-not-allowed  dark:border-neutral-600 dark:focus:ring-4  dark:focus:ring-primary-900"
          >
            <span>You can also</span>{' '}
            <span className="text-[#FF3B3B] dark:text-[#FF9A9A]">
              remove from cart
            </span>
          </button>
        )}

        {!isInCart && !isOwner && isListed && (
          <button
            disabled={!token?.market?.floorAsk?.price}
            onClick={() => {
              if (token?.token && token.market) {
                if (
                  !cartCurrency ||
                  token.market.floorAsk?.price?.currency?.contract ===
                    cartCurrency?.contract
                ) {
                  setCartTokens([
                    ...cartTokens,
                    {
                      token: token.token,
                      market: token.market,
                    },
                  ])
                } else {
                  setCartToSwap([
                    {
                      token: token.token,
                      market: token.market,
                    },
                  ])
                  setClearCartOpen(true)
                }
              }
            }}
            className="mt-4 w-fit outline-none dark:focus:ring-4 dark:focus:ring-primary-900"
          >
            <div className="flex items-center dark:text-white">
              <div>
                <span>You can also</span>{' '}
                <span className="text-primary-700 dark:text-primary-100">
                  add to cart
                </span>
              </div>

              <FaShoppingCart className="ml-[10px] h-[18px] w-[18px] text-primary-700 dark:text-primary-100" />
            </div>
          </button>
        )}
=======
>>>>>>> d73def8 (initial commit)
      </article>
    </div>
  )
}

export default PriceData

const Price: FC<{ title: string; price: ReactNode; source?: ReactNode }> = ({
  title,
  price,
  source,
}) => (
  <div className="flex flex-col space-y-5">
    <div className="flex-grow">
      <div className="reservoir-h5 font-headings dark:text-white">{title}</div>
      {source}
    </div>
    <div className="reservoir-h3 font-headings dark:text-white">{price}</div>
  </div>
)
