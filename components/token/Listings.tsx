<<<<<<< HEAD
import { paths } from '@reservoir0x/client-sdk/dist/types/api'
import { setParams } from '@reservoir0x/client-sdk/dist/utils/params'
import FormatCrypto from 'components/FormatCrypto'
import FormatEth from 'components/FormatEth'
import useAsks from 'hooks/useAsks'
=======
import { useListings } from '@reservoir0x/reservoir-kit-ui'
<<<<<<< HEAD
import FormatCrypto from '../FormatCrypto'
>>>>>>> d73def8 (initial commit)
=======
import FormatEth from 'components/FormatEth'
>>>>>>> 79e0b24 (Update look and feel)
import { truncateAddress } from 'lib/truncateText'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { FC } from 'react'
import Card from './Card'

const API_BASE =
<<<<<<< HEAD
  process.env.RESERVOIR_API_KEY || 'https://api.reservoir.tools'

  type Props = {
    asks: ReturnType<typeof useAsks>
  }

const Listings: FC<Props> = ({ asks }) => {
  const orders = asks.data?.orders

  if (!orders) return null
=======
  process.env.NEXT_PUBLIC_RESERVOIR_API_BASE || 'https://api.reservoir.tools'

type Props = {
  token?: string
}

const Listings: FC<Props> = ({ token }) => {
  const { data: listings } = useListings({
    token,
  })

  if (!listings || listings.length === 0) return null
>>>>>>> d73def8 (initial commit)

  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      <Card>
        <div className="reservoir-h5 mb-4 font-headings dark:bg-black dark:text-white ">
          Listings
        </div>
        <div className="max-h-96 overflow-auto rounded-2xl">
          <table className="min-w-full table-auto overflow-y-auto">
            <thead>
              <tr>
                {['Unit Price', 'Expiration', 'From'].map((item) => (
                  <th
                    key={item}
                    scope="col"
                    className="reservoir-subtitle px-6 py-3 text-left dark:text-white"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {orders.map((order, index) => {
                const { expiration, from, id, unitPrice, source } =
                  processOrder(order, index)
=======
              {listings.map((listing, index) => {
                const { expiration, from, id, unitPrice, source } =
                  processOrder(listing, index)
>>>>>>> d73def8 (initial commit)
                return (
                  <tr
                    key={id}
                    className="group h-[80px] bg-white even:bg-gray-50 dark:bg-black dark:text-white  dark:even:bg-neutral-900"
                  >
                    {/* UNIT PRICE */}
                    <td className="reservoir-h6 whitespace-nowrap px-6 py-4 font-headings dark:text-white">
<<<<<<< HEAD
                      <FormatCrypto
                        amount={unitPrice?.amount?.decimal}
                        address={unitPrice?.currency?.contract}
                        decimals={unitPrice?.currency?.decimals}
<<<<<<< HEAD
                        maximumFractionDigits={8}
=======
>>>>>>> d73def8 (initial commit)
                      />
=======
                      <FormatEth amount={unitPrice} />
>>>>>>> 79e0b24 (Update look and feel)
                    </td>

                    {/* TIME */}
                    <td className="reservoir-small whitespace-nowrap px-6 py-4 capitalize text-gray-500 dark:text-white">
                      {expiration}
                    </td>

                    {/* FROM */}
                    <td className="reservoir-body whitespace-nowrap px-6 py-4">
                      {from.address && (
                        <div className="flex items-center gap-2">
                          <a
                            className="h-4 w-4"
                            target="_blank"
                            rel="noopener noreferrer"
                            // @ts-ignore
                            href={source?.url}
                          >
                            {/* @ts-ignore */}
                            <img src={source?.logo} alt="" />
                          </a>
                          <Link href={from.href}>
                            <a className="reservoir-subtitle text-primary-700 dark:text-primary-100">
                              {truncateAddress(from.address)}
                            </a>
                          </Link>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Listings

function processOrder(
<<<<<<< HEAD
  order:
  | NonNullable<NonNullable<Props['asks']['data']>['orders']>[0]
  | undefined,
=======
  order: NonNullable<ReturnType<typeof useListings>>['data']['0'] | undefined,
>>>>>>> d73def8 (initial commit)
  index: number
) {
  const from = {
    href: `/address/${order?.maker}`,
    address: order?.maker,
  }
  const unitPrice = order?.price
  const id = `${order?.id}-${index}`
  const expiration =
    order?.validUntil === 0
      ? 'Never'
      : DateTime.fromMillis(+`${order?.validUntil}000`).toRelative()

<<<<<<< HEAD
  const url = new URL('/redirect/logo/v1', 'https://api.reservoir.tools')

  const query: paths['/redirect/logo/v1']['get']['parameters']['query'] = {
    // @ts-ignore
    source: order?.source?.name,
  }

=======
>>>>>>> d73def8 (initial commit)
  const source = {
    ...order?.source,
    logo: `${API_BASE}/redirect/sources/${order?.source?.name}/logo/v2`,
  }

  const data = {
    expiration,
    from,
    id,
    unitPrice,
    source,
  }

  return data
}
