import EthAccount from 'components/EthAccount'
import useDetails from 'hooks/useDetails'
import Link from 'next/link'
import { FC } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FiAlertCircle } from 'react-icons/fi'
<<<<<<< HEAD
import { useTokens } from '@reservoir0x/reservoir-kit-ui'
import { Collection } from 'types/reservoir'
import RarityTooltip from 'components/RarityTooltip'
import { formatNumber } from 'lib/numbers'
=======
>>>>>>> 96757b6 (Update look and feel)

type Props = {
  details: ReturnType<typeof useDetails>
  bannedOnOpenSea: boolean
  collection?: Collection
}

<<<<<<< HEAD
const Owner: FC<Props> = ({ details, bannedOnOpenSea, collection }) => {
  const token = details?.token

  const owner =
<<<<<<< HEAD
    token?.kind === 'erc1155' && details?.market?.floorAsk?.maker
=======
=======
const Owner: FC<Props> = ({ details, bannedOnOpenSea }) => {
  const token = details.data?.tokens?.[0]

  const owner =
<<<<<<< HEAD
>>>>>>> 96757b6 (Update look and feel)
<<<<<<< HEAD
    token?.kind === 'erc721A' && details?.market?.floorAsk?.maker
=======
    token?.kind === 'erc1155' && details?.market?.floorAsk?.maker
>>>>>>> d73def8 (initial commit)
>>>>>>> 183137d (initial commit)
      ? details?.market?.floorAsk?.maker
      : token?.owner
=======
    token?.token?.kind === 'erc1155' && token?.market?.floorAsk?.maker
      ? token?.market?.floorAsk?.maker
      : token?.token?.owner
>>>>>>> 79e0b24 (Update look and feel)

  console.log(collection)

  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      <article className="col-span-full rounded-2xl border border-gray-300 bg-white p-6 dark:border-neutral-600 dark:bg-black">
<<<<<<< HEAD
        {token?.rarityRank &&
          collection?.tokenCount &&
          token?.attributes &&
          token?.attributes?.length >= 2 &&
          token?.kind != 'erc1155' && (
            <div className="mb-3 flex w-full">
              <div className="hidden min-w-max items-center justify-between whitespace-nowrap rounded-md border border-neutral-300 px-2 py-1.5 text-sm dark:border-neutral-600 sm:flex">
                <img
                  src="/icons/rarity-icon.svg"
                  alt="Rarity icon"
                  className="mr-1 h-4 w-4"
                />
                <span className="mr-1 text-[#525252] dark:text-[#D4D4D4]">
                  Rarity Score
                </span>
                <span className="text-black dark:text-[#FFFFFF]">
                  {formatNumber(token?.rarityRank)} /{' '}
                  {formatNumber(parseInt(collection?.tokenCount))}{' '}
                  {`(${Math.floor(
                    (token?.rarityRank / parseInt(collection?.tokenCount)) * 100
                  )}%)`}
                </span>
              </div>
              <div className="flex sm:hidden">
                <RarityTooltip
                  rarityRank={token?.rarityRank}
                  collectionSize={parseInt(collection?.tokenCount)}
                />
              </div>
            </div>
          )}
        <div className="reservoir-h3 mb-3 flex items-center gap-4 overflow-hidden font-headings dark:text-white">
          <div>{token?.name || `#${token?.tokenId}`}</div>
=======
        <div className="reservoir-h3 mb-6 flex items-center gap-4 overflow-hidden font-headings dark:text-white">
          <div>{token?.token?.name || `#${token?.token?.tokenId}`}</div>
>>>>>>> 96757b6 (Update look and feel)
          {bannedOnOpenSea && (
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger>
                  <FiAlertCircle className="h-6 w-6 text-[#FF3B3B]" />
                </Tooltip.Trigger>
                <Tooltip.Content
                  sideOffset={5}
                  className="reservoir-body-2 w-[191px] rounded-2xl bg-neutral-800 py-3 px-4 text-center text-white dark:bg-neutral-100 dark:text-black"
                >
                  <Tooltip.Arrow className="fill-neutral-800 dark:fill-neutral-100" />
                  Token is not tradeable on OpenSea
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          )}
        </div>

        {/* {token?.token?.kind === 'erc1155' && (
          <div className="mb-4 flex justify-evenly">
            <div className="flex items-center gap-2">
              <FiUsers className="h-4 w-4" />
              <span className="reservoir-h5 ">Owners</span>
            </div>
            <div className="flex items-center gap-2">
              <FiDatabase className="h-4 w-4" />
              <span className="reservoir-h5 ">Total</span>
            </div>
          </div>
        )} */}

        <div className="reservoir-h6 mb-2 font-headings dark:text-white">
          Owner
        </div>
        {owner && (
          <Link href={`/address/${owner}`}>
            <a className="inline-block">
              <EthAccount address={owner} side="left" />
            </a>
          </Link>
        )}
      </article>
    </div>
  )
}

export default Owner
