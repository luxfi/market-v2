<h3 align="center">LUX Market</h3>
  <p align="center">
An open source NFT marketplace.

<!-- ABOUT THE PROJECT -->
## About The Project

Lux Market is an open source NFT marketplace.

<!-- GETTING STARTED -->
## Getting Started (Self-Hosted)

### Prerequisites
1. Install [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install)
3. Request free [Lux API key](https://api.lux.market/#/0.%20Auth/postApikeys)

### Built With

* [LuxKit](https://docs.lux.finance/lux-kit)
* [Lux Protocol and API](https://luxdefi.github.io/)
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Ethers.io](https://ethers.io/)
* [WAGMI](https://wagmi.sh/)
* [Tailwind CSS](https://tailwindcss.com/)

### Installation

Fork this repo and follow these instructions to install dependancies.

With yarn:

```bash
$ yarn install
```

With NPM:

```bash
$ npm install
```

### Configuration
Lux Market is built to be fully configurable using environment variables. To preview your configuration locally you can copy the values you want to use from  `env.development`  or  `env.production`  into a new file called  `.env.local`.

Note: Environment variables can also be added during deployment via deployment platforms like [vercel](https://vercel.com/).

**Required Environment Variables**
| Environment Variable           | Required | Description                                                                         | Example              |
|--------------------------------|----------|-------------------------------------------------------------------------------------|---------------------|
| NEXT_PUBLIC_LUX_API_BASE | `true`   | The Lux API base URL. Available on Mainnet, Rinkeby, Goerli, and Optimism.                       | https://api-rinkeby.lux.market https://api.lux.market |
| NEXT_PUBLIC_CHAIN_ID           | `true`   | The Ethereum network to be used. 1 for Etherem Mainnet and 4 for Rinkeby Testnet, etc.   | 1 4                                                               |
| NEXT_PUBLIC_PROXY_API_BASE     | `true`   | The proxy API used to pass the Lux API key without exposing it to the client. | /api/lux                                                    |
| LUX_API_KEY                    | `true`   | Lux API key provided by the Lux Protocol. [Get your own API key](https://api.lux.market/#/0.%20Auth/postApikeys).         | 123e4567-e89b-12d3-a456-426614174000                              |
| NEXT_PUBLIC_ALCHEMY_ID              | `true`   | Alchemy API key required for buying items on mobile. [Get your own API key here](https://docs.alchemy.com/alchemy/introduction/getting-started#1.create-an-alchemy-key).         | 123e4567-e89b-12d3-a456-426614174000                              |

Please visit [our docs](https://docs.lux.network/docs/marketplace-getting-started#configuration) to view all supported environment variables.

<!-- Contributing -->
## Contributing

If you'd like to contribute please follow the [guidelines](https://github.com/luxdefi/market/blob/main/CONTRIBUTING.md).

<!-- CONTACT -->
## Contact

Twitter: [@luxdefi](https://twitter.com/luxdefi)
Discord: [Lux Protocol](https://discord.gg/luxdefi)
Project Link: [Lux Protocol](https://luxdefi.github.io/)
