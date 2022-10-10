import { utils } from 'ethers'
import { BigNumberish } from '@ethersproject/bignumber'

const { format: formatDollar } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

<<<<<<< HEAD
function formatDollar(price?: number | null) {
  return price !== undefined && price !== null ? formatUsdCurrency(price) : '-'
}

<<<<<<< HEAD
const truncateFractionAndFormat = (
=======
const trauncateFractionAndFormat = (
>>>>>>> d73def8 (initial commit)
  parts: Intl.NumberFormatPart[],
  digits: number
) => {
  return parts
    .map(({ type, value }) => {
      if (type !== 'fraction' || !value || value.length < digits) {
        return value
      }

      let formattedValue = ''
<<<<<<< HEAD
      for (let idx = 0; idx < value.length && idx < digits; idx++) {
=======
      for (
        let idx = 0, counter = 0;
        idx < value.length && counter < digits;
        idx++
      ) {
        if (value[idx] !== '0') {
          counter++
        }
>>>>>>> d73def8 (initial commit)
        formattedValue += value[idx]
      }
      return formattedValue
    })
    .reduce((string, part) => string + part)
}

=======
>>>>>>> 79e0b24 (Update look and feel)
function formatNumber(
  amount: number | null | undefined,
  maximumFractionDigits: number = 2
) {
  const { format } = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: maximumFractionDigits,
  })
  if (!amount) {
    return '-'
  }
  return format(amount)
}

/**
 *  Convert ETH values to human readable formats
 * @param amount An ETH amount
 * @param maximumFractionDigits Number of decimal digits
 * @returns returns the ETH value as a `string` or `-` if the amount is `null` or `undefined`
 */
function formatBN(
  amount: BigNumberish | null | undefined,
  maximumFractionDigits: number
) {
  if (typeof amount === 'undefined' || amount === null) return '-'

  let value = ''

<<<<<<< HEAD
<<<<<<< HEAD
  if (amountToFormat === 0) {
    return amountToFormat
  }

=======
>>>>>>> d73def8 (initial commit)
  const parts = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
    notation: 'compact',
    compactDisplay: 'short',
  }).formatToParts(amountToFormat)

  if (parts && parts.length > 0) {
<<<<<<< HEAD
    const lowestValue = Number(
      `0.${new Array(maximumFractionDigits).join('0')}1`
    )
    if (amountToFormat > 1000) {
      return truncateFractionAndFormat(parts, 1)
    } else if (amountToFormat < 1 && amountToFormat < lowestValue) {
      return `< ${lowestValue}`
    } else {
      return truncateFractionAndFormat(parts, maximumFractionDigits)
    }
=======
    const maxDecimals = amountToFormat > 1000 ? 1 : maximumFractionDigits
    return trauncateFractionAndFormat(parts, maxDecimals)
>>>>>>> d73def8 (initial commit)
=======
  if (typeof amount === 'number') {
    value = new Intl.NumberFormat('en-US', {
      maximumFractionDigits,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(amount)
>>>>>>> 79e0b24 (Update look and feel)
  } else {
    value = new Intl.NumberFormat('en-US', {
      maximumFractionDigits,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(+utils.formatEther(amount))
  }

  return value
}

export { formatDollar, formatBN, formatNumber }
