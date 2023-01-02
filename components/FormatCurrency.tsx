import { BigNumberish } from 'ethers'
import { formatBN } from 'lib/numbers'
import { FC } from 'react'

type Props = {
  amount: BigNumberish | null | undefined
  maximumFractionDigits?: number
  children?: React.ReactNode
}

const FormatCurrency: FC<Props> = ({
  amount,
<<<<<<< HEAD
  maximumFractionDigits = 2,
=======
  maximumFractionDigits = 4,
>>>>>>> d73def8 (initial commit)
  children,
}) => {
  const value = formatBN(amount, maximumFractionDigits)

  return (
    <div className="inline-flex flex-none items-center gap-1">
      {value !== '-' ? children : null}
<<<<<<< HEAD
      <span className="flex-grow whitespace-nowrap font-semibold">{value}</span>
=======
      <span className="flex-grow font-semibold">{value}</span>
>>>>>>> d73def8 (initial commit)
    </div>
  )
}

export default FormatCurrency
