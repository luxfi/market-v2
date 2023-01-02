import * as Dialog from '@radix-ui/react-dialog'
<<<<<<< HEAD
import ConnectWalletButton from 'components/ConnectWalletButton'
=======
>>>>>>> d73def8 (initial commit)
import NavbarLogo from 'components/navbar/NavbarLogo'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineLogout, HiX } from 'react-icons/hi'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { Balance } from './ConnectWallet'
<<<<<<< HEAD
=======
import { Wallets } from './ConnectWalletModal'
>>>>>>> d73def8 (initial commit)
import EthAccount from './EthAccount'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {
  externalLinks: {
    name: string
    url: string
  }[]
}

const HamburgerMenu: FC<Props> = ({ externalLinks }) => {
<<<<<<< HEAD
  const [open, setOpen] = useState(false)
=======
>>>>>>> d73def8 (initial commit)
  const { connectors } = useConnect()
  const accountData = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName()
  const { data: ensAvatar } = useEnsAvatar()
  const wallet = connectors[0]
<<<<<<< HEAD

  const hasExternalLinks = externalLinks.length > 0
  return (
    <Dialog.Root onOpenChange={setOpen} open={open} modal={false}>
=======
  const [walletModal, setWalletModal] = useState(false)

  const hasExternalLinks = externalLinks.length > 0
  return (
    <Dialog.Root>
>>>>>>> d73def8 (initial commit)
      <Dialog.Trigger className="z-10 block p-1.5 md:hidden">
        <FiMenu className="h-6 w-6" />
      </Dialog.Trigger>

<<<<<<< HEAD
      <Dialog.Content
        className="fixed inset-0 z-20 transform bg-white shadow-md dark:bg-black"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
=======
      <Dialog.Content className="fixed inset-0 z-20 transform bg-white shadow-md dark:bg-black">
>>>>>>> d73def8 (initial commit)
        <div className="flex items-center justify-between gap-3 border-b border-neutral-300 px-6 py-4 dark:border-neutral-600">
          <NavbarLogo variant="desktop" />
          <Dialog.Close className="btn-primary-outline py-1.5 px-[5px] dark:text-white">
            <HiX className="h-6 w-6" />
          </Dialog.Close>
        </div>

<<<<<<< HEAD
        {hasExternalLinks && (
          <div className="grid">
            {externalLinks.map(({ name, url }) => (
              <a
                key={url}
                href={url}
                rel="noopener noreferrer"
                className="border-b border-neutral-300 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600"
              >
                {name}
              </a>
            ))}
          </div>
        )}
        <div className="mt-2 px-4">
          <ThemeSwitcher />
        </div>
        {accountData.isConnected ? (
          <>
            <div className="flex items-center justify-center border-b border-neutral-300 bg-neutral-100 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:bg-black dark:text-white dark:hover:bg-neutral-600">
              <EthAccount
                address={accountData.address}
                ens={{
                  avatar: ensAvatar,
                  name: ensName,
                }}
              />
            </div>

            <div className="flex items-center justify-between border-b border-neutral-300 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:text-white">
              <span>Balance </span>
              <span>
                {accountData.address && (
                  <Balance address={accountData.address} />
                )}
              </span>
            </div>

            <Link href={`/address/${accountData.address}`}>
              <a
                className="group flex w-full cursor-pointer items-center justify-between rounded border-b border-neutral-300 p-4 text-[#4B5563] outline-none transition hover:bg-neutral-100 hover:text-[#1F2937] focus:bg-neutral-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600"
                onClick={() => setOpen(false)}
              >
                Portfolio
              </a>
            </Link>

            <button
              key={wallet.id}
              onClick={() => disconnect()}
              className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded border-b border-neutral-300 p-4 text-[#4B5563] outline-none transition hover:bg-neutral-100 hover:text-[#1F2937] focus:bg-neutral-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600"
            >
              <span>Disconnect</span>
              <HiOutlineLogout className="h-6 w-7" />
            </button>
          </>
        ) : (
          <div className="mt-12 px-4">
            <ConnectWalletButton className="w-full">
              <span>Connect Wallet</span>
            </ConnectWalletButton>
          </div>
=======
        {walletModal ? (
          <div className="px-6 py-4">
            <Wallets />
          </div>
        ) : (
          <>
            {hasExternalLinks && (
              <div className="grid">
                {externalLinks.map(({ name, url }) => (
                  <a
                    key={url}
                    href={url}
                    rel="noopener noferrer"
                    className="reservoir-label-l border-b border-neutral-300 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
            <ThemeSwitcher />
            {accountData.isConnected ? (
              <>
                <div className="reservoir-label-l flex items-center justify-center border-b border-neutral-300 bg-neutral-100 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:bg-black dark:text-white dark:hover:bg-neutral-600">
                  <EthAccount
                    address={accountData.address}
                    ens={{
                      avatar: ensAvatar,
                      name: ensName,
                    }}
                  />
                </div>

                <div className="reservoir-label-l flex items-center justify-between border-b border-neutral-300 p-4 text-[#4B5563] hover:text-[#1F2937] dark:border-neutral-600 dark:text-white">
                  <span>Balance </span>
                  <span>
                    {accountData.address && (
                      <Balance address={accountData.address} />
                    )}
                  </span>
                </div>

                <Link href={`/address/${accountData.address}`}>
                  <a className="group reservoir-label-l flex w-full cursor-pointer items-center justify-between rounded border-b border-neutral-300 p-4 text-[#4B5563] outline-none transition hover:bg-neutral-100 hover:text-[#1F2937] focus:bg-neutral-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600">
                    Portfolio
                  </a>
                </Link>

                <button
                  key={wallet.id}
                  onClick={() => disconnect()}
                  className="group reservoir-label-l flex w-full cursor-pointer items-center justify-between gap-3 rounded border-b border-neutral-300 p-4 text-[#4B5563] outline-none transition hover:bg-neutral-100 hover:text-[#1F2937] focus:bg-neutral-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600"
                >
                  <span>Disconnect</span>
                  <HiOutlineLogout className="h-6 w-7" />
                </button>
              </>
            ) : (
              <div className="mt-12 px-4">
                <button
                  key={wallet.id}
                  onClick={() => setWalletModal(true)}
                  className="btn-primary-fill col-span-2 col-start-3 w-full md:col-span-4 md:col-start-5 lg:col-span-4 lg:col-start-9"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </>
>>>>>>> d73def8 (initial commit)
        )}
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default HamburgerMenu
