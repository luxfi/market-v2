import 'styles/globals.css'
import 'styles/inter.css'
import 'styles/druk.css'
import 'styles/montserrat.css'
import 'styles/open-sans.css'
import 'styles/playfair-display.css'
import 'styles/roboto.css'
import 'styles/chalkboard.css'
import 'styles/frankruhllibre.css'
import 'styles/gazpacho.css'
import 'styles/editorialnew.css'
import 'styles/lucidagrande.css'
import 'styles/nunitosans.css'
import 'styles/styreneb.css'
import 'styles/gothicusroman.css'
import 'styles/roobert.css'
import 'styles/rodger.css'
import 'styles/ingrammono.css'
import type { AppContext, AppProps } from 'next/app'
<<<<<<< HEAD
import { default as NextApp } from 'next/app'
import {
  WagmiConfig,
  createClient,
  chain,
  configureChains,
  allChains,
  chainId,
} from 'wagmi'
import { GlobalProvider } from 'context/GlobalState'
import AnalyticsProvider from 'components/AnalyticsProvider'
import { ThemeProvider, useTheme } from 'next-themes'
=======
import App from 'next/app'
import { WagmiConfig, createClient, allChains, configureChains } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { GlobalProvider } from 'context/GlobalState'
import AnalyticsProvider from 'components/AnalyticsProvider'
import { ThemeProvider } from 'next-themes'
>>>>>>> d73def8 (initial commit)
import { RecoilRoot } from 'recoil'
import {
  darkTheme,
  lightTheme,
  ReservoirKitProvider,
  ReservoirKitProviderProps,
  ReservoirKitTheme,
} from '@reservoir0x/reservoir-kit-ui'
<<<<<<< HEAD
import { FC, useEffect, useState } from 'react'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme as rainbowKitDarkTheme,
  lightTheme as rainbowKitLightTheme,
} from '@rainbow-me/rainbowkit'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
=======
import { useEffect, useState } from 'react'
>>>>>>> d73def8 (initial commit)

// Select a custom ether.js interface for connecting to a network
// Reference = https://wagmi-xyz.vercel.app/docs/provider#provider-optional
// OPTIONAL
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

// API key for Ethereum node
// Two popular services are Alchemy (alchemy.com) and Infura (infura.io)
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID

const THEME_SWITCHING_ENABLED = process.env.NEXT_PUBLIC_THEME_SWITCHING_ENABLED
const DARK_MODE_ENABLED = process.env.NEXT_PUBLIC_DARK_MODE
const PROXY_API_BASE = process.env.NEXT_PUBLIC_PROXY_API_BASE
const RESERVOIR_API_KEY = process.env.NEXT_PUBLIC_RESERVOIR_API_KEY
const BODY_FONT_FAMILY = process.env.NEXT_PUBLIC_BODY_FONT_FAMILY || 'Inter'
const FONT_FAMILY = process.env.NEXT_PUBLIC_FONT_FAMILY || 'Inter'
const PRIMARY_COLOR = process.env.NEXT_PUBLIC_PRIMARY_COLOR || 'default'
const DISABLE_POWERED_BY_RESERVOIR =
  process.env.NEXT_PUBLIC_DISABLE_POWERED_BY_RESERVOIR
import presetColors from '../colors'
<<<<<<< HEAD

=======
>>>>>>> d73def8 (initial commit)
const FEE_BPS = process.env.NEXT_PUBLIC_FEE_BPS
const FEE_RECIPIENT = process.env.NEXT_PUBLIC_FEE_RECIPIENT
const SOURCE_DOMAIN = process.env.NEXT_PUBLIC_SOURCE_DOMAIN
<<<<<<< HEAD
const API_BASE = process.env.NEXT_PUBLIC_RESERVOIR_API_BASE
<<<<<<< HEAD
const SOURCE_NAME = process.env.NEXT_PUBLIC_SOURCE_NAME
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID

const envChain = allChains.find(
  (chain) => chain.id === +(CHAIN_ID || chainId.mainnet)
)

const { chains, provider } = configureChains(
  envChain ? [envChain] : [chain.mainnet],
  [alchemyProvider({ apiKey: alchemyId }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: SOURCE_NAME || 'Reservoir Market',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function AppWrapper(props: AppProps & { baseUrl: string }) {
  const defaultTheme = DARK_MODE_ENABLED ? 'dark' : 'light'

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      forcedTheme={!THEME_SWITCHING_ENABLED ? defaultTheme : undefined}
    >
      <App {...props} />
    </ThemeProvider>
  )
}

const App: FC<AppProps & { baseUrl: string }> = ({
  Component,
  pageProps,
  baseUrl,
}) => {
  const { theme } = useTheme()
=======
=======
>>>>>>> 79e0b24 (Update look and feel)

// Set up chains
const { chains, provider } = configureChains(allChains, [
  alchemyProvider({ apiKey: alchemyId }),
  publicProvider(),
])

// Set up connectors
const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector({
      chains,
      options: { name: 'Injected' },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'reservoir.market',
      },
    }),
  ],
})

function MyApp({
  Component,
  pageProps,
  baseUrl,
}: AppProps & { baseUrl: string }) {
<<<<<<< HEAD
>>>>>>> d73def8 (initial commit)
  const defaultTheme = DARK_MODE_ENABLED ? 'dark' : 'light'
=======
  const defaultTheme = DARK_MODE_ENABLED ? 'light' : 'dark'
>>>>>>> 79e0b24 (Update look and feel)
  const [reservoirKitTheme, setReservoirKitTheme] = useState<
    ReservoirKitTheme | undefined
  >()
<<<<<<< HEAD
  const [rainbowKitTheme, setRainbowKitTheme] = useState<
    | ReturnType<typeof rainbowKitDarkTheme>
    | ReturnType<typeof rainbowKitLightTheme>
    | undefined
  >()
  const marketplaceTheme = THEME_SWITCHING_ENABLED ? theme : defaultTheme
=======
>>>>>>> d73def8 (initial commit)

  useEffect(() => {
    const primaryColor = (PRIMARY_COLOR as string) || 'default'
    const primaryColorPalette = (
      presetColors as Record<string, Record<string, string>>
    )[primaryColor]
<<<<<<< HEAD

    if (marketplaceTheme == 'dark') {
=======
    if (defaultTheme == 'dark') {
>>>>>>> d73def8 (initial commit)
      setReservoirKitTheme(
        darkTheme({
          headlineFont: FONT_FAMILY,
          font: BODY_FONT_FAMILY,
          primaryColor: primaryColorPalette['700'],
          primaryHoverColor: primaryColorPalette['900'],
        })
      )
<<<<<<< HEAD
      setRainbowKitTheme(
        rainbowKitDarkTheme({
          borderRadius: 'small',
        })
      )
=======
>>>>>>> d73def8 (initial commit)
    } else {
      setReservoirKitTheme(
        lightTheme({
          headlineFont: FONT_FAMILY,
          font: BODY_FONT_FAMILY,
          primaryColor: primaryColorPalette['700'],
          primaryHoverColor: primaryColorPalette['900'],
        })
      )
<<<<<<< HEAD
      setRainbowKitTheme(
        rainbowKitLightTheme({
          borderRadius: 'small',
        })
      )
    }
  }, [defaultTheme, theme])
=======
    }
  }, [defaultTheme])
>>>>>>> d73def8 (initial commit)

  let options: ReservoirKitProviderProps['options'] = {
    apiKey: RESERVOIR_API_KEY,
    apiBase:
      typeof window !== 'undefined'
        ? `${window.location.origin}${PROXY_API_BASE}`
        : `${baseUrl}${PROXY_API_BASE}`,
    disablePoweredByReservoir:
      DISABLE_POWERED_BY_RESERVOIR != undefined &&
      DISABLE_POWERED_BY_RESERVOIR != null,
    source: SOURCE_DOMAIN,
    normalizeRoyalties: true,
  }

  if (FEE_BPS && FEE_RECIPIENT) {
    options = {
      ...options,
      fee: `${FEE_BPS}`,
      feeRecipient: `${FEE_RECIPIENT}`,
    }
  }

  return (
    <ReservoirKitProvider options={options} theme={reservoirKitTheme}>
      <GlobalProvider>
        <RecoilRoot>
<<<<<<< HEAD
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              chains={chains}
              theme={rainbowKitTheme}
              modalSize="compact"
            >
              <AnalyticsProvider>
                <Component {...pageProps} />
              </AnalyticsProvider>
            </RainbowKitProvider>
=======
          <WagmiConfig client={client}>
            <AnalyticsProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme={defaultTheme}
                forcedTheme={
                  !THEME_SWITCHING_ENABLED ? defaultTheme : undefined
                }
              >
                <Component {...pageProps} />
              </ThemeProvider>
            </AnalyticsProvider>
>>>>>>> d73def8 (initial commit)
          </WagmiConfig>
        </RecoilRoot>
      </GlobalProvider>
    </ReservoirKitProvider>
  )
}

<<<<<<< HEAD
AppWrapper.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext)
=======
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
>>>>>>> d73def8 (initial commit)
  let baseUrl = ''

  if (appContext.ctx.req?.headers.host) {
    baseUrl = `http://${appContext.ctx.req?.headers.host}`
  }

  return { ...appProps, baseUrl }
}

<<<<<<< HEAD
export default AppWrapper
=======
export default MyApp
>>>>>>> d73def8 (initial commit)
